const path = require("path");
const pkg = require("./package.json");
const theme = pkg.theme;

module.exports = {
  entry: "./docs/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/static/"
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  },
  resolve: {
    extensions: [".js"],
    alias: {
      packages: path.resolve(__dirname, "./packages"),
      utils: path.resolve(__dirname, "./utils"),
      '@canner/react-cms-helpers': path.resolve(__dirname, 'node_modules', '@canner/react-cms-helpers'),
      'styled-components': path.resolve(__dirname, 'node_modules', 'styled-components')
    }
  },
  resolveLoader: {
    moduleExtensions: ["-loader"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style'
          },
          {
            loader: 'css'
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style'
          },
          {
            loader: 'css'
          },
          {
            loader: 'less',
            // antd - customized themes
            // https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
            options: {
              modifyVars: theme
            }
          }
        ],
      }
    ]
  }
};
