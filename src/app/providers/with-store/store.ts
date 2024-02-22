import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { placeholderApi } from "shared/api/placeholderApi";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(placeholderApi.middleware),
});
