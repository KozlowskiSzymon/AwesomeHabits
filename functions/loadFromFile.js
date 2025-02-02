import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import Habit from '../model/Habit';

const readJsonFromFile = async () => {
    try {
      const fileName = 'AwesomeHabits.json';
      const fileUri = FileSystem.documentDirectory + fileName;
      
      // Check if file exists
      const fileInfo = await FileSystem.getInfoAsync(fileUri);
      if (!fileInfo.exists) {
        console.log('File does not exist');
        return [];
      }
      
      // Read file content
      const jsonString = await FileSystem.readAsStringAsync(fileUri, {
        encoding: FileSystem.EncodingType.UTF8,
      });
      
      const data = JSON.parse(jsonString);
      console.log('File read successfully:', data);
      
      return data.map(habit => new Habit(habit.name));
    } catch (error) {
      console.error('Error reading JSON file:', error);
      return [];
    }
  };

  export default readJsonFromFile;