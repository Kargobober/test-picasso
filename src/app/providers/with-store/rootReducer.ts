import { store } from './store';
import { combineReducers } from 'redux';
import { placeholderApi } from 'shared/api/placeholderApi';

export const rootReducer = combineReducers({
  [placeholderApi.reducerPath]: placeholderApi.reducer,
});

/**
 * Типизация всего хранилища
 */
export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
