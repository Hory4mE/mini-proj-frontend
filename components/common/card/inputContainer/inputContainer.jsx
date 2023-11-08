import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import { COLORS, FONT, icons } from '../../../../constants';
import { color } from 'react-native-reanimated';

const InputContainer = ({ name,required,placeholder,onValueChange }) => {
  const [inputValue, setInputValue] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);

  const handleInputChange = (text) => {
    setInputValue(text);
    // if(required){
      setIsNameValid(text.trim() != "");
    // }
  };
  
  return (
    <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.start}> *</Text>
        </View>
        <View style={styles.inputContainer(isNameValid)}>
          <TextInput
              style={styles.inputText}
              value={inputValue}
              onChangeText={handleInputChange}
              placeholder={placeholder}
              placeholderTextColor={COLORS.gray}
          />
        </View>
        {!isNameValid && <Text style={styles.errorText}>กรุณากรอก{name}</Text>}

    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    marginBottom:18
  },
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
  inputContainer: (noText) => ({
    width: "100%",
    borderWidth: 1,
    borderColor: noText ? COLORS.gray : 'red',
    borderRadius: 10,
    padding: 8,
  }),
  errorText: {
    color: 'red',
    fontFamily:FONT.regular,
    fontSize: 12,

  },
});

export default InputContainer;
