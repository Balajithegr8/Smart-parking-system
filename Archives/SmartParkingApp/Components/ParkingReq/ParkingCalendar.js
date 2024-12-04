import {View,TouchableOpacity,StyleSheet , Text } from 'react-native';
import Cal from "./Cal";

    const ParkingCalendar = () => {
    return (
        <View style={styles.container3}>

            <View style={styles.container4}>
            <Cal/>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container3: {
        height : 60,
        width : '100%',
        backgroundColor : 'black',
        borderBottomWidth : 1,
        borderColor : '#433C3C'
    },
    container2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#1F1F1F',
        borderTopWidth: 1,
        borderColor: "#433C3C"
    },container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : 'black',
        paddingBottom : 20,
    },
});
export default ParkingCalendar;
