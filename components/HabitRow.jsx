import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import colors from '../model/colors';
import { useState } from 'react';
import ActionHabitRowButtons from './ActionHabitRowButtons';
import HabitRowButtons from './HabitRowButtons';

const HabitRow = ({ habit, setHabits }) => {

  const [showActionButtons, setShowActionButtons] = useState(false);
  const [showCompleteButton, setShowCompleteButton] = useState(true);

  const handleShowCompleteButton = () => {
      setShowCompleteButton(prev => !prev);
  };

  const handleShowActionButtons = () => {
    setShowActionButtons(prev => !prev);
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
      <Pressable onPress={handleShowActionButtons} 
        style={({ pressed }) => [
          styles.habitRow,
          pressed && styles.pressed
        ]}
        android_ripple={styles.pressed}
      >
        <Text style={styles.habitName}>{habit.name}</Text>
        {showActionButtons && (
          <ActionHabitRowButtons 
            onComplete={handleComplete}
            onDelete={handleDelete}
            showCompleteButton={showCompleteButton}
          />
        )}
        {!showActionButtons && (
          <HabitRowButtons habit={habit}/>
        )}
      </Pressable>
    </View>
  );
};

export default HabitRow;

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  habitRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 2,
    elevation: 2,
    height: '100%',
  },
  habitName: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
    width: '40%',
    paddingLeft: 5,
  },
  pressed: {
    opacity: 0.5,
  },
});
