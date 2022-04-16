import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity,ScrollView,Alert } from 'react-native'
import Carousel from '../component/Carousel'
import { dummyData } from '../data/Data'
import Back from "../assets/images/back.jpg"
import Logo from "../assets/images/logo.png"
import { app } from '../config'
import { Picker } from '@react-native-picker/picker';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set, onValue,get,child,snapshot,} from "firebase/database";

import { LogBox } from 'react-native';

export default function signuppage({ navigation }) {
    LogBox.ignoreLogs(['Setting a timer']);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [Role, setRole] = useState();

    const auth = getAuth();
    const db = getDatabase();

    const bdarr=[];
    const regarr=[];

    const bgarray = ['O+','O-','AB+','AB-','A+','A-','B+','B-'];
    var bgarraycout = [];
    var Op = 0;
    var On = 0;
    var ABp = 0;
    var ABn = 0;
    var Ap = 0;
    var An = 0;
    var Bp = 0;
    var Bn = 0;

    useEffect(() => {
        const dbRefb = ref(getDatabase());
            get(child(dbRefb, `Blood_Donation/`)).then((snapshotb) => {
            if (snapshotb.exists()) {
            
                var bloodId = snapshotb.key ;
                // console.log("bloodId : "+ bloodId); 
                snapshotb.forEach(function(childSnapshot) {
                    var group = childSnapshot.key;
                    // console.log("group : "+ group); 
             
                    childSnapshot.forEach(function(snapshot3) {
                        var reg1 = snapshot3.key;
                        regarr.push(reg1);
                        // console.log("regarrrr : "+ regarr);
                        const reg = snapshot3.val();
                        reg.bid=reg1;
                        bdarr.push(reg);
                        // console.log('arrayyy',bdarr);
                      
                      

                            if (group == '+O')
                            {
                                Op +=1;
                            }
                            else if (group == '-O')
                            {
                                On +=1;
                            }
                            else if (group == '+AB')
                            {
                                ABp+=1;
                            }
                            else if (group == '-AB')
                            {
                                ABn+=1;
                            }
                            else if (group == '+A')
                            {
                                Ap +=1;
                            }
                            else if (group == '-A')
                            {
                                An +=1;
                            }
                            else if (group == '+B')
                            {
                                Bp+=1;
                            }
                            else if (group == '-B')
                            {
                                Bn+=1;
                            }  
                                          
                        
                    });
                });
                    bgarraycout.push(Op);
                    bgarraycout.push(On);
                    bgarraycout.push(ABp);
                    bgarraycout.push(ABn);
                    bgarraycout.push(Ap);
                    bgarraycout.push(An);
                    bgarraycout.push(Bp);
                    bgarraycout.push(Bn);
                    // console.log('Bg: ', bgarray, '\n Count:', bgarraycout);
                  
            } else {
                console.log("No data available");
            }
            }).catch((error) => {
                console.error(error);
            });
           

    });


    const login = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = auth.currentUser;
            console.log('user',user['uid']);
            const useri = user['uid'];
            if (Role == 'Doctor')
            {
                console.log('Dochome')
                navigation.navigate('Dochome');
            }
            else if (Role=='Admin'){
                // console.log('AdminHome')
                // // console.log('Bg: ', bgarray, '\n Count:', bgarraycout);
                // console.log('regarr:',regarr);

                // navigation.navigate('AdminHome',{  
                //     bg: bgarray,
                //     bgcount: bgarraycout,
                //     bddata:bdarr,
                //     bdid:regarr,
                   
                // });
                console.log('AdminHome')
                // console.log('Bg: ', bgarray, '\n Count:', bgarraycout);
                // console.log('regarr:',regarr);
                // console.log('bddataaa:', bdarr);
                navigation.navigate('AdminHome',{  
                    bg: bgarray,
                    bgcount: bgarraycout,
                    bddata:bdarr,                   
                });

            }
            else{
                console.log('Homepat')
                navigation.navigate('Homepat');
            }
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            if(errorCode == "auth/user-not-found"){
            Alert.alert(
                "User Not found",
                "Please Register",
                [
                    {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                    },
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
                );
            }
            if(errorCode == "auth/wrong-password"){
                Alert.alert(
                    "Incorrect Password",
                    "______________________",
                    "Enter correct password",
                    [
                        {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                        },
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                    );
                }
        });
    }

    const Newusersignin = () => {
        // navigate to filldet page
        // createUserWithEmailAndPassword(auth, email, password)
        // .then((userCredential) => {
        //     // Signed in 
        //     // const user = userCredential.user;
        //     const user = auth.currentUser;
        //     console.log('user',user['uid']);
        navigation.navigate('filldet');
        // })
        // .catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     console.log(errorMessage);
        //     if(errorCode == "auth/email-already-in-use"){
        //         Alert.alert(
        //             "User Already exsist",
        //             "Please login using your credentials",
        //             [
        //                 {
        //                 text: "Cancel",
        //                 onPress: () => console.log("Cancel Pressed"),
        //                 style: "cancel"
        //                 },
        //                 { text: "OK", onPress: () => console.log("OK Pressed") }
        //             ]
        //             );
        //         }
        //         // else if(errorCode == "auth/weak-password"){
        //             else{
        //             Alert.alert(
        //                 "Weak Password",
        //                 "Password should be at least 6 characters",
        //                 [
        //                     {
        //                     text: "Cancel",
        //                     onPress: () => console.log("Cancel Pressed"),
        //                     style: "cancel"
        //                     },
        //                     { text: "OK", onPress: () => console.log("OK Pressed") }
        //                 ]
        //                 );
        //             }
        //     // ..
        // });
    }
    return (
        <View>
            <Image style={styles.backimage} source={Back}></Image>
            <Image style={styles.logo} source={Logo}></Image>
            <Carousel data={dummyData} style={{ marginBottom: "5%" }} />
            <ScrollView style={{ marginTop: '10%', }}>
                <View style={styles.inputContainer}>
                    <Picker 
                        style = {styles.picker}
                        selectedValue = {Role}
                        onValueChange={(itemValue) => setRole(itemValue)}
                    >
                        <Picker.Item label='Select Your Role' />
                        <Picker.Item label = 'Doctor' value= 'Doctor'/>
                        <Picker.Item label='Patient' value='Patient' />
                        <Picker.Item label='Admin' value='Admin' />
                    </Picker> 
                    <TextInput
                        placeholder="Email"
                        value={email}
                        onChangeText={text => setEmail(text)}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={text => setPassword(text)}
                        style={styles.input}
                        secureTextEntry
                    />
                </View>
                <TouchableOpacity
                    style={styles.button}
                    // onPress={signInWithEmailAndPassword}
                onPress={login}
                >
                    <Text style={styles.bottontext}>Login in</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 19, alignSelf: 'center',paddingTop:5 }}>OR</Text>
                <TouchableOpacity
                    style={styles.button}
                    // onPress={createUserWithEmailAndPassword}
                    onPress={Newusersignin}
                >
                    <Text style={styles.bottontext}>Register as New User?</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        marginBottom: 14,
    },
    backimage: {
        position: 'absolute',
        flex: 1,
        width: '100%',
        height: 800,
    },
    logo: {
        height: 100,
        width: 100,
        marginTop: '10%',
        alignSelf: 'center',
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
        width: '85%',
        height: 42,
        alignSelf: "center",
    },
    inputpicker: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 5,
    },
    picker: {
        backgroundColor: 'white',
        borderRadius:15,
        width: '85%',
        height: 45,
        alignSelf: "center",
        color: 'gray',
    },
    button: {
        width: '60%',
        height: 35,
        padding: 5,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#268DAD',
        borderRadius: 15,
        borderColor: '#fff',
        borderWidth: 2,
        // marginBottom: '5%',
        marginTop: '1%',
    },
    bottontext: {
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 21,
        color: '#FFFFFF',
    },
})
