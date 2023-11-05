import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { COLORS, FONT, icons } from '../../../../constants';

const CircularCheckbox = ({ checked, label, onPress }) => {
  return (
    <TouchableOpacity style={styles.checkbox} onPress={onPress}>
      {checked ? <Image source={icons.tick} style={styles.checked} resizeMode="contain" />:<View style={styles.nonchecked} /> }
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text:{
    fontFamily: FONT.regular
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checked: {
    width: 15, 
    height: 15,
    marginRight: 5, 
  },
  nonchecked: {
    width: 15, 
    height: 15,
    borderRadius: 10, 
    borderWidth: 1, 
    borderColor: COLORS.gray, 
    marginRight: 5, 
  },
});

export default CircularCheckbox;
