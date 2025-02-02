import { View, Text, StyleSheet } from 'react-native';
import { Tooltip } from 'react-native-elements';


const HabitListHeader = () => {
    const today = new Date();
    
    const formatDate = (date) => {
        return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}`;
    };

    const getDayBefore = (date, days) => {
        const newDate = new Date(date);
        newDate.setDate(date.getDate() - days);
        return newDate;
    };

    return (
        <View style={styles.header}>
            <View style={styles.dateContainer}>
                <Text style={styles.headerText}>{formatDate(getDayBefore(today, 2))}</Text>
            </View>
            <View style={styles.dateContainer}>
                <Text style={styles.headerText}>{formatDate(getDayBefore(today, 1))}</Text>
            </View>
            <View style={styles.dateContainer}>
                <Text style={styles.headerText}>{formatDate(today)}</Text>
            </View>
            <View style={styles.dateContainer}>
                <Tooltip popover={<Text>Strike / Overall</Text>}>
                    <Text style={styles.headerText}>S/O</Text>
                </Tooltip>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        marginLeft: "40%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        height: '3%',
    },
    dateContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100%',
    },
    headerText: {
        fontSize: 12,
        fontWeight: '500',
    },
});

export default HabitListHeader;
