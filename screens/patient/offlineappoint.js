import React, { useState }  from 'react'
import { StyleSheet, Text, View, TextInput,Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
// import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import Textarea from 'react-native-textarea';
import consult from "../../assets/images/consult.png";
import { getAuth} from "firebase/auth";
import { getDatabase, ref, set, onValue, child, get,once } from "firebase/database";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { LogBox } from 'react-native';

export default function offlineappoint({navigation, route}) {

    LogBox.ignoreLogs(['Setting a timer']);

    const { Name, Academic, mode ,ID } = route.params;

    const [PatName, setPatName] = useState('');
    const [Dob, setDob] = useState();
    const [Slot, setSlot] = useState('');
    const [Disease, setDisease] = useState('');

    var name = Name;
    // console.log('onlineappointdocname',name);

      {/* for DOB */}

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



    // for date
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode1, setMode1] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('dd/mm/yyyy');

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
        // setShow(false);
    };


    const successpage = (patName) => {
        // e.preventDefault();
        console.log('patName', PatName, '\nDob', textd, '\nSlot', Slot,'\nDisease',Disease);
        const auth = getAuth();
        const db = getDatabase();

        // current user
        const userId = auth.currentUser;
        console.log('user',userId['uid']);
        const PatienId = userId['uid'];
        // const docid = Math.floor(1000 + Math.random() * 9000);
        // const DoctorId= "Doc"+ docid;
        const appoinid = Math.floor(1000 + Math.random() * 9000);
        const AppointmentID="Appoin"+appoinid;

        // console.log(DoctorId);
        console.log(AppointmentID);

        setPatName('');
        setDob('');
        setSlot('');
        setDisease('');

        // for current date
        var today = new Date();
        var dd1 = String(today.getDate()).padStart(2, '0');
        var mm1 = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy1 = today.getFullYear();

        today = mm1 + '/' + dd1 + '/' + yyyy1;
        console.log(today)
        // document.write(today);

        set(ref(db, 'Offline_Appointments/' + PatienId + "/" + ID + "/" + AppointmentID), {
              
                Pat_Nam: PatName,
                Pat_Dob: textd,
                Appoin_date:text,
                Timings: Slot,
                Symptoms:Disease,
                feecharge:"400",
                Curr_date: today,
                Status: "pending", 

        });

        
         const starCountRef = ref(db, 'Patients/'+ PatienId);
        onValue(starCountRef, (snapshot) => {
        const datap = snapshot.val();
        console.log('patdeteils: ',datap);
        
               
                const starCountRef = ref(db, 'Doctors/'+ ID);
                onValue(starCountRef, (snapshot) => {
                const datad = snapshot.val();
                console.log('docdeteils: ',datad);
                
                        navigation.navigate('Success',{
                            name,
                            patdata:datap,
                            Slot,
                            Disease,
                            today,
                            docdata:datad,

                        });
       
        });

       
        });





    }

    return (
        <View style={styles.container}>
            <Image style={styles.docimage} source={consult} />
            <Text style={styles.outertext}>Book Appointment</Text>
            <View style={styles.innerbox}>
                <ScrollView>
                    <View>
                        <Text style={styles.labeltext}>Name:</Text>
                        <TextInput
                            style={styles.nameinput}
                            placeholder='Full Name'
                            placeholderTextColor='#D8D8D8'
                            value={PatName}
                            onChangeText={(val) => setPatName(val)}
                        />
                    </View>
                    <View>
                        <Text style={styles.labeltext}>DOB:</Text>
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
                    </View>
                    <View>
                        <Text style={styles.labeltext}>Date:</Text>
                        <View>
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
                        </View>
                   </View>
                    <View>
                        <Text style={styles.labeltext}>Preferred slots:</Text>
                        <Text style={{ fontSize: 15, marginLeft: '10%', marginTop: '10%', }}>Morning slots</Text>
                        <View style={styles.box}>
                            <Picker
                                style={styles.picker}
                                selectedValue={Slot}
                                onValueChange={(itemValue) => setSlot(itemValue)}
                            >
                                <Picker.Item label='7:00 am' value='7:00 am' />
                                <Picker.Item label='8:00 am' value='8:00 am' />
                                <Picker.Item label='9:00 am' value='9:00 am' />
                                <Picker.Item label='10:00 am' value='10:00 am' />
                            </Picker>
                        </View>
                        <Text style={{ fontSize: 15, marginLeft: '10%', marginTop: '2%', }}>Evening slots</Text>
                        <View style={styles.box}>
                            <Picker
                                style={styles.picker}
                                selectedValue={Slot}
                                onValueChange={(itemValue) => setSlot(itemValue)}
                            >
                                <Picker.Item label='7:00 pm' value='7:00 pm' />
                                <Picker.Item label='8:00 pm' value='8:00 pm' />
                                <Picker.Item label='9:00 pm' value='9:00 pm' />
                                <Picker.Item label='10:00 pm' value='10:00 pm' />
                            </Picker>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.labeltext}>Disease Description:</Text>
                        <Textarea
                            style={styles.textarea}
                            value={Disease}
                            onChangeText={(val) => setDisease(val)}
                            maxLength={120}
                            placeholder={'add disease description here'}
                            placeholderTextColor={'#7d7c7c'}
                            underlineColorAndroid={'transparent'}
                        />
                    </View>
                    <View style={styles.buttonout}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={successpage}
                        >
                            <Text style={styles.bottontext}>Continue</Text>
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
        backgroundColor: '#077395',
        alignItems: 'center',
        justifyContent: 'center',
    },
    docimage: {
        width: '30%',
        height: 120,
        marginTop: '-140%',
        marginLeft: '-50%',
    },
    outertext: {
        position: "absolute",
        width: '50%',
        height: 79,
        left: '50%',
        top: '5%',
        fontSize: 25,
        lineHeight: 37,
        color: "#FFFFFF",
    },
    innerbox: {
        position: 'absolute',
        backgroundColor: "#ffffff",
        borderRadius: 12,
        width: '90%',
        height: 570,
        alignSelf:'center',
        top: '20%',
        padding:10,
    },
    nameinput: {
        padding: '2%',
        width: '85%',
        height: 40,
        alignSelf: "center",
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#C4C4C4',
        color: '#000000',
        marginBottom: '3%',
        top: '2%',
    },
    labeltext: {
        width: '70%',
        height: 19,
        left: '10%',
        top: '10%',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 17,
        lineHeight: 18,
    },
    textarea: {
        textAlignVertical: 'top',  // hack android
        height: 140,
        fontSize: 14,
        color: '#1a1c1c',
        padding: '3%',
        width: '85%',
        borderRadius: 15,
        marginTop: '10%',
        alignSelf:'center',
        backgroundColor: "rgba(51, 161, 181,0.4)"
    },
    button: {
        width: 160,
        height: 31,
        padding: '1%',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#268DAD',
        borderRadius: 15,
        borderColor: '#fff',
        borderWidth: 2,
    },
    buttonout: {
        width: '50%',
        height: 40,
        padding: '1%',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#268DAD',
        borderRadius: 19,
        marginTop: '7%',
        marginBottom: '7%',
    },
    bottontext: {
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 21,
        color: '#FFFFFF',
    },
    picker: {
        width: '86%',
        height: 30,
        alignSelf: "center",
        fontSize: 17,
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
        color: '#000000',
        marginBottom: '3%',
        borderBottomWidth: 1,
    },
    box: {
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        width: '85%',
        height: 30,
        alignSelf: 'center',
        borderColor: '#C4C4C4',
        borderRadius: 10,
        marginBottom: '2%',
    },
})
