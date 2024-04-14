const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function getBaseConfig(isDev) {
  return {
    mode: isDev ? "development" : "production",
    entry: "./src/main.ts",
    output: {
      path: __dirname + "/dist",
      filename: "[name].[hash].js",
      clean: true,
    },
    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js"],
      alias: {
        "@": __dirname + "/src",
      },
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: "vue-loader",
        },
        {
          test: /\.(tsx|jsx|js)$/,
          loader: "babel-loader",
        },
        {
          test: /\.ts$/,
          use: [
            {
              loader: "ts-loader",
              options: {
                transpileOnly: true,
                //   appendTsSuffixTo: [/\.vue$/],
              },
            },
          ],
        },

        {
          oneOf: [
            {
              test: /\.css$/,
              use: [
                isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                "css-loader",
                "postcss-loader",
              ],
            },
            {
              test: /\.module\.(css|less)$/,
              use: [
                isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                {
                  loader: "css-loader",
                  options: {
                    modules: isDev
                      ? true
                      : {
                          localIdentName:
                            "[path][name]__[local]--[hash:base64:5]",
                        },
                  },
                },
                "postcss-loader",
                "less-loader",
              ],
            },
            {
              test: /\.less$/,
              use: [
                isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                "css-loader",
                "postcss-loader",
                "less-loader",
              ],
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
      }),
    ],
  };
};
