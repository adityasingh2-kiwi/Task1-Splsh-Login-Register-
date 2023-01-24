import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/Screens/Login';
import RegistrationScreen from './src/Screens/Registration';
import Home from './src/Screens/Home';
import Splash from './src/Screens/Splash';

const App = () => {
  const Stack = createNativeStackNavigator();
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 2000);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
