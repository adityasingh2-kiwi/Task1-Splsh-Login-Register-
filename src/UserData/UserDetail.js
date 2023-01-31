import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import FontAwesome, {SolidIcons} from 'react-native-fontawesome';
import {SwipeButton} from 'react-native-expo-swipe-button';

const data1 = [
  {id: 1, name: 'Aditya', age: 20},
  {id: 2, name: 'Aniket', age: 22},
  {id: 3, name: 'Surya', age: 24},
];

const UserDetail = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={data1}
        renderItem={({item}) => (
          <View>
            <TouchableOpacity>
              <Text style={{marginHorizontal: 15, fontSize: 25, marginTop: 10}}>
                {item.name}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity>
        <FontAwesome icon={SolidIcons.smile} style={{fontSize: 50,textAlign:'right', marginTop:350, marginRight:30}} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default UserDetail;
