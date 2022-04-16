import React, { useState } from "react";
import { StyleSheet, View, Text, Button, Image, TextInput, Switch,Alert,TouchableOpacity} from "react-native";
import { Picker } from '@react-native-picker/picker';
import { ScrollView } from "react-native-gesture-handler";
import DateTimePicker from '@react-native-community/datetimepicker';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set, onValue} from "firebase/database";
import { LogBox } from 'react-native';

import prof from '../../assets/images/Doc1.png';
import patdet from '../../assets/images/patdet.png';

export default function FillDetDoc({ navigation }) {
    LogBox.ignoreLogs(['Setting a timer']);

    const auth = getAuth();
    const db = getDatabase();
///////////////////////////////////// doctor's details ////////////////////////////////////////////////// 
    const [Name, setName] = useState('');
    const [Mobile, setMobile] = useState('');
    const [Email, setEmail] = useState('');
    const [Loc, setLoc] = useState('');
    const [Gen, setGen] = useState('');
    const [Lic, setLic] = useState('');
    const [Spec, setSpec] = useState('');
    const [Dob, setDob] = useState('');
    const [Consultc, setConsultc] = useState('');
    const [pass, setPassword] = useState('');

    const [textd, setTextd] = useState('dd/mm/yyyy');
    const [dated, setDated] = useState(new Date(1598051730000));
    const [moded, setModed] = useState('date');
    const [showd, setShowd] = useState(false);


    const onChanged = (event, selectedDate) => {
        const currentDate = selectedDate || dated;
        setShowd(Platform.OS === 'android');
        setDated(currentDate);
        setShowd(false);
        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        setTextd(fDate)
        
    };

    const showModed = (currentMode) => {
        setShowd(true);
        setModed(currentMode);
    };
    const showDatepickerd = () => {
        showModed('date');
        // setShow(false);
    };
    // STARTING TIME DOC
    const [datetime, setDatetime] = useState(new Date(1598051730000));
    const [modetime, setModetime] = useState('date');
    const [showtime, setShowtime] = useState(false);
    const [STime, setSTime] = useState('Start Time');

    const onChangetime = (event, selectedDate) => {
        const currentDate = selectedDate || datetime;
        setShowtime(Platform.OS === 'ios');
        setDatetime(currentDate);
        let tempDatetime = new Date(currentDate);
        let fDatetime = tempDatetime.getDate() + '/' + (tempDatetime.getMonth() + 1) + '/' + tempDatetime.getFullYear();
        let fTime = tempDatetime.getHours() + ':' + tempDatetime.getMinutes();
        console.log('\n\n\ncurrentDate',currentDate,'\n\n\n',fDatetime,'\n\n\n',fTime);
        setSTime(fTime);
    };

    const showModetime = (currentMode) => {
        setShowtime(true);
        setModetime(currentMode);
        
    };
    const showTimepicker = () => {
        showModetime('time');
    };
// ENDING TIME DOC
    const [datetimeE, setDatetimeE] = useState(new Date(1598051730000));
    const [modetimeE, setModetimeE] = useState('date');
    const [showtimeE, setShowtimeE] = useState(false);
    const [STimeE, setSTimeE] = useState('End Time');

    const onChangetimeE = (event, selectedDate) => {
        const currentDate = selectedDate || datetimeE;
        setShowtimeE(Platform.OS === 'ios');
        setDatetimeE(currentDate);
        let tempDatetimeE = new Date(currentDate);
        let fDatetimeE = tempDatetimeE.getDate() + '/' + (tempDatetimeE.getMonth() + 1) + '/' + tempDatetimeE.getFullYear();
        let fTimeE = tempDatetimeE.getHours() + ':' + tempDatetimeE.getMinutes();
        console.log('\n\n\ncurrentDateE',currentDate,'\n\n\n',fDatetimeE,'\n\n\n',fTimeE);
        setSTimeE(fTimeE);
    };

    const showModetimeE = (currentMode) => {
        setShowtimeE(true);
        setModetimeE(currentMode);
        
    };
    const showTimepickerE = () => {
        showModetimeE('time');
    };

///////////////////////////////////// Patient's details ////////////////////////////////////////////////// 
    const [Namep, setNamep] = useState('');
    const [Mobilep, setMobilep] = useState('');
    const [Emailp, setEmailp] = useState('');
    const [Heip, setHeip] = useState('');
    const [Weip, setWeip] = useState('');
    const [Genp, setGenp] = useState('');
    const [Bgp, setBgp] = useState('');
    const [Dobp, setDobp] = useState('');
    const [Contactp, setContactp] = useState('');
    const [passw, setPPassword] = useState('');

    const [textp, setTextp] = useState('dd/mm/yyyy');
    const [datep, setDatep] = useState(new Date(1598051730000));
    const [modep, setModep] = useState('date');
    const [showp, setShowp] = useState(false);

    const [toggle, setToggle] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || datep;
        setShowp(Platform.OS === 'android');
        setDatep(currentDate);
        setShowp(false);
        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        setTextp(fDate)
        
    };

    const showModep = (currentMode) => {
        setShowp(true);
        setModep(currentMode);
    };
    const showDatepicker = () => {
        showModep('date');
        // setShow(false);
    };


    const pressHandlerdoc = () => {
        // e.preventDefault();
        console.log('Name', Name, '\nMobile', Mobile, '\nEmail', Email, '\nLoc', Loc, '\nGen', Gen, '\nLic', Lic, '\nSpec', Spec, '\nDob', Dob, '\nConsultc', Consultc);
        
            createUserWithEmailAndPassword(auth, Email, pass)
            .then((userCredential) => {
                // Signed in 
                // const user = userCredential.user;
                const user = auth.currentUser;
                const userid = user['uid'];
                console.log('userrrrrrrr',user['uid']);

                set(ref(db,'Doctors/' + userid), {
                    Name: Name,
                    Email: Email,
                    Mobile: Mobile,
                    Location: Loc,
                    Gender: Gen,
                    LicenseNo: Lic,
                    Specialization: Spec,
                    DOB: textd,
                    ConsultationFee: Consultc,
                    id: userid,
                    About: About,
                    STime:STime,
                    ETime:STimeE,
                    Password : pass,
                    link: "null",
                    status: "unapproved",
                });
                Alert.alert(
                    "Your request has been submitted",
                    "You will recieve a mail as soon as your account gets approved",
                    [
                        {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                        },
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                    );
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                if(errorCode == "auth/email-already-in-use"){
                    Alert.alert(
                        "User Already exsist",
                        "Please login using your credentials",
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
                    // else if(errorCode == "auth/weak-password"){
                        else{
                        Alert.alert(
                            "Weak Password",
                            "Password should be at least 6 characters",
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
                // ..
            });
        // const userId = auth.currentUser;
        // console.log('user',userId['uid']);
        // const useri = userId['uid'];
        // console.log("drfgvhbjnmk", userId)
        
        
        setGen('');
        setName('');
        setMobile('');
        setEmail('');
        setLoc('');
        setLic('');
        setSTime('Start Time');
        setSTimeE('End Time');
        setSpec('');
        setDob('');
        setConsultc('');
        
        navigation.navigate('Signuppage');
    }

    const pressHandlerpat = () => {
        // e.preventDefault();
        console.log('Namep', Namep, '\nMobilep', Mobilep, '\nEmailp', Emailp, '\nHeip', Heip, '\nWeip', Weip, '\nGenp', Genp, '\nBgp', Bgp, '\nDobp', Dobp, '\nContactp', Contactp);
        const userId = auth.currentUser;
        console.log('user',userId['uid']);
        const useri = userId['uid'];
        set(ref(db,'Patients/' + useri), {
            Name: Namep,
            Email: Emailp,
            Mobile: Mobilep,
            Height: Heip,
            Weight: Weip,
            Gender: Genp,
            BloodGroup: Bgp,
            DOB: textp,
            EContact: Contactp,
            id: useri,
            Password: passw,

        });
        createUserWithEmailAndPassword(auth, Emailp, passw)
            .then((userCredential) => {
                // Signed in 
                // const user = userCredential.user;
                const user = auth.currentUser;
                console.log('user',user['uid']);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                if(errorCode == "auth/email-already-in-use"){
                    Alert.alert(
                        "User Already exsist",
                        "Please login using your credentials",
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
                     else if(errorCode == "auth/weak-password"){
                        Alert.alert(
                            "Weak Password",
                            "Password should be at least 6 characters",
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
                // ..
            });

        setNamep('');
        setMobilep('');
        setEmailp('');
        setHeip('');
        setWeip('');
        setGenp('');
        setBgp('');
        setDobp('');
        setContactp('');
        navigation.navigate('Homepat');
    }

    return (
        <View>
            <View
                style={{ backgroundColor: '#077395', height: 80, width: '100%', justifyContent: 'center', }}>
                <Text
                    style={{ color: '#fff', fontSize: 24, alignSelf: 'center',marginTop:20 }}>Fill Your Details</Text>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center',marginTop: '2%', }}>
                <Text style={{ marginLeft: '5%', marginTop: '2%', fontWeight: 'bold' }}>Patient??</Text>
                <Switch
                    style={{ width: 60, height: 40, transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
                    trackColor={{ false: 'gray', true: 'teal' }}
                    thumbColor="white"
                    onValueChange={(value) => setToggle(value)}
                    value={toggle}
                />
                <Text style={{ marginLeft: '5%', marginTop: '2%', fontWeight: 'bold' }}>Doctor??</Text>
            </View>

            {toggle == true ?
                <View>
                    {/* <ScrollView> */}
                    <View style={styles.outcontainer}>
                        
                        <View style={{ paddingTop: '30%', backgroundColor: '#1AA6E1', paddingBottom: 30, borderRadius: 30, }}>
                            <ScrollView>
                                <TextInput
                                    style={styles.nameinput}
                                    placeholder='Full Name'
                                    placeholderTextColor='#D8D8D8'
                                    value={Name}
                                    onChangeText={(val) => setName(val)}
                                />
                                <TextInput
                                    style={styles.nameinput}
                                    placeholder='Mobile Number'
                                    placeholderTextColor='#D8D8D8'
                                    keyboardType='numeric'
                                    autoCompleteType='tel'
                                    value={Mobile}
                                    onChangeText={(val) => setMobile(val)}
                                />
                                <TextInput
                                    style={styles.nameinput}
                                    placeholder='Email Address'
                                    placeholderTextColor='#D8D8D8'
                                    keyboardType='email-address'
                                    autoCompleteType='email'
                                    value={Email}
                                    onChangeText={(val) => setEmail(val)}
                                />
                                <TextInput
                                    style={styles.nameinput}
                                    placeholder='Location'
                                    placeholderTextColor='#D8D8D8'
                                    value={Loc}
                                    onChangeText={(val) => setLoc(val)}
                                />
                                <Picker
                                    style={styles.picker}
                                    selectedValue={Gen}
                                    onValueChange={(itemValue) => setGen(itemValue)}
                                >
                                    <Picker.Item label='Gender' style={{ color: '#D8D8D8' }} />
                                    <Picker.Item label='Male' value='Male' />
                                    <Picker.Item label='Female' value='Female' />
                                </Picker>
                                <TextInput
                                    style={styles.nameinput}
                                    placeholder='License Number'
                                    placeholderTextColor='#D8D8D8'
                                    value={Lic}
                                    onChangeText={(val) => setLic(val)}
                                />
                                <Picker
                                    style={styles.picker}
                                    selectedValue={Spec}
                                    onValueChange={(itemValue) => setSpec(itemValue)}
                                >
                                    <Picker.Item label='Specialization' style={{ color: '#D8D8D8' }} />
                                    <Picker.Item label='General' value='General' />
                                    <Picker.Item label='Heart' value='Heart' />
                                    <Picker.Item label='Ear' value='Ear' />
                                    <Picker.Item label='Teeth' value='Teeth' />
                                    <Picker.Item label='Lungs' value='Lungs' />
                                    <Picker.Item label='Brain' value='Brain' />
                                    <Picker.Item label='Bones' value='Bones' />
                                    <Picker.Item label='Gynecology' value='Gynecology' />
                                    <Picker.Item label='ENT' value='ENT' />
                                </Picker>
                                <TouchableOpacity style={{height: 60}} onPress={showDatepickerd}>
                                <Text style={styles.nameinput}>{textd}</Text>
                               
                                {showd && (
                                    <DateTimePicker
                                        testID="dateTimePicker"
                                        value={dated}
                                        mode={moded}
                                        is24Hour={true}
                                        display="default"
                                        onChange={onChanged}
                                    />
                                )}
                                </TouchableOpacity>
                                <TextInput
                                    style={styles.nameinput}
                                    placeholder='Password'
                                    placeholderTextColor='#D8D8D8'
                                    value={pass}
                                    onChangeText={(val) => setPassword(val)}
                                />
                                <TouchableOpacity>
                                {/* Starting Time */}
                                <Text style={styles.nameinput}>{STime}</Text>
                                    {showtime && (
                                        <DateTimePicker
                                        testID="dateTimePicker"
                                        value={datetime}
                                        mode={modetime}
                                        is24Hour={false}
                                        display="default"
                                        onChange={onChangetime}
                                        />
                                    )}
                                </TouchableOpacity>
                                <TouchableOpacity style={{height: 60}} onPress={showTimepickerE}>
                                    {/* Ending Time */}
                                <Text style={styles.nameinput}>{STimeE}</Text>
                                    {showtimeE && (
                                        <DateTimePicker
                                        testID="dateTimePicker"
                                        value={datetimeE}
                                        mode={modetimeE}
                                        is24Hour={false}
                                        display="default"
                                        onChange={onChangetimeE}
                                        />
                                    )}
                                </TouchableOpacity>
                                <TextInput
                                    style={styles.nameinput}
                                    placeholder='Consultation Charge'
                                    placeholderTextColor='#D8D8D8'
                                    keyboardType='numeric'
                                    value={Consultc}
                                    onChangeText={(val) => setConsultc(val)}
                                />
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => pressHandlerdoc()}>
                                    <Text style={styles.bottontext}>Continue</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                     
                    </View>
                    {/* </ScrollView> */}
                    <Image style={styles.profimage} source={prof} />

                </View>

                :
                <View>

                    <View style={styles.outcontainer}>
                        <View style={{ paddingTop: '30%', backgroundColor: '#1AA6E1',paddingBottom: 30, borderRadius:30}}>
                            <ScrollView>
                                <TextInput
                                    style={styles.nameinput}
                                    placeholder="Patient's Full Name"
                                    placeholderTextColor='#D8D8D8'
                                    value={Namep}
                                    onChangeText={(val) => setNamep(val)}
                                />
                                <TextInput
                                    style={styles.nameinput}
                                    placeholder='Mobile Number'
                                    placeholderTextColor='#D8D8D8'
                                    keyboardType='numeric'
                                    autoCompleteType='tel'
                                    value={Mobilep}
                                    onChangeText={(val) => setMobilep(val)}
                                />
                                <TextInput
                                    style={styles.nameinput}
                                    placeholder='Email Address'
                                    placeholderTextColor='#D8D8D8'
                                    keyboardType='email-address'
                                    autoCompleteType='email'
                                    value={Emailp}
                                    onChangeText={(val) => setEmailp(val)}
                                />
                                <TouchableOpacity style={{height: 60}} onPress={showDatepicker}>
                                <Text style={styles.nameinput}>{textp}</Text>
                               
                                {showp && (
                                    <DateTimePicker
                                        testID="dateTimePicker"
                                        value={datep}
                                        mode={modep}
                                        is24Hour={true}
                                        display="default"
                                        onChange={onChange}
                                    />
                                )}
                            </TouchableOpacity>
                                <Picker
                                    style={styles.picker}
                                    selectedValue={Genp}
                                    onValueChange={(itemValue) => setGenp(itemValue)}
                                >
                                    <Picker.Item label='Gender' style={{ color: '#D8D8D8' }} />
                                    <Picker.Item label='Male' value='Male' />
                                    <Picker.Item label='Female' value='Female' />
                                </Picker>
                                <Picker
                                    style={styles.picker}
                                    selectedValue={Bgp}
                                    onValueChange={(itemValue) => setBgp(itemValue)}
                                >
                                    <Picker.Item label='Blood Group' style={{ color: '#D8D8D8' }} />
                                    <Picker.Item label='+A' value='+A' />
                                    <Picker.Item label='+B' value='+B' />
                                    <Picker.Item label='+AB' value='+AB' />
                                    <Picker.Item label='+O' value='+O' />
                                    <Picker.Item label='-A' value='-A' />
                                    <Picker.Item label='-B' value='-B' />
                                    <Picker.Item label='-AB' value='-AB' />
                                    <Picker.Item label='-O' value='-O' />
                                </Picker>
                                <TextInput
                                    style={styles.nameinput}
                                    placeholder='Height'
                                    placeholderTextColor='#D8D8D8'
                                    value={Heip}
                                    keyboardType='numeric'
                                    onChangeText={(val) => setHeip(val)}
                                />
                                <TextInput
                                    style={styles.nameinput}
                                    placeholder='Weight'
                                    placeholderTextColor='#D8D8D8'
                                    value={Weip}
                                    keyboardType='numeric'
                                    onChangeText={(val) => setWeip(val)}
                                />
                                <TextInput
                                    style={styles.nameinput}
                                    placeholder='Password'
                                    placeholderTextColor='#D8D8D8'
                                    value={passw}
                                    onChangeText={(val) => setPPassword(val)}
                                />
                                <TextInput
                                    style={styles.nameinput}
                                    placeholder='Emergency Contact'
                                    placeholderTextColor='#D8D8D8'
                                    keyboardType='numeric'
                                    value={Contactp}
                                    onChangeText={(val) => setContactp(val)}
                                />
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => pressHandlerpat()}>
                                    <Text style={styles.bottontext}>Continue</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                        
                    </View>
                    <Image style={styles.profimage} source={patdet} />

                </View>
            }
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
        borderRadius: 30,
        width: '90%',
        paddingBottom: '4%',
        top: '13%',
        height:710,
        alignSelf:'center'
    },
    profimage: {
        width: '28%',
        height: 111,
        alignSelf: "center",
        marginTop: '-180%',
        borderRadius: 80,
        marginBottom: '7%',
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
        color: '#ffffff',
        marginBottom: '5%',
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
        width: '50%',
        height: 38,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingTop:3,
    },
    bottontext: {
        fontSize: 22,
    }
});