import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, View, Text, StatusBar, Button, Alert } from 'react-native';
import { useState } from 'react';
const LoginScreen = () => {

    const [number,setNumber] = useState(0);

    function handlePress(){
        Alert.alert(`The message has been sent to ${number}`)

        
    }   

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>Login Account</Text>
            <Text>Hello, Welcome back to Your Account</Text>
            <TextInput maxLength={10} placeholder='Phone number' value={number} onChange={(e)=> setNumber(e.nativeEvent.text)} keyboardType='number-pad' style={styles.userInput}  />
            <View style={styles.buttonContainer}>
            <Button title="Request OTP" color={"#333"} onPress={handlePress} />
            </View>
        
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e2fefb",
        fontFamily: "sans-serif",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: StatusBar.platform === "android" ? 20 : null,
        gap:10,
    },
    userInput: {
        borderColor: "#d2cdcd",
        borderStyle: "solid",
        borderRadius: 10,
        borderWidth: 2,
        width: 300,
        padding: 10,
    },
    heading: {
        color: "black",
        fontSize: 23,
        fontFamily: "sans-serif",
        fontWeight:"bold",
    },
    buttonContainer:{
        width:250,
        borderRadius: 50,
        overflow: 'hidden',
        marginTop: 10,
        textAlign: "center",
        height:30,
    },
})

export default LoginScreen;
