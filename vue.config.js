const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{  // 重写的方式，把请求代理到express服务器上
        '/api':{
            target:'http://localhost:8081',
            pathRewrite:{'/api':''} // 把/api 替换为空
        }
    }
},
})
