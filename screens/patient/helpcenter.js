import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, ScrollView, Image } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { TouchableOpacity } from "react-native-gesture-handler";
import { getAuth} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { LogBox } from 'react-native';
import helpc from '../../assets/images/helpcenter.png';

export default function Helpcenter({ navigation }) {
    LogBox.ignoreLogs(['Setting a timer']);

    const auth = getAuth();
    const db = getDatabase();

    const [Det, setDet] = useState('');
    const [Type, setType] = useState('');
    const [Email, setEmail] = useState('');
    const [Phone, setPhone] = useState('');

    const pressHandler = () => {
        console.log('Det, Type,Email, Phone',Det, Type,Email, Phone);
        const seq = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
        console.log('seq',seq);
        seq1 = 'Que' + seq;
        console.log('seq',seq1);
        const userId = auth.currentUser;
        console.log('userh',userId['uid']);
        useri=userId['uid'];

        set(ref(db,'HelpCenter/' + useri +'/' + seq1), {
            Category: Type,
            Email: Email,
            Mobile: Phone,
            Details: Det,
        });
        setDet('');
        setType('Category');
        setEmail('');
        setPhone('');
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View
                    style={{ height: 60, width: '100%', justifyContent: 'center', flexDirection: 'row' }}>
                    <Image style={{ width: '99%', height: 210, marginTop: 10 }} source={helpc} />
                </View>
                <View style={[styles.elevation, { marginTop: '40%', alignSelf: 'center', backgroundColor: '#fff', width: '90%', height: 440, justifyContent: 'center', borderRadius: 10 }]}>
                    <Text style={styles.textup}>Select issue Category</Text>
                    <View style={styles.box}>
                        <Picker
                            style={[styles.picker, styles.nameinput]}
                            selectedValue={Type}
                            onValueChange={(itemValue) => setType(itemValue)}
                        >
                            <Picker.Item label='Category' />
                            <Picker.Item label='Need help with my booking' value='needhelp' />
                            <Picker.Item label='Problem with my booking' value='bookprob' />
                            <Picker.Item label='Consultation- Prescription not recived' value='conpres' />
                            <Picker.Item label='Payment related' value='payrel' />
                            <Picker.Item label='Returns and refund' value='rnr' />
                            <Picker.Item label='Feedback' value='feed' />
                            <Picker.Item label='My account related' value='accrelate' />
                            <Picker.Item label='Medicine Reminder Related' value='medremin' />
                            <Picker.Item label='Others' value='other' />
                        </Picker>
                    </View>
                                        
                    <Text style={styles.textup}>Issue Details</Text>
                    <TextInput
                        style={styles.nameinput}
                        value={Det}
                        onChangeText={(val) => setDet(val)}

                    />
                    <Text style={styles.textup}>Phone no.</Text>
                    <TextInput
                        style={styles.nameinput}
                        placeholder='Mobile Number'
                        placeholderTextColor='#D8D8D8'
                        keyboardType='numeric'
                        autoCompleteType='tel'
                        value={Phone}
                        onChangeText={(val) => setPhone(val)}
                    />
                    <Text style={styles.textup}>Email</Text>
                    <TextInput
                        style={styles.nameinput}
                        value={Email}
                        onChangeText={(val2) => setEmail(val2)}
                    />

                    <TouchableOpacity style={styles.button}
                        onPress={pressHandler}
                    >

                        <Text style={[styles.bottontext, { color: '#fff', fontWeight: 'bold', fontSize: 17,padding:3 }]}>Submit</Text>
                    </TouchableOpacity>

                </View>
                <View style={[styles.elevation, { marginTop: '5%', alignSelf: 'center', backgroundColor: '#fff', width: '90%', height: 200, justifyContent: 'center', borderRadius: 10, marginBottom: '5%' }]}>
                    <Text style={[styles.textup, { alignSelf: 'center', marginBottom: '6%', fontSize: 18 }]}>Contact Details</Text>
                    <Text style={{ fontSize: 17, marginLeft: '10%' }}>Call us: 9079258899</Text>
                    <Text style={{ borderBottomWidth: 1, borderBottomColor: 'grey', width: '90%', alignSelf: 'center', }}></Text>
                    <Text style={{ fontSize: 17, marginLeft: '10%' }}>Email: yamsamcham@gmail.com</Text>
                    <Text style={{ borderBottomWidth: 1, borderBottomColor: 'grey', width: '90%', alignSelf: 'center', }}></Text>
                    <Text style={{ fontSize: 17, marginLeft: '10%' }}>Instagram: @PocketDoctor</Text>
                    <Text style={{ borderBottomWidth: 1, borderBottomColor: 'grey', width: '90%', alignSelf: 'center' }}></Text>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textup: {
        fontSize: 16,
        color: '#5E5E5E',
        marginBottom: '1%',
        marginLeft: '4%',
        fontWeight: 'bold'
    },
    nameinput: {
        width: '90%',
        height: 45,
        alignSelf: "center",
        fontSize: 16,
        marginBottom: '2%',
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    },
    elevation: {
        elevation: 10,
        shadowColor: 'black',
    },
    picker: {
        width: '50%',
        height: 10,
        alignSelf: "center",
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        backgroundColor: '#fff',

    },
    box: {
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        width: '85%',
        height: 47,
        alignSelf: 'center',
        borderColor: '#C4C4C4',
        borderRadius: 10,
        marginBottom: '2%',
    },
    button: {
        width: '70%',
        height: 32,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#13B5E8',
        borderRadius: 20,
        marginTop: '5%'

    },
});

