import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../model/colors';
import Habit from '../model/Habit';
import { useState } from 'react';
import HabitRowButtons from './HabitRowButtons';

const HabitRow = ({ habit, setHabits }) => {

  const [showButtons, setShowButtons] = useState(false);
  const [showCompleteButton, setShowCompleteButton] = useState(true);

  const handleShowCompleteButton = () => {
      setShowCompleteButton(prev => !prev);
  };

  const handleShowButtons = () => {
    setShowButtons(prev => !prev);
  };

  const handleComplete = () => {
    habit.complete();
    handleShowCompleteButton();
  }

  const handleDelete = () => {
    setHabits(currentHabits => 
      currentHabits.filter(h => h.id !== habit.id)
    );
  }

  return (
    <View style={styles.rowContainer}>
      <TouchableOpacity onPress={handleShowButtons} style={[styles.habitRow, {backgroundColor: habit.completed ? colors.completed : colors.background}]}>
        <Text style={styles.habitName}>{habit.name}</Text>
        {showButtons && (
          <HabitRowButtons 
            onComplete={handleComplete}
            onDelete={handleDelete}
            showCompleteButton={showCompleteButton}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default HabitRow;

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  habitRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 2,
    elevation: 2
  },
  habitName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    flex: 1,
    marginRight: 50,
  },
});
