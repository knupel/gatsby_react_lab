// You need this part to build and deploy your app for the Processing part
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /p5/,
            // use: loaders.null(),
            use: "null-loader",
          },
        ],
      },
    });
  }
};
