import React from 'react';
import { View, StyleSheet } from 'react-native';
import Gifbackground from "./Components/Signin/gifbackground";
const IndexPage = () => {
    return (
            <Gifbackground/>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default IndexPage;
