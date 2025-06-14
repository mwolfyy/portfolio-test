/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.pexels.com', 'pexels.com'],
    unoptimized: true
  },
  async rewrites() {
    return [
      {
        source: '/api/contact',
        destination: '/.netlify/functions/contact'
      },
      {
        source: '/api/get-requests',
        destination: '/.netlify/functions/get-requests'
      },
      {
        source: '/api/update-request',
        destination: '/.netlify/functions/update-request'
      },
      {
        source: '/api/analytics',
        destination: '/.netlify/functions/analytics'
      }
    ];
  },
  async redirects() {
    return [
      // Redirect Cyrillic URLs to Latin equivalents
      {
        source: '/услуги',
        destination: '/uslugi',
        permanent: true
      },
      {
        source: '/за-мен',
        destination: '/za-men',
        permanent: true
      },
      {
        source: '/контакти',
        destination: '/kontakti',
        permanent: true
      },
      {
        source: '/ресурси',
        destination: '/resursi',
        permanent: true
      },
      {
        source: '/политика-за-поверителност',
        destination: '/politika-za-poveritelnost',
        permanent: true
      },
      {
        source: '/общи-условия',
        destination: '/obshti-usloviya',
        permanent: true
      },
      {
        source: '/бисквитки',
        destination: '/biskvitki',
        permanent: true
      },
      {
        source: '/услуги/:path*',
        destination: '/uslugi/:path*',
        permanent: true
      },
      {
        source: '/blog/:slug*',
        destination: '/blog/:slug*',
        permanent: true
      }
    ];
  },
  i18n: {
    locales: ['bg'],
    defaultLocale: 'bg'
  }
};

module.exports = nextConfig;