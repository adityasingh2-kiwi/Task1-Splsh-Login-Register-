import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import COLORS from '../component/colors';
import TextInputComp from '../component/TextInput';

const RegistrationScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const handleCheckEmail = text => {
    let re = /\S+@\S+\.\S+/;
    setEmail(text);
    if (re.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };

  return (
    <SafeAreaView style={[COLORS.color1, COLORS.register1]}>
      <ScrollView
        contentContainerStyle={{paddingTop: 50, paddingHorizontal: 20}}>
        <Text style={[COLORS.color1, COLORS.register1]}>Register</Text>
        <Text style={[COLORS.color1, COLORS.register2]}>
          Enter your details for Register
        </Text>
        <View style={COLORS.content1}>
          <TextInputComp
            name="First Name"
            placeHolder="Enter your First Name"
          />
          <TextInputComp name="Last Name" placeHolder="Enter your Last Name" />
          <TextInputComp
            name="Email"
            placeHolder="Enter your Email Name"
            onChangeText={text => handleCheckEmail(text)}
          />
          {checkValidEmail ? (
            <Text style={{color: 'red'}}>Wrong Formate email</Text>
          ) : (
            <Text> </Text>
          )}
          <TextInputComp name="Password" placeHolder="Enter your Password" />
          <TextInputComp name="Address" placeHolder="Enter your Address" />
          <TextInputComp name="Zip Code" placeHolder="Enter your Zip Code" />
          <TextInputComp
            name="Mobile Number"
            placeHolder="Enter your Mobile Number"
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={COLORS.button}>
            <Text>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={COLORS.change}>Already account? Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegistrationScreen;
