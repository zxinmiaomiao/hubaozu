const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

module.exports = {
    publicPath: './',
    devServer: {
        proxy: {
            '/waws': {
                target: 'http://localhost:7000',
                ws: true,
                changeOrigin: true
            },  // 全  新增
            '/homepage': {
               target: 'http://localhost:7000',
               ws: true,
               changeOrigin: true
           },
           '/treedetail': {
               target: 'http://localhost:7000',
               ws: true,
               changeOrigin: true
           },
           '/order': {
               target: 'http://localhost:7000',
               ws: true,
               changeOrigin: true
           }
        //    ----------------------------------------
        }
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    autoprefixer(),
                    pxtorem({
                        rootValue: 37.5,
                        propList: ['*'],
                        selectorBlackList: ['van-circle__layer']
                    })
                ]
            }
        }
    }
};