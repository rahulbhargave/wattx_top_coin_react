import {Crypto} from '../../types/cryptos'
import { FETCH_CRYPTOS } from '../actionTypes';

const initialState:Array<Crypto> | [] = [];
const cryptosReducer = (data = initialState, action:any)=>{
    const { type, payload } = action;
  
    switch (type) {
      case FETCH_CRYPTOS:
        return [...payload];
      default:
        return data;
    }
}

export default cryptosReducer;