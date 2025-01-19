import { Pressable, StyleSheet, Text } from 'react-native';
import colors from '../model/colors';
import HabitButton from './HabitButton';

const HabitRowButtons = ({habit}) => {

  const onComplete = () => {
    habit.incrementStrike();
  }

  const onUncomplete = () => {
    habit.decrementStrike();
  }

  return (
    <>
      <HabitButton onComplete={onComplete} onUncomplete={onUncomplete} style={[styles.button]} />
      <HabitButton onComplete={onComplete} onUncomplete={onUncomplete} style={[styles.button]} />
      <HabitButton onComplete={onComplete} onUncomplete={onUncomplete} style={[styles.button]} />
      <Pressable style={[styles.button, styles.strikeButton]}>
        <Text style={styles.strikeText}>{habit.strike}</Text>
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

