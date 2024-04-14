
const {merge} = require('webpack-merge')
const getBaseConfig = require('./webpack.base.js')
const baseConfig = getBaseConfig(false)
module.exports = merge(baseConfig,{
    
})