const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports =  {
        mode:'development',
       entry:'./src/main.ts',
       output:{
              path:__dirname+'/dist',
              clean:true,
                filename:'bundle.js',
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
                        test:/\.less/,
                        use:['style-loader','css-loader','postcss-loader','less-loader']
                    },
                    {
                        test:/\.css/,
                        use:['style-loader','css-loader','postcss-loader']
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
            
       ]

}