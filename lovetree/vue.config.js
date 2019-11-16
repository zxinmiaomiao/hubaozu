const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

module.exports = {
    publicPath: './',
    devServer: {
        proxy: {
            '/dream': {
                target: 'http://localhost:7000',
                ws: true,
                changeOrigin: true
            },
            '/waws': {
                target: 'http://localhost:7000',
                ws: true,
                changeOrigin: true
            },
            '/homepage': {
                target: 'http://localhost:7000',
                ws: true,
                changeOrigin: true
            },
            '/user': {
                target: 'http://localhost:7000',
                ws: true,
                changeOrigin: true
            },
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