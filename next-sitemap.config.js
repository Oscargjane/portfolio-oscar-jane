const SITE_URL = process.env.SITE_URL || 'https://oscar-jane.com';
const NEXT_SSG_FILES = [
  '/*.json$',
  '/*_buildManifest.js$',
  '/*_middlewareManifest.js$',
  '/*_ssgManifest.js$',
  '/*.js$',
];

const exclude = ['/app/success/*'];

/** @type {import('next-sitemap').IConfig} */
export const config = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  exclude,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: NEXT_SSG_FILES,
      },
    ],
  },
};

export default config;
