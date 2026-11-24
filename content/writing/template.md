---
title: "Article template"
description: "One or two sentences. This shows on the home page, in search results, and in link previews."
date: "2026-11-24"
draft: true
---

This is a formatting sample. Copy it to a new file in `content/writing/`; the filename becomes the URL. Drafts only show up under `npm run dev`. Remove the `draft` line to publish.

Links look like [this one](https://example.com), with *italics* and **bold** where you need them. Footnotes work too.[^1]

## A section

```python
def speedup(audio_seconds: float, wall_seconds: float) -> float:
    # How many times faster than real time
    return audio_seconds / wall_seconds

print(speedup(260, 1))
```

```go
func Handle(ctx context.Context, req *Request) (*Response, error) {
	if req == nil {
		return nil, errors.New("missing request")
	}
	return &Response{Status: 200}, nil
}
```

### A subsection

- A list item
- Another, with `inline code`

> A quoted line.

| Column | Value |
| --- | ---: |
| First | 1 |
| Second | 2 |

Images go in `public/`. The text in quotes becomes the caption: `![alt text](/chart.png "Caption")`.

[^1]: Like so.
