import React, { useState, useEffect } from 'react';
import { View, Image,Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import api from '../services/api'
import { useNavigation, NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'


function Main({navigation}) {
    const[devs, setDevs] = useState ({});

    async function loadDevs() {
        const response = await
        api.get ('/list_students_filter?token=a8d062dc80593f2e2ff421f542a4eadb&unidades=1&ano_letivo=2022')
    
        setDevs(response.data.students)    
    }
    useEffect (()=>{
        loadDevs()
    },[])
    return (
        <View>
            <FlatList
                data={devs}
                keyExtractor={dev => String(dev.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({item: dev}) => (
            <View style={styles.container}>
                <Image style={styles.avatar} source={{ uri: dev.photo }}></Image>
                <Text style={styles.name}>{dev.name}</Text>
                <Text style={styles.class}>{dev.class}</Text>

                <TouchableOpacity 
                onPress={() => {navigation.navigate('Profile',{ name: dev.name, class: dev.class, photo: dev.photo  })}}
                style={styles.button}
            >
                <Text style={styles.buttonText} > Ver perfil </Text>
            </TouchableOpacity>

            </View>
            )}
            >
                

                </FlatList>

                

        </View>
    )
}
const styles = StyleSheet.create({
    avatar:{
        width:90,
        height:90,
        borderRadius:50,
        borderWidth:1,
        borderColor: '#DBDBDB'

    },

    container: {
        flex:1,
        backgroundColor:'#323232',
        justifyContent:'center',
        alignItems:'center',
        padding:30
    },

    name: {
        color: '#DBDBDB',
        fontSize: 16,
        padding:4
    },
    class: {
        color:'#66bc50',
        fontWeight: 'bold',
        fontSize:13
    },

    button: {
        height: 40,
        width: 150,
        alignSelf: 'center',
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

export default Main;