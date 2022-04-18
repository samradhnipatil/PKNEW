import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image ,Linking} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { getAuth} from "firebase/auth";
import { getDatabase, ref, set,get, onValue,child,} from "firebase/database";
import { LogBox } from 'react-native';
// try
// import Mailer from 'react-native-mail';


// // working code
// import email from 'react-native-email';

import alarm from '../../assets/images/alarm.png';

export default function MyAppointDoc({route, navigation }) {
     LogBox.ignoreLogs(['Setting a timer']);
    const auth = getAuth();
    const db = getDatabase();
    
    const user = auth.currentUser;
    console.log('user',user['uid']);
    const useri = user['uid'];

    const [Prescri, setPrescri] = useState(true);
    const { arr} = route.params

    var arrpend = arr.filter(person => person.Status == "pending")
    console.log('Arrrrayypending :',arr);
    const [ARR, setARR] = useState(arrpend);

    var arrcmp = arr.filter(person => person.Status == "Completed")
    console.log('ArrrrayyCompleted :',arr);
    const [ARRCMP, setARRCMP] = useState(arrcmp);

    var arrcan = arr.filter(person => person.Status == "Cancelled")
    console.log('ArrrrayyCancelled :',arr);
    const [ARRCAN, setARRCAN] = useState(arrcan);


    const Viewdetails = (Name, time, session, pid, symp) => {
        const starCountRef1 = ref(db, 'Patients/'+ pid);
        onValue(starCountRef1, (snapshot1) => {
            const datapat = snapshot1.val(); 
            console.log('datapat',datapat);
            const starCountRef2 = ref(db, 'Doctors/'+ useri);
            onValue(starCountRef2, (snapshot2) => {
                const datadoc = snapshot2.val(); 
                console.log('datapat',datadoc);
                navigation.navigate('PatDetails',{
                    patName: Name,
                    patdob:datapat['DOB'],
                    patSession: session,
                    patTime: time,
                    patbg:datapat['BloodGroup'],
                    patcon:datapat['Mobile'],
                    symp,
                    confee:datadoc['ConsultationFee'],
                    Patid: pid,
                });
            }); 
        });        
    }
    const StartMeet = (link) =>{
        Linking.openURL(link)
    } 
    const joinmeet = () => {
        console.log('prescri',Prescri);
        setPrescri(false);
        console.log('prescri',Prescri);
        const starCountRefdd = ref(db, 'Doctors/'+ useri);
        onValue(starCountRefdd, (snapshotd) => {
            const datad = snapshotd.val();
            const dlink = datad["link"];  
            console.log('dlink',dlink); 
            StartMeet(dlink);                               
        });
    }
    const prescribe = (Name, time, session, pid, symp, id) => {
        const starCountRef1 = ref(db, 'Patients/'+ pid);
        onValue(starCountRef1, (snapshot1) => {
            const datapat = snapshot1.val(); 
            console.log('datapat',datapat);
            const starCountRef2 = ref(db, 'Doctors/'+ useri);
            onValue(starCountRef2, (snapshot2) => {
                const datadoc = snapshot2.val(); 
                console.log('datapat',datadoc);
                navigation.navigate('DocPrescri',{
                    patName: Name,
                    patdob:datapat['DOB'],
                    patSession: session,
                    patTime: time,
                    patbg:datapat['BloodGroup'],
                    patcon:datapat['Mobile'],
                    symp,
                    confee:datadoc['ConsultationFee'],
                    patEmail:datapat['Email'],
                    Patid: pid,
                    Appointmentid: id,
                });
            }); 
        }); 
    }
     

    return (
        <View style={styles.container}>
            {/* <ScrollView> */}
            <View
                style={{ backgroundColor: '#077395', height: 60, width: '100%', justifyContent: 'center' }}>
                <Text
                    style={{ color: '#fff', fontSize: 22, alignSelf: 'center', }}>
                    All  Appointments
                </Text>
            </View>
            <View></View>
            <View style={[{minHeight:180,maxHeight:300},styles.Box]}>
                <Text style={{ color: '#fff', fontSize: 18, alignSelf: 'center',fontWeight: 'bold', }}>Upcoming Appointments</Text>
                <FlatList
                    numColumns={1}
                    keyExtractor={(item) => item.id}
                    data={ARR}
                    renderItem={({ item }) => (
                        <View style={[styles.itemappoin, styles.elevation]}>
                            <View style={styles.patdet}>
                                <Text style={{ fontWeight: 'bold', fontSize: 19 }}>{item.Pat_Nam}</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image style={{ width: '7%', height: 20, marginRight: '2%' }} source={alarm} />
                                    <Text>{item.Timings}</Text>
                                </View>
                                <Text>{item.session} Session</Text>
                                <Text>{item.rate}</Text>
                            </View>
                            <View style={{ marginTop: '4%', }}>
                                <TouchableOpacity 
                                    style={[styles.but1, styles.elevation]}
                                    onPress = {()=>Viewdetails(item.Pat_Nam, item.Timings, item.session, item.pid, item.Symptoms)} ><Text>View Details</Text></TouchableOpacity>
                                <TouchableOpacity
                                    style={[styles.but2, styles.elevation]}
                                    onPress={joinmeet}><Text>Start Session</Text></TouchableOpacity>
                                <TouchableOpacity
                                    disabled = {Prescri}
                                    style={[styles.but3, styles.elevation]}
                                    onPress={()=> prescribe(item.Pat_Nam, item.Timings, item.session, item.pid, item.Symptoms, item.id)}><Text>Prescription</Text></TouchableOpacity> 
                            </View>
                        </View>
                    )}
                />
            </View>
            <View style={[{minHeight:180,maxHeight:220},styles.Box]}>
                <Text style={{ color: '#fff', fontSize: 18, alignSelf: 'center',fontWeight: 'bold', }}>Completed Appointments</Text>
                <FlatList
                    numColumns={1}
                    keyExtractor={(item) => item.id}
                    data={ARRCMP}
                    renderItem={({ item }) => (
                        <View style={[styles.itemappoin, styles.elevation,{height: 70,}]}>
                            <View style={styles.patdet}>
                                <Text style={{ fontWeight: 'bold', fontSize: 19 }}>{item.Pat_Nam}</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image style={{ width: '7%', height: 20, marginRight: '2%' }} source={alarm} />
                                    <Text>{item.Timings}</Text>
                                </View>
                            </View>
                            <View style={{ marginTop: '0%', }}>
                                <Text>{item.session} Session</Text>
                                <TouchableOpacity 
                                    style={[styles.but1, styles.elevation,{marginTop: '4%',marginLeft:-4}]}
                                    onPress = {()=>Viewdetails(item.Pat_Nam, item.Timings, item.session, item.pid, item.Symptoms)} ><Text>View Details</Text></TouchableOpacity>
                                
                            </View>
                        </View>
                    )}
                />
            </View>
            <View style={[{minHeight:180,maxHeight:220},styles.Box]}>
                <Text style={{ color: '#fff', fontSize: 18, alignSelf: 'center',fontWeight: 'bold', }}>Cancelled Appointments</Text>
                <FlatList
                    numColumns={1}
                    keyExtractor={(item) => item.id}
                    data={ARRCAN}
                    renderItem={({ item }) => (
                        <View style={[styles.itemappoin, styles.elevation,{height: 70,}]}>
                            <View style={styles.patdet}>
                                <Text style={{ fontWeight: 'bold', fontSize: 19 }}>{item.Pat_Nam}</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image style={{ width: '7%', height: 20, marginRight: '2%' }} source={alarm} />
                                    <Text>{item.Timings}</Text>
                                </View>
                            </View>
                            <View style={{ marginTop: '0%', }}>
                                <Text>{item.session} Session</Text>
                                <TouchableOpacity 
                                    style={[styles.but1, styles.elevation,{marginTop: '4%',marginLeft:-4}]}
                                    onPress = {()=>Viewdetails(item.Pat_Nam, item.Timings, item.session, item.pid, item.Symptoms)} ><Text>View Details</Text></TouchableOpacity>
                                
                            </View>
                        </View>
                    )}
                />
            </View>
            {/* </ScrollView> */}
        </View>  
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c4c4c4',
        alignItems: 'center',
    },
    itemappoin: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: '3%',
        marginTop: '3%',
        borderRadius: 10,
        width: '98%',
        height: 102,
        marginLeft:4,
        
    },
    elevation: {
        elevation: 10,
        shadowColor: 'black',
    },
    but1: {
        // marginBottom: '13%',
        height: 22,
        borderRadius: 14,
        backgroundColor: '#C4C4C4',
        padding: '1%',
        width: '100%',
        marginRight: '11%',
        alignItems: 'center',
        marginTop: '-8%',
    },
    but2: {
        marginTop: '4%',
        height: 22,
        borderRadius: 14,
        backgroundColor: '#32B757',
        padding: '1%',
        width: '100%',
        alignItems: 'center',
    },
    but3: {
        marginTop: '4%',
        height: 22,
        borderRadius: 14,
        backgroundColor: '#077395',
        padding: '1%',
        width: '100%',
        alignItems: 'center',
    },
    patdet: {
        minWidth: '60%',
    },
    Box:{
        backgroundColor:'#077395',
        borderRadius:20,
        marginTop: '4%',
    }
});

