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
    const { arr } = route.params
    console.log('arrMyAppointDoc' , arr );
    const [Appoin, setAppoin] = useState([
        { Name: 'Samradhni Patil', time: '2:00pm - 2:15pm', session: 'Morning Session', rate: '08/10', id: '1' },
        { Name: 'Shivani Patil', time: '2:00pm - 2:15pm', session: 'Morning Session', rate: '06/10', id: '2' },
        { Name: 'Yamini Barhate', time: '2:00pm - 2:15pm', session: 'Evening Session', rate: '07/10', id: '3' },
        { Name: 'Samruddhi Patil', time: '2:00pm - 2:15pm', session: 'Morning Session', rate: '08/10', id: '4' },
        { Name: 'Samiksha Patil', time: '2:00pm - 2:15pm', session: 'Evening Session', rate: '09/10', id: '5' },
        { Name: 'Rachana Gharat', time: '2:00pm - 2:15pm', session: 'Evening Session', rate: '08/10', id: '6' },
        { Name: 'Kundan Gharat', time: '2:00pm - 2:15pm', session: 'Morning Session', rate: '08/10', id: '7' },
        { Name: 'Vardhan Gharat', time: '2:00pm - 2:15pm', session: 'Evening Session', rate: '08/10', id: '8' },
    ])

    // try
    // handleEmail = () => {
    //     Mailer.mail({
    //       subject: 'Prescription',
    //       recipients: ['shivanipatil1511@gmail.com'],
    //       ccRecipients: ['yamini.barhate03@gmail.com'],
    //       bccRecipients: ['samradhni.patil14@gmail.com'],
    //       body: '<b>Pocket doctor</b>',
    //       customChooserTitle: 'This is my new title', // Android only (defaults to "Send Mail")
    //       isHTML: true,
    //       attachments: [{
    //         // Specify either `path` or `uri` to indicate where to find the file data.
    //         // The API used to create or locate the file will usually indicate which it returns.
    //         // An absolute path will look like: /cacheDir/photos/some image.jpg
    //         // A URI starts with a protocol and looks like: content://appname/cacheDir/photos/some%20image.jpg
    //         path: '', // The absolute path of the file from which to read data.
    //         uri: '', // The uri of the file from which to read the data.
    //         // Specify either `type` or `mimeType` to indicate the type of data.
    //         type: '', // Mime Type: jpg, png, doc, ppt, html, pdf, csv
    //         mimeType: '', // - use only if you want to use custom type
    //         name: '', // Optional: Custom filename for attachment
    //       }]
    //     }, (error, event) => {
    //       Alert.alert(
    //         error,
    //         event,
    //         [
    //           {text: 'Ok', onPress: () => console.log('OK: Email Error Response')},
    //           {text: 'Cancel', onPress: () => console.log('CANCEL: Email Error Response')}
    //         ],
    //         { cancelable: true }
    //       )
    //     });

    // }





    // yoooooohoooo working codeeeee

    // handleEmail = () => {
    //     const to = ['shivanipatil1511@gmail.com'] 
    //     email(to, {
    //         // Optional additional arguments
    //         cc: ['yamini.barhate03@gmail.com'], 
    //         bcc: 'samradhni.patil14@gmail.com', 
    //         subject: 'Pocket Doctor-Prescription',
    //         body: 'Disease: Heart disease,\n Medicine: alprazolam, \n Dosage: 2, \n Frequency: day,\n Test: blood count'
    //     }).catch(console.error)
    // }
    

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
        // navigation.navigate('DocPrescri',{
        //     Patid: pid, 
        //     Appointmentid: id,
        // });

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
            <FlatList
                numColumns={1}
                keyExtractor={(item) => item.id}
                data={arr}
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
});


// import React, { useState } from "react";
// import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from "react-native";
// import { ScrollView } from "react-native-gesture-handler";

// import { getAuth} from "firebase/auth";
// import { getDatabase, ref, set,get, onValue,child,} from "firebase/database";
// import { LogBox } from 'react-native';

// import alarm from '../../assets/images/alarm.png';

// export default function MyAppointDoc({route, navigation }) {
//      LogBox.ignoreLogs(['Setting a timer']);
//     const auth = getAuth();
//     const db = getDatabase();
    
//     const user = auth.currentUser;
//     console.log('user',user['uid']);
//     const useri = user['uid'];

//     const { arr } = route.params
//     console.log('arrMyAppointDoc' , arr );

//     const Viewdetails = (Name, time, session, pid, symp) => {
//         const starCountRef1 = ref(db, 'Patients/'+ pid);
//         onValue(starCountRef1, (snapshot1) => {
//             const datapat = snapshot1.val(); 
//             console.log('datapat',datapat);
//             const starCountRef2 = ref(db, 'Doctors/'+ useri);
//             onValue(starCountRef2, (snapshot2) => {
//                 const datadoc = snapshot2.val(); 
//                 console.log('datapat',datadoc);
//                 navigation.navigate('PatDetails',{
//                     patName: Name,
//                     patdob:datapat['DOB'],
//                     patSession: session,
//                     patTime: time,
//                     patbg:datapat['BloodGroup'],
//                     patcon:datapat['Mobile'],
//                     symp,
//                     confee:datadoc['ConsultationFee'],
//                     Patid: pid,
//                 });
//             }); 
//         });        
//     }
//     const prescribe = (Name, time, session, pid, symp, id) => {
//         const starCountRef1 = ref(db, 'Patients/'+ pid);
//         onValue(starCountRef1, (snapshot1) => {
//             const datapat = snapshot1.val(); 
//             console.log('datapat',datapat);
//             const starCountRef2 = ref(db, 'Doctors/'+ useri);
//             onValue(starCountRef2, (snapshot2) => {
//                 const datadoc = snapshot2.val(); 
//                 console.log('datapat',datadoc);
//                 navigation.navigate('DocPrescri',{
//                     patName: Name,
//                     patdob:datapat['DOB'],
//                     patSession: session,
//                     patTime: time,
//                     patbg:datapat['BloodGroup'],
//                     patcon:datapat['Mobile'],
//                     symp,
//                     confee:datadoc['ConsultationFee'],

//                     Patid: pid,
//                     Appointmentid: id,
//                 });
//             }); 
//         });  
//         // navigation.navigate('DocPrescri',{
//         //     Patid: pid, 
//         //     Appointmentid: id,
//         // });

//     }

//     return (
//         <View style={styles.container}>
//             {/* <ScrollView> */}
//             <View
//                 style={{ backgroundColor: '#077395', height: 60, width: '100%', justifyContent: 'center' }}>
//                 <Text
//                     style={{ color: '#fff', fontSize: 22, alignSelf: 'center', }}>
//                     All  Appointments
//                 </Text>
//             </View>
//             <FlatList
//                 numColumns={1}
//                 keyExtractor={(item) => item.id}
//                 data={arr}
//                 renderItem={({ item }) => (
//                     <View style={[styles.itemappoin, styles.elevation]}>
//                         <View style={styles.patdet}>
//                             <Text style={{ fontWeight: 'bold', fontSize: 19 }}>{item.Pat_Nam}</Text>
//                             <View style={{ flexDirection: 'row' }}>
//                                 <Image style={{ width: '7%', height: 20, marginRight: '2%' }} source={alarm} />
//                                 <Text>{item.Timings}</Text>
//                             </View>
//                             <Text>{item.session} Session</Text>
//                             <Text>{item.rate}</Text>
//                         </View>
//                         <View style={{ marginTop: '4%', }}>
//                             <TouchableOpacity 
//                                 style={[styles.but1, styles.elevation]}
//                                 onPress = {()=>Viewdetails(item.Pat_Nam, item.Timings, item.session, item.pid, item.Symptoms)} ><Text>View Details</Text></TouchableOpacity>
//                             <TouchableOpacity 
//                                 style={[styles.but2, styles.elevation]}
//                                 onPress={()=> prescribe(item.Pat_Nam, item.Timings, item.session, item.pid, item.Symptoms, item.id)}><Text>Start Session</Text></TouchableOpacity>
//                         </View>
//                     </View>
//                 )}
//             />
//             {/* </ScrollView> */}
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#c4c4c4',
//         alignItems: 'center',
//     },
//     itemappoin: {
//         flexDirection: 'row',
//         backgroundColor: '#fff',
//         padding: '3%',
//         marginTop: '3%',
//         borderRadius: 10,
//         width: '98%',
//         height: 102,
//         marginLeft:4,
        
//     },
//     elevation: {
//         elevation: 10,
//         shadowColor: 'black',
//     },
//     but1: {
//         // marginBottom: '13%',
//         borderRadius: 14,
//         backgroundColor: '#C4C4C4',
//         padding: '1%',
//         width: '100%',
//         marginRight: '11%',
//         alignItems: 'center',
//     },
//     but2: {
//         marginTop: '8%',
//         borderRadius: 14,
//         backgroundColor: '#32B757',
//         padding: '1%',
//         width: '100%',
//         alignItems: 'center',
//     },
//     patdet: {
//         minWidth: '60%',
//     },
// });

