import React, {useState} from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity , ScrollView,TextInput,CheckBox, Alert} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import Textarea from 'react-native-textarea';
import { LogBox } from 'react-native';
import { getAuth} from "firebase/auth";
import { getDatabase, ref, set, onValue} from "firebase/database";

import bd from '../../assets/images/bd.jpg';

export default function BloodDonation({navigation}) {
    LogBox.ignoreLogs(['Setting a timer']);

    const auth = getAuth();
    const db = getDatabase();

    const userId = auth.currentUser;
    const useri=userId['uid'];

    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Bg, setBg] = useState('');
    const [Mobile, setMobile] = useState('');
    const [About, setAbout] = useState('');
    const [isChecked, setisChecked] = useState(false);



    // Date picker functions for DOB and Last  date of Blood donation
// Date of Birth

    const [textd, setTextd] = useState('');
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



    // for date of last blood donation
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode1, setMode1] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'android');
        setDate(currentDate);
        setShow(false);
        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        setText(fDate)
        
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode1(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };  
    
    

    const Organ = () =>{
        navigation.navigate('OrganDonation');
    }

    const pressHandlerdoc = () =>{
        if (isChecked){
            const BDid = Math.floor(1000 + Math.random() * 9000);
            const BDID="BD"+BDid;
            console.log('Name '+Name+'\nDOB '+textd+ '\nEmail '+Email+'\nBlood group '+Bg+ '\nLDATE '+text +'\nMob no '+Mobile+'\nAddress '+About+'\nchecked '+isChecked);
            set(ref(db,'Blood_Donation/'+ Bg + "/" +BDID), {
                UserId: useri,
                Name: Name,
                Email: Email,
                BloodGroup: Bg,
                Mobile: Mobile,
                DOB: textd,
                LastDate:text,
                About: About,
            });
            Alert.alert(
                "Successfully Registered",
                "You have registered successfully for Blood Donation,\n Thank You",
                [
                    {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                    },
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
                );
            setName('');
            setEmail('');
            setBg('');
            setMobile('');
            setTextd('');
            setText('');
            setAbout('');
            setisChecked(false);
        }
        else{
            Alert.alert(
                "Check the given box ",
                "I declare, I am a citizen of India and above 18 years of age.",
                [
                    {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                    },
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
                );
            
            console.log('please check the box');
        }
        
    }

    return (
        <View>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={styles.activeTab}>
                    <Text  style={styles.activeText}>Blood Donation</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.inactiveTab}
                    onPress={Organ}
                    >
                    <Text  style={styles.inactiveText}>Organ Donation</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'column'}}>
                <ScrollView>
                    <Image source={bd} style={styles.Image}/>
                    <View style={styles.form}>
                        <Text style={styles.title}>Register for Blood Donation</Text>
                        <Text style={styles.labeltext}>Full Name</Text>
                        <TextInput
                            style={styles.nameinput}
                            // placeholder='Full Name'
                            placeholderTextColor='#D8D8D8'
                            value={Name}
                            onChangeText={(val) => setName(val)}
                        />
                        <Text style={styles.labeltext}>Date of Birth</Text>
                        <TouchableOpacity style={{height: 60}} onPress={showDatepickerd}>
                            <Text style={styles.nameinput}>{textd}</Text>                               
                            {showd && (
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    value={dated}
                                    mode={moded}
                                    maximumDate={new Date(2004, 1, 1)}
                                    is24Hour={true}
                                    display="default"
                                    onChange={onChanged}
                                />
                            )}
                        </TouchableOpacity>
                        <Text style={styles.labeltext}>Email Address</Text>
                        <TextInput
                            style={styles.nameinput}
                            // placeholder='Email Address'
                            placeholderTextColor='#D8D8D8'
                            keyboardType='email-address'
                            autoCompleteType='email'
                            value={Email}
                            onChangeText={(val) => setEmail(val)}
                        />
                        <Text style={styles.labeltext}>Blood Group</Text>
                        <Picker
                            style={styles.picker}
                            selectedValue={Bg}
                            onValueChange={(itemValue) => setBg(itemValue)}
                        >
                            <Picker.Item label='' style={{ color: '#D8D8D8' }} />
                            <Picker.Item label='+A' value='+A' />
                            <Picker.Item label='+B' value='+B' />
                            <Picker.Item label='+AB' value='+AB' />
                            <Picker.Item label='+O' value='+O' />
                            <Picker.Item label='-A' value='-A' />
                            <Picker.Item label='-B' value='-B' />
                            <Picker.Item label='-AB' value='-AB' />
                            <Picker.Item label='-O' value='-O' />
                        </Picker>
                        <View style={styles.bottomLine}></View>
                        <Text style={styles.labeltext}>Last  date of Blood donation</Text>
                        <TouchableOpacity style={{height: 60}} onPress={showDatepicker}>
                            <Text style={styles.nameinput}>{text}</Text>
                                {show && (
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    value={date}
                                    mode={mode1}
                                    is24Hour={true}
                                    display="default"
                                    onChange={onChange}
                                />
                            )}
                        </TouchableOpacity>
                        <Text style={styles.labeltext}>Mobile Number</Text>
                        <TextInput
                            style={styles.nameinput}
                            // placeholder='Mobile Number'
                            placeholderTextColor='#D8D8D8'
                            keyboardType='numeric'
                            autoCompleteType='tel'
                            value={Mobile}
                            onChangeText={(val) => setMobile(val)}
                        />
                        <Text style={styles.labeltext}>Address</Text>
                        <TextInput
                            style={styles.nameinput}
                            // placeholder='Full Name'
                            placeholderTextColor='#D8D8D8'
                            value={About}
                            onChangeText={(val) => setAbout(val)}
                        />
                        {/* <Textarea
                            style={styles.textarea}
                            value={About}
                            onChangeText={(val) => setAbout(val)}
                            maxLength={100}
                            placeholder={'Add about Specialization here'}
                            placeholderTextColor={'#7d7c7c'}
                            underlineColorAndroid={'transparent'}
                        /> */}
                        <View style={{flexDirection:'row',left: '2%',}}>
                            <CheckBox
                            value={isChecked}
                            onValueChange={() => setisChecked(!isChecked)}
                            style={styles.checkbox}
                            />
                            <Text style={{fontSize:15, width:315, color:'#fff',marginBottom:20,}}>I declare, I am a citizen of India and above 18 years of age.</Text>
                        </View>
                        
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => pressHandlerdoc()}>
                            <Text style={styles.bottontext}>Submit</Text>
                        </TouchableOpacity>
                    </View>
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
    activeTab:{
        backgroundColor:'#077395', 
        width:'50%', 
        borderBottomRightRadius:17,
        borderTopRightRadius:17,
    },
    activeText:{
        fontSize: 16, 
        color:'#fff', 
        padding:6, 
        alignSelf:'center', 
        fontWeight:'bold'
    },
    inactiveTab:{
        backgroundColor:'transparent', 
        width:'50%',
    },
    inactiveText:{
        fontSize: 16, 
        color:'#077395', 
        padding:6, 
        alignSelf:'center', 
        fontWeight:'bold'
    },
    Image:{
        width:'95%',
        alignSelf:'center',
        marginTop: '2%',
        marginBottom: '2%',
        borderRadius:10,
        height:180,
    },
    form:{
        backgroundColor:'#077395', 
        height:810,
        width:'95%',
        alignSelf:'center',
        borderRadius:10,
        marginBottom: '20%',
    },
    title:{
        backgroundColor:'#EDE9E9',
        width:'80%',
        marginTop: '8%',
        marginBottom: '13%',
        alignSelf:'center',
        textAlign:'center',
        borderRadius:20,
        padding:8,
        color:'#353333',
        fontSize:17,
        fontWeight:'bold',
    },
    nameinput: {
        width: '82%',
        height: 30,
        alignSelf: "center",
        fontSize: 15,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 1,
        borderLeftWidth: 0,
        borderBottomColor: '#ffffff',
        color: '#ffffff',
        marginBottom: '5%',
    },
    labeltext: {
        width: '70%',
        height: 19,
        left: '8%',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 18,
        color:'#fff',
        marginBottom:6
    },
    picker: {
        width: '85%',
        height: 20,
        alignSelf: "center",
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff',
        color: '#ffffff',
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
    bottomLine:{
        width: '82%',
        height: 13,
        alignSelf: "center",
        fontSize: 15,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 1,
        borderLeftWidth: 0,
        borderBottomColor: '#ffffff',
        color: '#ffffff',
        marginBottom: '5%',
    },
    checkbox:{
        color:'#fff',
    },
    button: {
        width: '40%',
        height: 38,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#EDE9E9',
        borderRadius: 17,
        justifyContent:'center'
    },
    bottontext: {
        fontSize: 20,
        color:'#077395',
        fontWeight:'bold',
    },
});


// import React, {useState} from "react";
// import { StyleSheet, View, Text, Image, TouchableOpacity , ScrollView,TextInput,CheckBox, Alert} from "react-native";
// import DateTimePicker from '@react-native-community/datetimepicker';
// import { Picker } from '@react-native-picker/picker';
// import Textarea from 'react-native-textarea';
// import { LogBox } from 'react-native';
// import { getAuth} from "firebase/auth";
// import { getDatabase, ref, set, onValue} from "firebase/database";

// import bd from '../../assets/images/bd.jpg';

// export default function BloodDonation({navigation}) {
//     LogBox.ignoreLogs(['Setting a timer']);

//     const auth = getAuth();
//     const db = getDatabase();

//     const userId = auth.currentUser;
//     const useri=userId['uid'];

//     const [Name, setName] = useState('');
//     const [Email, setEmail] = useState('');
//     const [Bg, setBg] = useState('');
//     const [Mobile, setMobile] = useState('');
//     const [About, setAbout] = useState('');
//     const [isChecked, setisChecked] = useState(false);



//     // Date picker functions for DOB and Last  date of Blood donation
// // Date of Birth

//     const [textd, setTextd] = useState('');
//     const [dated, setDated] = useState(new Date(1598051730000));
//     const [moded, setModed] = useState('date');
//     const [showd, setShowd] = useState(false);


//     const onChanged = (event, selectedDate) => {
//         const currentDate = selectedDate || dated;
//         setShowd(Platform.OS === 'android');
//         setDated(currentDate);
//         setShowd(false);
//         let tempDate = new Date(currentDate);
//         let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
//         setTextd(fDate)
        
//     };

//     const showModed = (currentMode) => {
//         setShowd(true);
//         setModed(currentMode);
//     };
//     const showDatepickerd = () => {
//         showModed('date');
//         // setShow(false);
//     };



//     // for date of last blood donation
//     const [date, setDate] = useState(new Date(1598051730000));
//     const [mode1, setMode1] = useState('date');
//     const [show, setShow] = useState(false);
//     const [text, setText] = useState('');

//     const onChange = (event, selectedDate) => {
//         const currentDate = selectedDate || date;
//         setShow(Platform.OS === 'android');
//         setDate(currentDate);
//         setShow(false);
//         let tempDate = new Date(currentDate);
//         let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
//         setText(fDate)
        
//     };

//     const showMode = (currentMode) => {
//         setShow(true);
//         setMode1(currentMode);
//     };

//     const showDatepicker = () => {
//         showMode('date');
//     };  
    
    

//     const Organ = () =>{
//         navigation.navigate('OrganDonation');
//     }

//     const pressHandlerdoc = () =>{
//         if (isChecked){
//             const BDid = Math.floor(1000 + Math.random() * 9000);
//             const BDID="BD"+BDid;
//             console.log('Name '+Name+'\nDOB '+textd+ '\nEmail '+Email+'\nBlood group '+Bg+ '\nLDATE '+text +'\nMob no '+Mobile+'\nAddress '+About+'\nchecked '+isChecked);
//             set(ref(db,'Blood_Donation/'+ useri + "/" +BDID), {
//                 Name: Name,
//                 Email: Email,
//                 BloodGroup: Bg,
//                 Mobile: Mobile,
//                 DOB: textd,
//                 LastDate:text,
//                 About: About,
//             });
//             Alert.alert(
//                 "Successfully Registered",
//                 "You have registered successfully for Blood Donation,\n Thank You",
//                 [
//                     {
//                     text: "Cancel",
//                     onPress: () => console.log("Cancel Pressed"),
//                     style: "cancel"
//                     },
//                     { text: "OK", onPress: () => console.log("OK Pressed") }
//                 ]
//                 );
//             setName('');
//             setEmail('');
//             setBg('');
//             setMobile('');
//             setTextd('');
//             setText('');
//             setAbout('');
//             setisChecked(false);
//         }
//         else{
//             Alert.alert(
//                 "Check the given box ",
//                 "I declare, I am a citizen of India and above 18 years of age.",
//                 [
//                     {
//                     text: "Cancel",
//                     onPress: () => console.log("Cancel Pressed"),
//                     style: "cancel"
//                     },
//                     { text: "OK", onPress: () => console.log("OK Pressed") }
//                 ]
//                 );
            
//             console.log('please check the box');
//         }
        
//     }

//     return (
//         <View>
//             <View style={{flexDirection:'row'}}>
//                 <TouchableOpacity style={styles.activeTab}>
//                     <Text  style={styles.activeText}>Blood Donation</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity 
//                     style={styles.inactiveTab}
//                     onPress={Organ}
//                     >
//                     <Text  style={styles.inactiveText}>Organ Donation</Text>
//                 </TouchableOpacity>
//             </View>
//             <View style={{flexDirection:'column'}}>
//                 <ScrollView>
//                     <Image source={bd} style={styles.Image}/>
//                     <View style={styles.form}>
//                         <Text style={styles.title}>Register for Blood Donation</Text>
//                         <Text style={styles.labeltext}>Full Name</Text>
//                         <TextInput
//                             style={styles.nameinput}
//                             // placeholder='Full Name'
//                             placeholderTextColor='#D8D8D8'
//                             value={Name}
//                             onChangeText={(val) => setName(val)}
//                         />
//                         <Text style={styles.labeltext}>Date of Birth</Text>
//                         <TouchableOpacity style={{height: 60}} onPress={showDatepickerd}>
//                             <Text style={styles.nameinput}>{textd}</Text>                               
//                             {showd && (
//                                 <DateTimePicker
//                                     testID="dateTimePicker"
//                                     value={dated}
//                                     mode={moded}
//                                     maximumDate={new Date(2004, 1, 1)}
//                                     is24Hour={true}
//                                     display="default"
//                                     onChange={onChanged}
//                                 />
//                             )}
//                         </TouchableOpacity>
//                         <Text style={styles.labeltext}>Email Address</Text>
//                         <TextInput
//                             style={styles.nameinput}
//                             // placeholder='Email Address'
//                             placeholderTextColor='#D8D8D8'
//                             keyboardType='email-address'
//                             autoCompleteType='email'
//                             value={Email}
//                             onChangeText={(val) => setEmail(val)}
//                         />
//                         <Text style={styles.labeltext}>Blood Group</Text>
//                         <Picker
//                             style={styles.picker}
//                             selectedValue={Bg}
//                             onValueChange={(itemValue) => setBg(itemValue)}
//                         >
//                             <Picker.Item label='' style={{ color: '#D8D8D8' }} />
//                             <Picker.Item label='+A' value='+A' />
//                             <Picker.Item label='+B' value='+B' />
//                             <Picker.Item label='+AB' value='+AB' />
//                             <Picker.Item label='+O' value='+O' />
//                             <Picker.Item label='-A' value='-A' />
//                             <Picker.Item label='-B' value='-B' />
//                             <Picker.Item label='-AB' value='-AB' />
//                             <Picker.Item label='-O' value='-O' />
//                         </Picker>
//                         <View style={styles.bottomLine}></View>
//                         <Text style={styles.labeltext}>Last  date of Blood donation</Text>
//                         <TouchableOpacity style={{height: 60}} onPress={showDatepicker}>
//                             <Text style={styles.nameinput}>{text}</Text>
//                                 {show && (
//                                 <DateTimePicker
//                                     testID="dateTimePicker"
//                                     value={date}
//                                     mode={mode1}
//                                     is24Hour={true}
//                                     display="default"
//                                     onChange={onChange}
//                                 />
//                             )}
//                         </TouchableOpacity>
//                         <Text style={styles.labeltext}>Mobile Number</Text>
//                         <TextInput
//                             style={styles.nameinput}
//                             // placeholder='Mobile Number'
//                             placeholderTextColor='#D8D8D8'
//                             keyboardType='numeric'
//                             autoCompleteType='tel'
//                             value={Mobile}
//                             onChangeText={(val) => setMobile(val)}
//                         />
//                         <Text style={styles.labeltext}>Address</Text>
//                         <TextInput
//                             style={styles.nameinput}
//                             // placeholder='Full Name'
//                             placeholderTextColor='#D8D8D8'
//                             value={About}
//                             onChangeText={(val) => setAbout(val)}
//                         />
//                         {/* <Textarea
//                             style={styles.textarea}
//                             value={About}
//                             onChangeText={(val) => setAbout(val)}
//                             maxLength={100}
//                             placeholder={'Add about Specialization here'}
//                             placeholderTextColor={'#7d7c7c'}
//                             underlineColorAndroid={'transparent'}
//                         /> */}
//                         <View style={{flexDirection:'row',left: '2%',}}>
//                             <CheckBox
//                             value={isChecked}
//                             onValueChange={() => setisChecked(!isChecked)}
//                             style={styles.checkbox}
//                             />
//                             <Text style={{fontSize:15, width:315, color:'#fff',marginBottom:20,}}>I declare, I am a citizen of India and above 18 years of age.</Text>
//                         </View>
                        
//                         <TouchableOpacity
//                             style={styles.button}
//                             onPress={() => pressHandlerdoc()}>
//                             <Text style={styles.bottontext}>Submit</Text>
//                         </TouchableOpacity>
//                     </View>
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
//     activeTab:{
//         backgroundColor:'#077395', 
//         width:'50%', 
//         borderBottomRightRadius:17,
//         borderTopRightRadius:17,
//     },
//     activeText:{
//         fontSize: 16, 
//         color:'#fff', 
//         padding:6, 
//         alignSelf:'center', 
//         fontWeight:'bold'
//     },
//     inactiveTab:{
//         backgroundColor:'transparent', 
//         width:'50%',
//     },
//     inactiveText:{
//         fontSize: 16, 
//         color:'#077395', 
//         padding:6, 
//         alignSelf:'center', 
//         fontWeight:'bold'
//     },
//     Image:{
//         width:'95%',
//         alignSelf:'center',
//         marginTop: '2%',
//         marginBottom: '2%',
//         borderRadius:10,
//         height:180,
//     },
//     form:{
//         backgroundColor:'#077395', 
//         height:810,
//         width:'95%',
//         alignSelf:'center',
//         borderRadius:10,
//         marginBottom: '20%',
//     },
//     title:{
//         backgroundColor:'#EDE9E9',
//         width:'80%',
//         marginTop: '8%',
//         marginBottom: '13%',
//         alignSelf:'center',
//         textAlign:'center',
//         borderRadius:20,
//         padding:8,
//         color:'#353333',
//         fontSize:17,
//         fontWeight:'bold',
//     },
//     nameinput: {
//         width: '82%',
//         height: 30,
//         alignSelf: "center",
//         fontSize: 15,
//         borderRightWidth: 0,
//         borderTopWidth: 0,
//         borderBottomWidth: 1,
//         borderLeftWidth: 0,
//         borderBottomColor: '#ffffff',
//         color: '#ffffff',
//         marginBottom: '5%',
//     },
//     labeltext: {
//         width: '70%',
//         height: 19,
//         left: '8%',
//         fontFamily: 'Roboto',
//         fontWeight: 'bold',
//         fontSize: 15,
//         lineHeight: 18,
//         color:'#fff',
//         marginBottom:6
//     },
//     picker: {
//         width: '85%',
//         height: 20,
//         alignSelf: "center",
//         fontSize: 16,
//         borderBottomWidth: 1,
//         borderBottomColor: '#ffffff',
//         color: '#ffffff',
//     },
//     textarea: {
//         textAlignVertical: 'top',  // hack android
//         height: 140,
//         fontSize: 14,
//         color: '#1a1c1c',
//         padding: '3%',
//         width: '85%',
//         borderRadius: 15,
//         alignSelf: 'center',
//         backgroundColor: "#C4C4C4"
//     },
//     bottomLine:{
//         width: '82%',
//         height: 13,
//         alignSelf: "center",
//         fontSize: 15,
//         borderRightWidth: 0,
//         borderTopWidth: 0,
//         borderBottomWidth: 1,
//         borderLeftWidth: 0,
//         borderBottomColor: '#ffffff',
//         color: '#ffffff',
//         marginBottom: '5%',
//     },
//     checkbox:{
//         color:'#fff',
//     },
//     button: {
//         width: '40%',
//         height: 38,
//         alignItems: 'center',
//         alignSelf: 'center',
//         backgroundColor: '#EDE9E9',
//         borderRadius: 17,
//         justifyContent:'center'
//     },
//     bottontext: {
//         fontSize: 20,
//         color:'#077395',
//         fontWeight:'bold',
//     },
// });