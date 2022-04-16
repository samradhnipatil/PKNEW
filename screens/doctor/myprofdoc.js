import React, { useState , useEffect} from "react";
import { StyleSheet, View, Text, Image, TextInput } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Textarea from 'react-native-textarea';
import DateTimePicker from '@react-native-community/datetimepicker';

import { getDatabase, ref, set, onValue,} from "firebase/database";
import { getAuth} from "firebase/auth";
import { LogBox } from 'react-native';

import prof from '../../assets/images/Doc1.png';


export default function MyProfDoc({route}) {
    LogBox.ignoreLogs(['Setting a timer']);
    const auth = getAuth();
    const db = getDatabase();

    const user = auth.currentUser;
    console.log('user',user['uid']);
    const useri = user['uid'];

    const { docdata } = route.params;

    const [Name1, setName1] = useState(docdata['Name']);
    const [Mobile, setMobile] = useState(docdata['Mobile']);
    const [Email, setEmail] = useState(docdata['Email']);
    const [Loc, setLoc] = useState(docdata['Location']);
    const [Gen, setGen] = useState(docdata['Gender']);
    const [Lic, setLic] = useState(docdata['LicenseNo']);
    const [Spec, setSpec] = useState(docdata['Specialization']);
    const [About, setAbout] = useState(docdata['About']);
    const [Dob, setDob] = useState(docdata['DOB']);
    const [Consultc, setConsultc] = useState(docdata['ConsultationFee']);
    const [Edit, setEdit] = useState(false);




    const [textd, setTextd] = useState(docdata['DOB']);
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
    const [STime, setSTime] = useState(docdata['STime']);

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
    const [STimeE, setSTimeE] = useState(docdata['ETime']);

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



    const pressHandler = () => {
        setEdit(true);
    }
    const saveHandler = () => {    
        console.log('STime',STime); 
        set(ref(db, 'Doctors/' + useri), {
            Name: Name1,
            Mobile,
            Email,
            Location:Loc,
            Gender:Gen,
            LicenseNo:Lic,
            Specialization:Spec,
            About:About,
            STime:STime,
            ETime:STimeE,
            DOB:textd,
            ConsultationFee:Consultc,
        })
        .then(() => {
            console.log("Data Upadted successfully!");
        })
        .catch((error) => {
            console.log("Error");
        });

        console.log('name',Name1);
        console.log('email',Email);
        setEdit(false);
    }


    return (
        <View>
            <View
                style={{ backgroundColor: '#077395', height: 60, width: '100%', justifyContent: 'center' }}>
                <Text
                    style={{ color: '#fff', fontSize: 22, alignSelf: 'center', }}>
                   My Profile
                </Text>
            </View>
            
            <View style={styles.outcontainer}>
                <Image style={styles.profimage} source={prof} />
                <ScrollView>
                
                <TextInput
                    editable={Edit}
                    style={styles.nameinput}
                    placeholder='Full Name'
                    placeholderTextColor='#D8D8D8'
                    value={Name1}
                    onChangeText={(val) => setName1(val)}
                />
                <TextInput
                    editable={Edit}
                    style={styles.nameinput}
                    placeholder='Mobile Number'
                    placeholderTextColor='#D8D8D8'
                    keyboardType='numeric'
                    autoCompleteType='tel'
                    value={Mobile}
                    onChangeText={(val) => setMobile(val)}
                />
                <TextInput
                    editable={Edit}
                    style={styles.nameinput}
                    placeholder='Email Address'
                    placeholderTextColor='#D8D8D8'
                    keyboardType='email-address'
                    autoCompleteType='email'
                    value={Email}
                    onChangeText={(val) => setEmail(val)}
                />
                <TextInput
                    editable={Edit}
                    style={styles.nameinput}
                    placeholder='Location'
                    placeholderTextColor='#D8D8D8'
                    value={Loc}
                    onChangeText={(val) => setLoc(val)}
                />
                <Picker
                    enabled={Edit}
                    style={styles.picker}
                    selectedValue={Gen}
                    onValueChange={(itemValue) => setGen(itemValue)}
                >
                    <Picker.Item label='Gender' style={{ color: '#D8D8D8' }} />
                    <Picker.Item label='Male' value='Male' />
                    <Picker.Item label='Female' value='Female' />
                </Picker>
                <TextInput
                    editable={Edit}
                    style={styles.nameinput}
                    placeholder='License Number'
                    placeholderTextColor='#D8D8D8'
                    value={Lic}
                    onChangeText={(val) => setLic(val)}
                />
                <Picker
                    enabled={Edit}
                    style={styles.picker}
                    selectedValue={Spec}
                    onValueChange={(itemValue) => setSpec(itemValue)}
                >
                    <Picker.Item label='Specialization' style={{ color: '#D8D8D8' }} />
                    <Picker.Item label='General' value='General' />
                    <Picker.Item label='Heart' value='Heart' />
                    <Picker.Item label='General' value='General' />
                    <Picker.Item label='Heart' value='Heart' />
                </Picker>
                <Textarea
                    enabled={Edit}
                    style={styles.textarea}
                    value={About}
                    onChangeText={(val) => setAbout(val)}
                    maxLength={100}
                    placeholder={'Add about Specialization here'}
                    placeholderTextColor={'#7d7c7c'}
                    underlineColorAndroid={'transparent'}
                />
                {/* <TextInput
                    editable={Edit}
                    style={styles.nameinput}
                    placeholder='Date of Birth'
                    placeholderTextColor='#D8D8D8'
                    value={Dob}
                    onChangeText={(val) => setDob(val)}
                /> */}
                <TouchableOpacity style={{height: 60}} onPress={showDatepickerd}>
                <Text style={styles.nameinput}>{textd}</Text>
                
                {showd && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={dated}
                        mode={moded}
                        is24Hour={true}
                        display="default"
                        maximumDate={new Date(1998, 1, 1)}
                        onChange={onChanged}
                    />
                )}
                </TouchableOpacity>
                <TouchableOpacity style={{height: 60}} onPress={showTimepicker}>
                    {/* // STARTING TIME DOC */}
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
                     {/* // STARTING TIME DOC */}
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
                    editable={Edit}
                    style={styles.nameinput}
                    placeholder='Consultation Charge'
                    placeholderTextColor='#D8D8D8'
                    keyboardType='numeric'
                    value={Consultc}
                    onChangeText={(val) => setConsultc(val)}
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
        top: '7%',
        height: 600,
        marginBottom:'10%',
        alignSelf: 'center'
    },
    profimage: {
        width: '29%',
        alignSelf: 'center',
        height: 100,
        marginTop: '-13%',
        borderRadius: 80,
        marginBottom: '5%',
        
    },
    nameinput: {
        width: '85%',
        height: 34,
        alignSelf: "center",
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff',
        color: '#ffffff',
        marginBottom: '6%',
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
        height: 37,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        marginBottom:'10%',
        paddingTop:3,
    },
    bottontext: {
        fontSize: 20,
    },
    textarea: {
        textAlignVertical: 'top',  // hack android
        height: 140,
        fontSize: 14,
        color: '#1a1c1c',
        padding: '3%',
        width: '85%',
        borderRadius: 15,
        alignSelf: 'center',
        backgroundColor: "#C4C4C4"
    },
});


// import React, { useState , useEffect} from "react";
// import { StyleSheet, View, Text, Image, TextInput } from "react-native";
// import { Picker } from '@react-native-picker/picker';
// import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

// import { getDatabase, ref, set, onValue,} from "firebase/database";
// import { getAuth} from "firebase/auth";
// import { LogBox } from 'react-native';

// import prof from '../../assets/images/Doc1.png';


// export default function MyProfDoc({route}) {
//     LogBox.ignoreLogs(['Setting a timer']);
//     const auth = getAuth();
//     const db = getDatabase();

//     const user = auth.currentUser;
//     console.log('user',user['uid']);
//     const useri = user['uid'];

//     const { docdata } = route.params;

//     const [Name1, setName1] = useState(docdata['Name']);
//     const [Mobile, setMobile] = useState(docdata['Mobile']);
//     const [Email, setEmail] = useState(docdata['Email']);
//     const [Loc, setLoc] = useState(docdata['Location']);
//     const [Gen, setGen] = useState(docdata['Gender']);
//     const [Lic, setLic] = useState(docdata['LicenseNo']);
//     const [Spec, setSpec] = useState(docdata['Specialization']);
//     const [Dob, setDob] = useState(docdata['DOB']);
//     const [Consultc, setConsultc] = useState(docdata['ConsultationFee']);
//     const [Edit, setEdit] = useState(false);


//     const pressHandler = () => {
//         setEdit(true);
//     }
//     const saveHandler = () => {        
//         set(ref(db, 'Doctors/' + useri), {
//             Name: Name1,
//             Mobile,
//             Email,
//             Location:Loc,
//             Gender:Gen,
//             LicenseNo:Lic,
//             Specialization:Spec,
//             DOB:Dob,
//             ConsultationFee:Consultc,
//         })
//         .then(() => {
//             console.log("Data Upadted successfully!");
//         })
//         .catch((error) => {
//             console.log("Error");
//         });

//         console.log('name',Name1);
//         console.log('email',Email);
//         setEdit(false);
//     }


//     return (
//         <View>
//             <View
//                 style={{ backgroundColor: '#077395', height: 60, width: '100%', justifyContent: 'center' }}>
//                 <Text
//                     style={{ color: '#fff', fontSize: 22, alignSelf: 'center', }}>
//                    My Profile
//                 </Text>
//             </View>
            
//             <View style={styles.outcontainer}>
//                 <Image style={styles.profimage} source={prof} />
//                 <ScrollView>
                
//                 <TextInput
//                     editable={Edit}
//                     style={styles.nameinput}
//                     placeholder='Full Name'
//                     placeholderTextColor='#D8D8D8'
//                     value={Name1}
//                     onChangeText={(val) => setName1(val)}
//                 />
//                 <TextInput
//                     editable={Edit}
//                     style={styles.nameinput}
//                     placeholder='Mobile Number'
//                     placeholderTextColor='#D8D8D8'
//                     keyboardType='numeric'
//                     autoCompleteType='tel'
//                     value={Mobile}
//                     onChangeText={(val) => setMobile(val)}
//                 />
//                 <TextInput
//                     editable={Edit}
//                     style={styles.nameinput}
//                     placeholder='Email Address'
//                     placeholderTextColor='#D8D8D8'
//                     keyboardType='email-address'
//                     autoCompleteType='email'
//                     value={Email}
//                     onChangeText={(val) => setEmail(val)}
//                 />
//                 <TextInput
//                     editable={Edit}
//                     style={styles.nameinput}
//                     placeholder='Location'
//                     placeholderTextColor='#D8D8D8'
//                     value={Loc}
//                     onChangeText={(val) => setLoc(val)}
//                 />
//                 <Picker
//                     enabled={Edit}
//                     style={styles.picker}
//                     selectedValue={Gen}
//                     onValueChange={(itemValue) => setGen(itemValue)}
//                 >
//                     <Picker.Item label='Gender' style={{ color: '#D8D8D8' }} />
//                     <Picker.Item label='Male' value='Male' />
//                     <Picker.Item label='Female' value='Female' />
//                 </Picker>
//                 <TextInput
//                     editable={Edit}
//                     style={styles.nameinput}
//                     placeholder='License Number'
//                     placeholderTextColor='#D8D8D8'
//                     value={Lic}
//                     onChangeText={(val) => setLic(val)}
//                 />
//                 <Picker
//                     enabled={Edit}
//                     style={styles.picker}
//                     selectedValue={Spec}
//                     onValueChange={(itemValue) => setSpec(itemValue)}
//                 >
//                     <Picker.Item label='Specialization' style={{ color: '#D8D8D8' }} />
//                     <Picker.Item label='General' value='General' />
//                     <Picker.Item label='Heart' value='Heart' />
//                     <Picker.Item label='General' value='General' />
//                     <Picker.Item label='Heart' value='Heart' />
//                 </Picker>
//                 <TextInput
//                     editable={Edit}
//                     style={styles.nameinput}
//                     placeholder='Date of Birth'
//                     placeholderTextColor='#D8D8D8'
//                     value={Dob}
//                     onChangeText={(val) => setDob(val)}
//                 />
//                 <TextInput
//                     editable={Edit}
//                     style={styles.nameinput}
//                     placeholder='Consultation Charge'
//                     placeholderTextColor='#D8D8D8'
//                     keyboardType='numeric'
//                     value={Consultc}
//                     onChangeText={(val) => setConsultc(val)}
//                 />

//                     {Edit == true ?
//                 <TouchableOpacity
//                     style={styles.button}
//                     onPress={saveHandler}>
//                     <Text style={styles.bottontext}>Save Changes</Text>
//                 </TouchableOpacity> :


//                 <TouchableOpacity
//                     style={styles.button}
//                     onPress={pressHandler}>
//                     <Text style={styles.bottontext}>Edit Profile</Text>
//                 </TouchableOpacity>
//             }
//                 </ScrollView>
//             </View>
           
            
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
//     outcontainer: {
//         backgroundColor: '#1AA6E1',
//         borderRadius: 30,
//         width: '90%',
//         top: '7%',
//         height: 600,
//         marginBottom:'10%',
//         alignSelf: 'center'
//     },
//     profimage: {
//         width: '29%',
//         alignSelf: 'center',
//         height: 100,
//         marginTop: '-13%',
//         borderRadius: 80,
//         marginBottom: '5%',
        
//     },
//     nameinput: {
//         width: '85%',
//         height: 34,
//         alignSelf: "center",
//         fontSize: 16,
//         borderBottomWidth: 1,
//         borderBottomColor: '#ffffff',
//         color: '#ffffff',
//         marginBottom: '6%',
//     },
//     picker: {
//         width: '85%',
//         height: 30,
//         alignSelf: "center",
//         fontSize: 16,
//         borderBottomWidth: 1,
//         borderBottomColor: '#ffffff',
//         color: '#ffffff',
//         marginBottom: '5%',
//     },
//     button: {
//         width: '45%',
//         height: 37,
//         alignItems: 'center',
//         alignSelf: 'center',
//         backgroundColor: '#fff',
//         borderRadius: 12,
//         marginBottom:'10%',
//         paddingTop:3,
//     },
//     bottontext: {
//         fontSize: 20,
//     }
// });
