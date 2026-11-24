import { shareImage, shareImageSize } from '@/lib/shareImage';
import { site } from '@/lib/site';

export const alt = site.name;
export const size = shareImageSize;
export const contentType = 'image/png';

export default function Image() {
  return shareImage(site.name, 'Backend and AI systems');
}
