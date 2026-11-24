import { notFound } from 'next/navigation';
import { getPost } from '@/lib/posts';
import { shareImage, shareImageSize } from '@/lib/shareImage';
import { site } from '@/lib/site';

export const alt = `An article by ${site.name}`;
export const size = shareImageSize;
export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  return shareImage(post.title, site.name);
}
