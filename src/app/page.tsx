import React from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { getProjects } from '@/lib/projectUtils';
import { getBlogPosts } from '@/lib/blogUtils';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const HomePage: React.FC = () => {
  const projects = getProjects().slice(0, 3); // Get the 3 most recent projects
  const recentBlogPost = getBlogPosts()[0]; // Get the most recent blog post

  return (
    <Layout>  
      <section className="mb-8">
        <h2 className="text-blue-400 hover:underline text-2xl font-semibold mb-4">Experience</h2>
        <div className="space-y-6">
          <Card className="bg-gray-800 text-white">
            <CardHeader>
              <CardTitle>CultureX at MIT</CardTitle>
              <CardDescription>Cambridge, Massachusetts</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">Software Engineer--Contract</p>
              <p className="text-sm text-gray-400 mb-2">February 2024 - Present</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Independently processed large-scale datasets regularly with over 10,000,000 rows of data, delivering processed data directly to stakeholders.</li>
                <li>Designed, maintained, and optimized ML pipelines running on AWS, ensuring efficient handling of millions of rows of data every day.</li>
                <li>Developed and implemented a Retrieval-Augmented Generation (RAG) system using LangChain, enhancing data retrieval and insight extraction from diverse databases of over 50 different documents.</li>
                <li>Wrote and deployed scripts leveraging large language models (LLMs) for advanced data processing, data transformation, and analysis.</li>
                <li>Alongside 1 senior engineer, I oversaw the end-to-end design, planning, software development, and deployment processes in the absence of a CTO, demonstrating strong leadership, independence, and technical expertise.</li>
                <li>Initialized and maintained various AWS services such as EMR, S3, EC2, SageMaker, and Lambda to facilitate cloud-based data processing.</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800 text-white">
            <CardHeader>
              <CardTitle>Boston College IT Department</CardTitle>
              <CardDescription>Boston, Massachusetts</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">Graduate Technology Consultant</p>
              <p className="text-sm text-gray-400 mb-2">May 2023 - April 2024</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Provided expert consultation to over 600 staff and faculty members, enhancing technology proficiency and productivity.</li>
                <li>Managed regular maintenance for approximately 200 computers, optimizing performance and bolstering security.</li>
                <li>Assisted in the integration of numerous computers onto JAMF software in various departments.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          <Link href="/projects" className="text-blue-400 hover:underline">
            Projects
          </Link>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              slug={project.slug}
            />
          ))}
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-blue-400 hover:underline text-2xl font-semibold mb-4">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gray-800 text-white">
            <CardHeader>
              <CardTitle>Boston College</CardTitle>
              <CardDescription>Boston, Massachusetts</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Master of Arts in Political Science</p>
              <p className="text-sm text-gray-400">August 2022 - May 2024</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 text-white">
            <CardHeader>
              <CardTitle>Hillsdale College</CardTitle>
              <CardDescription>Hillsdale, Michigan</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Bachelor of Arts in Political Science</p>
              <p className="text-sm text-gray-400">August 2018 - May 2022</p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          <Link href="/blog" className="text-blue-400 hover:underline">
            Recent Blog Post
          </Link>
        </h2>
        {recentBlogPost && (
          <Card className="bg-gray-800 text-white">
            <CardHeader>
              <CardTitle>{recentBlogPost.title}</CardTitle>
              <CardDescription>{new Date(recentBlogPost.date).toLocaleDateString()}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{recentBlogPost.content.slice(0, 150)}...</p>
              <Button asChild>
                <Link href={`/blog/${recentBlogPost.slug}`}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </section>
    </Layout>
  );
};

export default HomePage;