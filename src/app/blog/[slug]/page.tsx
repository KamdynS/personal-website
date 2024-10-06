import React from 'react';
import Layout from '@/components/Layout';
import { getBlogPostBySlug } from '@/lib/blogUtils';
import ReactMarkdown from 'react-markdown';
import { ComponentProps } from 'react';

const MarkdownComponents: Partial<ComponentProps<typeof ReactMarkdown>['components']> = {
  h1: ({ children }) => <h1 className="text-4xl font-bold mb-4 text-primary">{children}</h1>,
  h2: ({ children }) => <h2 className="text-3xl font-semibold mb-3 text-secondary">{children}</h2>,
  h3: ({ children }) => <h3 className="text-2xl font-semibold mb-2 text-accent">{children}</h3>,
  p: ({ children }) => <p className="mb-4 text-foreground">{children}</p>,
  a: ({ href, children }) => <a href={href} className="text-sapphire hover:underline">{children}</a>,
  ul: ({ children }) => <ul className="list-disc list-inside mb-4 text-foreground">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal list-inside mb-4 text-foreground">{children}</ol>,
  li: ({ children }) => <li className="mb-1 text-foreground">{children}</li>,
  blockquote: ({ children }) => <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-foreground">{children}</blockquote>,
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);

  return (
    <Layout>
      <article className="prose prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-4 text-primary">{post.title}</h1>
        <p className="text-muted-foreground mb-8">{post.date}</p>
        <div className="markdown-body">
          <ReactMarkdown components={MarkdownComponents}>{post.content}</ReactMarkdown>
        </div>
      </article>
    </Layout>
  );
}