import type {GatsbyConfig} from 'gatsby';
import 'dotenv/config';

const config: GatsbyConfig = {
  flags: {
    DEV_SSR: true,
  },
  siteMetadata: {
    title: `Travis Henson - JavaScript Developer`,
    siteUrl: `https://www.travishenson.com`,
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/favicon.ico',
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-graphcms',
      options: {
        endpoint: process.env.GRAPHCMS_ENDPOINT,
        token: process.env.GRAPHCMS_AUTH_TOKEN,
        stages: ['PUBLISHED'],
        downloadLocalImages: true,
      },
    },
  ],
};

export default config;
