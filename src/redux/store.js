import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: { cont: contactsReducer, filt: filterReducer },
});

// const rootReducer = combineReducers({
//   cont: contactsReducer,
//   filt: filterReducer,
// });
