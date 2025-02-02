import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { Platform } from 'react-native';

const saveJsonToFile = async (data) => {
  try {
    const fileName = 'AwesomeHabits.json';
    const fileUri = FileSystem.documentDirectory + fileName;
    const jsonString = JSON.stringify(data, null, 2);
    
    // Write JSON to file
    await FileSystem.writeAsStringAsync(fileUri, jsonString, {
      encoding: FileSystem.EncodingType.UTF8,
    });

    console.log('File saved to:', fileUri);

    if (Platform.OS === 'android') {
      const downloadsFolder = FileSystem.cacheDirectory + fileName;
      await FileSystem.moveAsync({ from: fileUri, to: downloadsFolder });
      console.log('Moved to Downloads:', downloadsFolder);

      // Share or prompt user to download the file
      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(downloadsFolder);
      }
    }
  } catch (error) {
    console.error('Error saving JSON file:', error);
  }
};

export default saveJsonToFile;
