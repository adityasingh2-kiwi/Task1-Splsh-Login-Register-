import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import COLORS from '../component/colors';

const Home = ({navigation}) => {
  // console.log(route);

  const {user} = useSelector(state => state?.getUserReducer);
  return (
    <SafeAreaView style={COLORS.login1}>
      <Text style={COLORS.HomeHeading}>Welcome to Home Page</Text>
      <Text>Email: {user.email}</Text>
      <Text>Password: {user.password}</Text>
      <Text>firstName: {user.firstName}</Text>
      <Text>Last Name: {user.lastName}</Text>
      <Text>mobileNumber: {user.mobileNumber}</Text>

      <TouchableOpacity>
        <Text
          onPress={() => navigation.navigate('Login')}
          style={COLORS.Logout}>
          LogOut
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
