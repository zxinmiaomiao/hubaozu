const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

module.exports = {
    publicPath: './',
    devServer: {
        proxy: {
            '/dream': {
                target: 'http://10.31.151.54:9082',
                ws: true,
                changeOrigin: true
            },
            '/user': {
                target: 'http://10.31.151.54:9083',
                ws: true,
                changeOrigin: true
            },
            // 全  新增
            '/homepage': {
                target: 'http://10.31.151.54:9081 ',
                ws: true,
                changeOrigin: true
            },
            '/treedetail': {
                target: 'http://10.31.151.54:9084',
                ws: true,
                changeOrigin: true
            },
            '/order': {
                target: 'http://10.31.151.54:9084',
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