import {View, Text} from 'react-native';
import React from 'react';

const Favorite = () => {
  return (
    <View style={{backgroundColor: 'yellow', flex: 1, }}>
      <Text
        style={{
          textAlign: 'center',
          marginTop: 100,
          fontWeight: 'bold',
          fontSize: 50,
        }}>
        favorite
      </Text>
    </View>
  );
};

export default Favorite;
