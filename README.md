# 有好的建议、想法、例子欢迎 PR ！！

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

注：  标记 **?** 为不确定现象

#### **?**  在调用 `requestPayment` 的上一行里调用 `removeTabBarBadge` 会失效。更新：我把 removeTabBarBadge 放入 requestPayment 的 callback 里，在“远程调试”和“开发者工具”里都成功了，但是在体验版和“预览”里都失败。。。我不想再写这些坑了。。。我￥%@￥#@#￥%#！%&……#￥#@￥ 2018-07-28 卒

#### 当使用“远程调试”提示编译异常时，试试 `rm -r dist/` （即删除 dist 文件夹）

#### 在 iOS 里， `align-self: stretch;` 会失效。 2018-07-28

#### **?**  在 iOS 里，`transform: perspective(99999px) translateZ(1px);` 会穿透 `z-index` 比它高的 `view` 。 2018-07-28

我打算试试用这个代替 `z-index` 来着。。。

#### 当调用 `requestPayment` 时，在 callback （无论是 `success` 、 `fail` 、还是 `complete` ）里使用 `reLaunch` ？报错 `fail can not invoke reLaunch in background` 。 2018-07-17

是的。[这是微信的 bug](https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=&docid=0004a6a4478e60234ba6e5c585b000) 。想别的办法吧，例如使用 `switchTab` 或 `redirectTo` 。

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

#### 当需要阻止点击冒泡时，可以使用 `@tap.stop` 。当需要阻止  滑动冒泡时，可以使用 `@touchmove.stop`

```html
...
<view @tap.stop="stopBubble">
  ...
</view>
...

...
<view @tap.stop="stopBubble">
  ...
</view>
...
```

```js
  stopBubble() {
    return;
  }
```

#### 当出现 `textarea` 层级过高现象时

可以使用 `cover-view` （慎用）。

若 `textarea` 穿透弹窗遮罩（又叫蒙版又叫 mask ），可在弹窗出现时隐藏 `textarea` ，并用另一个 `view` 用来占位。
