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
                <li>Architected and optimized high-performance ML pipelines on AWS using EMR and PySpark, processing <span className="text-blue-400">10M+</span> rows daily with 99.9% uptime</li>
                <li>Developed scalable RESTful APIs using AWS API gateway linked with Lambdas, handling <span className="text-blue-400">100+</span> requests per minute</li>
                <li>Implemented efficient data storage solutions using MySQL and MongoDB, reducing query times by <span className="text-blue-400">40%</span></li>
                <li>Optimized AWS infrastructure (EMR, S3, EC2, SageMaker, Lambda) for cost-efficiency, reducing monthly expenses by <span className="text-blue-400">25%</span></li>
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
                <li>Provided expert consultation to over <span className="text-blue-400">600</span> staff and faculty members, enhancing technology proficiency and productivity.</li>
                <li>Managed regular maintenance for approximately <span className="text-blue-400">200</span> computers, optimizing performance and bolstering security.</li>
                <li>Assisted in the integration of <span className="text-blue-400">25+</span> computers onto JAMF software in various departments.</li>
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