import React from 'react';
import Layout from '@/components/Layout';
import { getProjectBySlug } from '@/lib/projectUtils';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

const ProjectPage: React.FC<ProjectPageProps> = ({ params }) => {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">{project.title}</h1>
      <div className="prose prose-invert max-w-none">
        <div className="markdown-body">
          <ReactMarkdown>{project.content}</ReactMarkdown>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectPage;