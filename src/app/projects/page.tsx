import React from 'react';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';
import { getProjects } from '@/lib/projectUtils';

const ProjectsPage: React.FC = () => {
  const projects = getProjects();

  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
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
    </Layout>
  );
};

export default ProjectsPage;