import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { getBlogPosts } from '@/lib/blogUtils';

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="block">
            <div className="border border-gray-700 rounded-lg p-6 hover:bg-gray-800 transition-colors">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-400 mb-4">{post.date}</p>
              <p className="text-gray-300">{post.content}</p>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
}