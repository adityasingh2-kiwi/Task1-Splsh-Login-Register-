// import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import RegistrationScreen from '../Screens/Registration';
// import Login from '../Screens/Login';
// import {TabActions} from '@react-navigation/native';
// import Home from '../Screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../Screens/Home';
import Login from '../Screens/Login';

const Tab = createBottomTabNavigator();

export default function Bottom() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Login" component={Login} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
