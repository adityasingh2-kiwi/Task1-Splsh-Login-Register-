import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {askCameraPermission} from '../../utils/askCameraPermission';
import openCamera from '../../utils/openCamera';
// import {TextInput} from 'react-native-gesture-handler';
import TextInputComp from '../../component/TextInput';
import COLORS from '../../component/colors';

const Profile = () => {
  const [picture, setPictures] = useState();

  const {user} = useSelector(state => state?.getUserReducer);

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
    <ScrollView>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Image
          style={COLORS.PImagePicker}
          source={{
            uri:
              picture === undefined
                ? 'https://images.unsplash.com/photo-1474314170901-f351b68f544f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
                : picture,
          }}
        />
        <TouchableOpacity
          style={COLORS.UploadImage}
          onPress={() => UploadImage()}>
          <Text style={{fontSize: 20}}>Upload Image</Text>
        </TouchableOpacity>
        <View style={COLORS.content1}>
          <TextInputComp
            name="First Name"
            placeHolder="Enter your First Name"
            value={user.firstName}
          />
          <TextInputComp
            name="Last Name"
            placeHolder="Enter your Last Name"
            value={user.lastName}
          />
          <TextInputComp
            name="Email"
            value={user.email}
            placeHolder="Enter your Email Name"
          />
          <TextInputComp
            value={user.password}
            name="Password"
            placeHolder="Enter your Password"
          />
          <TextInputComp
            name="Mobile Number"
            placeHolder="Enter your Mobile Number"
            value={user.mobileNumber}
          />
          <TouchableOpacity onPress={''} style={COLORS.button}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
