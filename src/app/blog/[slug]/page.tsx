import React from 'react';
import Layout from '@/components/Layout';
import { getBlogPostBySlug } from '@/lib/blogUtils';
import ReactMarkdown from 'react-markdown';

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);

  return (
    <Layout>
      <article className="prose prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-400 mb-8">{post.date}</p>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </Layout>
  );
}