import React,{useEffect, useState} from 'react';
import { View, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Feather';
import Icon3 from 'react-native-vector-icons/SimpleLineIcons';

import { getAuth, signOut} from "firebase/auth";
import { getDatabase, ref, set,get, onValue, child} from "firebase/database";
import { LogBox } from 'react-native';

import prof from '../assets/images/profNB.png';

export function CustomDrawer({ navigation, props }) {
    LogBox.ignoreLogs(['Setting a timer']);
    const auth = getAuth();
    const db = getDatabase();
    const userId = auth.currentUser;
    // console.log('user',userId['uid']);
    const PatienId = userId['uid'];

    var arr=[];
    var wholearr = [];
    var arr1=[];
    var sum =0;
    var textcl;

    useEffect(() => {
        
        const dbRef = ref(getDatabase());
        get(child(dbRef, `Online_Appointments/`+ PatienId)).then((snapshot) => {
        if (snapshot.exists()) {
          
            var patId = snapshot.key ;
            // console.log("patId : "+ patId); // output is     :patId:rSxi2gNHsMbFGeFVZsyAqMSVTKt1
            if(PatienId==patId)
            {
                    snapshot.forEach(function(childSnapshot) {
                    var docidd = childSnapshot.key;
                    // console.log("docidd : "+ docidd); // output is    docidd :Doc1836
             
                    childSnapshot.forEach(function(snapshot3) {
                        var appoinidd = snapshot3.key;
                        // console.log("appoinidd : "+ appoinidd); // output is    appoinidd :Appoin3258

                        const starCountRef = ref(db,'Patients/'+ PatienId);
                        onValue(starCountRef, (snapshot) => {
                        const adata1 = snapshot.val();
                        const pcontact = adata1["Mobile"];
                        const pbg = adata1["BloodGroup"];
                        

                        const starCountRef = ref(db, 'Online_Appointments/'+ PatienId+'/'+ docidd +'/'+ appoinidd);
                        onValue(starCountRef, (snapshot) => {
                        const adata = snapshot.val();
                        if (adata['Status'] == 'Completed'){
                        sum = sum + parseInt(adata["feecharge"]);
                        adata.clr = 'green';
                        // console.log('ssssssssssssssssssuuuuuuuuuuuuuuuuuuuummmmm',sum);
                        }
                        else if(adata['Status'] == 'pending'){
                            sum = sum + parseInt(adata["feecharge"]);
                            adata.clr = 'blue';
                            // console.log('ssssssssssssssssssuuuuuuuuuuuuuuuuuuuummmmm',sum);
                            }
                        else{
                            sum = sum + 100;
                            // console.log('ssssssssssssssssssuuuuuuuuuuuuuuuuuuuummmmm',sum);
                            adata.clr = 'red';
                        }
                        adata.pcontact = pcontact;
                        adata.pbloodg = pbg;
                        arr1.push(adata);
                        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa:",arr1);
                        
                        const starCountRefdd = ref(db, 'Doctors/'+ docidd);
                        onValue(starCountRefdd, (snapshotd) => {
                            const datad = snapshotd.val();
                            // console.log('docdata',datad);
                            const dname = datad["Name"];
                            const dpo = datad["Specialization"];
                            const demail = datad["Email"];
                            const dlink = datad["link"];
                            adata.dLink = dlink;
                            // console.log('Specializationnnnnnnnnnnnnnnn', dname, dpo);
                            adata.dpost = dpo;
                            adata.doctname= dname; //doctname is key to be taken in array
                            adata.demail = demail;
                            // adata.dpost = datad["Specialization"];
                            adata.pid = PatienId,
                            adata.did = docidd,
                            adata.apid = appoinidd;
                            // console.log("apoint dataaaaaa: ",adata)
                            arr.push(adata);
                            // console.log('Arrrrayy :',arr);                                    
                        });
                        }); 
                        });
                    });
                    });
            
            }
            wholearr = arr;
            var arrpend = arr.filter(person => person.Status == "pending")
            // console.log('pendings',arrpend);
            // console.log('Arrrrayy :',arr);
            arr = arrpend;
            // console.log('arrpend :',arr);
            var arrpend1 = wholearr.filter(person => person.Status != "pending")
            console.log('Historyyy',arrpend1);
            wholearr = arrpend1;


            const starCountRefr = ref(db, 'Patients/'+ PatienId);
            onValue(starCountRefr, (snapshot) => {
                const datar = snapshot.val();
                pname =  datar["Name"];
            }); 


        } else {
            console.log("No data available");
        }
        }).catch((error) => {
            console.error(error);
        });
    });

     const myappoint = () => {
            navigation.navigate('Appointment',{
                arr,
            });
     }

    const showmyprof = () => {
        const user = auth.currentUser;
        const useri = user['uid'];
        var data;
        
        const starCountRef = ref(db, 'Patients/'+ useri);
        onValue(starCountRef, (snapshot) => {
        data = snapshot.val();
        navigation.navigate('Profpat',{
            docdata: data,
        });
        });    
    }

    const Pastrec = () =>{
        navigation.navigate('Pastrecord',{
            patname: pname,
        });
    }


    const signingOut = () => {
        // signOut(auth).then(() => {
        // // Sign-out successful.
        //     navigation.navigate('signuppage');
        // }).catch((error) => {
        //     console.log('error',error);
        // });
        navigation.navigate('signuppage');
    }

    const Historypage = () => {
        navigation.navigate('History',{
            Harr : wholearr,
        });
    }

    const Expensep = () => {
        navigation.navigate('Expense',{
            Harr : arr1,
            Sum: sum,
        });
    }
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 45, }}>
                            {/* <Avatar.Image
                                source={patdet}
                                size={60}
                            /> */}
                            <Image style={{ width: 60, height: 60, alignSelf: 'center', }} source={prof} />

                            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                <Title style={styles.title}>Yamini Barhate</Title>
                                <TouchableOpacity
                                    onPress={showmyprof}
                                >
                                    <Text style={{ color: '#C4C4C4', textDecorationLine: 'underline', }}>View And Edit Profile</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text style={{ borderBottomColor: '#e8e8e8', borderBottomWidth: 1, width: '130%', alignSelf: 'center', marginBottom: '1%',marginLeft:-30 }}></Text>

                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="home-outline"
                                    color='#fff'
                                    size={32}
                                />
                            )}
                            // label="Home"
                            label={() => (<Text style={{ color: 'white', fontSize: 18, }}>Home</Text>)}
                            onPress={() => { navigation.navigate('Home') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="calendar-month-outline"
                                    color='#fff'
                                    size={32}
                                />
                            )}
                            // label="My Appointments"
                            label={() => (<Text style={{ color: 'white', fontSize: 18 }}>My Appointments</Text>)}
                            onPress={myappoint}
                            // onPress={() => { navigation.navigate('My Appointments') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="currency-inr"
                                    color='#fff'
                                    size={32}
                                />
                            )}
                            // label="Expense"
                            label={() => (<Text style={{ color: 'white', fontSize: 18 }}>Expense</Text>)}
                            onPress={Expensep} />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="file-account"
                                    color='#fff'
                                    size={32}
                                />
                            )}
                            // label="Past Records"
                            label={() => (<Text style={{ color: 'white', fontSize: 18 }}>Past Records</Text>)}
                            onPress={Pastrec} />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="history"
                                    color='#fff'
                                    size={32}
                                />
                            )}
                            // label="History"
                            label={() => (<Text style={{ color: 'white', fontSize: 18 }}>History</Text>)}
                            onPress={Historypage} />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="alarm-multiple"
                                    color='#fff'
                                    size={32}
                                />
                            )}
                            // label="Medicine Reminder"
                            label={() => (<Text style={{ color: 'white', fontSize: 18 }}>Medicine Reminder</Text>)}
                            onPress={() => { navigation.navigate('Reminder') }} />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="book-open-variant"
                                    color='#fff'
                                    size={32}
                                />
                            )}
                            label={() => (<Text style={{ color: 'white', fontSize: 18 }}>Health Articles</Text>)}
                            onPress={() => { navigation.navigate('Articles Categories') }} />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon2
                                    name="settings"
                                    color="#fff"
                                    size={32}
                                />
                            )}
                            label={() => (<Text style={{ color: 'white', fontSize: 18 }}>Settings</Text>)}
                            onPress={() => { navigation.navigate('Setting') }} />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon3
                                    name="question"
                                    color="#fff"
                                    size={32}
                                />
                            )}
                            label={() => (<Text style={{ color: 'white', fontSize: 18 }}>Help center</Text>)}
                            onPress={() => { navigation.navigate('Helpcenter') }} />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="exit-to-app"
                                    color="#fff"
                                    size={32}
                                />
                            )}
                            label={() => (<Text style={{ color: 'white', fontSize: 18 }}>Sign Out</Text>)}
                            onPress={signingOut}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            
        </View>

    );
}
// export {CustomDrawer};
const styles = StyleSheet.create({
    drawerContent: {
        marginTop: -27,
        backgroundColor: '#077395',
        flex: 1,
        height:800,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 22,
        marginTop: 3,
        fontWeight: 'bold',
        color: '#e8e8e8'
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});

// import React,{useEffect, useState} from 'react';
// import { View, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
// import {
//     useTheme,
//     Avatar,
//     Title,
//     Caption,
//     Paragraph,
//     Drawer,
//     Text,
//     TouchableRipple,
//     Switch,
// } from 'react-native-paper';
// import {
//     DrawerContentScrollView,
//     DrawerItem
// } from '@react-navigation/drawer';

// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Icon2 from 'react-native-vector-icons/Feather';
// import Icon3 from 'react-native-vector-icons/SimpleLineIcons';

// import { getAuth, signOut} from "firebase/auth";
// import { getDatabase, ref, set,get, onValue, child} from "firebase/database";
// import { LogBox } from 'react-native';

// import prof from '../assets/images/profNB.png';

// export function CustomDrawer({ navigation, props }) {
//     LogBox.ignoreLogs(['Setting a timer']);
//     const auth = getAuth();
//     const db = getDatabase();
//     const userId = auth.currentUser;
//     // console.log('user',userId['uid']);
//     const PatienId = userId['uid'];

//     var arr=[];
//     var wholearr = [];
//     var arr1=[];
//     var sum =0;
//     var textcl;

//     useEffect(() => {
        
//         const dbRef = ref(getDatabase());
//         get(child(dbRef, `Online_Appointments/`+ PatienId)).then((snapshot) => {
//         if (snapshot.exists()) {
          
//             var patId = snapshot.key ;
//              console.log("patId : "+ patId); // output is     :patId:rSxi2gNHsMbFGeFVZsyAqMSVTKt1
//             if(PatienId==patId)
//             {
//                 snapshot.forEach(function(childSnapshot) {
//                 var docidd = childSnapshot.key;
//                      console.log("docidd : "+ docidd); // output is    docidd :Doc1836
             
//                     childSnapshot.forEach(function(snapshot3) {
//                         var appoinidd = snapshot3.key;
//                          console.log("appoinidd : "+ appoinidd); // output is    appoinidd :Appoin3258

//                         const starCountRef = ref(db,'Patients/'+ PatienId);
//                         onValue(starCountRef, (snapshot) => {
//                         const adata1 = snapshot.val();
//                         console.log("AAAAAAAAAAAAAAAAAAAAAAAAA",adata1)
//                         const pcontact = adata1["Mobile"];
//                         const pbg = adata1["BloodGroup"];
                        

//                         const starCountRef = ref(db, 'Online_Appointments/'+ PatienId+'/'+ docidd +'/'+ appoinidd);
//                         onValue(starCountRef, (snapshot) => {
//                         const adata = snapshot.val();
//                         if (adata['Status'] == 'Completed'){
//                         sum = sum + parseInt(adata["feecharge"]);
//                         adata.clr = 'green';
//                          console.log('ssssssssssssssssssuuuuuuuuuuuuuuuuuuuummmmm',adata); 
//                         }
//                         else if(adata['Status'] == 'pending'){
//                             sum = sum + parseInt(adata["feecharge"]);
//                             adata.clr = 'blue';
//                             // console.log('ssssssssssssssssssuuuuuuuuuuuuuuuuuuuummmmm',sum);
//                             }
//                         else{
//                             sum = sum + 100;
//                             // console.log('ssssssssssssssssssuuuuuuuuuuuuuuuuuuuummmmm',sum);
//                             adata.clr = 'red';
//                         }
//                         adata.pcontact = pcontact;
//                         adata.pbloodg = pbg;
//                         arr1.push(adata);
                        
//                         const starCountRefdd = ref(db, 'Doctors/'+ docidd);
//                         onValue(starCountRefdd, (snapshotd) => {
//                             const datad = snapshotd.val();
//                             console.log('docdata',datad);
//                             const dname = datad["Name"];
//                             const dpo = datad["Specialization"];
//                             const demail = datad["Email"];
//                             // console.log('Specializationnnnnnnnnnnnnnnn', dname, dpo);
//                             adata.dpost = dpo;
//                             adata.doctname= dname; //doctname is key to be taken in array
//                             adata.demail = demail;
//                             // adata.dpost = datad["Specialization"];
//                             adata.pid = PatienId,
//                             adata.did = docidd,
//                             adata.apid = appoinidd;
//                             // console.log("apoint dataaaaaa: ",adata)
//                             arr.push(adata);
//                             // console.log('Arrrrayy :',arr);                                    
//                         });
//                         }); 
//                         });
//                     });
//                     });
            
//             }
//             wholearr = arr;
//             var arrpend = arr.filter(person => person.Status == "pending")
//             // console.log('pendings',arrpend);
//             // console.log('Arrrrayy :',arr);
//             arr = arrpend;
//             // console.log('arrpend :',arr);
//             var arrpend1 = wholearr.filter(person => person.Status != "pending")
//             console.log('Historyyy',arrpend1);
//             wholearr = arrpend1;


//             const starCountRefr = ref(db, 'Patients/'+ PatienId);
//             onValue(starCountRefr, (snapshot) => {
//                 const datar = snapshot.val();
//                 pname =  datar["Name"];
//             }); 


//         } else {
//             console.log("No data available");
//         }
//         }).catch((error) => {
//             console.error(error);
//         });
//     });

//      const myappoint = () => {
//             navigation.navigate('Appointment',{
//                 arr,
//             });
//      }

//     const showmyprof = () => {
//         const user = auth.currentUser;
//         const useri = user['uid'];
//         var data;
        
//         const starCountRef = ref(db, 'Patients/'+ useri);
//         onValue(starCountRef, (snapshot) => {
//         data = snapshot.val();
//         navigation.navigate('Profpat',{
//             docdata: data,
//         });
//         });    
//     }

//     const Pastrec = () =>{
//         navigation.navigate('Pastrecord',{
//             patname: pname,
//         });
//     }


//     const signingOut = () => {
//         // signOut(auth).then(() => {
//         // // Sign-out successful.
//         //     navigation.navigate('signuppage');
//         // }).catch((error) => {
//         //     console.log('error',error);
//         // });
//         navigation.navigate('signuppage');
//     }

//     const Historypage = () => {
//         navigation.navigate('History',{
//             Harr : wholearr,
//         });
//     }

//     const Expensep = () => {
//         navigation.navigate('Expense',{
//             Harr : arr1,
//             Sum: sum,
//         });
//     }
//     return (
//         <View style={{ flex: 1 }}>
//             <DrawerContentScrollView {...props}>
//                 <View style={styles.drawerContent}>
//                     <View style={styles.userInfoSection}>
//                         <View style={{ flexDirection: 'row', marginTop: 45, }}>
//                             {/* <Avatar.Image
//                                 source={patdet}
//                                 size={60}
//                             /> */}
//                             <Image style={{ width: 60, height: 60, alignSelf: 'center', }} source={prof} />

//                             <View style={{ marginLeft: 15, flexDirection: 'column' }}>
//                                 <Title style={styles.title}>Yamini Barhate</Title>
//                                 <TouchableOpacity
//                                     onPress={showmyprof}
//                                 >
//                                     <Text style={{ color: '#C4C4C4', textDecorationLine: 'underline', }}>View And Edit Profile</Text>
//                                 </TouchableOpacity>
//                             </View>
//                         </View>
//                         <Text style={{ borderBottomColor: '#e8e8e8', borderBottomWidth: 1, width: '130%', alignSelf: 'center', marginBottom: '1%',marginLeft:-30 }}></Text>

//                     </View>

//                     <Drawer.Section style={styles.drawerSection}>
//                         <DrawerItem
//                             icon={({ color, size }) => (
//                                 <Icon
//                                     name="home-outline"
//                                     color='#fff'
//                                     size={32}
//                                 />
//                             )}
//                             // label="Home"
//                             label={() => (<Text style={{ color: 'white', fontSize: 18, }}>Home</Text>)}
//                             onPress={() => { navigation.navigate('Home') }}
//                         />
//                         <DrawerItem
//                             icon={({ color, size }) => (
//                                 <Icon
//                                     name="calendar-month-outline"
//                                     color='#fff'
//                                     size={32}
//                                 />
//                             )}
//                             // label="My Appointments"
//                             label={() => (<Text style={{ color: 'white', fontSize: 18 }}>My Appointments</Text>)}
//                             onPress={myappoint}
//                             // onPress={() => { navigation.navigate('My Appointments') }}
//                         />
//                         <DrawerItem
//                             icon={({ color, size }) => (
//                                 <Icon
//                                     name="currency-inr"
//                                     color='#fff'
//                                     size={32}
//                                 />
//                             )}
//                             // label="Expense"
//                             label={() => (<Text style={{ color: 'white', fontSize: 18 }}>Expense</Text>)}
//                             onPress={Expensep} />
//                         <DrawerItem
//                             icon={({ color, size }) => (
//                                 <Icon
//                                     name="file-account"
//                                     color='#fff'
//                                     size={32}
//                                 />
//                             )}
//                             // label="Past Records"
//                             label={() => (<Text style={{ color: 'white', fontSize: 18 }}>Past Records</Text>)}
//                             onPress={Pastrec} />

//                         <DrawerItem
//                             icon={({ color, size }) => (
//                                 <Icon
//                                     name="history"
//                                     color='#fff'
//                                     size={32}
//                                 />
//                             )}
//                             // label="History"
//                             label={() => (<Text style={{ color: 'white', fontSize: 18 }}>History</Text>)}
//                             onPress={Historypage} />
//                         <DrawerItem
//                             icon={({ color, size }) => (
//                                 <Icon
//                                     name="alarm-multiple"
//                                     color='#fff'
//                                     size={32}
//                                 />
//                             )}
//                             // label="Medicine Reminder"
//                             label={() => (<Text style={{ color: 'white', fontSize: 18 }}>Medicine Reminder</Text>)}
//                             onPress={() => { navigation.navigate('Reminder') }} />
//                         <DrawerItem
//                             icon={({ color, size }) => (
//                                 <Icon
//                                     name="book-open-variant"
//                                     color='#fff'
//                                     size={32}
//                                 />
//                             )}
//                             label={() => (<Text style={{ color: 'white', fontSize: 18 }}>Health Articles</Text>)}
//                             onPress={() => { navigation.navigate('Articles Categories') }} />
//                         <DrawerItem
//                             icon={({ color, size }) => (
//                                 <Icon2
//                                     name="settings"
//                                     color="#fff"
//                                     size={32}
//                                 />
//                             )}
//                             label={() => (<Text style={{ color: 'white', fontSize: 18 }}>Settings</Text>)}
//                             onPress={() => { navigation.navigate('Setting') }} />
//                         <DrawerItem
//                             icon={({ color, size }) => (
//                                 <Icon3
//                                     name="question"
//                                     color="#fff"
//                                     size={32}
//                                 />
//                             )}
//                             label={() => (<Text style={{ color: 'white', fontSize: 18 }}>Help center</Text>)}
//                             onPress={() => { navigation.navigate('Helpcenter') }} />
//                         <DrawerItem
//                             icon={({ color, size }) => (
//                                 <Icon
//                                     name="exit-to-app"
//                                     color="#fff"
//                                     size={32}
//                                 />
//                             )}
//                             label={() => (<Text style={{ color: 'white', fontSize: 18 }}>Sign Out</Text>)}
//                             onPress={signingOut}
//                         />
//                     </Drawer.Section>
//                 </View>
//             </DrawerContentScrollView>
            
//         </View>

//     );
// }
// // export {CustomDrawer};
// const styles = StyleSheet.create({
//     drawerContent: {
//         marginTop: -27,
//         backgroundColor: '#077395',
//         flex: 1,
//         height:800,
//     },
//     userInfoSection: {
//         paddingLeft: 20,
//     },
//     title: {
//         fontSize: 22,
//         marginTop: 3,
//         fontWeight: 'bold',
//         color: '#e8e8e8'
//     },
//     caption: {
//         fontSize: 14,
//         lineHeight: 14,
//     },
//     row: {
//         marginTop: 20,
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     section: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginRight: 15,
//     },
//     paragraph: {
//         fontWeight: 'bold',
//         marginRight: 3,
//     },
//     drawerSection: {
//         marginTop: 15,
//     },
//     bottomDrawerSection: {
//         marginBottom: 15,
//         borderTopColor: '#f4f4f4',
//         borderTopWidth: 1
//     },
//     preference: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         paddingVertical: 12,
//         paddingHorizontal: 16,
//     },
// });
