import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="page">
      <h1>Page not found</h1>
      <p>There&apos;s nothing at this address. Try the <Link href="/">home page</Link>.</p>
    </main>
  );
}
