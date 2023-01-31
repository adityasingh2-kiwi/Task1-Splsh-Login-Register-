import React from 'react';
import Nav from './src/Navigation/Nav';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './src/redux/Store';
// import UserDetail from '../../UserData/UserDetail';
const store = configureStore();
const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <Nav />
      </View>
    </Provider>
  );
};

export default App;
