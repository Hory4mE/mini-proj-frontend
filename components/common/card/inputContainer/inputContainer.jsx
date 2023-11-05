import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import { COLORS, FONT, icons } from '../../../../constants';
import { color } from 'react-native-reanimated';

const InputContainer = ({ name,requir,placeholder,onValueChange }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (text) => {
    setInputValue(text);
    onValueChange(text);
  };
  
  return (
    <View >
        <View style={styles.textContainer}>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.start}> *</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
              style={styles.inputText}
              value={inputValue}
              onChangeText={handleInputChange}
              placeholder={placeholder}
              placeholderTextColor={COLORS.gray}
          />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer:{
    flexDirection: 'row',
  },
  text:{
    fontFamily: FONT.bold,
    fontSize:12,
    color:COLORS.drakGray
  },
  inputText:{
    fontFamily: FONT.regular,
    fontSize:16,
  },
  start:{
    fontFamily: FONT.bold,
    color: '#ff0000',
  },
  inputContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 10,
    padding: 8,
    marginBottom:18
  },
});

export default InputContainer;
