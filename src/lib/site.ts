// Vercel sets VERCEL_PROJECT_PRODUCTION_URL to the production domain at build time.
const host = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const site = {
  name: 'Kamdyn Shaeffer',
  description: 'Kamdyn Shaeffer is a software engineer in Boston working on backend and AI systems.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? (host ? `https://${host}` : 'http://localhost:3000'),
  github: 'https://github.com/KamdynS',
  linkedin: 'https://www.linkedin.com/in/kshaeffer1844/',
  email: 'kamdynshaefferbusiness@gmail.com',
};
