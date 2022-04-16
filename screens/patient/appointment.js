import React, {useState, useEffect } from "react";
import {StyleSheet, View, Text, FlatList, TouchableOpacity, Image,ScrollView, Linking } from "react-native";

import { getAuth} from "firebase/auth";
import { getDatabase, ref, set, onValue, remove} from "firebase/database";
import { LogBox } from 'react-native';


export default function Appointment({route, navigation}) {
    LogBox.ignoreLogs(['Setting a timer']);

    const auth = getAuth();
    const db = getDatabase();    

    const { arr } = route.params
    console.log('Listttt :  ', arr);

    const [arr1, setarr1] = useState(arr);
    console.log('arr111111111111111 :  ', arr1);;

    const JoinMeet = (link) =>{
        Linking.openURL(link)
    }    
    const CancelAPP = (appid, did, pid) => {
        console.log('appid:  ',appid);
        console.log('appid:  ',did);
        console.log('appid:  ',pid);
        const starCountRef = ref(db, 'Online_Appointments/'+ pid+'/'+ did +'/'+ appid);
        onValue(starCountRef, (snapshot) => {
            const adata = snapshot.val();
            console.log('CANCELadata',adata);
            set(ref(db,'Online_Appointments/'+ pid+'/'+ did +'/'+ appid), {
                Pat_Dob: adata["Pat_Dob"],
                Pat_Nam: adata["Pat_Nam"],
                Symptoms: adata["Symptoms"],
                Timings: adata["Timings"],
                date: adata["date"],
                feecharge: adata["feecharge"],
                Status: "Cancelled",
            })
            .then(() => {
                var arrfil = arr1.filter(person => person.apid != appid)
                console.log('Filteredddd',arrfil);
                setarr1(arrfil);
                console.log("Data Upadted successfully!");
            })
            .catch((error) => {
                console.log("Error");
            });
        });
    }
    
    return (
        <View style={styles.container}>
            <FlatList style={{marginTop:10,}}
                numColumns={1}
                keyExtractor={(item) => item.apid}
                data={arr1}
                renderItem={({ item }) => (
                    <View style={[styles.itemappoin, styles.elevation]}>
                        <View style={styles.docdet}>
                            <Text style={{ fontWeight: 'bold', fontSize: 19 }}>{item.doctname}</Text>
                            <View style={{ flexDirection: 'row' }}>
                            </View>
                            <Text style={{ fontSize: 13}}><Text style={{ fontWeight: 'bold', fontSize: 13}}>Specialization : </Text> {item.dpost}</Text>
                            <Text style={{ fontSize: 13}}><Text style={{ fontWeight: 'bold', fontSize: 13}}>Fee Charged : </Text>{item.feecharge}</Text>
                        </View>
                        <View style={{ marginTop: -6,marginLeft:-5 }}>
                            <TouchableOpacity
                            ><Text style={{ fontWeight: 'bold', alignSelf:'center' }}>{item.Timings}</Text></TouchableOpacity>
                            <TouchableOpacity 
                                style={[styles.but3, styles.elevation,]}
                                onPress = {()=>JoinMeet(item.dLink)}>
                                <Text style={{ fontSize: 11, color: '#fff' }}>Join Session</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={[styles.but2, styles.elevation,]}
                                onPress = {()=>CancelAPP(item.apid, item.did, item.pid)}>
                                <Text style={{ fontSize: 11, color: '#fff' }}>Cancel Appointment</Text>
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
        backgroundColor: '#077395',
        alignItems: 'center',
    },
    itemappoin: {
        flexDirection: 'row',
        backgroundColor: '#e8e8e8',
        marginTop: '3%',
        borderRadius: 10,
        width: '99%',
        height: 83,
        padding:'3%',
        marginLeft:2,        
    },
    elevation: {
        elevation: 10,
        shadowColor: '#fff',
    },
    but2: {
        height: 23,
        marginTop: '3%',
        borderRadius: 14,
        backgroundColor: '#F51F1F',
        padding: '1%',
        width: '100%',
        alignItems: 'center',
        padding:4,
    },
    docdet: {
        minWidth: '62%',
    },
    but3: {
        height: 23,
        marginTop: '3%',
        borderRadius: 14,
        backgroundColor: '#077395',
        padding: '1%',
        width: '100%',
        alignItems: 'center',
        padding:4,
    },
});





