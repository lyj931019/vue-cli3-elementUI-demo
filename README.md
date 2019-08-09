# element

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# 安装less
执行vue add style-resources-loader
```
 vue add style-resources-loader
```
```
 // 没有出错的话，可以无视这里
  npm i style-resources-loader vue-cli-plugin-style-resources-loader -D 
  或 
  yarn add  style-resources-loader vue-cli-plugin-style-resources-loader -D
```


第二步配置vue.config.js
```
   const path = require("path");
   module.exports = {
     ...
     pluginOptions: {
        "style-resources-loader": {
            preProcessor: "less",
            patterns: [
              //这个是加上自己的路径，
              //注意：试过不能使用别名路径
              path.resolve(__dirname, "./src/assets/variable.less")
             ]
         }
     }
     ...
    }
```
重启服务
```
npm run serve
```