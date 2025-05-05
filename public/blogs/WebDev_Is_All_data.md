---
title: "It's data all the way down"
date: "2025-05-05"
---

I recently had a tweet I’m quite fond of. Wanted to expand on it:

> “Btw webdev is all about data.
> Frontend → data presentation. Frontend devs’ goal is deliver content.
> Backend → data transformation. Backend devs do glorified ETL.
> Infra → data transmission. ‘I need X over there’.”

Below is the same idea, explained in more detail.

---

## Frontend — Presenting Data

Though frontend engineer is a pretty broad term, the role a frontend engineer occupies can be described pretty simply: A frontend engineer delivers content to the user. Everything a person experiences in a browser comes from one recurring task: taking content that already exists somewhere else and putting it on the screen in a form that is clear, responsive, and accessible. Frameworks may shift. Today what's hot is React, tomorrow maybe something new, but the obligation stays: fetch structured data, decide what matters for this moment, and turn it into markup, styles, and behaviours that feel natural.

Most days that means reading some JSON and mapping fields to UI controls. Take this code as an example:

```typescript
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

interface Order { id: string; customer: string; total: number; placedAt: string }

const pageSize = 20;

export default function OrdersTable() {
  const [page, setPage] = useState(0);

  const { data: orders = [], isFetching } = useQuery(
    ["orders", page],
    () =>
      fetch(`/api/orders?limit=${pageSize}&offset=${page * pageSize}`).then(r =>
        r.json()
      ),
    { keepPreviousData: true, staleTime: 60_000 }
  );

  return (
    <>
      <table aria-label="Orders">
        <thead>
          <tr><th>ID</th><th>Customer</th><th>Total</th><th>Date</th></tr>
        </thead>
        <tbody>
          {orders.map(o => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.customer}</td>
              <td>${o.total.toFixed(2)}</td>
              <td>{new Date(o.placedAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={() => setPage(p => Math.max(p - 1, 0))} disabled={!page || isFetching}>Prev</button>
      <button onClick={() => setPage(p => p + 1)} disabled={isFetching}>Next</button>
      {isFetching && <span aria-live="polite">Loading…</span>}
    </>
  );
}

```

This single component demonstrates several concerns that fill a frontend engineer’s day. There is performance work in the form of client-side caching, state management for pagination, and a small slice of accessibility through disabling a control when it cannot be used. What might seem like complex deep knowledge of the React ecosystem, hooks, and state management is, at the end of the day, all just the means to delivering content to the user. Notice that none of these details require the component to understand where orders are stored or how they were validated. Its one obligation is to make sure real people can see and interact with the content quickly and comfortably.

---

## Backend — Transforming Data

Long before content becomes safe to display, it needs to be cleaned up, enriched, and turned into an authoritative record. That work looks like traditional extract–transform–load even if it is performed in milliseconds instead of overnight. I got my start as a data scientist and worked into a SWE, but I think that start actually made my career switch easier. 

Once you begin to think about backend tasks as being purely about data, you begin to understand sprawling codebases much clearer. Each route you write accepts some payload, which then goes through a handler and is transformed, before being sent back, pristine, clean, and in the format the frontend needs.

Let's once again look to some code as an example.

```go
func createOrder(w http.ResponseWriter, r *http.Request) {
	var in struct{ Customer string; Total float64 }
	if json.NewDecoder(r.Body).Decode(&in) != nil || in.Total <= 0 {
		http.Error(w, "bad request", http.StatusBadRequest)
		return
	}

	order := Order{
		ID: uuid.NewString(), Customer: in.Customer, Total: in.Total,
		PlacedAt: time.Now().UTC(), Status: "RECEIVED",
	}

	tx, err := db.BeginTx(r.Context(), nil)
	if err != nil { http.Error(w, "db error", 500); return }
	if _, err = tx.ExecContext(r.Context(),
		`insert into orders (id,customer,total,placed_at,status)
		 values ($1,$2,$3,$4,$5)`,
		order.ID, order.Customer, order.Total, order.PlacedAt, order.Status); err != nil {
		tx.Rollback(); http.Error(w, "db error", 500); return
	}
	if tx.Commit() != nil { http.Error(w, "db error", 500); return }

	if err = producer.WriteMessages(r.Context(), kafka.Message{
		Key: []byte(order.ID), Value: mustJSON(order), Time: order.PlacedAt,
	}); err != nil {
		log.Printf("kafka error: %v", err) // eventual-consistency fallback
	}

	json.NewEncoder(w).Encode(order)
}

func mustJSON(v any) []byte { b, _ := json.Marshal(v); return b }

```

Once again we have what might seem like a obscure, lengthy process demystified by simply following how we are transforming the data.

---

## Infrastructure — Transmitting Data

Infrastructure connects the place where the record lives to the place where a person needs to see it. No matter how complex your infra is, what you are truly doing at the end of the day is transmitting that data. The server is the origin that stores or generates content. A content-delivery network sits between the origin and the wider Internet so responses travel a shorter physical distance and static assets can be reused by many visitors. The client is the final hop, usually a browser that translates responses into something interactive.

The job of infrastructure teams is to maintain that path so it is fast, secure, and observable. Fast means caching predictable responses and negotiating modern protocols. Secure means terminating TLS correctly, enforcing authentication(though this sometimes bleeds into backend roles!), and rate-limiting abuse. Observable means publishing logs and metrics so application teams notice regressions before users complain.

Even the simplest gRPC example involves all these layers. A single line of code triggers DNS resolution, a TLS handshake, load-balancer selection, connection pooling, and possibly a CDN hop before a request reaches the origin. The application developer writes:

```go
resp, err := client.GetUser(ctx, &pb.GetUserRequest{Id: "u-123"})
```

The infrastructure makes sure the call finishes under a performance budget, retries intelligently on transient errors, and records latency so someone can pull a graph the next morning.

---

## Putting the pieces together

Seen end-to-end, adding a new feature is not about choosing between frameworks or debating microservices versus monoliths. What really matters here is deciding what new record you need, how to transform untrusted input into that record, how to store and share it so others can rely on it, and finally how to present it to the person who needs it. When those questions are answered, most technical arguments resolve themselves. A caching strategy emerges from latency targets, not habit. A database schema emerges from the record’s shape, not the ORM’s defaults. A UI control emerges from the plain statement, “Someone needs to see total sales and approve a refund.” What we ought to care about as software devs is not our shiny tools; it's our data.

---

### Final thought

Web development often feels complicated because our tools change quickly and our diagrams contain many boxes. Keeping the fundamental division in mind, frontend delivers content, backend shapes content, infrastructure moves content, helps cut through that noise. Focus first on what the content is, how it must be trusted, and where it needs to appear. Align every layer with that goal. Everything else will fall into place.
