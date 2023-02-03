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
          <Text style={COLORS.SwipeEdit}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{}} onPress={() => OnDelete(item)}>
          <Text style={COLORS.SwipeDelete}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const renderItemList = item => {
    return (
      <Swipeable
        renderRightActions={() => RightSwipe(item)}
        containerStyle={COLORS.Swipe1}>
        <TouchableOpacity style={COLORS.Touchable1}>
          <Image style={COLORS.ImageDetailImage} source={{uri: item?.image}} />
          <Text style={COLORS.ItemName}>{item?.name}</Text>
        </TouchableOpacity>
      </Swipeable>
    );
  };
  return (
    <View style={{flex: 1}}>
      <View style={COLORS.UserDetailsScreen1}>
        <Text style={COLORS.UserDetailsScreen}>UserDetails</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AddUser')}>
          <Image
            source={{
              uri: '/Users/kiwitech/Desktop/Kiwitech/AwesomeProject/src/assets/Image/add.png',
            }}
            style={COLORS.AddIcon}
          />
          {/* onPress={navigation.navigate('AddUser')} */}
        </TouchableOpacity>
      </View>
      <FlatList data={allUser} renderItem={({item}) => renderItemList(item)} />
    </View>
  );
};

export default UserDetail;
