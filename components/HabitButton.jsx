import { Pressable, StyleSheet } from 'react-native';
import colors from '../model/colors';
import { useState } from 'react';

const HabitButton = ({ onComplete, onUncomplete, style , color, date, state}) => {

    const [pressed, setPressed] = useState(state);

    const onPress = () => {
        if (pressed) {
            setPressed(false);
            onUncomplete(date);
        } else {
            setPressed(true);
            onComplete(date);
        }
    }
    return (
        <Pressable onPress={onPress} style={[style, pressed ? {backgroundColor: color} : styles.unpressed]} backgroundColor={colors.highlight}/>
    );
}

const styles = StyleSheet.create({
  unpressed: {
    backgroundColor: colors.background,
  },
});

export default HabitButton;