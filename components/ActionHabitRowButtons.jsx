import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import colors from '../model/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';


const HabitRowButtons = ({ onDelete }) => {
  return (
    <>
    <Pressable onPress={onDelete} style={[styles.button, styles.deleteButton]}>
      <Ionicons name="trash-bin" size={24} color={colors.white} />
    </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  deleteButton: {
    backgroundColor: colors.red,
    justifyContent: 'center',   // Center the content
    alignItems: 'center'      // Center the icon
  },
  button: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default HabitRowButtons; 