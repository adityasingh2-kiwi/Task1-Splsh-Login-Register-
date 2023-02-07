import {View, Text, TouchableOpacity, Alert, Image} from 'react-native';
import React, {useCallback, useState} from 'react';
import TextInputComp from '../../component/TextInput';
import COLORS from '../../component/colors';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {askCameraPermission} from '../../utils/askCameraPermission';
import openCamera from '../../utils/openCamera';
import {useDispatch} from 'react-redux';
import {addUser} from '../../redux/action/GetUser';

const AddUser = () => {
  useFocusEffect(
    useCallback(() => {
      setName('');
      setEmail('');
      setAge('');
    }, []),
  );
  const navigation = useNavigation();
  const [picture, setPictures] = useState(
    'https://images.unsplash.com/photo-1474314170901-f351b68f544f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
  );
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const dispatch = useDispatch();

  const cb = image => {
    setPictures(image.path);
  };

  const UploadImage = async () => {
    console.log('openCamera');
    await askCameraPermission();
    openCameraOption();
  };
  const openCameraOption = () => {
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Camera',
        onPress: () => openCamera(0, cb),
        style: 'cancel',
      },
      {text: 'Gallery', onPress: () => openCamera(1, cb)},
    ]);
  };
  // const [Name, setFirstName] = useState('');
  const onSubmit = async () => {
    let generateRandomNum = () => Math.floor(Math.random() * 1001);
    const data = {
      id: generateRandomNum().toString(),
      name: name,
      image: picture,
      email: email,
      age: age,
    };
    console.log(picture, 'picture');
    await dispatch(addUser(data));
    navigation.navigate('UserDetail');
  };
  return (
    <View style={COLORS.AddUser}>
      <Text style={COLORS.AddUser1}>Add User</Text>
      <Image
        style={COLORS.ImagePicker}
        source={{
          uri: picture,
        }}
      />
      <TouchableOpacity
        style={COLORS.UserDetailMain}
        onPress={() => UploadImage()}>
        <Text style={COLORS.UploadUser}>Upload Image</Text>
      </TouchableOpacity>
      <TextInputComp
        name="Name"
        placeHolder="Enter your Name"
        value={name}
        onChangeText={e => setName(e)}
      />
      <TextInputComp
        name="Email"
        placeHolder="Enter your Email"
        value={email}
        onChangeText={e => setEmail(e)}
      />
      <TextInputComp
        name="Age"
        placeHolder="Enter your Age"
        value={age.toString()}
        onChangeText={e => setAge(e)}
      />
      <TouchableOpacity onPress={() => onSubmit()} style={COLORS.button}>
        <Text>Add user</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddUser;
