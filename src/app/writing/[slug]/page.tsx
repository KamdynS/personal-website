import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { formatDate, getPost, getPosts } from '@/lib/posts';
import { site } from '@/lib/site';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/writing/${post.slug}` },
    openGraph: {
      type: 'article',
      siteName: site.name,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [site.name],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  return (
    <main className="page">
      <nav className="home-link"><Link href="/">{site.name}</Link></nav>
      <article>
        <header>
          <h1>{post.title}</h1>
          <p className="muted">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            {post.draft && ', draft'}
          </p>
        </header>
        <div className="prose">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeSlug, rehypeHighlight]}
            components={{
              // ![alt](src "caption") renders the title as a visible caption.
              img: ({ src, alt, title }) => (
                <span className="figure">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={alt ?? ''} loading="lazy" />
                  {title && <span className="muted">{title}</span>}
                </span>
              ),
              table: ({ children }) => (
                <div className="table-scroll"><table>{children}</table></div>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
      <footer className="post-footer">
        <p>
          I&apos;m Kamdyn, a software engineer in Boston working on backend and AI
          systems. You can see <Link href="/">what else I&apos;ve built</Link>, find me
          on <a href={site.github}>GitHub</a> and <a href={site.linkedin}>LinkedIn</a>,
          or <a href={`mailto:${site.email}`}>email me</a>.
        </p>
      </footer>
    </main>
  );
}
