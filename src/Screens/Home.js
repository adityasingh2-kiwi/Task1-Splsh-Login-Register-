import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import COLORS from '../component/colors';

const Home = ({navigation, route}) => {
  console.log(route);
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <Text
        style={{
          fontSize: 40,
          textAlign: 'center',
          marginTop: 150,
          marginBottom: 70,
        }}>
        Welcome to Home Page
      </Text>
      <Text>FirstName : {route?.params?.firstName}</Text>
      <Text>LastName : {route?.params?.lastName}</Text>
      <Text>Email : {route?.params?.email}</Text>
      <Text>Password : {route?.params?.password}</Text>
      <Text>MobileNumber : {route?.params?.mobileNumber}</Text>
      <TouchableOpacity>
        <Text
          onPress={() => navigation.navigate('Login')}
          style={{
            textAlign: 'center',
            marginTop: 70,
            backgroundColor: 'magenta',
            color: 'white',
            fontWeight: 'bold',
            width: 90,
            height: 30,
            fontSize: 20,
            marginLeft: 152,
          }}>
          LogOut
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
