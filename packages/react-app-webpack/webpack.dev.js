const getBaseConfig = require('./webpack.base.js');
const {merge} = require('webpack-merge');
const baseConfg = getBaseConfig(true);

module.exports = merge(baseConfg,{
    
})