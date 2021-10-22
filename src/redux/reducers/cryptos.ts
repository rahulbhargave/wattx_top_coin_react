import {Crypto} from '../../types/cryptos'
import { CLEAR_SEARCH, FETCH_CRYPTOS } from '../actionTypes';

const initialState:Array<Crypto> | [] = [];
const cryptosReducer = (data = initialState, action:any)=>{
    const { type, payload } = action;
  
    switch (type) {
      case FETCH_CRYPTOS:
        return [...payload];
      
      case CLEAR_SEARCH:
        return [];
      default:
        return data;
    }
}

export default cryptosReducer;