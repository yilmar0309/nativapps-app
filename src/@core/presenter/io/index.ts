import {configureStore} from '@reduxjs/toolkit';
import alert from './alertSlice';
import movie from './movieSlice';

export default configureStore({
  reducer: {
    alert,
    movie,
  },
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
