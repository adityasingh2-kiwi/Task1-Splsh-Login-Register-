import {View, Text, TouchableOpacity, Alert, Image} from 'react-native';
import React, {useState} from 'react';
import TextInputComp from '../../component/TextInput';
import COLORS from '../../component/colors';
import {useNavigation} from '@react-navigation/native';
import {askCameraPermission} from '../../utils/askCameraPermission';
import openCamera from '../../utils/openCamera';
import {useDispatch} from 'react-redux';
import {addUser, updateUser} from '../../redux/action/GetUser';

const EditUser = ({route}) => {
  const {item} = route?.params;
  const {Add} = route?.params;

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [picture, setPictures] = useState(
    Add === true
      ? 'data:image/jpeg;base64,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'
      : item?.image,
  );
  const [name, setName] = useState(Add === true ? '' : item?.name);
  const [email, setEmail] = useState(Add === true ? '' : item?.email);
  const [age, setAge] = useState(Add === true ? '' : item?.age);
  const cb = image => {
    setPictures(image.path);
  };
  console.log(picture, 'image.path');
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
  const OnUpdate = () => {
    let generateRandomNum = () => Math.floor(Math.random() * 1001);
    const data = {
      id: Add === true ? generateRandomNum().toString() : item?.id,
      name: name,
      image: picture,
      email: email,
      age: age,
    };
    Add === true ? dispatch(addUser(data)) : dispatch(updateUser(data));
    navigation.navigate('UserDetail');
  };

  return (
    <View style={COLORS.AddUser}>
      <Text style={COLORS.AddUser1}>{Add ? 'Add User' : 'Edit User'}</Text>
      <Image
        style={COLORS.ImagePickerEditUser1}
        source={{
          uri: picture,
        }}
      />
      <TouchableOpacity
        style={COLORS.EditUploadImage}
        onPress={() => UploadImage()}>
        <Text style={COLORS.UploadImage1}>Upload Image</Text>
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
        value={age !== undefined && age.toString()}
        onChangeText={e => setAge(e)}
      />
      <TouchableOpacity onPress={() => OnUpdate()} style={COLORS.button}>
        <Text>{Add ? 'AddUser' : 'EditUser'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditUser;
