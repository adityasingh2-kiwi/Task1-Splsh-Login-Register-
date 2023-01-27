import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import COLORS from '../component/colors';
import {useDispatch} from 'react-redux';
import {getUser} from '../redux/action/GetUser';
import {useSelector} from 'react-redux';
const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // const {user} = useSelector(state => state?.getUserReducer);
  // console.log(user,'useruser');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    console.log(email, password, 'creds');
    if (email !== '' && password !== '') {
      // const payload = {
      //   email: email,
      //   password: password,
      // };
      // navigation.navigate('Bottom', {
      //   screen: 'Home',
      //   params: {
      // email: email,
      // password: password,
      //   },
      // });
      // dispatch(getUser(payload));
    } else {
      Alert.alert('Please enter all details');
    }
  };

  return (
    <SafeAreaView style={COLORS.login1}>
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
            value={password}
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
