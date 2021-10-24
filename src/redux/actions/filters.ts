//import httpApis from "../../config/http.apis";
import { Filter } from "../../types/filters";
import { SET_FILTER } from '../actionTypes';
import { fetchCryptos } from './cryptos';


export const setFilters = (filters:Filter)=> async (dispatch:any) => {
    dispatch({
        type: SET_FILTER,
        payload: filters,
    });
    dispatch(fetchCryptos(filters));
}