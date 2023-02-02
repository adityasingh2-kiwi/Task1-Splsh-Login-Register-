import {View, Text, TouchableOpacity, Alert, Image} from 'react-native';
import React, {useState} from 'react';
import TextInputComp from '../../component/TextInput';
import COLORS from '../../component/colors';
import {useNavigation} from '@react-navigation/native';
import {askCameraPermission} from '../../utils/askCameraPermission';
import openCamera from '../../utils/openCamera';
import {useDispatch} from 'react-redux';
import {updateUser} from '../../redux/action/GetUser';

const EditUser = ({route}) => {
  const {item} = route?.params;
  // console.log(item, 'itemitem');
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const [picture, setPictures] = useState(item?.image);
  const [name, setName] = useState(item?.name);
  const [email, setEmail] = useState(item?.email);
  const [age, setAge] = useState(item?.age);
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
    console.log('preesd');
    const data = {
      id: item?.id,
      name: name,
      image: picture,
      email: email,
      age: age,
    };
    console.log(data, 'paylSoad');
    navigation.navigate('UserDetail');
    dispatch(updateUser(data));
    // console.log(data, 'payload');
    // nav fun
  };
  // const [Name, setFirstName] = useState('');
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{fontSize: 20, textAlign: 'center'}}>Edit User</Text>
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
          uri: item?.image ? item?.image : picture,
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
      <TouchableOpacity onPress={() => OnUpdate()} style={COLORS.button}>
        <Text>Update</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditUser;
