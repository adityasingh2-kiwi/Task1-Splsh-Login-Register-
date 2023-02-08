import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import React from 'react';
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
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={{
          uri: 'data:image/jpeg;base64,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',
        }}
        style={{
          flexDirection: 'row',
          // backgroundColor: 'grey',
          paddingHorizontal: 30,
          flex: 1,
        }}
        resizeMode="cover">
        <Image
          style={COLORS.ViewProfile}
          source={{
            uri: item?.image,
          }}
        />
        <View
          style={{
            borderWidth: 1,
            paddingVertical: 15,
            paddingHorizontal: 15,
            // alignItems: 'center',
            borderRadius: 30,
            marginTop: 30,
            marginBottom: 30,
            height: 150,
            // marginLeft: 10,
            // marginRight:50,
            backgroundColor: 'yellow',
            opacity: 0.7,
          }}>
          <Text style={{fontSize: 15}}>Name :{item?.name}</Text>
          <Text style={{fontSize: 15}}>Email: {item?.email}</Text>
          <Text style={{fontSize: 15}}>Age: {item?.age.toString()}</Text>
          <TouchableOpacity
            onPress={() => OnUpdate()}
            style={{
              backgroundColor: 'green',
              marginTop: 30,
              width: 50,
              height: 30,
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
              Back
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ViewUser;
