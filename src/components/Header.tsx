import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="bg-background py-4">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Kamdyn Shaeffer
        </Link>
        <div className="space-x-4">
          <Button variant="ghost" asChild className="text-secondary hover:text-accent">
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild className="text-secondary hover:text-accent">
            <Link href="/projects">Projects</Link>
          </Button>
          <Button variant="ghost" asChild className="text-secondary hover:text-accent">
            <Link href="/blog">Blog</Link>
          </Button>
          <Button variant="ghost" asChild className="text-secondary hover:text-accent">
            <Link href="/about">About</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;