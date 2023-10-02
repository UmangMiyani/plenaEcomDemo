import 'react-native-gesture-handler';
import React from 'react';
import RootNavigation from './navigation';
import {LogBox} from 'react-native';

function App(): JSX.Element {
  LogBox.ignoreLogs([
    'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead',
  ]);
  return <RootNavigation />;
}

export default App;
