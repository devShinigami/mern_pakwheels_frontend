import { configureStore } from "@reduxjs/toolkit";
import signUpReducer from "./signUpSlice";
import signInReducer from "./signIn";
import userReducer from "./user";
import loadingReducer from "./loading";
import carReducer from "./car";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";

const persistconfig = {
  key: "newRoot",
  storage,
};

const persistedUserReducer = persistReducer(persistconfig, userReducer);

export const store = configureStore({
  reducer: {
    car: carReducer,
    signUp: signUpReducer,
    signIn: signInReducer,
    user: persistedUserReducer,
    loading: loadingReducer,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);
