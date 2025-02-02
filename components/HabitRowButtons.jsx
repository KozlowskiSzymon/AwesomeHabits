import { Pressable, StyleSheet, Text } from 'react-native';
import { useState } from 'react';
import colors from '../model/colors';
import HabitButton from './HabitButton';

const HabitRowButtons = ({habit}) => {
  const today = new Date();
  const [overall, setOverall] = useState(habit.overall);
  
  const updateOverall = () => {
    setOverall(habit.overall);
  };

  const formatDate = (date) => {
      return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}`;
  };

  const getDayBefore = (date, days) => {
      const newDate = new Date(date);
      newDate.setDate(date.getDate() - days);
      return newDate;
  };

  const onComplete = (date) => {
    habit.incrementOverall(date);
    updateOverall()
  }

  const onUncomplete = (date) => {
    habit.decrementOverall(date);
    updateOverall()
  }

  return (
    <>
      <HabitButton 
        onComplete={onComplete} 
        onUncomplete={onUncomplete} 
        style={[styles.button]} 
        color={colors.completed} 
        date={formatDate(getDayBefore(today, 2))} 
        state={habit.dates.includes(formatDate(getDayBefore(today, 2)))}/>
      <HabitButton 
        onComplete={onComplete} 
        onUncomplete={onUncomplete} 
        style={[styles.button]} 
        color={colors.completed1} 
        date={formatDate(getDayBefore(today, 1))}
        state={habit.dates.includes(formatDate(getDayBefore(today, 1)))} />
      <HabitButton 
        onComplete={onComplete} 
        onUncomplete={onUncomplete} 
        style={[styles.button]} 
        color={colors.completed2} 
        date={formatDate(today)} 
        state={habit.dates.includes(formatDate(today))}/>
      <Pressable style={[styles.button, styles.strikeButton]}>
        <Text style={styles.strikeText}>{habit.strike  + ' ' + overall}</Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.border,
    minHeight: '100%',
  },
  strikeButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  strikeText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
    width: '40%',
    paddingLeft: 5,
  },
  pressed: {
    backgroundColor: colors.completed,
  }
});

export default HabitRowButtons;

