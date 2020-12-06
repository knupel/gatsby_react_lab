module.exports = {
  siteMetadata: {
    title: `Stan le Punk Labo Gatsby React `,
    description: `Here you find my work around the gatsby and React concept to understand the messy web jungle`,
    author: `Stan le Punk`,
  },
  plugins: [
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        connectionString: `mongodb+srv://<stan>:<cyber>@cluster0.nu5bx.mongodb.net/<Stan>?retryWrites=true&w=majority`,
        collection: `Artwork`,
      },
    },
    `gatsby-transformer-sharp`,
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
  ],
}
