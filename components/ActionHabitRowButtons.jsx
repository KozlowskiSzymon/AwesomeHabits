import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import Button from './Button';
import colors from '../model/colors';

const HabitRowButtons = ({ onDelete }) => {
  return (
    <>
      {/* <Pressable style={[styles.button, styles.editButton]} backgroundColor={colors.red}/> */}
      <Pressable onPress={onDelete} style={[styles.button, styles.deleteButton]} backgroundColor={colors.red}/>
    </>
  );
};

const styles = StyleSheet.create({
  completeButton: {
    backgroundColor: '#4CAF50',
  },
  deleteButton: {
    backgroundColor: '#FF5252',
  },
  editButton: {
    backgroundColor: '#cccccc',
  },
  button: {
    flex: 1,
    padding: 10,
    height: '100%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default HabitRowButtons; 