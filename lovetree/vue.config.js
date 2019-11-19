const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

module.exports = {
    publicPath: './',
    devServer: {
        proxy: {
            '/dream': {
                target: 'http://10.31.163.29:9082',
                ws: true,
                changeOrigin: true
            },
            '/waws': {
                target: 'http://localhost:7000',
                ws: true,
                changeOrigin: true
            },
            '/user': {
                target: 'http://10.31.163.29:9083',
                ws: true,
                changeOrigin: true
            },
              // 全 新增
            '/homepage': {
               target: 'http://10.31.163.29:9081',
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