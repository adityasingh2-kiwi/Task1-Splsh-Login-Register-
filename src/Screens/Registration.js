import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useDispatch} from 'react-redux';
import COLORS from '../component/colors';
import TextInputComp from '../component/TextInput';
import {getUser} from '../redux/action/GetUser';

// import {useDispatch} from 'react-redux';

const RegistrationScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkValidPassword, setCheckValidPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [checkValidFirstName, setCheckValidFirstName] = useState(false);
  // const [checkValidLastName, setCheckValidLastName] = useState(false);
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  // console.log(setFirstName, 'setFirstNameFirstName');

  const handleFirstName = text => {
    let re = /^[a-zA-Z ]{3,14}$/;
    setFirstName(text);
    if (re.test(text)) {
      setCheckValidFirstName(false);
    } else {
      setCheckValidFirstName(true);
    }
  };

  const handleCheckEmail = text => {
    let re = /\S+@\S+\.\S+/;
    setEmail(text);
    if (re.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };

  const handleCheckPassword = text => {
    let re = /^[a-z+A-Z+0-9+!@#$%^&*]{8,16}$/;
    setPassword(text);
    if (re.test(text)) {
      setCheckValidPassword(false);
    } else {
      setCheckValidPassword(true);
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
      const data = {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        mobileNumber: mobileNumber,
      };
      navigation.navigate('Bottom');
      dispatch(getUser(data));
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
            onChangeText={a => handleFirstName(a)}
          />
          {checkValidFirstName ? (
            <Text style={{color: 'red', textAlign: 'center'}}>
              Name Must contain characters
            </Text>
          ) : (
            <Text> </Text>
          )}
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
            onChangeText={e => handleCheckPassword(e)}
          />
          {checkValidPassword ? (
            <Text style={{color: 'red', marginLeft: 30, marginTop: 10}}>
              Password must contain(Capital Letter,Small Letter, Number,special
              Character)
            </Text>
          ) : (
            <Text> </Text>
          )}
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
