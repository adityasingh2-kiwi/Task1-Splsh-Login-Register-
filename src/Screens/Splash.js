import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Logo from '../assets/Image/1528443245244.jpeg';
const Splash = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.text}>Hello Aditya</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 200,
    width: 200,
  },
  text: {
    color: 'black',
    fontSize: 30,
  },
});

export default Splash;
