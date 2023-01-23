import {View, Text, TextInput} from 'react-native';
import React from 'react';
import COLORS from './colors';

const TextInputComp = ({name, placeHolder, value, onChangeText}) => {
  return (
    <View>
      <Text style={COLORS.TextColor}>{name}</Text>
      <TextInput
        placeholder={placeHolder}
        value={value}
        style={COLORS.TextColor1}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default TextInputComp;
