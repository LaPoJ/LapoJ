# my-app

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

- vue-cli 3.0+ 原生命令行支持 typescript
  react 最早使用，vue 也开始使用 typescript

- 项目多加20% typescript代码 本来不用写的
  少了60%的潜在BUG(js 弱类型) 良好的代码提示，让团队合作体验更好

- 重要的对象(组件, state, props, vuex/redux, 函数)需要 声明类型
  vuex 最大的对象 state
  interface