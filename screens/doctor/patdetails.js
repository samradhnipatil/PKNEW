import React,{useState, useEffect} from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import Modal from "react-native-modal";

import { getAuth} from "firebase/auth";
import { getDatabase, ref, set,get, onValue, child} from "firebase/database";
import { LogBox } from 'react-native';

import patdet from '../../assets/images/patdet.png';


export default function PatDetails({ route,navigation}) {

    LogBox.ignoreLogs(['Setting a timer']);
    const auth = getAuth();
    const db = getDatabase();
    const userId = auth.currentUser;
    const DocId = userId['uid'];
    // console.log("Doctors", DocId);
    var recarr = [];

    const { patName,patdob, patSession, patTime,patbg, patcon, symp, confee,Patid} = route.params
    // console.log('patientsPatid',patName,patdob, patSession, patTime,patbg, patcon, symp, confee,Patid);

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };

    useEffect(() => {
        // console.log('Patid',Patid);
        const dbRef = ref(getDatabase());
        get(child(dbRef, `Record/`)).then((snapshot) => {
        if (snapshot.exists()) 
        {          
            var patId = snapshot.key ;
            // console.log("\n\nrecords", patId);
            snapshot.forEach(function(childSnapshot) {
                var cat = childSnapshot.key;
                // console.log("Categories", cat);
                // console.log("Doctors", DocId);
                const starCountRefdd = ref(db, 'Doctors/'+ DocId);
                onValue(starCountRefdd, (snapshotd) => {
                    const datad = snapshotd.val(); 
                    // console.log("Doctors", datad["Specialization"]);  
                    if (datad["Specialization"] == cat)           
                    {
                        get(child(dbRef, `Record/`+cat+`/`+Patid)).then((snapshot1) => {
                            snapshot1.forEach(function(childSnapshot1) {
                                var categ = childSnapshot1.key;
                                // console.log("Report Categories", categ);
                                childSnapshot1.forEach(function(childSnapshot2) {
                                    var categid = childSnapshot2.key;
                                    // console.log("Report id", categid);
                                    const starCountRefdetail = ref(db, 'Record/'+ cat+'/'+Patid+'/'+categ+'/'+categid);
                                    onValue(starCountRefdetail, (snapshotd2) => {
                                        const det = snapshotd2.val();
                                        det.RecId = categid;  
                                        det.cat = categ; 
                                        // console.log("Report", det);  
                                        recarr.push(det); 
                                        // console.log("recarr", recarr);              
                                    });
                                    // console.log("Doctors Category", cat);
                                });
                            });
                        });
                                                  
                    }                
                });
            });
        }
        // console.log('recarr',recarr);
    });   
       
    });
    
    const prescribe = () => {
        navigation.navigate('DocPrescri');
    }
    const ViewReco = () =>{
        
        console.log("recarr1", recarr);
        navigation.navigate('PatRecord',{
            patName,
            recarr,
        });            
        
        
    }
    return (
        <View>
            <ScrollView>
            {/* <View style={{ backgroundColor:'#C4C4C4', height: 740, borderRadius: 10}}> */}
                <View style={{ backgroundColor:'#C4C4C4', height: 800, borderRadius: 10}}>
                <View style={{ backgroundColor: '#077395', height: 200, }}>
                    <Text style={{ fontSize: 24, color: '#fff', alignSelf: 'center',fontWeight: 'bold',marginTop: '5%'}}>Patient's Details</Text>
                </View>
                    <View style={[styles.box, styles.shadowProp]}>
                    <Image style={{ width: '35%', height: 130, alignSelf: 'center', marginTop: '-17%',marginBottom:'4%'}} source={patdet}/>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'center', color: 'rgba(0,0,0,0.67)' }}>Name: {patName}</Text>

                    <Text style={{fontSize: 18, fontWeight: 'bold', alignSelf: 'center', color: 'rgba(0,0,0,0.67)', }}> Age: {patdob}yrs.</Text>
                        
                    <Text style={{ borderBottomColor: '#C4C4C4', borderBottomWidth: 1, width: '90%', alignSelf: 'center', marginBottom: '1%',}}></Text>

                    <Text style={styles.title}>Session</Text>
                    <Text style={styles.info}>{patSession}</Text>
                    
                    <Text style={styles.title}>Timing</Text>
                    <Text style={styles.info}>{patTime}</Text>
                    
                    <Text style={styles.title}>Blood Group</Text>
                    <Text style={styles.info}>{patbg}</Text>
                    
                    <Text style={styles.title}>Disease description</Text>
                    <Text style={styles.info}>{symp}</Text>
                    
                    <Text style={styles.title}>Charged consultation fee</Text>
                    <Text style={styles.info}>{confee}/- rs.</Text>
                    
                    <Text style={styles.title}>Contact on</Text>
                    <Text style={styles.info}>+91 {patcon}</Text>
                    
                    <TouchableOpacity 
                            style={styles.butt}
                            onPress={ViewReco}>
                        <Text style={{ color: '#fff', fontSize: 21, padding: 10, marginLeft: 30, width: 190}}>Medical Record</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                            style={styles.butt}
                            onPress={prescribe}>
                        <Text style={{ color: '#fff', fontSize: 21, padding: 10, marginLeft: 60, width: 200}}>Start Session</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
            </ScrollView>
            <Modal isVisible={isModalVisible} style={styles.modalbox}>
                <Text style={{color:'#fff',alignSelf:'center',fontSize:18, fontWeight:'bold',marginTop:10}}>No Medical Record Uploaded!!</Text>    
                <TouchableOpacity
                    onPress={toggleModal}
                    style={styles.closebut}>
                    <Text style={{color:'#fff',fontSize:18}}>Back</Text>
                </TouchableOpacity>
            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    box:{
        backgroundColor: '#fff',
        // height: 600,
        height: 700,
        borderRadius: 20,
        width: '90%',
        alignSelf: 'center',
        marginTop: '-20%',
        elevation:10,
    },
    shadowProp: {
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
    },
    title:{
        marginLeft: '9%',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'rgba(7,115,149,0.67)',
        textDecorationLine: 'underline',
    },
    info:{
        marginLeft: '9%',
        fontSize: 16,
        marginBottom: '4%',
    },
    butt:{
        backgroundColor:'#32B757',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginTop: '1%',
    },
    modalbox:{
        marginTop:60,
        justifyContent:'center',
        backgroundColor:'rgba(1,1,1,0.5)',
        borderRadius:10,
    },
    closebut:{
        backgroundColor:'#909090',
        width: 120,
        height: 40,
        alignItems:'center',
        borderRadius:10,
        padding: 5,
        // marginTop: 20,
        marginLeft: 130,
    },
    box1: {
        width: '95%',
        height: 80,
        borderColor: '#c4c4c4',
        backgroundColor: '#fff',
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
});







// import React from 'react'
// import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from "react-native";
// import { ScrollView } from 'react-native-gesture-handler';

// import patdet from '../../assets/images/patdet.png';


// export default function PatDetails({ route,navigation}) {
//     const { patName,patdob, patSession, patTime,patbg, patcon, symp, confee,Patid} = route.params
//     console.log('patientsPatid',patName,patdob, patSession, patTime,patbg, patcon, symp, confee,Patid);
//     const prescribe = () => {
//         navigation.navigate('DocPrescri');

//     }
//     return (
//         <View>
//             <ScrollView>
//             <View style={{ backgroundColor:'#C4C4C4', height: 740, borderRadius: 10}}>
//                 <View style={{ backgroundColor: '#077395', height: 200, }}>
//                     <Text style={{ fontSize: 24, color: '#fff', alignSelf: 'center',fontWeight: 'bold',marginTop: '5%'}}>Patient's Details</Text>
//                 </View>
//                     <View style={[styles.box, styles.shadowProp]}>
//                     <Image style={{ width: '35%', height: 130, alignSelf: 'center', marginTop: '-17%',marginBottom:'4%'}} source={patdet}/>
//                     <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'center', color: 'rgba(0,0,0,0.67)' }}>Name: {patName}</Text>

//                     <Text style={{fontSize: 18, fontWeight: 'bold', alignSelf: 'center', color: 'rgba(0,0,0,0.67)', }}> Age: {patdob}yrs.</Text>
                        
//                     <Text style={{ borderBottomColor: '#C4C4C4', borderBottomWidth: 1, width: '90%', alignSelf: 'center', marginBottom: '1%',}}></Text>

//                     <Text style={styles.title}>Session</Text>
//                     <Text style={styles.info}>{patSession}</Text>
                    
//                     <Text style={styles.title}>Timing</Text>
//                     <Text style={styles.info}>{patTime}</Text>
                    
//                     <Text style={styles.title}>Blood Group</Text>
//                     <Text style={styles.info}>{patbg}</Text>
                    
//                     <Text style={styles.title}>Disease description</Text>
//                     <Text style={styles.info}>{symp}</Text>
                    
//                     <Text style={styles.title}>Charged consultation fee</Text>
//                     <Text style={styles.info}>{confee}/- rs.</Text>
                    
//                     <Text style={styles.title}>Contact on</Text>
//                     <Text style={styles.info}>+91 {patcon}</Text>
                    
//                     <TouchableOpacity 
//                             style={styles.butt}
//                             onPress={prescribe}>
//                         <Text style={{ color: '#fff', fontSize: 21, padding: 10, marginLeft: 60, width: 200}}>Start Session</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//             </ScrollView>
//         </View>
//     )
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//     },
//     box:{
//         backgroundColor: '#fff',
//         height: 600,
//         borderRadius: 20,
//         width: '90%',
//         alignSelf: 'center',
//         marginTop: '-20%',
//         elevation:10,
//     },
//     shadowProp: {
//         shadowColor: '#000',
//         shadowOffset: { width: 2, height: 4 },
//         shadowOpacity: 0.4,
//         shadowRadius: 3,
//     },
//     title:{
//         marginLeft: '9%',
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: 'rgba(7,115,149,0.67)',
//         textDecorationLine: 'underline',
//     },
//     info:{
//         marginLeft: '9%',
//         fontSize: 16,
//         marginBottom: '4%',
//     },
//     butt:{
//         backgroundColor:'#32B757',
//         alignSelf: 'center',
//         alignItems: 'center',
//         borderRadius: 15,
//         marginTop: '1%',
//     },
// });


