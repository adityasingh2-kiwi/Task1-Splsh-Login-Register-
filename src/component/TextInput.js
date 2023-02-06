import {View, Text, TextInput} from 'react-native';
import React from 'react';
import COLORS from './colors';

const TextInputComp = ({
  name,
  placeHolder,
  value,
  onChangeText,
  secureTextEntry,
}) => {
  return (
    <View>
      <Text style={COLORS.TextColor}>{name}</Text>
      <TextInput
        placeholder={placeHolder}
        value={value}
        style={COLORS.TextColor1}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default TextInputComp;
