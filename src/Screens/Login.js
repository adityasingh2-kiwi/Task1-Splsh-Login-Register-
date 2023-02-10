import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
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

const Login = ({}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [secureTextEntry, setSecureTextEntry] = useState(true);
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
  const onPressEye = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  const Register = () => {
    console.log('hello');
    navigation.navigate('Registration');
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
                  <TextInputComp
                    name="Email"
                    value={values.email}
                    placeHolder="Enter your Email Name"
                    onChangeText={handleChange('email')}
                    error={errors.email}
                    editable={true}
                  />
                  <TextInputComp
                    name="Password"
                    value={values.password}
                    placeHolder="Enter the password"
                    onChangeText={handleChange('password')}
                    error={errors.password}
                    password={true}
                    secureTextEntry={secureTextEntry}
                    onPressEye={onPressEye}
                  />
                  <TouchableOpacity
                    style={[
                      COLORS.button,
                      {backgroundColor: isValid ? 'blue' : 'gray'},
                    ]}
                    onPress={handleSubmit}
                    disabled={!isValid}>
                    <Text style={COLORS.LoginButton}>Login</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={Register}>
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
