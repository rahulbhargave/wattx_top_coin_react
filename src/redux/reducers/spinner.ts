import { HIDE_LOADER, SHOW_LOADER, ERROR } from '../actionTypes';

const initialState:{loading:boolean, error:boolean} = {loading:false, error:false};

function SpinnerReducer(state = initialState, action:any) {
    const { type } = action;
  
    switch (type) {
      case SHOW_LOADER:
        return {...state, loading:true};
      
      case HIDE_LOADER:
        return {...state, loading:false};

      case ERROR:
        return {...state, error: !state.error};

      default:
        return state;
    }
  };
  
  export default SpinnerReducer;