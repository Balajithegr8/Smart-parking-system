import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';

import SigninHeader from './Components/Signin/SigninHeader';
import SigninInput from './Components/Signin/SigninInput';
import SigninBottom from './Components/Signin/SigninBottom';

const IndexPage = () => {


    return (
        <View style={styles.container}>
                    <SigninHeader />
                    <SigninInput/>
                    <SigninBottom />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default IndexPage;
