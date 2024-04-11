
const {merge} = require('webpack-merge')
const getBaseConfig = require('./webpack.base.js')
const baseConfig = getBaseConfig(true)
module.exports = merge(baseConfig,{
    
})