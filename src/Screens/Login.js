import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInputComponent,
} from 'react-native';
import COLORS from '../component/colors';
import {useDispatch} from 'react-redux';
import {getUser} from '../redux/action/GetUser';
const image = {
  uri: '/Users/kiwitech/Desktop/Kiwitech/AwesomeProject/src/assets/Image/Ocean.jpeg',
};
import * as yup from 'yup';
import {Formik} from 'formik';
import TextInputComp from '../component/TextInput';

const LoginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('please Enter valid email')
    .required('Email Address is required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password Must be in ${min} characters`)
    .required('password is required')
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
      'must contains upper,lower and special character',
    ),
});

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [checkValidEmail, setCheckValidEmail] = useState(false);
  // const [checkValidPassword, setCheckValidPassword] = useState(false);
  const userInfo = {
    email: '',
    password: '',
  };

  const Login1 = values => {
    const data = {
      email: values?.email,
      password: values?.password,
    };
    navigation.navigate('Bottom');
    dispatch(getUser(data));
  };

  return (
    <>
      <Formik
        initialValues={userInfo}
        validateOnMount={true}
        onSubmit={values => Login1(values)}
        validationSchema={LoginValidationSchema}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,

          isValid,
          /* and other goodies */
        }) => (
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
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                  {errors.email && touched.email && (
                    <Text style={{color: 'red', fontSize: 15}}>
                      {errors.email}
                    </Text>
                  )}
                  {/* <TextInputComponent
                    onChangeText={handleChange('email')}
                    placeHolder="Enter your Email Name"
                    onBlur={handleBlur('email')}
                    value={values.email}
                  /> */}
                  <Text style={COLORS.login3}>Password</Text>
                  <TextInput
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    secureTextEntry
                  />
                  {errors.password && touched.password && (
                    <Text style={{color: 'red', fontSize: 15}}>
                      {errors.password}
                    </Text>
                  )}
                  <TouchableOpacity
                    style={COLORS.button}
                    onPress={handleSubmit}>
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
        )}
      </Formik>
    </>
  );
};

export default Login;
