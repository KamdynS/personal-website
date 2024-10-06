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
    <Card className="bg-card text-card-foreground hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-primary">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button asChild variant="outline" className="text-secondary hover:text-accent">
        <Link href={`/projects/${slug}`}>View Project</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;