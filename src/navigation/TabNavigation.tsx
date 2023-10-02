import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabBarItem} from '../component';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import InitialScreen from '../screens/Categories/CategoriesScreen';
import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import FavouriteScreen from '../screens/Favourite/FavouriteScreen';
import MoreScreen from '../screens/More/MoreScreen';
import {Colors} from '../theme';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderRadius: 30,
          position: 'absolute',
        },
      }}>
      <Tab.Screen
        name={'Home'}
        component={HomeScreen}
        options={{
          tabBarButton: (props: any) => (
            <TabBarItem {...props} item={{route: 'Home', label: 'Home'}} />
          ),
        }}
      />
      <Tab.Screen
        name={'Categories'}
        component={CategoriesScreen}
        options={{
          tabBarButton: (props: any) => (
            <TabBarItem
              {...props}
              item={{route: 'Categories', label: 'Categories'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Favourite'}
        component={FavouriteScreen}
        options={{
          tabBarButton: (props: any) => (
            <TabBarItem
              {...props}
              item={{route: 'Favourite', label: 'Favourite'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'More'}
        component={MoreScreen}
        options={{
          tabBarButton: (props: any) => (
            <TabBarItem {...props} item={{route: 'More', label: 'More'}} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabStack;
