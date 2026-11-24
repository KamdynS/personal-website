/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Read from disk by the pages and the share-image routes.
  outputFileTracingIncludes: {
    '/**': ['./content/**', './src/app/fonts/*.woff'],
  },
  async redirects() {
    // Links into the previous version of the site.
    return ['/about', '/blog', '/blog/:slug', '/projects', '/projects/:slug', '/writing'].map(
      (source) => ({ source, destination: '/', permanent: false }),
    );
  },
};

export default nextConfig;
