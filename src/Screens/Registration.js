import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import COLORS from '../component/colors';
import TextInputComp from '../component/TextInput';
import {getUser} from '../redux/action/GetUser';
import * as yup from 'yup';
import {Formik} from 'formik';
import Login from './Login';

const RegistrationValidationSchema = yup.object().shape({
  FirstName: yup
    .string()
    .min(3, ({min}) => `Name must be ${min} characters`)
    .required('Name is required')
    .matches(/^[a-zA-Z ]{2,40}$/, 'must be characters'),
  LastName: yup
    .string()
    .min(3, ({min}) => `Name must be ${min} characters`)
    .required('Name is required')
    .matches(/^[a-zA-Z ]{2,40}$/, 'must be characters'),
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
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
  mobileNumber: yup
    .string()
    .min(10, ({min}) => `Mobile No. Must be ${min} characters`)
    .required('MobileNo. is required')
    .matches(/^[0]?[789]\d{9}$/, 'Wrong Formate Email'),
});

const Registration = ({navigation}) => {
  const dispatch = useDispatch();

  const userInfo = {
    FirstName: '',
    LastName: '',
    Email: '',
    password: '',
    confirmPassword: '',
    mobileNumber: '',
  };

  const Login1 = values => {
    const data = {
      FirstName: values?.FirstName,
      LastName: values?.LastName,
      Email: values?.Email,
      password: values?.password,
      confirmPassword: values?.confirmPassword,
      mobileNumber: values?.mobileNumber,
    };
    navigation.navigate('Bottom');
    dispatch(getUser(data));
  };
  return (
    <SafeAreaView style={[COLORS.color1, COLORS.register1]}>
      <Formik
        initialValues={userInfo}
        validateOnMount={true}
        onSubmit={values => Login1(values)}
        validationSchema={RegistrationValidationSchema}>
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
          <ScrollView contentContainerStyle={COLORS.RegisterHeading}>
            <Text style={[COLORS.color1, COLORS.register1]}>Register</Text>
            <Text style={[COLORS.color1, COLORS.register2]}>
              Enter your details for Register
            </Text>
            <View style={COLORS.content1}>
              <TextInputComp
                name="FirstName"
                value={values.FirstName}
                placeHolder="Enter your FirstName "
                onChangeText={handleChange('FirstName')}
                error={errors.FirstName}
                editable={true}
              />

              <TextInputComp
                name="LastName"
                value={values.LastName}
                placeHolder="Enter your LastName"
                onChangeText={handleChange('LastName')}
                error={errors.LastName}
                editable={true}
              />

              <TextInputComp
                name="Email"
                value={values.email}
                placeHolder="Enter your Email Name"
                onChangeText={handleChange('email')}
                error={errors.email}
                editable={true}
              />
              {/* {checkValidEmail && <Text style={{color: 'red'}}>Wrong Formate email</Text>} */}

              <TextInputComp
                name="password"
                value={values.password}
                placeHolder="Enter your password"
                onChangeText={handleChange('password')}
                error={errors.password}
                editable={true}
              />

              <TextInputComp
                name="confirmPassword"
                value={values.confirmPassword}
                placeHolder="Enter your confirmPassword "
                onChangeText={handleChange('confirmPassword')}
                error={errors.confirmPassword}
                editable={true}
              />
              <TextInputComp
                name="mobileNumber"
                value={values.mobileNumber}
                placeHolder="Enter your mobileNumber"
                onChangeText={handleChange('mobileNumber')}
                error={errors.mobileNumber}
                editable={true}
                keyboardType="numeric"
              />
              <TouchableOpacity
                onPress={handleSubmit}
                style={COLORS.button}
                disabled={!isValid}>
                <Text>Submit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate(Login)}>
                <Text style={COLORS.change}>Already account? Login</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Registration;
