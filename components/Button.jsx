import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../model/colors';

const Button = ({ onPress, title, backgroundColor}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.addButton, {backgroundColor: backgroundColor}]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  }, 
  addButton: {
    marginLeft: 1,
    minWidth: 80,  // Make button smaller
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
});

export default Button;