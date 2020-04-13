import React, { useState } from 'react';
import { View, Text, StyleSheet, Image,  } from 'react-native';
import {useRoute} from '@react-navigation/native'

function Profile ({ navigation }){

    const name = navigation.getParam('name')
    const setor = navigation.getParam('class')
    const photo = navigation.getParam('photo')
    return (
        <View style={styles.container}>
            <Image style={styles.avatar} source={{ uri: photo }}/>
            <View style ={styles.infos}>           
                 <Text style={styles.name}> Nome: {name} </Text>
                <Text style={styles.class}> Setor: {setor}</Text>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({

    infos: {
       
    
    },
    
    container: {
        flex:1,
        backgroundColor:'#323232',
        alignItems:'center',
    },

    avatar:{
        marginTop: 10,
        width: 100,
        height:100,
        borderRadius: 10,
        borderWidth:2,
        borderColor: '#DBDBDB',
        alignItems: 'stretch'
    },

    
    name: {
        color: '#DBDBDB',
        fontSize: 20,
        padding:4
    },
    class: {
        color:'#DBDBDB',
        fontWeight: 'bold',
        fontSize:20
    },
   
})


export default Profile ;