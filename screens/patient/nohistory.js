import React from "react";
import cross from '../../assets/images/cross.gif';
import appoint from '../../assets/images/steths.jpg';
import { StyleSheet, View, Text, Button,Image,TouchableOpacity } from "react-native";

export default function NoHistory(navigation) {
    // const pressHandler=()=>{
    //     navigation.goBack(); 
    // }
    return(
        <View style={styles.container}>
            <View
                style={{ backgroundColor: '#077395', height: 60, width: 412, justifyContent: 'center' }}>
                <Text
                    style={{ color: '#fff', fontSize: 22, alignSelf: 'center', }}>
                    History1
                </Text>
            </View>
            
            <View style={{flexDirection:'column'}}>
                <Image style={styles.appointimage} source={appoint} />
                <Image style={styles.crossimage} source={cross} />

            </View>
                <Text style={{fontWeight:'bold',textAlign:'center',marginBottom:20}}>You Don't have any appointments yet</Text>

                <TouchableOpacity style={styles.button} >
                    <Text style={styles.bottontext}>Book Appointment</Text>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    button:{
        width: 170,
        height: 40,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#1AA6E1',
        borderRadius:12,
    },
    crossimage:{
        width: 100,
        height: 100,
        marginLeft: 50,
        marginTop: -60,
        marginBottom: 30,

    },
    appointimage:{
        width: 130,
        height: 130,
        marginLeft: 90,
        marginTop: 50,
       
    },
    bottontext:{
        fontSize: 18,
        color:'#ffff'
    }
});

    