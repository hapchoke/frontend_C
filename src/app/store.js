import { configureStore } from '@reduxjs/toolkit';
import { arrayMoveSlice } from '../features/Array/arraySlice';

// ルートreducer作成
export const store = configureStore({
  reducer: arrayMoveSlice.reducer,
});
