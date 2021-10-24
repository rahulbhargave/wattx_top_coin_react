import { SHOW_LOADER, HIDE_LOADER, ERROR } from '../actionTypes';


export const showLoader = () => (dispatch:any) => {
    dispatch({
        type: SHOW_LOADER,
    });
};
  
export const hideLoader = () => (dispatch:any) => {
    dispatch({
        type: HIDE_LOADER,
    });
};

export const toggleError = () => (dispatch:any) => {
    dispatch({
        type:ERROR,
    });
};
