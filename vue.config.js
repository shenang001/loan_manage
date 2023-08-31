const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // publicPath:  process.env.NODE_ENV === 'production'?'/loan_manage/':'/',
  transpileDependencies: true,
  publicPath:'./',
  configureWebpack:{
    devServer:{
      // 设置代理服务器
      proxy:{
       '/api':{
        // target:'http://124.223.69.156:6300',
        target:'http://159.75.169.224:6300',
        
        changeOrigin:true,
        // 后端请求没有api，所以要去掉
        pathRewrite:{'^/api':"/"}
       }
      }
    }
  }
})
