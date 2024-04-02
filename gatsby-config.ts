

require("dotenv").config();

// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// });
// export const TRUC = process.env.GOOGLE_MAP_ID;

module.exports = {
  // flags: {
  //   DEV_SSR: true
  // },
  siteMetadata: {
    title: `Knupel Labo Gatsby React `,
    description: `Here you find my work around the gatsby and React concept to understand the jungle web`,
    author: `Knupel`,
  },
  plugins: [
    // SCSS
    `gatsby-plugin-sass`,
    // FONT
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },

    // IMAGE
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Available options and their defaults:
        base64Width: 20,
        // forceBase64Format: ``, // valid formats: png,jpg,webp // don't work on OSX
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
        failOnError: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,

    // FILE SYSTEME
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `media_art`,
        path: `${__dirname}/media/media_art`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `tdm`,
        path: `${__dirname}/media/photo/tdm`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    // call all media for an unknow reason
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `media`,
        path: `${__dirname}/media`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    // CONTENTFUL
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        enableTags: true,
      },
    },
  ],
}

