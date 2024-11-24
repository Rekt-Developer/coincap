import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { apiCoins } from "./apiCoins";
import popularCoins from "./slices/popularCoins";
import getDetailsCoin from "./slices/getDetailsCoin";
import getQuantityCoins from "./slices/getQuantityCoins";
import listMyCoins from "./slices/listMyCoins";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  listMyCoins: listMyCoins,
  getQuantityCoins: getQuantityCoins,
  getDetailsCoin: getDetailsCoin,
  popularCoins: popularCoins,
  [apiCoins.reducerPath]: apiCoins.reducer,
});

const persistorReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistorReducer,

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiCoins.middleware);
  },
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
