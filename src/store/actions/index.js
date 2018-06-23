import  {ASYNC_INCREMENT} from './type'
import  {INCREMENT} from '../mutations/type';

export default {
  [ASYNC_INCREMENT](params){
      return async ({dispatcher, getState, state})=>{
            console.log(params,'params')
            setTimeout(()=>{
              dispatcher.store[INCREMENT](params)
            },2000)
      }
  }
}
