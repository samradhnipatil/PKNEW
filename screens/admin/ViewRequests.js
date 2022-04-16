import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import docs from '../../assets/images/docs.png';
import Loc from '../../assets/images/locicon.png';
import rate from '../../assets/images/rating.png';

import { getAuth} from "firebase/auth";
import { getDatabase, ref, get,set, onValue, child} from "firebase/database";
import { LogBox } from 'react-native';

export default function ViewRequests({ route, navigation }) {

    LogBox.ignoreLogs(['Setting a timer']);
    const auth = getAuth();
    const db = getDatabase();

    const { arr } = route.params;
    console.log('Doclistvid_arr', arr);
    // category filtering

    var doc2 = arr.filter(person => person.status == "unapproved")
    console.log('Specialization', doc2);
   
    const viewdet = (item) => {
        navigation.navigate('ViewDet',{
            item,
        });
    }

    return (
        <View>
            <View style={{ backgroundColor: '#077395', height: 70, width: '100%', justifyContent: 'center'}}>
                <Text style={{ fontSize: 21, color: '#fff', alignSelf: 'center',marginTop: 100 }}>Doctors' Requests</Text>
            </View>
            <FlatList
                numColumns={1}
                keyExtractor={(item) => item.id}
                data={doc2}
                renderItem={({ item }) => (
                    <View style={styles.box}>
                        <View>
                            <Image style={{ width: 80, height: 80, marginTop: '3%' }} source={docs} />
                        </View>
                        <View style={{ flexDirection: 'column', marginLeft: '3%' ,width:150}}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, marginTop: '2%' }}>{item.Name}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                {/* <Image style={{ width: '9%', height: 30, marginLeft: '2%', marginTop: '2%' }} source={Loc} /> */}
                                <Text style={{ fontSize: 13, marginTop: '2%' }}> {item.Specialization} Doctor</Text>
                            </View>
                            <Text style={{ fontSize: 14 ,marginLeft:7}}>Fees: {item.ConsultationFee}</Text>
                            <Image style={{ width: '40%', height: 24, marginLeft: '5%', marginTop: '-2%' }} source={rate} />
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <TouchableOpacity 
                                style={styles.but1}
                                // onPress={() => viewdet(item.Name, item.id, item.ConsultationFee, item.Location, item.Specialization, item.Mobile,item.STime)}
                                onPress={() => viewdet(item)}
                                >
                                <Text style={{ fontSize: 12, fontWeight: 'bold', alignSelf: 'center' }}>View Details & Approve</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
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
    box: {
        width: '95%',
        height: 90,
        borderColor: '#c4c4c4',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        marginTop: '1%',
        marginBottom: '1%',
        alignSelf: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        padding: 2,
        paddingLeft:4,
    },
    but1: {
        backgroundColor: '#32B757',
        width: '70%',
        height: 40,
        marginLeft: '2%',
        marginTop: '10%',
        borderRadius: 10,
        padding:4
    },
    but2: {
        backgroundColor: '#32B757',
        width: '97%',
        height: 24,
        marginLeft: '2%',
        marginTop: '10%',
        borderRadius: 10,
    }
});