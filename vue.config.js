module.exports = {
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({
                        rootValue: 75,
                        propList: ['*']
                    })
                ]
            }
        }
    },
    devServer: { // webpack 的一个插件，搭建本地服务器
        proxy: { // 反向代理
          '/api': {
            target: 'http://127.0.0.1:3001', // 服务器地址
            pathRewrite: {
              '^/api': '' // 以 /api 开头的地址替换为 ''
            },
            changeOrigin: true // 本地会虚拟一个服务端接收你的请求并代你发送该请求
          }
        }
      }
}