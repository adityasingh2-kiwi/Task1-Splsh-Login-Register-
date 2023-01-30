import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import RegistrationScreen from '../Screens/Registration';
import Splash from '../Screens/Splash';
import Bottom from './Bottom';

const Nav = () => {
  const Stack = createNativeStackNavigator();
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 2000);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {showSplashScreen ? (
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShow: false}}
          />
        ) : null}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
        />
        <Stack.Screen name="Bottom" component={Bottom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Nav;
