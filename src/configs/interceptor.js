/**
 * @author Lin Cao
 * @date 2018-06-13
 * @description 配置全局请求拦截
 */

import wepy from 'wepy';
import { Domain } from './env';
import { toast } from '../utils/wx';

export default {
  // 发出请求时的回调函数
  config(obj) {
    wepy.showLoading({
      title: '加载中'
    });

    const token = wepy.getStorageSync('token');

    let header = obj.header;

    if (token) {
      header = Object.assign({}, header, {
        'X-Access-Token': token.accessToken
      });
    }

    return Object.assign({}, obj, {
      url: `${domain}${obj.url}`,
      header
    });
  },

  // 请求成功后的回调函数
  success(obj) {
    wepy.hideLoading();
    const status = obj.statusCode;

    switch (status) {
      case 200:
        break;
      case 401:
        wepy.reLaunch({
          url: '/pages/login/login'
        });
        break;
      case 412:
        wepy.reLaunch({
          url: '/pages/login/login'
        });
        break;
      default:
        toast(obj.data.error.message);
        break;
    }

    return obj;
  },

  //请求失败后的回调函数
  fail(obj) {
    wepy.hideLoading();
    toast('网络异常');
    return obj;
  },

  // 请求完成时的回调函数(请求成功或失败都会被执行)
  complete(obj) {
    return obj;
  }
};
