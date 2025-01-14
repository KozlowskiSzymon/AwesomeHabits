import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';
import { useState } from 'react';
import { TextInput } from 'react-native';
import colors from './model/colors';
import Habit from './model/Habit';
import HabitRow from './components/HabitRow';
export default function App() {

  const [habits, setHabits] = useState([]);
  const [habitName, setHabitName] = useState('');

  const handleInputChange = (text) => {
    setHabitName(text);
  };

  const handleAddHabit = () => {
    if (habitName.trim() !== '') {
      const newHabit = new Habit(habitName);
      setHabits(habits => [...habits, newHabit]);
      setHabitName('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Awesome Habits</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Add new habit..."
          placeholderTextColor={colors.border} 
          style={styles.input}
          onChangeText={handleInputChange}
          value={habitName}
          maxLength={30}
        />
        <Button title="Add" onPress={handleAddHabit} backgroundColor={colors.highlight} />
      </View>
      <View style={styles.habitListContainer}>
        <View style={styles.borderLine} />
        <View style={styles.habitList}>
          {habits.map(habit => (
            <HabitRow key={habit.id} habit={habit} setHabits={setHabits} />
          ))}
        </View>
      </View> 
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleContainer: {
    marginBottom: 20,
    marginTop: 40,
    paddingBottom: 1,
    borderBottomWidth: 2,
    borderBottomColor: colors.highlight,
  },
  titleText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.text,
    letterSpacing: 1,
  },
  habitListContainer: {
    flex: 9,
    marginBottom: 10,
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  borderLine: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    width: '90%',
    padding: 5
  },
  input: {
    borderWidth: 1,
    borderColor: colors.text,
    borderRadius: 8,
    padding: 10,
    minWidth: 200,
    marginRight: 10
  },
});
