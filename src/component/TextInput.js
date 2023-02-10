import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import COLORS from './colors';
import {IMAGES} from '../Constant/Images';

const TextInputComp = ({
  name,
  placeHolder,
  value,
  onChangeText,
  secureTextEntry,
  editable,
  keyboardType,
  error,
  password,
  onPressEye,
}) => {
  return (
    <View>
      <Text style={COLORS.TextColor}>{name}</Text>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          editable={editable}
          placeholder={placeHolder}
          value={value}
          style={COLORS.TextColor1}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
        />
        {password && (
          <TouchableOpacity style={{right:40, top:4}} onPress={onPressEye}>
            <Image
              source={
                secureTextEntry === true ? IMAGES.eyeClose : IMAGES.eyeOpen
              }
            />
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <Text
          style={{
            color: 'red',
            fontSize: 15,
            textAlign: 'center',
          }}>
          {error}
        </Text>
      )}
    </View>
  );
};

export default TextInputComp;
