const path = require("path")
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@/components": path.resolve(__dirname, "src/components"),
        "@/elements/*": path.resolve(__dirname, "src/elements"),
        "@/styles/*": path.resolve(__dirname, "src/styles"),
        "@/images/*": path.resolve(__dirname, "src/images")
      }
    }
  })
}
