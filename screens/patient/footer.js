import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import wave from '../../assets/images/wave.png';

export default function Footer() {
    return (
        <View>
            <Image style={{ width: 412, height: 60 ,}} source={wave}/>
            <View style={styles.footer}>
                <View style={{ width: 240, height: 1, marginTop: 20, marginBottom: 10, backgroundColor: '#fff'}}></View>
                <Text style={{ fontSize: 14, color: '#fff'}}>copyright@yamsamcham03@gmail.com</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    footer:{
        backgroundColor: '#077395',
        height: 70,
        alignItems: 'center',
    }
});