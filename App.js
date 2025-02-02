import { AppState, SafeAreaView, StyleSheet, Text, View, FlatList, Platform } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import colors from './model/colors';
import HabitRow from './components/HabitRow';
import NewHabitInput from './components/NewHabitInput';
import HabitListHeader from './components/HabitListHeader';
import Habit from './model/Habit';
import * as FileSystem from 'expo-file-system';


export default function App() {

  const [habits, setHabits] = useState([]);

  const handleAddHabit = (newHabit) => {
    setHabits(currentHabits => [...currentHabits, newHabit]); 
  };
    // File path for saving habits
    const fileUri = `${FileSystem.documentDirectory}AwesomeHabits.json`;

    // Load habits from file on app start
    useEffect(() => {
      const loadHabits = async () => {
        try {
          const fileInfo = await FileSystem.getInfoAsync(fileUri);
          if (fileInfo.exists) {
            const jsonString = await FileSystem.readAsStringAsync(fileUri);
            const loadedHabits = JSON.parse(jsonString).map(habitData => Object.assign(new Habit(habitData.name), habitData));
            setHabits(loadedHabits);
            console.log('Habits loaded:', loadedHabits);
          } else {
            console.log('No saved habits found.');
          }
        } catch (error) {
          console.error('Error loading habits:', error);
        }
      };
  
      loadHabits();
    }, []);

      // Save habits to file when app is minimized or closed
  useEffect(() => {
    const handleAppStateChange = (nextAppState) => {
      if (nextAppState === 'background' || nextAppState === 'inactive') {
        saveHabitsToFile();
      }
    };

    const subscription = AppState.addEventListener('change', handleAppStateChange);
    return () => {
        subscription.remove();
    };
  }, [habits]);

  // Function to save habits
  const saveHabitsToFile = async () => {
    try {
      const jsonString = JSON.stringify(habits, null, 2);
      await FileSystem.writeAsStringAsync(fileUri, jsonString, { encoding: FileSystem.EncodingType.UTF8 });
      console.log('Habits saved to file:', fileUri);
    } catch (error) {
      console.error('Error saving habits:', error);
    }
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
