import mutations from './mutations'
import actions from './actions'
export default {
  namespace : 'store',
  state : {
    num: 0,
    addressText: null,
    longitude: null,
    latitude: null,
    mobile: '13888888888'
  },
  mutations,
  actions
}
