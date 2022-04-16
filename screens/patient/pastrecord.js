import React,{useEffect} from "react";
import { StyleSheet, View, Text, Button,ScrollView,TouchableOpacity,Image ,ImageBackground} from "react-native";
import bgimg from '../../assets/images/re.jpg';

import { getAuth} from "firebase/auth";
import { getDatabase, ref, set,get, onValue, child} from "firebase/database";
import { LogBox } from 'react-native';

export default function Pastrecord({ route, navigation}) {
    LogBox.ignoreLogs(['Setting a timer']);
    const auth = getAuth();
    const db = getDatabase();
    const userId = auth.currentUser;
    const PatienId = userId['uid'];
    var recarr = [];
    var arr = [];
    
    useEffect(() => {
        const dbRef = ref(getDatabase());

        get(child(dbRef, `Doctors/`)).then((snapshot) => {
            if (snapshot.exists()) {
            
                snapshot.forEach(function(childSnapshot) {
                    var docidd = childSnapshot.key;
                    // console.log("docidd : "+ docidd); // output is    docidd :Doc1836
                    const starCountRef = ref(db, 'Doctors/'+ docidd);
                    onValue(starCountRef, (snapshot) => {
                        data = snapshot.val();
                        arr.push(data);
                        // console.log('arr',arr);
                    }); 
                    // console.log('arr2',arr);
                });
                console.log('Doctorsssssss',arr);
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
        console.error(error);
        });



        get(child(dbRef, `Record/`)).then((snapshot) => {
        if (snapshot.exists()) 
        {          
            var patId = snapshot.key ;
            console.log("\n\nrecords", patId);
            snapshot.forEach(function(childSnapshot) {
                var cat = childSnapshot.key;
                // console.log("Categories", cat);
                const starCountRefR = ref(db, 'Record/'+ cat+'/'+PatienId);
                onValue(starCountRefR, (snapshotd) => {
                    const Pat = snapshotd.key;  
                    // console.log("users", Pat); 
                    snapshotd.forEach(function(childSnapshot3) {
                        var catRepo = childSnapshot3.key;
                        // console.log("catRepo", catRepo);
                        childSnapshot3.forEach(function(childSnapshot4) {
                            var RecordID = childSnapshot4.key;
                            // console.log("RecordID\n",cat,'\n',Pat,'\n',catRepo,'\n',RecordID,'\n\n');

                            const starCountRefRDetails = ref(db, 'Record/'+ cat+'/'+PatienId+'/'+catRepo+'/'+RecordID);
                            onValue(starCountRefRDetails, (snapshotdetails) => {
                                const Rdetails = snapshotdetails.val();  
                                // console.log('Rdetails',Rdetails);   
                                Rdetails.RecId = RecordID;  
                                Rdetails.cat = catRepo; 
                                // console.log('Rdetails',Rdetails);     
                                recarr.push(Rdetails); 
                                // console.log('recarrINside',recarr);
                            });
                        });  
                    });                          
                });
            });
        }
        });   
        // console.log('recarr',recarr);   
    });
    
    
    const flag = false;

    const pressHandler=(title)=>{
        var doc2 = recarr.filter(person => person.cat == title)
        console.log('title,:  ', doc2);

        if(doc2 !=[])
        {
            navigation.navigate('Pastrecord1',{
                title,
                doc2,
                arr
            });
        }
        else{
            navigation.navigate('NoPastRecord',{
                title,
            });
        }
        
    }
    return(
        
        <View styles={styles.container}>
            <View
                    style={{ backgroundColor: '#077395', height: 60,  justifyContent: 'center' }}>
                    <Text
                        style={{ color: '#fff', fontSize: 22, alignSelf: 'center', }}>
                        Past Medical Records
                    </Text>
            </View>
            <ScrollView>
                <View styles={styles.container2}>
                    <ImageBackground source={bgimg} resizeMode="cover" style={styles.image}>
                        <TouchableOpacity 
                            style={styles.outerbox}
                            onPress={()=>pressHandler('Consultation  &  Prescription')}>
                        <Text style={styles.sectiontext}> Consultation & Prescription </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.outerbox} 
                            onPress={()=>pressHandler('Lab reports')}>
                            <Text style={styles.sectiontext}> Lab reports </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.outerbox} 
                            onPress={()=>pressHandler('Allergy Reports')}>
                            <Text style={styles.sectiontext}> Allergy Reports </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.outerbox} 
                            onPress={()=>pressHandler('Medical visits')}>
                            <Text style={styles.sectiontext}> Medical visits </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.outerbox} 
                            onPress={()=>pressHandler('Other documents')}>
                            <Text style={styles.sectiontext}> Other documents </Text>
                        </TouchableOpacity>
                    </ImageBackground>
                    
                    
                </View>            
            </ScrollView>
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
    container2: {
        alignItems: 'center',
    },
    sectiontext:{
        color: 'black',
        fontSize: 18,
        alignSelf: 'center',
        fontWeight:'bold'
    },
    outerbox:{
        backgroundColor:'#8CDAF2',
        // backgroundColor:'rgb(159,219,238)',
        height: 80,
        alignSelf: 'center',
        alignItems:'center',
        justifyContent: 'center',
        width:'90%',
        marginTop: 10,
        borderRadius: 15,
    },
    image: {
        flex: 1,
        justifyContent: "center",
        minHeight: 784,
        opacity: 0.9,
    },

});







// import React from "react";
// import { StyleSheet, View, Text, Button,ScrollView,TouchableOpacity,Image ,ImageBackground} from "react-native";
// import bgimg from '../../assets/images/re.jpg';


// export default function Pastrecord({ route, navigation}) {
//     const {patname} = route.params
//     console.log('patname',patname)
//     const pressHandler=(title)=>{
//         navigation.navigate('Pastrecord1',{
//             title,
//         });
//     }
//     return(
        
//         <View styles={styles.container}>
//             <View
//                     style={{ backgroundColor: '#077395', height: 60,  justifyContent: 'center' }}>
//                     <Text
//                         style={{ color: '#fff', fontSize: 22, alignSelf: 'center', }}>
//                         {patname}'s  Records
//                     </Text>
//             </View>
//             <ScrollView>
//                 <View styles={styles.container2}>
//                     <ImageBackground source={bgimg} resizeMode="cover" style={styles.image}>
//                         <TouchableOpacity 
//                             style={styles.outerbox}
//                             onPress={()=>pressHandler('Consultation  &  Prescription')}>
//                         <Text style={styles.sectiontext}> Consultation & Prescription </Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity 
//                             style={styles.outerbox} 
//                             onPress={()=>pressHandler('Lab reports')}>
//                             <Text style={styles.sectiontext}> Lab reports </Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity 
//                             style={styles.outerbox} 
//                             onPress={()=>pressHandler('Allergy Reports')}>
//                             <Text style={styles.sectiontext}> Allergy Reports </Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity 
//                             style={styles.outerbox} 
//                             onPress={()=>pressHandler('Medical visits')}>
//                             <Text style={styles.sectiontext}> Medical visits </Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity 
//                             style={styles.outerbox} 
//                             onPress={()=>pressHandler('Other documents')}>
//                             <Text style={styles.sectiontext}> Other documents </Text>
//                         </TouchableOpacity>
//                     </ImageBackground>
                    
                    
//                 </View>            
//             </ScrollView>
//         </View>       
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     container2: {
//         alignItems: 'center',
//     },
//     sectiontext:{
//         color: 'black',
//         fontSize: 18,
//         alignSelf: 'center',
//         fontWeight:'bold'
//     },
//     outerbox:{
//         backgroundColor:'#8CDAF2',
//         // backgroundColor:'rgb(159,219,238)',
//         height: 80,
//         alignSelf: 'center',
//         alignItems:'center',
//         justifyContent: 'center',
//         width:'90%',
//         marginTop: 10,
//         borderRadius: 15,
//     },
//     image: {
//         flex: 1,
//         justifyContent: "center",
//         minHeight: 784,
//         opacity: 0.9,
//     },

// });