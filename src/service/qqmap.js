const theMap = require('./qqmap-wx-jssdk.js');
import {qqMapApiKey} from '@/env';

const API_KEY = qqMapApiKey;
let apiRegion = '深圳市';

const myMap = new theMap({key: API_KEY});

// named parameters https://stackoverflow.com/a/11796776
const search = (options = {}) => {
  return new Promise((resolve, reject) => {

    myMap.search({
      ...options,
      success: (res) => {
        console.log(res);
        resolve(res);
      },
      fail: (res) => {
        reject(res);
      }
    })
  })
};
/**
 * location: {longitude: Number, latitude: Number}
 */
const findPlace = (location = {}) => {
  return new Promise((resolve, reject) => {

    myMap.reverseGeocoder({
      location,
      get_poi: 1,
      poi_options: 'policy=2',
      success: (result) => {
        resolve(result);
      },
      fail: (result) => {
        reject(result);
      }
    })
  })
};

const getSuggestion = (options) => {
  return new Promise((resolve, reject) => {
    myMap.getSuggestion({
      ...options,
      policy: 1,
      success: (result) => {
        resolve(result);
      },
      fail: (result) => {
        reject(result);
      }
    });
  })
};

export default {
  search,
  findPlace,
  getSuggestion
}
