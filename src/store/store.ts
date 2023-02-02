import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  nextReduxCookieMiddleware,
  wrapMakeStore,
} from "next-redux-cookie-wrapper";
import { createWrapper } from "next-redux-wrapper";
import userReducer from "./slice/userSlice";
import { userSlice } from "./slice/userSlice";

const rootReducer = combineReducers({
  user: userReducer,
});

const makeStore = wrapMakeStore(() =>
  configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().prepend(
        nextReduxCookieMiddleware({
          subtrees: [
            {
              subtree: `${userSlice.name}.token`,
              cookieName: "X-API-KEY",
              defaultState: userSlice.getInitialState().token,
            },
            {
              subtree: `${userSlice.name}.data`,
              cookieName: "PROFILE",
              defaultState: null,
            },
          ],
        })
      ),
  })
);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore);
