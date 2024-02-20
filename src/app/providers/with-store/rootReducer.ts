import { store } from './store';
import { combineReducers } from 'redux';
import { SinglePageSlice } from 'entities/stringCard';

export const rootReducer = combineReducers({
  [SinglePageSlice.name]: SinglePageSlice.reducer,
});

/**
 * Типизация всего хранилища
 */
export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
