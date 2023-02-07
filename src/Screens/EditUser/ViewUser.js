import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import TextInputComp from '../../component/TextInput';
import COLORS from '../../component/colors';
import {useNavigation} from '@react-navigation/native';
const ViewUser = ({route}) => {
  const {item} = route?.params;
  console.log(item, '@£item');
  const navigation = useNavigation();

  const OnUpdate = () => {
    navigation.navigate('UserDetail');
  };
  return (
    <View style={COLORS.AddUser}>
      <Text style={COLORS.AddUser1}>View User</Text>
      <Image
        style={COLORS.ImagePickerEditUser}
        source={{
          uri: item?.image,
        }}
      />
      <TextInputComp
        name="Name"
        placeHolder="Enter your Name"
        value={item?.name}
      />
      <TextInputComp
        name="Email"
        placeHolder="Enter your Email"
        value={item?.email}
      />
      <TextInputComp
        name="Age"
        placeHolder="Enter your Age"
        value={item?.age.toString()}
      />
      <TouchableOpacity onPress={() => OnUpdate()} style={COLORS.button}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ViewUser;
