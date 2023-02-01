import {View, Text, TouchableOpacity, Alert, Image} from 'react-native';
import React, {useState} from 'react';
import TextInputComp from '../../component/TextInput';
import COLORS from '../../component/colors';
import {useNavigation} from '@react-navigation/native';
import {askCameraPermission} from '../../utils/askCameraPermission';
import openCamera from '../../utils/openCamera';

const EditUser = () => {
  const navigation = useNavigation();
  const [picture, setPictures] = useState('');
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
  // const [Name, setFirstName] = useState('');
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Image
        style={{
          backgroundColor: 'blue',
          marginTop: 40,
          borderRadius: 90,
          height: 150,
          width: 150,
          marginLeft: 120,
        }}
        source={{
          uri:
            picture === undefined
              ? '/Users/kiwitech/Desktop/Kiwitech/AwesomeProject/src/assets/Image/img1.jpeg'
              : picture,
        }}
      />
      <TouchableOpacity
        style={{
          backgroundColor: 'yellow',
          width: 180,
          marginTop: 25,
          borderRadius: 30,
          marginLeft: 110,
        }}
        onPress={() => UploadImage()}>
        <Text style={{fontSize: 20, textAlign: 'center'}}>Upload Image</Text>
      </TouchableOpacity>
      <TextInputComp name="Name" placeHolder="Enter your Name" />
      <TextInputComp name="Email" placeHolder="Enter your Email" />
      <TextInputComp name="Password" placeHolder="Enter your Password" />
      <TouchableOpacity onPress={navigation.navigate('')} style={COLORS.button}>
        <Text>Update</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditUser;
