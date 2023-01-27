import {View, Text, TouchableOpacity, Alert, Image} from 'react-native';
import React, {useState} from 'react';
import {askCameraPermission} from '../../utils/askCameraPermission';
import openCamera from '../../utils/openCamera';
import {TextInput} from 'react-native-gesture-handler';

const Profile = () => {
  const [picture, setPictures] = useState();
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
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Image
        style={{
          backgroundColor: 'blue',
          marginTop: 40,
          borderRadius: 90,
          height: 150,
          width: 150,
        }}
        source={{
          uri:
            picture === undefined
              ? 'https://images.unsplash.com/photo-1474314170901-f351b68f544f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
              : picture,
        }}
      />
      <TouchableOpacity
        style={{
          backgroundColor: 'pink',
          marginTop: 25,
          borderRadius: 30,
        }}
        onPress={() => UploadImage()}>
        <Text style={{fontSize: 20}}>Upload Image</Text>
      </TouchableOpacity>
      <View style={{marginTop: 20}}>
        <Text
          style={{
            marginRight: 20,
            fontSize: 20,
          }}>
          Name:
        </Text>
        <TextInput
          placeholder="enter the name"
          style={{
            fontSize: 20,
            borderColor: 'black',
            borderWidth: 1,
            width: 200,
            textAlign: 'center',
            marginTop: 10,
          }}
        />
        <Text
          style={{
            marginTop: 10,
            marginRight: 20,
            fontSize: 20,
          }}>
          Email:
        </Text>
        <TextInput
          placeholder="enter the Email"
          style={{
            fontSize: 20,
            borderColor: 'black',
            borderWidth: 1,
            width: 200,
            textAlign: 'center',
            marginTop: 10,
          }}
        />
        <Text
          style={{
            marginTop: 10,
            marginRight: 20,
            fontSize: 20,
          }}>
          Password:
        </Text>
        <TextInput
          placeholder="enter the password"
          style={{
            fontSize: 20,
            borderColor: 'black',
            borderWidth: 1,
            width: 200,
            textAlign: 'center',
            marginTop: 10,
          }}
        />
        <TouchableOpacity>
          <Text
            style={{marginTop: 30, marginLeft: 20, backgroundColor: 'yellow',width:70, textAlign:'center', fontSize:20}}>
            Submit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{marginLeft: 100, marginTop:-24, marginLeft: 120,backgroundColor: 'yellow',width:70, textAlign:'center',fontSize:20}}>
            Clear
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
