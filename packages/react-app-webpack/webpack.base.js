const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = function getBaseConfig(isDev) {
    return {
        mode:'development',
       entry:'./src/main.ts',
       output:{
              path:__dirname+'/dist',
              clean:true,
              filename:'[name].[hash].js',
       },
       resolve:{
            extensions: ['.tsx','.ts','.jsx','.js',],
            alias:{
                '@':__dirname+'/src'
            }
       },
       module:{
            rules:[
                
                {
                    test:/\.(js|jsx|ts|tsx)$/,
                    use:{
                        loader:'babel-loader',
                    }
                },
               {
                oneOf:[
                    {
                        test:/\.module\.(css|less)$/,
                        use:[
                            isDev?'style-loader':MiniCssExtractPlugin.loader,
                            {
                                loader:'css-loader',
                                options:{
                                    modules:isDev?true:{
                                        localIdentName:'[path][name]__[local]--[hash:base64:5]'
                                    
                                    }
                                }
                            }

                        ]
                    },
                    {
                        test:/\.less/,
                        use:[
                            isDev?'style-loader':MiniCssExtractPlugin.loader,
                            'css-loader','postcss-loader','less-loader']
                    },
                    {
                        test:/\.css/,
                        use:[
                            isDev?'style-loader':MiniCssExtractPlugin.loader,
                            'css-loader','postcss-loader']
                    }
                ]
               }
        ]
       },
       plugins:[
            new HtmlWebpackPlugin({
                template:'./public/index.html',
                filename:'index.html'
            }),
            new MiniCssExtractPlugin({
                filename:'[name].css'
            })
            
       ]

    }
}