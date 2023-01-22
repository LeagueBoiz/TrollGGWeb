import { configureStore } from '@reduxjs/toolkit';
import commonSlice from './slice/commonSlice';

const store = configureStore({
  reducer: {
    common: commonSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
