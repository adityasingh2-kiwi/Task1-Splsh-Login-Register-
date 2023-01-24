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
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Address, setAddress] = useState('');
  const [ZipCode, setZipCode] = useState('');
  const [MobileNumber, setMobileNumber] = useState('');
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

  const Login1 = () => {
    if (
      email !== '' &&
      password !== '' &&
      FirstName !== '' &&
      LastName !== '' &&
      Address !== '' &&
      ZipCode !== '' &&
      MobileNumber !== ''
    ) {
      navigation.navigate('Home', {
        email: email,
        password: password,
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
            value={FirstName}
            onChangeText={e => setFirstName()}
          />
          <TextInputComp
            name="Last Name"
            placeHolder="Enter your Last Name"
            value={LastName}
            onChangeText={e => setLastName()}
          />
          <TextInputComp
            name="Email"
            value={email}
            placeHolder="Enter your Email Name"
            onChangeText={text => handleCheckEmail(text)}
            // value={password}
          />
          {checkValidEmail ? (
            <Text style={{color: 'red'}}>Wrong Formate email</Text>
          ) : (
            <Text> </Text>
          )}
          <TextInputComp
            value={password}
            name="Password"
            placeHolder="Enter your Password"
            onChangeText={e => setPassword()}
          />
          <TextInputComp
            name="Address"
            placeHolder="Enter your Address"
            value={Address}
            onChangeText={e => setAddress()}
          />
          <TextInputComp
            name="Zip Code"
            placeHolder="Enter your Zip Code"
            value={ZipCode}
            onChangeText={e => setZipCode()}
          />
          <TextInputComp
            name="Mobile Number"
            placeHolder="Enter your Mobile Number"
            value={MobileNumber}
            onChangeText={e => setMobileNumber()}
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
