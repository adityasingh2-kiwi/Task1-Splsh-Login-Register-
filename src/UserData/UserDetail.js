import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Swipeable} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import COLORS from '../component/colors';
import {useDispatch, useSelector} from 'react-redux';
import {deleteUser} from '../redux/action/GetUser';

const UserDetail = () => {
  const {allUser} = useSelector(state => state?.crudReducer);
  console.log(allUser, 'All Users');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const OnEdit = item => {
    navigation.navigate('EditUser', {item});
  };

  const OnDelete = item => {
    console.log('Delete');
    const payload = {
      id: item.id,
    };
    dispatch(deleteUser(payload));
    console.log('Delete');
  };
  const RightSwipe = item => {
    return (
      <View style={COLORS.UserDetail}>
        <TouchableOpacity style={COLORS.onEdit} onPress={() => OnEdit(item)}>
          <Text style={{fontSize: 20, backgroundColor: 'green'}}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{}} onPress={() => OnDelete(item)}>
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
        renderRightActions={() => RightSwipe(item)}
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
            source={{uri: item?.image}}
          />
          <Text style={{fontSize: 18, marginLeft: 20}}>{item?.name}</Text>
        </TouchableOpacity>
      </Swipeable>
    );
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          marginTop: 40,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          flex: 0.1,
          paddingHorizontal: 40,
        }}>
        <Text
          style={{
            fontSize: 25,
            textAlign: 'center',
          }}>
          UserDetails
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('AddUser')}>
          <Image
            source={{
              uri: '/Users/kiwitech/Desktop/Kiwitech/AwesomeProject/src/assets/Image/add.png',
            }}
            style={{
              width: 20,
              height: 20,
            }}
          />
          {/* onPress={navigation.navigate('AddUser')} */}
        </TouchableOpacity>
      </View>
      <FlatList data={allUser} renderItem={({item}) => renderItemList(item)} />
    </View>
  );
};

export default UserDetail;
