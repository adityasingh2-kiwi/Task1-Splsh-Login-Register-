import React from 'react';
import {useRoute} from '@react-navigation/native';
import {SafeAreaView, Text} from 'react-native';
import COLORS from '../component/colors';

const Home = ({naviagtion}) => {
  const route = useRoute();
  // console.log('route', route?.params);
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <Text style={{fontSize: 40, textAlign: 'center', marginTop: 300}}>
        Welcome to Home Page
      </Text>
      <Text>Email : {route?.params?.Email}</Text>
      <Text>Password : {route?.params?.Password}</Text>
    </SafeAreaView>
  );
};

export default Home;
