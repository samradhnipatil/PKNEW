import React ,{useState, useEffect} from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image ,TextInput, Alert} from "react-native";
import { ScrollView } from 'react-native-gesture-handler';

import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set, onValue,get,child,snapshot,} from "firebase/database";
import { LogBox } from 'react-native';

import viewdocdet from '../../assets/images/viewdocdet2.png';
import email from 'react-native-email';


export default function ViewDet({ route,navigation }) {

    LogBox.ignoreLogs(['Setting a timer']);

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

    const {item} = route.params;
    console.log('docnameViewdocdetails',item.Name);
    const [Link, setLink] = useState('');
        ///////////////////////////     CODE FOR MOVING TO VID OR INPERSON APPOINTMENT FORM /////////////////////////////////////////////
    const Approve = () => {
        set(ref(db,'Doctors/' + item.id), {
            Name: item.Name,
            Email: item.Email,
            Mobile: item.Mobile,
            Location: item.Location,
            Gender: item.Gender,
            LicenseNo: item.LicenseNo,
            Specialization: item.Specialization,
            DOB: item.DOB,
            About: item.About,
            ConsultationFee: item.ConsultationFee,
            id: item.id,
            link : Link,
            ETime: item.ETime,
            STime: item.STime,
            status: "approved",
        });
       
        //     Alert.alert(
    //         "Successfully Approved",
    //         [
    //             {
    //             text: "Cancel",
    //             onPress: () => console.log("Cancel Pressed"),
    //             style: "cancel"
    //             },
    //             { text: "OK", onPress: () => console.log("OK Pressed") }
    //         ]
    //         );
    // console.log("Updated link and status");


        // Add the email code here
        const to = [item.Email]

        console.log("emailllllllllll:",to);
        email(to, {
            // Optional additional arguments
            // cc: ['yamini.barhate03@gmail.com'], 
            // bcc: 'samradhni.patil14@gmail.com', 
            subject: 'Pocket Doctor-Account approved',
            body:'Congratulations!!!.\nYour Account has been approved. You cans login with your credentials.'
            
        }).catch(console.error)     
        setLink('');
        navigation.navigate('AdminHome',{  
            bg: bgarray,
            bgcount: bgarraycout,
            bddata:bdarr,                   
        });
    }

    return (
        <View>
            <View style={{ backgroundColor: '#C4C4C4', borderRadius: 10,  }}>
                    <View style={{ backgroundColor: '#077395', height: 150, }}>
                    </View>
                <View style={{ backgroundColor: '#fff', height: 630, borderRadius: 20, width: '90%', alignSelf: 'center', paddingRight: '2%', marginBottom: '20%', marginTop: '3%', elevation:10 }}>
                        <Image style={{ width: '33%', height: 110, alignSelf: 'center', marginTop: '-22%', borderRadius:10 }} source={viewdocdet} />
                        <Text style={{ fontSize: 19, fontWeight: 'bold', alignSelf: 'center', color: 'rgba(0,0,0,0.67)' }}>{item.Name}</Text>
                        <Text style={{ fontSize: 16, alignSelf: 'center', color: 'rgba(0,0,0,0.67)', marginBottom: '0%' }}>'MBBS.,MS GEN SURGERY'</Text>
                        <Text style={{ borderBottomColor: '#C4C4C4', borderBottomWidth: 1, width: '90%', alignSelf: 'center', marginBottom: '2%', }}></Text>
                    
                        <ScrollView>
                                <Text style={styles.title}>Email</Text>
                                <Text style={styles.info}>{ item.Email } Doctor</Text>
                                <Text style={styles.title}>License No</Text>
                                <Text style={styles.info}>{ item.LicenseNo }</Text>
                                <Text style={styles.title}>Date of Birth:</Text>
                                <Text style={styles.info}>{ item.DOB }</Text>
                                <Text style={styles.title}>Gender:</Text>
                                <Text style={styles.info}>{ item.Gender }</Text>
                                <Text style={styles.title}>Speciality</Text>
                                <Text style={styles.info}>{ item.Specialization } Doctor</Text>
                                <Text style={styles.title}>About</Text>
                                <Text style={styles.info}>{ item.About } Doctor</Text>
                                <Text style={styles.title}>Time Duration</Text>
                                <Text style={styles.info}>{ item.STime } - { item.ETime }</Text>
                                <Text style={styles.title}>Consultation fee</Text>
                                <Text style={styles.info}>Rs. { item.ConsultationFee } /-</Text>
                                <Text style={styles.title}>My Clinic</Text>
                                <Text style={styles.info}>{ item.Location }</Text>
                                <Text style={styles.title}>Contact on</Text>
                                <Text style={styles.info}>{ item.Mobile }</Text>
                                <Text style={styles.title}>Meeting Link</Text>
                                <View style={styles.box}>
                                    <TextInput
                                    style={styles.nameinput}
                                    placeholder='Assign Meeting Link'
                                    placeholderTextColor='#D8D8D8'
                                    value={Link}
                                    onChangeText={(val) => setLink(val)}
                                />
                                </View>
                                
                                <TouchableOpacity 
                                    style={styles.butt}
                                    onPress = {() =>Approve()}
                                >
                                    <Text style={{ color: '#fff', fontSize: 16,  width: '60%' ,paddingVertical:'3%', height: 40, alignSelf:'center'}}>Approve</Text>
                                </TouchableOpacity>
                            </ScrollView>
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
    box: {
        width: 315,
        height: 30,
        borderColor: '#c4c4c4',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        marginTop: '3%',
        marginBottom: '5%',
        alignSelf: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        paddingLeft:4,
    },
    nameinput: {
        width: '82%',
        height: 30,
        alignSelf: "center",
        fontSize: 16,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 1,
        borderLeftWidth: 0,
        borderBottomColor: '#ffffff',
        color: '#000',
        marginBottom: '5%',
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
        width:'40%'
    },
});