import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cryptosReducer from '../redux/reducers/cryptos';
import filterReducer from '../redux/reducers/filters';
import SpinnerReducer from '../redux/reducers/spinner';

export const store = configureStore({
  reducer: {
    cryptos: cryptosReducer,
    filters: filterReducer,
    spinner:SpinnerReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
