import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import TabStack from './TabNavigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CartScreen from '../screens/Cart/CartScreen';
import DetailPostScreen from '../screens/DetailPost/DetailPostScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TabStack" component={TabStack} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="DetailPostScreen" component={DetailPostScreen} />
    </Stack.Navigator>
  );
};

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="AppStack" component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
