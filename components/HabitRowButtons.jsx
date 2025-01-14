import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Button from './Button';
import colors from '../model/colors';

const HabitRowButtons = ({ onComplete, onDelete, showCompleteButton }) => {
  return (
    <>
      {showCompleteButton && <Button title='Complete' onPress={onComplete} style={styles.completeButton} backgroundColor={colors.highlight}/>}
      <Button title='Delete' onPress={onDelete} style={styles.deleteButton} backgroundColor={colors.red}/>
    </>
  );
};

const styles = StyleSheet.create({
  completeButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
  },
  deleteButton: {
    backgroundColor: '#FF5252',
    padding: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default HabitRowButtons; 