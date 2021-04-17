const path = require('path')

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage === 'build-javascript') {
    // Turn off source maps
    actions.setWebpackConfig({
      devtool: false,
    })
  }

  actions.setWebpackConfig({
    resolve: {
      // Allows use of absolute imports
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}
