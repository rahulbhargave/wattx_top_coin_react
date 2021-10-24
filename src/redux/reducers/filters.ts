import {SET_FILTER } from '../actionTypes';
import { Filter } from '../../types/filters';

const initialState:Filter | {} = {};
const filterReducer = (filters = initialState, action:any)=>{
    const { type, payload } = action;
  
    switch (type) {
      case SET_FILTER:
        return {...filters,...payload};
      default:
        return filters;
    }
}

export default filterReducer;