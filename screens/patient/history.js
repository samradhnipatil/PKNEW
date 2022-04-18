import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList, ScrollView, TouchableOpacity, Image } from "react-native";
import histsymb from '../../assets/images/histsymb.png';
import { getAuth} from "firebase/auth";
import { child, getDatabase,onValue, ref, set,get,remove } from "firebase/database";
import { LogBox } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function History({ route, navigation }) {
    LogBox.ignoreLogs(['Setting a timer']);
    const { Harr } = route.params
    console.log('Harrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',Harr);

    let arr = [];

    const auth = getAuth();
    const db = getDatabase();


    const user = auth.currentUser;
    console.log('user',user['uid']);
    const useri = user['uid'];

    const pressHandler = (doctname,dpost,date,demail,Pat_Nam,pcontact,pbloodg,apid,pid,did) => {
        const starCountRef1 = ref(db,'Prescription/'+ pid + '/' + did + '/' + apid);
        onValue(starCountRef1, (snapshot) => {
            const datapres = snapshot.val(); 
            // if(datapres == null)
            // {
            //     navigation.navigate('History1',{
            //         Doctname : doctname,
            //         Dpost : dpost,
            //         Ddate : date,
            //         Demail : demail,
            //         Patname : Pat_Nam,
            //         Patcontact : pcontact,
            //         Pbloodg : pbloodg,
            //         Disease: '',
            //         Dosage:'',
            //         Frequency:'',
            //         Medicine: '',
            //         Test:'',
            //     });
            // }
            // else{
                console.log('datapatsssssssssssssss',datapres,pid,did,apid);
                navigation.navigate('History1',{
                    Doctname : doctname,
                    Dpost : dpost,
                    Ddate : date,
                    Demail : demail,
                    Patname : Pat_Nam,
                    Patcontact : pcontact,
                    Pbloodg : pbloodg,
                    Disease: datapres['Disease'],
                    Dosage: datapres['Dosage'],
                    Frequency: datapres['Frequency'],
                    Medicine: datapres['Medicine'],
                    Test: datapres['Test'],
                });
            // }            
        }); 
    }

    return (
        <View style={styles.container}>
           <FlatList style={{ marginTop: 10, }}
                numColumns={1}
                keyExtractor={(item) => item.apid}
                data={Harr}
                renderItem={({ item }) => (
                    <ScrollView>
                        <TouchableOpacity
                                onPress={() => pressHandler(item.doctname,item.dpost,item.date,item.demail,item.Pat_Nam,item.pcontact,item.pbloodg,item.apid,item.pid,item.did)} >
                        <View style={[styles.itemappoin, styles.elevation]} >
                        
                            <View style={styles.docdet}>
                                <Text style={{ color: '#e8e8e8', fontSize: 21, marginLeft: '10%' }}>Appointment-{item.dpost} 
                                {/* {item.id} */}
                                </Text>
                                <Text style={{ color: '#fff', marginLeft: '10%' }}>Date-{item.date}</Text>
                                <View style={{marginLeft: '8%',marginTop:3,}}>
                                    <Icon
                                        name='circle'
                                        size={18}
                                        // color={item.colorapp}
                                        style={{elevation:15,}}
                                    />
                              
                                <Text style={{ color: item.clr, marginLeft: '12%',marginTop:-18,  }}>{item.Status}</Text>
                                </View> 
                            </View>
                            <View style={{ marginTop: '7%', }}>
                               
                                    <Image style={{ width: '20%', height: 29, marginLeft: '50%' }} source={histsymb} />
                               
                            </View>
                           
                        </View>
                        </TouchableOpacity>
                    </ScrollView>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        alignItems: 'center',
        color: '#fff',
    },
    itemappoin: {
        flexDirection: 'row',
        backgroundColor: '#1c7894',
        padding: 5,
        marginTop: 10,
        width: '95%',
        height: 80,
        alignSelf: 'center',
        borderRadius: 5,
    },
    elevation: {
        elevation: 10,
        shadowColor: 'black',
    },
    docdet: {
        width: '60%',

    },
});




// import React, { useState } from "react";
// import { StyleSheet, View, Text, FlatList, ScrollView, TouchableOpacity, Image } from "react-native";
// import histsymb from '../../assets/images/histsymb.png';

// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// export default function History({ navigation }) {
//     const pressHandler = (date, id) => {
//         navigation.navigate('History1', {
//             date,
//             id
//         });
//     }
//     const [Hist, setHist] = useState([
//         { status: 'Completed', charge: 300, colorapp: '#00b023', date: '22/09/2021', id: '1' },
//         { status: 'Missed', charge: 100, colorapp: 'red', date: '22/10/2021', id: '2' },
//         { status: 'Refunded', charge: 100, colorapp: 'blue', date: '23/02/2021', id: '3' },
//         { status: 'Completed', charge: 1000, colorapp: '#00b023', date: '21/09/2021', id: '4' },
//         { status: 'Completed', charge: 1200, colorapp: '#00b023', date: '09/09/2021', id: '5' },
//         { status: 'Missed', charge: 150, colorapp: 'red', date: '01/12/2021', id: '6' },
//         { status: 'Completed', charge: 500, colorapp: '#00b023', date: '02/11/2021', id: '7' },
//         { status: 'Completed', charge: 600, colorapp: '#00b023', date: '12/12/2021', id: '8' },

//     ])
//     return (
//         <View style={styles.container}>
//             {/* <View
//                 style={{ backgroundColor: '#077395', height: 60, width: '100%', justifyContent: 'center' }}>
//                 <Text
//                     style={{ color: '#fff', fontSize: 22, alignSelf: 'center', }}>
//                     History
//                 </Text>
//             </View> */}
//            <FlatList style={{ marginTop: 10, }}
//                 numColumns={1}
//                 keyExtractor={(item) => item.id}
//                 data={Hist}
//                 renderItem={({ item }) => (
//                     <ScrollView>
//                         <View style={[styles.itemappoin, styles.elevation]} >
//                             <View style={styles.docdet}>
//                                 <Text style={{ color: '#e8e8e8', fontSize: 21, marginLeft: '10%' }}>Appointment- {item.id}</Text>
//                                 <Text style={{ color: '#fff', marginLeft: '10%' }}>Date-{item.date}</Text>
//                                 <View style={{marginLeft: '8%',marginTop:3,}}>
//                                     <Icon
//                                         name='circle'
//                                         size={18}
//                                         color={item.colorapp}
//                                         style={{elevation:15,}}
//                                     />
                              
//                                 <Text style={{ color: '#000', marginLeft: '12%',marginTop:-18,  }}>{item.status}</Text>
//                                 </View> 
//                             </View>
//                             <View style={{ marginTop: '7%', }}>
//                                 <TouchableOpacity
//                                     onPress={() => pressHandler(item.date, item.id)} >
//                                     <Image style={{ width: '20%', height: 29, marginLeft: '50%' }} source={histsymb} />
//                                 </TouchableOpacity>
//                             </View>
//                         </View>
//                     </ScrollView>
//                 )}
//             />
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#eee',
//         alignItems: 'center',
//         color: '#fff',
//     },
//     itemappoin: {
//         flexDirection: 'row',
//         backgroundColor: '#1c7894',
//         padding: 5,
//         marginTop: 10,
//         width: '95%',
//         height: 80,
//         alignSelf: 'center',
//         borderRadius: 5,
//     },
//     elevation: {
//         elevation: 10,
//         shadowColor: 'black',
//     },
//     docdet: {
//         width: '64%',

//     },
// });
