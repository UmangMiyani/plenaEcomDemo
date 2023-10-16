import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import {homeSlice} from './feed/reducer';

const persistConfig = {
  key: 'persistedReducer',
  storage: AsyncStorage,
  blackList: [''],
  whiteList: [''],
};

const combine = combineReducers({
  feed: homeSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, combine);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

let persistor = persistStore(store);
export {persistor};
