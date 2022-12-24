/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

// /**
//  * @type {import('gatsby').GatsbyNode['createPages']}
//  */
// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })
// }
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /p5/,
            use: loaders.null(),
            // use: "null-loader",
          },
        ],
      },
    });
  }
};

// exports.createSchemaCustomization = async ({ actions }) => {
//   actions.createTypes(`
//     interface pageArtWork implements Node & allContentfulAsset {
//       id: ID!
//       blocktype: String
//       heading: String
//       text: String
//     }
//   `)
// }
