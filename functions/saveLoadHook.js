import { AppState } from 'react-native';
import { useEffect } from 'react';

const useAppState = (habits, setHabits) => {
    useEffect(() => {
      const handleAppStateChange = async (nextAppState) => {
        if (nextAppState === 'background' || nextAppState === 'inactive') {
            console.log('Saving: ' + habits);
          await saveJsonToFile(habits);
        } else if (nextAppState === 'active') {
          const loadedHabits = await readJsonFromFile();
          console.log('Loaded: ' + loadedHabits);
          setHabits(loadedHabits);
        }
      };
      const subscription = AppState.addEventListener('change', handleAppStateChange);
    
      // Load data when the app starts
      (async () => {
        const loadedHabits = await readJsonFromFile();
        console.log('Initial: ' + loadedHabits);
        setHabits(loadedHabits);
      })();
  
      return () => {
        subscription.remove();
      };
    }, []);
  };

  export default useAppState;