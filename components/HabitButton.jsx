import { Pressable, StyleSheet } from 'react-native';
import colors from '../model/colors';
import { useState } from 'react';

const HabitButton = ({ onComplete, onUncomplete, style }) => {

    const [pressed, setPressed] = useState(false);

    const onPress = () => {
        if (pressed) {
            setPressed(false);
            onUncomplete();
        } else {
            setPressed(true);
            onComplete();
        }
    }
    return (
        <Pressable onPress={onPress} style={[style, pressed ? styles.pressed : styles.unpressed]} backgroundColor={colors.highlight}/>
    );
}

const styles = StyleSheet.create({
  pressed: {
    backgroundColor: colors.completed,
  },
  unpressed: {
    backgroundColor: colors.background,
  },
});

export default HabitButton;