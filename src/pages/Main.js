import React, { useState, useEffect } from 'react';
import { View, Image,Text, StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

function Main() {
    const[devs, setDevs] = useState ({});

    async function loadDevs() {
        const response = await
        api.get ('https://www.proesc.com/api/v1/list_students_filter?token=a8d062dc80593f2e2ff421f542a4eadb&unidades=1&ano_letivo=2022')
    
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
                renderItem={({item: dev}) => (
            <View style={styles.container}>
                <Image style={styles.avatar} source={{ uri: dev.photo }}></Image>
                <Text style={styles.name}>{dev.name}</Text>
                <Text style={styles.class}>{dev.class}</Text>
            </View>
            )}
            >
                </FlatList>
        </View>
    )
}


    

export default Main;