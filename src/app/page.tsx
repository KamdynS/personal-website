import React from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { getProjects } from '@/lib/projectUtils';
import { getBlogPosts } from '@/lib/blogUtils';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const dynamic = 'force-static';

const HomePage: React.FC = () => {
  const projects = getProjects().slice(0, 3); 
  const recentBlogPost = getBlogPosts()[0]; 

  return (
    <Layout>  
      <section className="mb-16">
        <h2 className="text-blue-400 hover:underline text-3xl font-semibold mb-8">Experience</h2>
        <div className="space-y-10">
          <Card className="bg-gray-800 text-white">
            <CardHeader className="pb-6">
              <CardTitle className="text-xl">Emerge Haus</CardTitle>
              <CardDescription className="text-base">Boston, Massachusetts</CardDescription>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <p className="font-semibold text-lg mb-2">Mid-Level AI Engineer</p>
              <p className="text-sm text-gray-400 mb-6">December 2024 - Present</p>
              <ul className="list-disc pl-8 space-y-3 text-base">
                <li>Led complete architectural redesign of video processing server, driving system design decisions and implementing <span className="text-blue-400">90%</span> of the refactored codebase</li>
                <li>Developed and maintained AI-powered content processing pipeline for sermon-to-social media transformation, serving <span className="text-blue-400">4000+</span> weekly active users</li>
                <li>Drove full-stack development with focus on backend infrastructure, consistently delivering new features and optimizations using TypeScript, Python, and Go</li>
                <li>Engineered and optimized LLM pipelines for transcript and video processing, achieving <span className="text-blue-400">4x</span> throughput improvement while reducing processing time by <span className="text-blue-400">30%</span></li>
                <li>Architected scalable CI/CD pipelines using Kubernetes, Terraform, and AWS SQS, streamlining deployment processes and improving system reliability</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 text-white">
            <CardHeader className="pb-6">
              <CardTitle className="text-xl">CultureX at MIT</CardTitle>
              <CardDescription className="text-base">Cambridge, Massachusetts</CardDescription>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <p className="font-semibold text-lg mb-2">Software Engineer</p>
              <p className="text-sm text-gray-400 mb-6">February 2024 - September 2024</p>
              <ul className="list-disc pl-8 space-y-3 text-base">
                <li>Architected and optimized high-performance ML pipelines on AWS using EMR and PySpark, processing <span className="text-blue-400">10M+</span> rows daily with 99.9% uptime</li>
                <li>Developed scalable RESTful APIs using AWS API Gateway and Lambda functions, handling <span className="text-blue-400">100+</span> requests per minute</li>
                <li>Implemented efficient data storage solutions using MySQL and MongoDB, reducing query times by <span className="text-blue-400">40%</span></li>
                <li>Optimized AWS infrastructure (EMR, S3, EC2, SageMaker, Lambda) for cost-efficiency, reducing monthly expenses by <span className="text-blue-400">25%</span></li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800 text-white">
            <CardHeader className="pb-6">
              <CardTitle className="text-xl">Boston College IT Department</CardTitle>
              <CardDescription className="text-base">Boston, Massachusetts</CardDescription>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <p className="font-semibold text-lg mb-2">Graduate Technology Consultant</p>
              <p className="text-sm text-gray-400 mb-6">May 2023 - April 2024</p>
              <ul className="list-disc pl-8 space-y-3 text-base">
                <li>Provided technical consultation to <span className="text-blue-400">600+</span> staff and faculty, improving productivity through technology solutions</li>
                <li>Maintained and optimized performance of <span className="text-blue-400">200+</span> computers, ensuring security compliance and system reliability</li>
                <li>Integrated systems with JAMF device management software across multiple academic departments</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-blue-400 hover:underline text-3xl font-semibold mb-8">Technical Skills</h2>
        <Card className="bg-gray-800 text-white">
          <CardContent className="pt-10 px-10 pb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="font-semibold mb-4 text-lg">Programming Languages:</p>
                <p className="text-base text-gray-300 mb-8">Python, Go, TypeScript/JavaScript, SQL</p>
                
                <p className="font-semibold mb-4 text-lg">Cloud & Infrastructure:</p>
                <p className="text-base text-gray-300 mb-8">AWS (EMR, Lambda, API Gateway, S3, EC2, SageMaker, SQS, ECR), Kubernetes, Docker, Terraform</p>
                
                <p className="font-semibold mb-4 text-lg">AI/ML & Data:</p>
                <p className="text-base text-gray-300">LLM Pipelines, PySpark, TensorFlow, Machine Learning, A/B Testing, Data Processing</p>
              </div>
              <div>
                <p className="font-semibold mb-4 text-lg">Databases:</p>
                <p className="text-base text-gray-300 mb-8">PostgreSQL, MySQL, MongoDB, Firebase</p>
                
                <p className="font-semibold mb-4 text-lg">Development:</p>
                <p className="text-base text-gray-300">RESTful APIs, Microservices, CI/CD, System Design, Git, Full-Stack Development, DDD patterns</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-blue-400 hover:underline text-3xl font-semibold mb-8">Leadership & Initiatives</h2>
        <Card className="bg-gray-800 text-white">
          <CardHeader className="pb-6">
            <CardTitle className="text-xl">Technical Paper Discussion Series</CardTitle>
            <CardDescription className="text-base">Emerge Haus</CardDescription>
          </CardHeader>
          <CardContent className="px-8 pb-8">
            <p className="font-semibold text-lg mb-2">Organizer & Presenter</p>
            <p className="text-sm text-gray-400 mb-6">December 2024 - Present</p>
            <ul className="list-disc pl-8 space-y-3 text-base">
              <li>Founded monthly technical paper discussion series to foster team collaboration and knowledge sharing among remote developers</li>
              <li>Led presentations on cutting-edge AI research including DeepSeek R1, driving technical discourse and professional development</li>
              <li>Scaled initiative from monthly to biweekly meetings due to positive team engagement and participation</li>
            </ul>
          </CardContent>
        </Card>
      </section>
      
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8">
          <Link href="/blog" className="text-blue-400 hover:underline">
            Recent Blog Post
          </Link>
        </h2>
        {recentBlogPost && (
          <Card className="bg-gray-800 text-white">
            <CardHeader className="pb-6">
              <CardTitle className="text-xl">{recentBlogPost.title}</CardTitle>
              <CardDescription className="text-base">{new Date(recentBlogPost.date).toLocaleDateString()}</CardDescription>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <p className="mb-8 text-base">{recentBlogPost.content.slice(0, 150)}...</p>
              <Button asChild className="text-base px-6 py-2">
                <Link href={`/blog/${recentBlogPost.slug}`}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8">
          <Link href="/projects" className="text-blue-400 hover:underline">
            Projects
          </Link>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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

      <section className="mb-16">
        <h2 className="text-blue-400 hover:underline text-3xl font-semibold mb-8">Certifications</h2>
        <div className="space-y-8">
          <Card className="bg-gray-800 text-white">
            <CardContent className="pt-10 px-10 pb-10">
              <p className="font-semibold text-lg">Google TensorFlow Developer Professional Certificate</p>
              <p className="text-base text-gray-400">DeepLearning.AI</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 text-white">
            <CardContent className="pt-10 px-10 pb-10">
              <p className="font-semibold text-lg">CS50P: Introduction to Programming with Python</p>
              <p className="text-base text-gray-400">Harvard University</p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section className="mb-16">
        <h2 className="text-blue-400 hover:underline text-3xl font-semibold mb-8">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Card className="bg-gray-800 text-white">
            <CardHeader className="pb-6">
              <CardTitle className="text-xl">Boston College</CardTitle>
              <CardDescription className="text-base">Boston, Massachusetts</CardDescription>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <p className="text-base">Master of Arts in Political Science</p>
              <p className="text-sm text-gray-400">August 2022 - May 2024</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 text-white">
            <CardHeader className="pb-6">
              <CardTitle className="text-xl">Hillsdale College</CardTitle>
              <CardDescription className="text-base">Hillsdale, Michigan</CardDescription>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <p className="text-base">Bachelor of Arts in Political Science</p>
              <p className="text-sm text-gray-400">August 2018 - May 2022</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;