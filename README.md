## 项目结构 | Project Structure

- [`src`](#src)
  - [`assets`](#assets)
  - [`components`](#components)
  - [`env.js`](#envjs)
  - [`mixins`](#mixins)
  - [`pages`](#pages)
  - [`store`](#store)
  - [`service`](#service)
  - [`app.wpy`](#appwpy)

### src

source code ，主要工作区域

### assets

图片之类的媒体文件放这里，例如 tabBar 用到的图片

### components

组件

### env.js

环境变量放这里，例如 dev 、 prod 环境的 baseUrl 等

### mixins

能在多个页面复用的代码放这里

### pages

页面

### store

[weappx](https://github.com/tolerance-go/weappx) 相关代码放这里

### service

接口调用、请求交互放这里

### app.wpy

入口文件，很多东西例如 `globalData` `interceptor` `onLaunch` 都需要在这里配置。

> 其中 config 属性对应原生的 app.json 文件，build 编译时会根据 config 属性自动生成 app.json 文件，如果需要修改 config 中的内容，请使用微信提供的相关 API。

参考 [wepy 文档](https://tencent.github.io/wepy/document.html#/?id=%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%85%A5%E5%8F%A3appwpy) [小程序文档](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html)

## TroubleShooting

#### 无法在微信支付回调里使用 `reLaunch` ？报错 `fail can not invoke reLaunch in background` 。 2018-07-17

是的。这是微信的 bug 。想别的办法吧，例如使用 `switchTab` 或 `redirectTo` 。

#### 在 app.wpy 的 config 里配 pages 时，二级目录需要排在一级目录的后面。 2018-07-17

例如：

```js
/* 这样就会报错 */
...
"pages/menu/cart/index",
"pages/menu/index",
...

/* 这样就没问题 */
...
"pages/menu/index",
"pages/menu/cart/index",
...
```

#### 每次添加新页面后，需要重新 `npm run dev` 一次，否则可能报错

## TIPS

#### 当对 input 做空值校验时，可以使用 `!`

例如：

```js
...
if(!this.name) {
  ...
}
...
```

参考 `address-new.wpy`
