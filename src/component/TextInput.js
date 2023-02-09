import {View, Text, TextInput} from 'react-native';
import React from 'react';
import COLORS from './colors';

const TextInputComp = ({
  name,
  placeHolder,
  value,
  onChangeText,
  secureTextEntry,
  editable,
  error,
}) => {
  return (
    <View>
      <Text style={COLORS.TextColor}>{name}</Text>
      <TextInput
        editable={editable}
        placeholder={placeHolder}
        value={value}
        style={COLORS.TextColor1}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
      {error && <Text style={{color: 'red', fontSize: 15}}>{error}</Text>}
    </View>
  );
};

export default TextInputComp;
