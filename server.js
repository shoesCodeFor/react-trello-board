const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.development');

const port = process.env.PORT;
/* eslint-disable no-console */
/* eslint-disable consistent-return */
new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(process.env.PORT || 5000, 'localhost', (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('Listening!');
});
