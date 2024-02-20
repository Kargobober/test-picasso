import { store } from './store';
import { combineReducers } from 'redux';
import { singleCardSlice } from 'entities/stringCard';

export const rootReducer = combineReducers({
  [singleCardSlice.name]: singleCardSlice.reducer,
});

/**
 * Типизация всего хранилища
 */
export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
