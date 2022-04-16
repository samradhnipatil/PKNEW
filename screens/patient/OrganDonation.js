import React, {useState} from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity , ScrollView,TextInput,CheckBox, Alert} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import Textarea from 'react-native-textarea';
import { LogBox } from 'react-native';
import { getAuth} from "firebase/auth";
import { getDatabase, ref, set, onValue} from "firebase/database";


import od from '../../assets/images/od.jpg';

export default function OrganDonation({navigation}) {
    LogBox.ignoreLogs(['Setting a timer']);

    const auth = getAuth();
    const db = getDatabase();

    const userId = auth.currentUser;
    const useri=userId['uid'];

    const [Name, setName] = useState('');
    const [PName, setPName] = useState('');
    const [Gen, setGen] = useState('');
    const [Email, setEmail] = useState('');
    const [Bg, setBg] = useState('');
    const [Mobile, setMobile] = useState('');
    const [EMobile, setEMobile] = useState('');
    const [GID, setGID] = useState('');
    const [GIDNo, setGIDNo] = useState('');
    const [About, setAbout] = useState('');
    const [isChecked, setisChecked] = useState(false);
    const [isChecked1, setisChecked1] = useState(false);


    const [organ, setorgan] = useState([]);

    const [all, setall] = useState(false);
    const [con, setcon] = useState(false);
    const [kid, setkid] = useState(false);
    const [heart, setheart] = useState(false);
    const [pan, setpan] = useState(false);
    const [lungs, setlungs] = useState(false);
    const [liver, setliver] = useState(false);
    const [inter, setinter] = useState(false);
    const [skin, setskin] = useState(false);




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

    const organselect = (orgn) =>{
        if(orgn == 'heart')
        {
            setheart(!heart);
            // console.log("heartttttt", heart);
            if(!heart)
            {
                setorgan(organ => [...organ, orgn]);
            }
            else{

                console.log('remove element');
                // setorgan(organ.filter(person => person != 'heart');             
            }
        }
        else if(orgn == 'all')
        {
            setall(!all);
            setheart(!all);
            setkid(!all);
            setcon(!all);
            setpan(!all);
            setinter(!all);
            setlungs(!all);
            setskin(!all);
            setliver(!all);
            if(!all)
            {
                setorgan(organ => [...organ, 'heart']);
                setorgan(organ => [...organ, 'pan']);
                setorgan(organ => [...organ, 'con']);
                setorgan(organ => [...organ, 'kid']);
                setorgan(organ => [...organ, 'inter']);
                setorgan(organ => [...organ, 'lung']);
                setorgan(organ => [...organ, 'skin']);
                setorgan(organ => [...organ, 'liver']);
            }
            else{
                console.log('remove element');
                // setorgan(organ.filter(person => person != 'heart');             
            }
        }
        else if(orgn == 'kid')
        {
            setkid(!kid);
            if(!kid)
            {
                setorgan(organ => [...organ, orgn]);
            }
            else{
                console.log('remove element');
                // setorgan(organ.filter(person => person != 'heart');             
            }
            
        }
        else if(orgn == 'con')
        {
            setcon(!con);
            if(!con)
            {
                setorgan(organ => [...organ, orgn]);
            }
            else{
                console.log('remove element');
                // setorgan(organ.filter(person => person != 'heart');             
            }
        }
        else if(orgn == 'pan')
        {
            setpan(!pan);
            if(!pan)
            {
                setorgan(organ => [...organ, orgn]);
            }
            else{
                console.log('remove element');
                // setorgan(organ.filter(person => person != 'heart');             
            }
        }
        else if(orgn == 'inter')
        {
            setinter(!inter);
            if(!inter)
            {
                setorgan(organ => [...organ, orgn]);
            }
            else{
                console.log('remove element');
                // setorgan(organ.filter(person => person != 'heart');             
            }
        }
        else if(orgn == 'lung')
        {
            setlungs(!lungs);
            if(!lungs)
            {
                setorgan(organ => [...organ, orgn]);
            }
            else{
                console.log('remove element');
                // setorgan(organ.filter(person => person != 'heart');             
            }
        }
        else if(orgn == 'skin')
        {
            setskin(!skin);
            if(!skin)
            {
                setorgan(organ => [...organ, orgn]);
            }
            else{
                console.log('remove element');
                // setorgan(organ.filter(person => person != 'heart');             
            }
        }
        else if(orgn == 'liver')
        {
            setliver(!liver);
            if(!liver)
            {
                setorgan(organ => [...organ, orgn]);
            }
            else{
                console.log('remove element');
                // setorgan(organ.filter(person => person != 'heart');             
            }
        }
    }

    const Blood = () =>{
        navigation.navigate('BloodDonation');
    }

    const pressHandlerdoc = () =>{
        if (isChecked && isChecked1){
            console.log('organssss', organ);
            const BDid = Math.floor(1000 + Math.random() * 9000);
            const BDID="BD"+BDid;
            // console.log('Name '+Name+'\nDOB '+textd+ '\nEmail '+Email+'\nBlood group '+Bg+ '\nLDATE '+textd +'\nMob no '+Mobile+'\nAddress '+About+'\nchecked '+isChecked);
            set(ref(db,'Organ_Donation/'+ useri + "/" +BDID), {
                Name: Name,
                ParentName: PName,
                Gender:Gen,
                Email: Email,
                BloodGroup: Bg,
                Mobile: Mobile,
                EmergencyMob:EMobile,
                GovernmentID:GID,
                GovernmentIDNo:GIDNo,
                DOB: textd,
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
            setPName('');
            setEmail('');
            setGen('');
            setBg('');
            setEMobile('');
            setMobile('');
            setGID('');
            setGIDNo('');
            setTextd('');
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
                <TouchableOpacity 
                    style={styles.inactiveTab}
                    onPress={Blood}
                    >
                    <Text  style={styles.inactiveText}>Blood Donation</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.activeTab}>
                    <Text  style={styles.activeText}>Organ Donation</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'column'}}>
                <ScrollView>
                    <Image source={od} style={styles.Image}/>
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
                        <Text style={styles.labeltext}>Mother's/Father's Name</Text>
                        <TextInput
                            style={styles.nameinput}
                            // placeholder='Full Name'
                            placeholderTextColor='#D8D8D8'
                            value={PName}
                            onChangeText={(val) => setPName(val)}
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
                        <Text style={styles.labeltext}>Gender</Text>
                        <Picker
                            style={styles.picker}
                            selectedValue={Gen}
                            onValueChange={(itemValue) => setGen(itemValue)}
                        >
                            <Picker.Item label='' style={{ color: '#D8D8D8' }} />
                            <Picker.Item label='Male' value='Male' />
                            <Picker.Item label='Female' value='Female' />
                        </Picker>
                        <View style={styles.bottomLine}></View>
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
                        <Text style={styles.labeltext}>Emergency Mobile Number</Text>
                        <TextInput
                            style={styles.nameinput}
                            // placeholder='Mobile Number'
                            placeholderTextColor='#D8D8D8'
                            keyboardType='numeric'
                            autoCompleteType='tel'
                            value={EMobile}
                            onChangeText={(val) => setEMobile(val)}
                        />
                        <Text style={styles.labeltext}>Government ID</Text>
                        <Picker
                            style={styles.picker}
                            selectedValue={GID}
                            onValueChange={(itemValue) => setGID(itemValue)}
                        >
                            <Picker.Item label='' style={{ color: '#D8D8D8' }} />
                            <Picker.Item label='Adhar card' value='Adhar card' />
                            <Picker.Item label='PAN card' value='PAN card' />
                        </Picker>
                        <View style={styles.bottomLine}></View>
                        <Text style={styles.labeltext}>Government ID No.</Text>
                        <TextInput
                            style={styles.nameinput}
                            // placeholder='Mobile Number'
                            placeholderTextColor='#D8D8D8'
                            keyboardType='numeric'
                            autoCompleteType='tel'
                            value={GIDNo}
                            onChangeText={(val) => setGIDNo(val)}
                        />
                        <Text style={styles.labeltext}>Address</Text>
                        <TextInput
                            style={styles.nameinput}
                            // placeholder='Full Name'
                            placeholderTextColor='#D8D8D8'
                            value={About}
                            onChangeText={(val) => setAbout(val)}
                        />
                        <Text style={styles.labeltext}>Organ</Text>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flexDirection:'row', marginLeft:25}}>
                                <CheckBox
                                value={all}
                                onValueChange={() => organselect('all')}
                                style={styles.checkboxorg}
                                />
                                <Text style={styles.checkboxorgtext}>All</Text>
                            </View>
                            <View style={{flexDirection:'row', marginLeft:30}}>
                                <CheckBox
                                    value={con}
                                    onValueChange={() => organselect('con')}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.checkboxorgtext}>Concreas(eye)</Text>
                            </View>
                            <View style={{flexDirection:'row', marginLeft:12}}>
                                <CheckBox
                                    value={kid}
                                    onValueChange={() => organselect('kid')}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.checkboxorgtext}>Kidney</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flexDirection:'row', marginLeft:25}}>
                                <CheckBox
                                value={heart}
                                onValueChange={() => organselect('heart')}
                                style={styles.checkboxorg}
                                />
                                <Text style={styles.checkboxorgtext}>Heart</Text>
                            </View>
                            <View style={{flexDirection:'row', marginLeft:8}}>
                                <CheckBox
                                    value={pan}
                                    onValueChange={() => organselect('pan')}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.checkboxorgtext}>Pancreas</Text>
                            </View>
                            <View style={{flexDirection:'row', marginLeft:50}}>
                                <CheckBox
                                    value={lungs}
                                    onValueChange={() => organselect('lung')}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.checkboxorgtext}>Lungs</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flexDirection:'row', marginLeft:25}}>
                                <CheckBox
                                value={liver}
                                onValueChange={() => organselect('liver')}
                                style={styles.checkboxorg}
                                />
                                <Text style={styles.checkboxorgtext}>Liver</Text>
                            </View>
                            <View style={{flexDirection:'row', marginLeft:14}}>
                                <CheckBox
                                    value={inter}
                                    onValueChange={() => organselect('inter')}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.checkboxorgtext}>Small Interstine</Text>
                            </View>
                            <View style={{flexDirection:'row', marginLeft:5}}>
                                <CheckBox
                                    value={skin}
                                    onValueChange={() => organselect('skin')}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.checkboxorgtext}>Skin</Text>
                            </View>
                        </View>
                        <View style={styles.bottomLine}></View>
                        
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
                        <View style={{flexDirection:'row',left: '2%',}}>
                            <CheckBox
                            value={isChecked1}
                            onValueChange={() => setisChecked1(!isChecked1)}
                            style={styles.checkbox}
                            />
                            <Text style={{fontSize:15, width:315, color:'#fff',marginBottom:20,}}>Please ensure your Email id is correct in order to receive Donor Card.</Text>
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
        borderBottomLeftRadius:17,
        borderTopLeftRadius:17,
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
        height:1400,
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
    checkboxorg:{
        color:'#fff',
        left: '5%',
    },
    checkboxorgtext:{
        color:'#fff',
        fontSize: 15,
        marginTop:5,
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