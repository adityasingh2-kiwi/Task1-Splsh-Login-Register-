import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import COLORS from '../component/colors';

const Home = ({navigation}) => {
  // console.log(route);

  const {user} = useSelector(state => state?.getUserReducer);
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
      <Text>Email: {user.email}</Text>
      <Text>Password: {user.password}</Text>
      <Text>firstName: {user.firstName}</Text>
      <Text>Last Name: {user.lastName}</Text>
      <Text>mobileNumber: {user.mobileNumber}</Text>

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
