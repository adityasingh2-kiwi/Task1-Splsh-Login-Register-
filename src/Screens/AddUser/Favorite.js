import {View, Text} from 'react-native';
import React from 'react';
import UserDetail from '../../UserData/UserDetail';

const Favorite = () => {
  return (
    <View style={{backgroundColor: 'yellow', flex: 1}}>
      {/* <Text
        style={{
          textAlign: 'center',
          marginTop: 100,
          fontWeight: 'bold',
          fontSize: 50,
        }}>
        favorite
      </Text> */}
      <UserDetail />
    </View>
  );
};

export default Favorite;
