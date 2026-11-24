import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const directory = path.join(process.cwd(), 'content/writing');

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  draft: boolean;
  content: string;
};

// YAML parses an unquoted date into a Date object.
function toDay(value: unknown): string {
  return value instanceof Date ? value.toISOString().slice(0, 10) : String(value);
}

/** Newest first. Drafts appear in `npm run dev` and never in a production build. */
export function getPosts(): Post[] {
  if (!fs.existsSync(directory)) return [];

  return fs
    .readdirSync(directory)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const { data, content } = matter(fs.readFileSync(path.join(directory, file), 'utf8'));
      return {
        slug: file.replace(/\.md$/, ''),
        title: String(data.title),
        description: String(data.description ?? ''),
        date: toDay(data.date),
        draft: data.draft === true,
        content,
      };
    })
    .filter((post) => !post.draft || process.env.NODE_ENV === 'development')
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((post) => post.slug === slug);
}

export function formatDate(day: string): string {
  return new Date(`${day}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
