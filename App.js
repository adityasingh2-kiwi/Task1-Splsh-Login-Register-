import React from 'react';
import Nav from './src/Navigation/Nav';
import {View} from 'react-native';
import Bottom from './src/Navigation/Bottom';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Nav />
      <Bottom />
    </View>
  );
};

export default App;
