import React, {useState, useEffect} from "react";
import { StyleSheet, View, Text, Button, Image, TextInput,ScrollView } from "react-native";
import profile from '../../assets/images/profile-removebg-preview.png';
import { Picker } from '@react-native-picker/picker';
import { TouchableOpacity } from "react-native-gesture-handler";

import { getDatabase, ref, set, onValue,} from "firebase/database";
import { getAuth} from "firebase/auth";
import { LogBox } from 'react-native';

export default function Profdoc({route, navigation }) {
    LogBox.ignoreLogs(['Setting a timer']);
    const auth = getAuth();
    const db = getDatabase();

    const user = auth.currentUser;
    console.log('user',user['uid']);
    const useri = user['uid'];

    const {docdata} = route.params
    console.log('data',docdata);

    const [Name, setName] = useState(docdata["Name"]);
    const [Mobile, setMobile] = useState(docdata["Mobile"]);
    const [Email, setEmail] = useState(docdata["Email"]);
    const [Dob, setDob] = useState(docdata["DOB"]);
    const [Gen, setGen] = useState(docdata["Gender"]);
    const [Bg, setBg] = useState(docdata["BloodGroup"]);
    const [Heig, setHeig] = useState(docdata["Height"]);
    const [Weig, setWeig] = useState(docdata["Weight"]);
    const [Emcon, setEmcon] = useState(docdata["EContact"]);
    const [Edit, setEdit] = useState(false);

    const pressHandler = () => {
        setEdit(true);
    }

    const saveHandler = () => {
        set(ref(db, 'Patients/' + useri), {
            Name,
            Mobile,
            Email,
            BloodGroup:Bg,
            Gender:Gen,
            Height:Heig,
            Weight:Weig,
            DOB:Dob,
            EContact:Emcon,
        })
        .then(() => {
            console.log("Data Upadted successfully!");
        })
        .catch((error) => {
            console.log("Error");
        });

        console.log('name',Name);
        console.log('email',Email);
        setEdit(false);
    }
    return (        
        <View style={styles.container}>
            <View
                style={{ backgroundColor: '#077395', height: 60, width: '100%', justifyContent: 'center',marginTop:'2%' }}>
                <Text
                    style={{ color: '#fff', fontSize: 22, alignSelf: 'center', }}>
                    My Profile
                </Text>
            </View>
            
            <View style={styles.outcontainer}>
                <Image style={styles.profimage} source={profile} />
                <ScrollView>
                <TextInput
                    editable={Edit}
                    style={styles.nameinput}
                    placeholder = 'Full Name'
                    placeholderTextColor= '#D8D8D8'
                    value = {Name}
                    onChangeText = {(val)=>setName(val)}
                />
                <TextInput
                    editable={Edit}
                    style={styles.nameinput}
                    placeholder= 'Mobile Number'
                    placeholderTextColor='#D8D8D8'
                    keyboardType= 'numeric'
                    autoCompleteType= 'tel'
                    value={Mobile}
                    onChangeText={(val) => setMobile(val)}
                />
                <TextInput
                        editable={Edit}
                    style={styles.nameinput}
                    placeholder='Email Address'
                    placeholderTextColor='#D8D8D8'
                    keyboardType= 'email-address'
                    autoCompleteType='email'
                    value={Email}
                    onChangeText={(val) => setEmail(val)}
                />
                <TextInput
                        editable={Edit}
                    style={styles.nameinput}
                    placeholder='Date of Birth'
                    placeholderTextColor='#D8D8D8'
                    value={Dob}
                    onChangeText={(val) => setDob(val)}
                />               
                <Picker 
                    editable={Edit}
                    style = {styles.picker}
                    selectedValue = {Gen}
                    onValueChange={(itemValue) => setGen(itemValue)}
                >
                    <Picker.Item label='Gender' />
                    <Picker.Item label = 'Male' value= 'Male'/>
                    <Picker.Item label='Female' value='Female' />
                </Picker> 
                 <TextInput
                    editable={Edit}
                    style={styles.nameinput}
                    placeholder='Blood Group'
                    placeholderTextColor='#D8D8D8'
                    value={Bg}
                    onChangeText={(val) => setBg(val)}
                />
                 <TextInput
                    editable={Edit}
                    style={styles.nameinput}
                    placeholder='Height'
                    placeholderTextColor='#D8D8D8'
                    value={Heig}
                    onChangeText={(val) => setHeig(val)}
                />
                 <TextInput
                    editable={Edit}
                    style={styles.nameinput}
                    placeholder='Weight'
                    placeholderTextColor='#D8D8D8'
                    value={Weig}
                    onChangeText={(val) => setWeig(val)}
                />
                 <TextInput
                    editable={Edit}
                    style={styles.nameinput}
                    placeholder='EmergencyContact'
                    placeholderTextColor='#D8D8D8'
                    value={Emcon}
                    onChangeText={(val) => setEmcon(val)}
                />

                    {Edit == true ?
                        <TouchableOpacity
                            style={styles.button}
                            onPress={saveHandler}>
                            <Text style={styles.bottontext}>Save Changes</Text>
                        </TouchableOpacity> :


                        <TouchableOpacity
                            style={styles.button}
                            onPress={pressHandler}>
                            <Text style={styles.bottontext}>Edit Profile</Text>
                        </TouchableOpacity>
                    }
                </ScrollView>
            </View>            
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
    outcontainer: {
        backgroundColor: '#1AA6E1',
        borderRadius: 30,
        width: '90%',
        top: '9%',
        height: 535,
        marginBottom: '25%',
        alignSelf: 'center',        
    },
    profimage: {
        width: '30%',
        alignSelf: 'center',
        height: 108,
        marginTop: '-16%',
        borderRadius: 80,
        marginBottom: '3%',
    },
    nameinput: {
        width: '85%',
        height: 30,
        alignSelf: "center",
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff',
        color: '#ffffff',
        marginBottom: '8%',
    },
    picker: {
        width: '85%',
        height: 30,
        alignSelf: "center",
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff',
        color: '#ffffff',
        marginBottom: '5%',
    },
    button: {
        width: '45%',
        height: 40,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        marginBottom: '10%',
        padding:5,
    },
    bottontext: {
        fontSize: 20,
    }
});