const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  //백앤드랑 연결
  devServer:{
    proxy: {
      '/':{
        target: 'http://localhost'
      }
    }
  }
})