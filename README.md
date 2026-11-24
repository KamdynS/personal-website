Personal website for Kamdyn Shaeffer. A small Next.js site in the Everforest palette, set in Monaspace Xenon.

## Run it

Requires Node 20.9 or newer. Run `npm ci` and `npm run dev` to work locally. Run `npm run build` to check the production build. The site is deployed on Vercel.

## Publish an article

Articles are Markdown files in `content/writing/`. The Writing section and RSS link appear on the home page once the first one is published.

1. Copy `content/writing/template.md` and name it after the URL you want. `my-post.md` becomes `/writing/my-post`.
2. Fill in `title`, `description` and `date`. The title and description are also used for link previews.
3. Put images in `public/`.
4. Write with `npm run dev` running. Drafts only show there, never in production.
5. Delete the `draft: true` line and run `npm run build`.
6. After deploying, paste the link somewhere that shows previews and check the image. If its URL isn't the real domain, set `NEXT_PUBLIC_SITE_URL` in Vercel.

## Archive

Older posts, project writeups, and the previous home page draft are preserved in `archive/` and are not served by the site.
