import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import COLORS from '../component/colors';

const Login = ({navigation}) => {
  // const [inputBoxValue, setInputBoxValue] = useState('');
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
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
    navigation.navigate('Home', {
      Email: email,
      Password: Password,
    });
  };

  return (
    <SafeAreaView style={COLORS.Login1}>
      <ScrollView contentContainerStyle={COLORS.login2}>
        <Text style={COLORS.register1}>Login</Text>

        <View>
          <Text style={COLORS.login3}>Email-id</Text>
          <TextInput
            placeholder="Enter your Email-id"
            value={email}
            style={COLORS.TextColor1}
            onChangeText={text => handleCheckEmail(text)}
          />
          {checkValidEmail ? (
            <Text style={{color: 'red'}}>Wrong Formate email</Text>
          ) : (
            <Text> </Text>
          )}
          <Text style={COLORS.login3}>Password</Text>
          <TextInput
            placeholder="Enter your Password"
            style={COLORS.TextColor1}
            value={Password}
            secureTextEntry
            onChangeText={text => setPassword(text)}
          />
          <TouchableOpacity style={COLORS.button} onPress={Login1}>
            <Text>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('RegistrationScreen')}>
            <Text style={COLORS.change}>New User? Register</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
