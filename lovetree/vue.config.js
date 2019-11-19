const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const url = 'http://10.31.163.29'
module.exports = {
    publicPath: './',
    devServer: {

        proxy: {
            '/dream': {
                target: url + ':9082',
                ws: true,
                changeOrigin: true
            },
            '/user': {
                target: url + ':9083',
                ws: true,
                changeOrigin: true
            },
            // 全  新增
            '/homepage': {
                target: url + ':9081 ',
                ws: true,
                changeOrigin: true
            },
            '/treedetail': {
                target: url + ':9084',
                ws: true,
                changeOrigin: true
            },
            '/order': {
                target: url + ':9084',
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