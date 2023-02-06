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

const RegistrationScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkValidPassword, setCheckValidPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [checkValidFirstName, setCheckValidFirstName] = useState(false);
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [checkValidMobileNo, setCheckValidMobileNo] = useState(false);
  const [checkValidEmail, setCheckValidEmail] = useState(false);

  const handleMobileNumber = text => {
    let re = /^[0]?[789]\d{9}$/;
    setMobileNumber(text);
    if (re.test(text)) {
      setCheckValidMobileNo(false);
    } else {
      setCheckValidMobileNo(true);
    }
  };

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
      confirmPassword !== '' &&
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
      if (password !== confirmPassword) {
        console.log(password);
        console.log(confirmPassword);
        Alert.alert('Password Not Matched');
      } else {
        navigation.navigate('Bottom');
        dispatch(getUser(data));
      }
    } else {
      Alert.alert('Please enter all details');
    }
  };
  return (
    <SafeAreaView style={[COLORS.color1, COLORS.register1]}>
      <ScrollView contentContainerStyle={COLORS.RegisterHeading}>
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
          {checkValidFirstName && (
            <Text style={COLORS.PasswordValidation}>
              Name Must contain characters
            </Text>
          )}
          <TextInputComp
            name="Last Name"
            placeHolder="Enter your Last Name"
            value={lastName}
            onChangeText={e => setLastName(e)}
          />
          {checkValidFirstName && (
            <Text style={COLORS.PasswordValidation}>
              Name Must contain characters
            </Text>
          )}
          <TextInputComp
            name="Email"
            value={email}
            placeHolder="Enter your Email Name"
            onChangeText={text => handleCheckEmail(text)}
          />
          {/* {checkValidEmail && <Text style={{color: 'red'}}>Wrong Formate email</Text>} */}
          {checkValidEmail && (
            <Text style={COLORS.PasswordValidation}>Wrong Formate email</Text>
          )}
          <TextInputComp
            secureTextEntry={true}
            value={password}
            name="Password"
            placeHolder="Enter your Password"
            onChangeText={e => handleCheckPassword(e)}
          />
          {checkValidPassword && (
            <Text style={COLORS.PasswordValidation}>
              Password must contain(Capital Letter,Small Letter, Number,special
              Character)
            </Text>
          )}
          <TextInputComp
            secureTextEntry={true}
            value={confirmPassword}
            name="ConfirmPassword"
            placeHolder="Enter your Password"
            onChangeText={e => setConfirmPassword(e)}
          />
          <TextInputComp
            name="Mobile Number"
            placeHolder="Mobile Number"
            value={mobileNumber}
            onChangeText={text => handleMobileNumber(text)}
          />
          {checkValidMobileNo && (
            <Text style={COLORS.PasswordValidation}>Incorrect Formate</Text>
          )}
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
