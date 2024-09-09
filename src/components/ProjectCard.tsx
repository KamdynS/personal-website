import React from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  slug: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, slug }) => {
  return (
    <Card className="bg-gray-800 text-white">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button asChild>
          <Link href={`/projects/${slug}`}>View Project</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;