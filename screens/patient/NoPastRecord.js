///////////////////////////////////No FILE UPLOADED CODE
import React, {useState} from "react";
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, View, Text, Button,ScrollView,TouchableOpacity,Image ,ImageBackground,TextInput} from "react-native";
import empfold from '../../assets/images/emptyfold.png';
import Modal from "react-native-modal";

import { getAuth} from "firebase/auth";
import { getDatabase, ref, set, onValue} from "firebase/database";
import { LogBox } from 'react-native';

export default function NoPastRecord({ route, navigation}) {
    const {title} = route.params
    // console.log('title',title);
    LogBox.ignoreLogs(['Setting a timer']);

    const auth = getAuth();
    const db = getDatabase();

    const [isModalVisible, setModalVisible] = useState(false);
    const [Link, setLink] = useState('');
    const [Cat, setCat] = useState('');

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };

    const pressHandler = () => {
        const Rid = Math.floor(1000 + Math.random() * 9000);
        const RID="R"+Rid;
        const userId = auth.currentUser;
        console.log('user',userId['uid']);
        const useri=userId['uid'];

        set(ref(db,'Record/' + Cat+'/'+ useri+'/'+title+'/'+RID), {
            Link:Link,
        });
        setCat('');
        setLink('');
        navigation.navigate('Pastrecord');
        console.log('upload record!!!!!!!!!!!!!!!!!!!!');
    }

    return(   
        <View styles={styles.container}>
            <View>
                <Image style={styles.image} source={empfold} />
                <Text style={styles.sectiontext1}>No records added! </Text>
                <Text style={styles.sectiontext}>Upload and have secure access to </Text>
                <Text style={styles.sectiontext}>all health records</Text>
                <TouchableOpacity 
                    style= {styles.butt}
                    onPress={toggleModal}>
                    <Text style= {styles.butttext}>Upload  Records</Text>
                </TouchableOpacity>
            </View>   
            <Modal isVisible={isModalVisible} style={styles.modalbox}>
                <View style={{ flex: 1 }}>
                <Text style={{color:'#fff',alignSelf:'center',fontSize:18, fontWeight:'bold',marginTop:20}}>Upload New Record</Text>
                
                <TextInput
                    style={styles.nameinput}
                    placeholder='Upload Record Link'
                    placeholderTextColor='#D8D8D8'
                    value={Link}
                    onChangeText={(val) => setLink(val)}
                />
                <Picker
                    style={styles.picker}
                    selectedValue={Cat}
                    onValueChange={(itemValue) => setCat(itemValue)}
                >
                    <Picker.Item label='Category' style={{ color: '#D8D8D8' }} />
                    <Picker.Item label='General' value='General' />
                    <Picker.Item label='Heart' value='Heart' />
                    <Picker.Item label='Teeth' value='Teeth' />
                    <Picker.Item label='Lungs' value='Lungs' />
                    <Picker.Item label='Brain' value='Brain' />
                    <Picker.Item label='Bones' value='Bones' />
                    <Picker.Item label='Gynacology' value='Gynacology' />
                    <Picker.Item label='ENT' value='ENT' />
                </Picker>
                <TouchableOpacity
                    onPress={pressHandler}
                    style={styles.uploadbutt}>
                    <Text style={{color:'#fff',fontSize:18}}>Upload</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={toggleModal}
                    style={styles.closebut}>
                    <Text style={{color:'#fff',fontSize:18}}>Back</Text>
                </TouchableOpacity>
                </View>
            </Modal>
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
    container2: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    sectiontext:{
        color: 'black',
        fontSize: 17,
        alignSelf: 'center',
        width: 300,
        textAlign: 'center',
    },
    sectiontext1:{
        color: 'black',
        fontSize: 22,
        fontWeight:'bold',
        alignSelf: 'center',
        width: 300,
        textAlign: 'center',
    },
    image: {
        flex: 1,
        justifyContent: "center",
        minHeight: 300,
        width:300,
        alignSelf:'center',
        marginBottom:50,
        marginTop:50,
    },
    butt:{
        height:60,
        backgroundColor:'#2294B8',
        width:'60%',
        alignSelf:'center',
        alignItems:'center',
        justifyContent: "center",
        borderRadius: 27,
        marginTop: 30,
    },
    butttext:{
        fontSize:22,
        color:'#fff'
    },
    buttonStyle: {
        backgroundColor: '#307ecc',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#307ecc',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 15,
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
    },
    modalbox:{
        marginTop:60,
        justifyContent:'center',
        backgroundColor:'rgba(1,1,1,0.5)',
        borderRadius:10,
    },
    closebut:{
        backgroundColor:'#909090',
        width: 120,
        height: 40,
        alignItems:'center',
        borderRadius:10,
        padding: 5,
        marginTop: 20,
        marginLeft: 130,
    },
    uploadbutt:{
        backgroundColor:'#2294B8',
        width: 160,
        height: 40,
        alignItems:'center',
        borderRadius:10,
        padding: 5,
        marginTop: 20,
        marginLeft: 110,
    },
    nameinput: {
        width: '85%',
        height: 40,
        alignSelf: "center",
        fontSize: 16,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 1,
        borderLeftWidth: 0,
        borderBottomColor: '#ffffff',
        color: '#000000',
        marginBottom: '5%',
        marginTop: '15%',
        backgroundColor:'#ffffff',
        // borderRadius:10,
    },
    picker: {
        width: '85%',
        height: 40,
        alignSelf: "center",
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff',
        color: '#000000',
        marginBottom: '5%',
        marginTop: '3%',
        backgroundColor:'#ffffff',
        borderRadius:10,
    },
});
