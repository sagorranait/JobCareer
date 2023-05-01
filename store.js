import { configureStore } from '@reduxjs/toolkit';
import getUser from './features';

export const store = configureStore({
  reducer: {
      users: getUser
  },
});