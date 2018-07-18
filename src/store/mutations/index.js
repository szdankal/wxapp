import {
  INCREMENT,
  DECREMENT,
  SET_ADDRESS_TEXT,
  SET_LATITUDE,
  SET_LONGITUDE,
  SET_MOBILE
} from './type'
export default {
  [INCREMENT](state, num) {
    state.num += num;
  },
  [DECREMENT](state, num) {
    state.num -= num;
  },
  // parameter 限定为 传入一个 payload
  [SET_ADDRESS_TEXT](state, payload) {
    state.addressText = payload;
  },
  [SET_LONGITUDE](state, payload) {
    state.longitude = payload;
  },
  [SET_LATITUDE](state, payload) {
    state.latitude = payload;
  },
  [SET_MOBILE](state, payload) {
    state.mobile = payload;
  }
}
