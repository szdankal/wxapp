import {INCREMENT,DECREMENT}from './type'
export default {
    [INCREMENT](state,num){
      state.num += num;
    },
    [DECREMENT](state,num){
      state.num -= num;
    }
}
