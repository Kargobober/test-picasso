declare global {
  type RootState = import('../src/app/providers/with-store/rootReducer').RootState;
  type AppDispatch = import('../src/app/providers/with-store/rootReducer').AppDispatch
}

export {};
