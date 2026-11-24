import { getPosts } from '@/lib/posts';
import { site } from '@/lib/site';

export const dynamic = 'force-static';

function escape(text: string) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export function GET() {
  const items = getPosts().map((post) => {
    const url = `${site.url}/writing/${post.slug}`;
    return `<item><title>${escape(post.title)}</title><link>${url}</link><guid>${url}</guid><pubDate>${new Date(`${post.date}T00:00:00Z`).toUTCString()}</pubDate><description>${escape(post.description)}</description></item>`;
  });

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel><title>${site.name}</title><link>${site.url}</link><description>${escape(site.description)}</description>${items.join('')}</channel></rss>`,
    { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } },
  );
}
