import 'react-native-gesture-handler';
import React from 'react';
import RootNavigation from './navigation';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {persistor, store} from './store/Store';
import {PersistGate} from 'redux-persist/integration/react';

function App(): JSX.Element {
  LogBox.ignoreLogs([
    'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead',
  ]);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
}

export default App;
