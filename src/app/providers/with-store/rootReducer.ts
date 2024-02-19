import { store } from './store';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
});

/**
 * Типизация всего хранилища
 */
export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
