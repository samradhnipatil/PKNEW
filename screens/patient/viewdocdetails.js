import React from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';

import viewdocdet from '../../assets/images/viewdocdet2.png';


export default function Viewdocdetails({ route,navigation }) {

    const { Name, Academic, mode, ConsultationFee ,Location,Specialization,Mobile,ID} = route.params;
    console.log('docnameViewdocdetails',Name);
        ///////////////////////////     CODE FOR MOVING TO VID OR INPERSON APPOINTMENT FORM /////////////////////////////////////////////
    const Bookapp = (Name, ID) => {
        if (mode == 'online') {
            navigation.navigate('Onlineappoint', {
                Name,
                Academic,
                ID,
            });
        } else {
            navigation.navigate('Offlineappointment', {
                Name,
                Academic,
                ID,
            });
        }
    }

    return (
        <View>
            <View style={{ backgroundColor: '#C4C4C4', borderRadius: 10,  }}>
                    <View style={{ backgroundColor: '#077395', height: 150, }}>
                    </View>
                <View style={{ backgroundColor: '#fff', height: 560, borderRadius: 20, width: '90%', alignSelf: 'center', paddingRight: '2%', marginBottom: '20%', marginTop: '-12%', elevation:10 }}>
                        <Image style={{ width: '33%', height: 110, alignSelf: 'center', marginTop: '-22%', borderRadius:10 }} source={viewdocdet} />
                        <Text style={{ fontSize: 19, fontWeight: 'bold', alignSelf: 'center', color: 'rgba(0,0,0,0.67)' }}>{Name}</Text>
                        <Text style={{ fontSize: 16, alignSelf: 'center', color: 'rgba(0,0,0,0.67)', marginBottom: '0%' }}>{Academic}</Text>
                        <Text style={{ borderBottomColor: '#C4C4C4', borderBottomWidth: 1, width: '90%', alignSelf: 'center', marginBottom: '2%', }}></Text>
                        <View>
                            <ScrollView>
                                {/* <Text style={styles.title}>About</Text>
                                <Text style={styles.info}>I work as a gastroSurgeon for past 5 years.</Text> */}
                                <Text style={styles.title}>Specialist in</Text>
                                <Text style={styles.info}>{ Specialization }</Text>
                                {/* <Text style={styles.title}>Timing</Text>
                                <Text style={styles.info}>Morning: 10:00 am - 11:00 am Evening:  05:00 pm - 06:00 pm</Text> */}
                                <Text style={styles.title}>Consultation fee</Text>
                                <Text style={styles.info}>
                                Rs. { ConsultationFee } /-</Text>
                                <Text style={styles.title}>My Clinic</Text>
                                <Text style={styles.info}>{ Location }</Text>
                                <Text style={styles.title}>Contact on</Text>
                                <Text style={styles.info}>{ Mobile }</Text>
                                <TouchableOpacity 
                                    style={styles.butt}
                                    onPress = {() =>Bookapp(Name, ID)}
                                >
                                    <Text style={{ color: '#fff', fontSize: 16,  width: '62%' ,paddingVertical:'3%', height: 40, alignSelf:'center'}}>Book Appointment</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                    </View>
                </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    title: {
        marginLeft: '8%',
        fontSize: 17,
        fontWeight: 'bold',
        color: 'rgba(7,115,149,0.67)',
        textDecorationLine: 'underline',
    },
    info: {
        marginLeft: '12%',
        fontSize: 16,
        marginBottom: '2%',
        width: '80%',
    },
    butt: {
        backgroundColor: '#32B757',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginTop: '0%',
        marginBottom: '10%',
        width:'63%'
    },
});




// import React from 'react'
// import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from "react-native";
// import { ScrollView } from 'react-native-gesture-handler';

// import viewdocdet from '../../assets/images/viewdocdet2.png';


// export default function Viewdocdetails({ route,navigation }) {

//     const { Name, Academic, mode, ID } = route.params;
//     console.log('docnameViewdocdetails',Name);
//     console.log('docID',ID);
//         ///////////////////////////     CODE FOR MOVING TO VID OR INPERSON APPOINTMENT FORM /////////////////////////////////////////////
//     const Bookapp = (Name) => {
//         if (mode == 'online') {
//             navigation.navigate('Onlineappoint', {
//                 Name,
//                 Academic,
//             });
//         } else {
//            navigation.navigate('Offlineappointment', {
//                 Name,
//                 Academic,
//             });
//         }
//     }

//     return (
//         <View>
//             <View style={{ backgroundColor: '#C4C4C4', borderRadius: 10,  }}>
//                     <View style={{ backgroundColor: '#077395', height: 150, }}>
//                     </View>
//                 <View style={{ backgroundColor: '#fff', height: 560, borderRadius: 20, width: '90%', alignSelf: 'center', paddingRight: '2%', marginBottom: '20%', marginTop: '-12%', elevation:10 }}>
//                         <Image style={{ width: '33%', height: 110, alignSelf: 'center', marginTop: '-22%', borderRadius:10 }} source={viewdocdet} />
//                         <Text style={{ fontSize: 19, fontWeight: 'bold', alignSelf: 'center', color: 'rgba(0,0,0,0.67)' }}>{Name}</Text>
//                         <Text style={{ fontSize: 16, alignSelf: 'center', color: 'rgba(0,0,0,0.67)', marginBottom: '0%' }}>{Academic}</Text>
//                         <Text style={{ borderBottomColor: '#C4C4C4', borderBottomWidth: 1, width: '90%', alignSelf: 'center', marginBottom: '2%', }}></Text>
//                         <View>
//                             <ScrollView>
//                                 <Text style={styles.title}>About</Text>
//                                 <Text style={styles.info}>I work as a gastroSurgeon for past 5 years.</Text>
//                                 <Text style={styles.title}>Specialist in</Text>
//                                 <Text style={styles.info}> General Surgery , Surgical Gastroenterology</Text>
//                                 <Text style={styles.title}>Timing</Text>
//                                 <Text style={styles.info}>Morning: 10:00 am - 11:00 am Evening:  05:00 pm - 06:00 pm</Text>
//                                 <Text style={styles.title}>consultation fee</Text>
//                                 <Text style={styles.info}>400/- rs.</Text>
//                                 <Text style={styles.title}>My Clinic</Text>
//                                 <Text style={styles.info}>SIMS , Near highschool, saphale edwan road,Agarwadi, Saphale(E) Palghar 401102</Text>
//                                 <Text style={styles.title}>Contact on</Text>
//                                 <Text style={styles.info}>+91 88456789</Text>
//                                 <TouchableOpacity 
//                                     style={styles.butt}
//                                     onPress = {() =>Bookapp(name)}
//                                 >
//                                     <Text style={{ color: '#fff', fontSize: 16,  width: '62%' ,paddingVertical:'3%', height: 40, alignSelf:'center'}}>Book Appointment</Text>
//                                 </TouchableOpacity>
//                             </ScrollView>
//                         </View>
//                     </View>
//                 </View>
//         </View>
//     )
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//     },
//     title: {
//         marginLeft: '8%',
//         fontSize: 17,
//         fontWeight: 'bold',
//         color: 'rgba(7,115,149,0.67)',
//         textDecorationLine: 'underline',
//     },
//     info: {
//         marginLeft: '12%',
//         fontSize: 16,
//         marginBottom: '2%',
//         width: '80%',
//     },
//     butt: {
//         backgroundColor: '#32B757',
//         alignSelf: 'center',
//         alignItems: 'center',
//         borderRadius: 15,
//         marginTop: '0%',
//         marginBottom: '10%',
//         width:'63%'
//     },
// });
