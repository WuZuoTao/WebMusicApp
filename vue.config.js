const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    proxy: {
      // port: 8088,  //修改默认端口
        '/api':{
          target:'http://localhost:3000',
          pathRewrite:{
            '^/api':' '
          },
        changeOrigin:true
        },
      }
    },
})