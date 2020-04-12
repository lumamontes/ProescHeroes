import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import logo from '../assets/logo.png'

function Login({ navigation }) {
    const [email, setEmail] = useState('');

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={logo} />
            
            <TextInput 
                style={styles.input} 
                placeholder="Digite seu e-mail do Proesc" 
                value={email}
                onChangeText={setEmail}
            />
            
            <TouchableOpacity 
                onPress={() => {navigation.navigate('Main', { email })}}
                style={styles.button}
            >
                <Text style={styles.buttonText} >Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        backgroundColor: '#323232',
    },
    logo: {
        width: 180,
        height: 180

    },
    input: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#1F1F1F',
        borderWidth: 1,
        borderColor: '#DBDBDB',
        borderRadius: 4,
        marginTop: 20,
        paddingHorizontal: 15,
        color: '#DBDBDB'
    },
    button: {
        height: 46,
        width: 300,
        alignSelf: 'stretch',
        backgroundColor: '#66BA74',
        borderRadius: 4, 
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#DBDBDB',
        borderWidth: 1,
    
        

    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
        
    }

})

export default Login;