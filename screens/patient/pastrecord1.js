///////////////////////////////////No FILE UPLOADED CODE
import React, {useState} from "react";
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, View, Text,TextInput, Button,ScrollView,TouchableOpacity,Image ,ImageBackground,FlatList,Linking} from "react-native";
import empfold from '../../assets/images/emptyfold.png';

import { getAuth} from "firebase/auth";
import { getDatabase, ref, set, onValue} from "firebase/database";
import { LogBox } from 'react-native';

import Modal from "react-native-modal";

export default function Pastrecord1({ route, navigation}) {

    LogBox.ignoreLogs(['Setting a timer']);

    const auth = getAuth();
    const db = getDatabase();

    const {title,doc2,arr} = route.params
    console.log('title',title);
    console.log('Doc2',doc2);

    const [isModalVisible, setModalVisible] = useState(false);
    const [Link, setLink] = useState('');
    const [Cat, setCat] = useState('');

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };

    

    // const [AllowDoc, setAllowDoc] = useState('');

    // const Allowed = () => {
    //     const userId = auth.currentUser;
    //     console.log('user',userId['uid']);
    //     const useri=userId['uid'];

    //     set(ref(db,'Record/' + Cat+'/'+ useri+'/'+title), {
    //         Link:Link,
    //     });
    //     setCat('');
    //     setLink('');
    //     navigation.navigate('Pastrecord');
    //     console.log('upload record!!!!!!!!!!!!!!!!!!!!');
    // }
    const pressHandler = (link) => {
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
            <View
                style={{ backgroundColor: '#077395', height: 60,  justifyContent: 'center', marginBottom:60 }}>
                <Text style={{ color: '#fff', fontSize: 22, alignSelf: 'center', }}>{title}</Text>
            </View>
            <View>
                <FlatList
                numColumns={1}
                keyExtractor={(item) => item.RecId}
                data={doc2}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() =>pressHandler('https://docs.google.com/document/d/1kCVEG7i-_95BP6mExdJW9f4nZzLJ6SsmqUsNDtfDHPE/edit?usp=sharing')}
                        // onPress={() =>pressHandler(item.Link)}
                        >
                        <View style={styles.box}>
                            <View style={{ flexDirection: 'column', marginLeft: '3%' ,width:150}}>
                                <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: '2%' ,marginLeft:103,color:'#fff',width:150}}>Record ID: {item.RecId}</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 13,marginLeft:103,width:350}}>Link: {item.Link}</Text>
                                </View>
                                <Text style={{ fontSize: 14 ,marginLeft:47,width:350}}>Fees: {item.cat}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    
                )}
            />
            </View> 
            {/* <Text style={styles.sectiontext}>Upload New Record</Text> */}
            <TouchableOpacity 
                style= {styles.butt}
                onPress={toggleModal}>
                <Text style= {styles.butttext}>Upload  Records</Text>
            </TouchableOpacity>  
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
    box: {
        width: '95%',
        height: 80,
        borderColor: '#c4c4c4',
        backgroundColor: '#c4c4c4',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        marginTop: '1%',
        marginBottom: '1%',
        alignSelf: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        padding: 2,
        paddingLeft:4,
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
    sectiontext:{
        color: 'black',
        fontSize: 20,
        alignSelf: 'center',
        width: 300,
        textAlign: 'center',
        marginTop: 20,
    },
    butt:{
        height:60,
        backgroundColor:'#2294B8',
        width:'60%',
        alignSelf:'center',
        alignItems:'center',
        justifyContent: "center",
        borderRadius: 27,
        marginTop: 10,
    },
    butttext:{
        fontSize:22,
        color:'#fff'
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
    modalbox:{
        marginTop:60,
        justifyContent:'center',
        backgroundColor:'rgba(1,1,1,0.5)',
        borderRadius:10,
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
});


