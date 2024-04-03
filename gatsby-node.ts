// gatsby-node
// V0.2.0
/////////////

import * as path from "path"
 
export const onCreateWebpackConfig = ({ stage , loaders, actions }) => {
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
      resolve: {
        alias: {
          "@/components": path.resolve(__dirname, "src/components"),
          "@/lib/utils": path.resolve(__dirname, "src/utils"),
        },
      },
    })
  }
}