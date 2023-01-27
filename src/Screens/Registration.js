import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import COLORS from '../component/colors';
import TextInputComp from '../component/TextInput';

const RegistrationScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  console.log(setFirstName, 'setFirstNamesetFirstName');
  const handleCheckEmail = text => {
    let re = /\S+@\S+\.\S+/;
    setEmail(text);
    if (re.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };
  const Login1 = () => {
    if (
      email !== '' &&
      password !== '' &&
      firstName !== '' &&
      lastName !== '' &&
      mobileNumber !== ''
    ) {
      navigation.navigate('Bottom', {
        screen: 'Home',
        params: {
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName,
          mobileNumber: mobileNumber,
        },
      });
    } else {
      Alert.alert('Please enter all details');
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
            value={firstName}
            onChangeText={a => setFirstName(a)}
          />
          <TextInputComp
            name="Last Name"
            placeHolder="Enter your Last Name"
            value={lastName}
            onChangeText={e => setLastName(e)}
          />
          <TextInputComp
            name="Email"
            value={email}
            placeHolder="Enter your Email Name"
            onChangeText={text => handleCheckEmail(text)}
          />
          {/* {checkValidEmail && <Text style={{color: 'red'}}>Wrong Formate email</Text>} */}
          {checkValidEmail ? (
            <Text style={{color: 'red'}}>Wrong Formate email</Text>
          ) : (
            <Text> </Text>
          )}
          <TextInputComp
            value={password}
            name="Password"
            placeHolder="Enter your Password"
            onChangeText={e => setPassword(e)}
          />
          <TextInputComp
            value={confirmPassword}
            name="ConfirmPassword"
            placeHolder="Enter your Password"
            onChangeText={e => setConfirmPassword()}
          />
          <TextInputComp
            name="Mobile Number"
            placeHolder="Enter your Mobile Number"
            value={mobileNumber}
            onChangeText={e => setMobileNumber(e)}
          />
          <TouchableOpacity onPress={Login1} style={COLORS.button}>
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
