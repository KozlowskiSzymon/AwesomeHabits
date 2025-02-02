import { AppState, SafeAreaView, StyleSheet, Text, View, FlatList, Platform } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import colors from './model/colors';
import HabitRow from './components/HabitRow';
import NewHabitInput from './components/NewHabitInput';
import HabitListHeader from './components/HabitListHeader';
import useAppState from './functions/saveLoadHook';
import saveJsonToFile from './functions/saveToFile';


export default function App() {

  const [habits, setHabits] = useState([]);
  // useAppState(habits, setHabits);

  const handleAddHabit = (newHabit) => {
    setHabits(currentHabits => [...currentHabits, newHabit]); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Awesome Habits</Text>
      </View>
      <NewHabitInput handleAddHabit={handleAddHabit} />
      <View style={styles.borderLine} />
      <View style={styles.habitListContainer}>
        <HabitListHeader />
        <FlatList data={habits} renderItem={(habitData) => <HabitRow habit={habitData.item} setHabits={setHabits} />} style={styles.habitList} />
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
    alignItems: 'center',
  },
  habitList: {
    width: '100%',
  },
  borderLine: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    width: '90%',
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
});
