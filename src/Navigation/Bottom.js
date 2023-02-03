import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Profile from '../Screens/AddUser/Profile';
import UserDetail from '../UserData/UserDetail';

export default function Bottom() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="UserDetails" component={UserDetail} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
