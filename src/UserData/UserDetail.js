import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Swipeable} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const data1 = [
  {
    id: 1,
    image: require('../assets/Image/img2.jpeg'),
    name: 'Aditya',
    age: 20,
  },
  {
    id: 3,
    image: require('../assets/Image/img1.jpeg'),
    name: 'Surya',
    age: 24,
  },
];
const UserDetail = () => {
  const navigation = useNavigation();
  const OnEdit = () => {
    navigation.navigate('EditUser');
  };
  const OnDelete = () => {
    // navigation.navigate('EditUser');
    console.log('Delete');
  };
  const RightSwipe = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          flex: 0.3,
        }}>
        <TouchableOpacity
          style={{
            borderWidth: 1,
          }}
          onPress={OnEdit}>
          <Text style={{fontSize: 20}}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{}} onPress={OnDelete}>
          <Text style={{marginRight: 10, fontSize: 20, backgroundColor: 'red'}}>
            Delete
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  const renderItemList = item => {
    return (
      // <View><Text>jaskdjk</Text></View>
      <Swipeable
        renderRightActions={() => RightSwipe()}
        containerStyle={{
          paddingVertical: 10,
          paddingHorizontal: 20,
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <Image
            style={{height: 40, width: 40, borderRadius: 80}}
            source={item.image}
          />
          <Text style={{fontSize: 18, marginLeft: 20}}>{item.name}</Text>
        </TouchableOpacity>
      </Swipeable>
    );
  };
  return (
    <View style={{flex: 1}}>
      <View style={{marginTop: 70}}>
        <Text style={{fontSize: 25, textAlign: 'center', paddingBottom: 20}}>
          UserDetails
        </Text>
        <TouchableOpacity>
          <Image
            source={{
              uri: '/Users/kiwitech/Desktop/Kiwitech/AwesomeProject/src/assets/Image/add.png',
            }}
            style={{
              width: 40,
              height: 40,
              // flexDirection:'row'
              marginLeft: 320,
            }}
          />
        </TouchableOpacity>
      </View>
      <FlatList data={data1} renderItem={({item}) => renderItemList(item)} />
    </View>
  );
};

export default UserDetail;
