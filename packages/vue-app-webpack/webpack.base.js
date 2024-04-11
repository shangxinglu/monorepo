const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');


module.exports = function getBaseConfig(isDev) {
    return {
        entry:{
            main:'./src/main.ts',
        },
        output:{
            path:__dirname+'/dist',
            clean:true,
        },
        resolve:{
            extensions:['.tsx','.ts','.jsx','.js'],
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