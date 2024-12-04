import React from 'react';
import {View, StyleSheet, Text , TouchableOpacity} from 'react-native';
import {useNavigation} from "@react-navigation/native";

const TodayAvailBack = (props) => {
    const navigation = useNavigation();
    const handlebacktodash = () => {
        // Handle cancel button press logic here
        navigation.navigate('Dashboard');
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.container2} onPress={handlebacktodash}>
                <Text style = {styles.text1}>
                    Back to Dashboard
                </Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        justifyContent : 'center',
        alignContent : 'center',
    },
    container2: {
        justifyContent : 'center',
        alignContent : 'center',
        width : '80%',
        marginLeft : '10%',
        height : '22%',
      backgroundColor : '#4886FF',
        borderRadius : 5,
    },
    text1 : {
        fontSize : 16,
        fontWeight : 'bold',
        textAlign : 'center',
        color : 'white',
    }
});

export default TodayAvailBack;