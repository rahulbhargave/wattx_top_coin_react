import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cryptosReducer from '../redux/reducers/cryptos';

export const store = configureStore({
  reducer: {
    cryptos: cryptosReducer
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
