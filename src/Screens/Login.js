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
  Image,
  ImageBackground,
} from 'react-native';
import COLORS from '../component/colors';
import {useDispatch} from 'react-redux';
import {getUser} from '../redux/action/GetUser';
const image = {
  uri: '/Users/kiwitech/Desktop/Kiwitech/AwesomeProject/src/assets/Image/Ocean.jpeg',
};

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [checkValidPassword, setCheckValidPassword] = useState(false);

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
    console.log(email, password, 'crud');
    if (email !== '' && password !== '') {
      const data = {
        email: email,
        password: password,
      };
      navigation.navigate('Bottom');
      dispatch(getUser(data));
    } else {
      Alert.alert('Please enter all details');
    }
  };

  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={COLORS.ImageBackground}>
      <SafeAreaView style={COLORS.login1}>
        <ScrollView contentContainerStyle={COLORS.login2}>
          <Image
            source={{
              uri: '/Users/kiwitech/Desktop/Kiwitech/AwesomeProject/src/assets/Image/1528443245244.jpeg',
            }}
            style={COLORS.LoginImage}
          />
          <Text style={COLORS.register1}>Login</Text>

          <View>
            <Text style={COLORS.login3}>Email-id</Text>
            <TextInput
              placeholder="Enter your Email-id"
              value={email}
              style={COLORS.TextColor1}
              onChangeText={text => handleCheckEmail(text)}
            />
            {checkValidEmail && (
              <Text style={COLORS.PasswordValidation}>Wrong Formate email</Text>
            )}
            <Text style={COLORS.login3}>Password</Text>
            <TextInput
              style={COLORS.TextColor1}
              placeholder="Enter your Password"
              value={password}
              secureTextEntry
              onChangeText={text => handleCheckPassword(text)}
            />
            {checkValidPassword && (
              <Text style={COLORS.PasswordValidation}>
                Password must contain(Capital Letter,Small Letter,
                Number,special Character)
              </Text>
            )}
            <TouchableOpacity style={COLORS.button} onPress={Login1}>
              <Text style={COLORS.LoginButton}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('RegistrationScreen')}>
              <Text style={COLORS.change}>New User? Register</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Login;
