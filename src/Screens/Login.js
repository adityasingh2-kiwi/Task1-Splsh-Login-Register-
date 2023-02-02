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
// import {app_icon} from '../assets/Image/1528443245244.jpeg';
// import {useSelector} from 'react-redux';
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
    console.log(email, password, 'creds');
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
    <SafeAreaView style={COLORS.login1}>
      {/* <ImageBackground source={image} resizeMode="cover" /> */}
      <ScrollView contentContainerStyle={COLORS.login2}>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={{flex: 1, justifyContent: 'center'}}>
          <Image
            source={{
              uri: '/Users/kiwitech/Desktop/Kiwitech/AwesomeProject/src/assets/Image/1528443245244.jpeg',
            }}
            style={{width: 80, height: 80, marginLeft: 135}}
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
            {checkValidEmail ? (
              <Text style={{color: 'red', marginLeft: 30, marginTop: 10}}>
                Wrong Formate email
              </Text>
            ) : (
              <Text> </Text>
            )}
            <Text style={COLORS.login3}>Password</Text>
            <TextInput
              style={COLORS.TextColor1}
              placeholder="Enter your Password"
              value={password}
              secureTextEntry
              onChangeText={text => handleCheckPassword(text)}
            />
            {checkValidPassword ? (
              <Text style={{color: 'red', marginLeft: 30, marginTop: 10}}>
                Password must contain(Capital Letter,Small Letter,
                Number,special Character)
              </Text>
            ) : (
              <Text> </Text>
            )}
            <TouchableOpacity style={COLORS.button} onPress={Login1}>
              <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('RegistrationScreen')}>
              <Text style={COLORS.change}>New User? Register</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
