const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');


module.exports = function getBaseConfig(isDev) {
    return {
        mode:isDev?'development':'production',
        entry:{
            main:'./src/main.ts',
        },
        output:{
            path:__dirname+'/dist',
            clean:true,
        },
        resolve:{
            extensions:['.tsx','.ts','.jsx','.js'],
            alias:{
                '@':__dirname+'/src',
            }
        },
        module:{
            rules:[
                {
                    test:/\.vue/,
                    loader:'vue-loader',
                },
                {
                    test:/\.(tsx|ts|jsx|js)/,
                    loader:'babel-loader',
                },
                {
                    oneOf:[
                        {
                            test:/\.css/,
                            use:[
                                isDev?'style-loader':'mini-css-extract-plugin',
                                'css-loader',
                                'postcss-loader',
                            ],  
                        },
                        {
                            test:/\.module\.(css|less)$/,
                            use:[
                                isDev?'style-loader':'mini-css-extract-plugin',
                                {
                                    loader:'css-loader',
                                    options:{
                                        modules:isDev?true:{
                                            localIdentName:'[path][name]__[local]--[hash:base64:5]',
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            test:/\.less/,
                            use:[
                                isDev?'style-loader':'mini-css-extract-plugin',
                                'css-loader',
                                'postcss-loader',
                                'less-loader',
                            ],
                        },
                    ]
                }
              
             
            ]
        },
        plugins:[
            new HtmlWebpackPlugin({
                template:'./public/index.html',
            }),
            new VueLoaderPlugin(),
        ]
    }
}