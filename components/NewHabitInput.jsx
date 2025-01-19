import React from 'react';
import { View, TextInput } from 'react-native';
import colors from '../model/colors';
import { StyleSheet } from 'react-native';
import Button from './Button';
import { useState } from 'react';
import Habit from '../model/Habit';

const NewHabitInput = ({ handleAddHabit }) => {

    const [habitName, setHabitName] = useState('');

    const handleInputChange = (text) => {
        setHabitName(text);
    };

    const handleOnPress = () => {
        if (habitName.trim() !== '') {
            handleAddHabit(new Habit(habitName));
            setHabitName('');
        }
    };

    return (
    <View style={styles.inputContainer}>
    <TextInput 
        placeholder="Add new habit..."
        placeholderTextColor={colors.border} 
        style={styles.input}
        onChangeText={handleInputChange}
        value={habitName}
        maxLength={20}
    />
    <Button title="Add" onPress={handleOnPress} backgroundColor={colors.highlight} />
    </View>
    );
};

export default NewHabitInput;


const styles = StyleSheet.create({
    inputContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    input: {
      borderWidth: 1,
      borderColor: colors.text,
      borderRadius: 8,
      padding: 10,
      minWidth: 200,
      marginRight: 10
    },
})
