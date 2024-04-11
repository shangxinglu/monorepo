const getBaseConfig = require('./webpack.base.js');
const {merge} = require('webpack-merge');
const baseConfg = getBaseConfig(false);
const TerserWebpackPlugin = require('terser-webpack-plugin')

module.exports = merge(baseConfg,{
    optimize:{
        minizer:true,
        minizer:[
            new TerserWebpackPlugin({
            }),
        ]
    }
})