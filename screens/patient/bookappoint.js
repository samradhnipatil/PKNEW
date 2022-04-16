import React,{ useState, useEffect} from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import bookapp from '../../assets/images/bookapp.jpg';
import gen from '../../assets/images/gen.png';
import bone from '../../assets/images/bone.png';
import brain from '../../assets/images/brain.png';
import dental from '../../assets/images/dental.png';
import ear from '../../assets/images/ear.png';
import ent from '../../assets/images/ent.png';
import gynac from '../../assets/images/gynac.png';
import heart from '../../assets/images/heart.png';
import lung from '../../assets/images/lung.png';

import { getAuth} from "firebase/auth";
import { getDatabase, ref, get,set, onValue, child} from "firebase/database";
import { LogBox } from 'react-native';


export default function BookAppoint({ route, navigation }) {
    LogBox.ignoreLogs(['Setting a timer']);
    const auth = getAuth();
    const db = getDatabase();

    const { mode } = route.params;
    console.log('mode',mode)

    // var mode = navigation.getParam('mode');  

    const [Docs, setDocs] = useState([
        { Name: 'Dr.Samradhni Patil',cat:'Heart', Location: 'Palghar', pin: 401102, fee: 400, id: '1' },
        { Name: 'Dr.Shivani Patil', cat: 'General', Location: 'Churchgate', pin: 401102, fee: 400, id: '2' },
        { Name: 'Dr.Yamini Barhate', cat: 'Heart', Location: 'Palghar', pin: 401102, fee: 400, id: '3' },
        { Name: 'Dr.Samruddhi Patil', cat: 'General', Location: 'Churchgate', pin: 401102, fee: 400, id: '4' },
        { Name: 'Dr.Samiksha Patil', cat: 'Heart', Location: 'Churchgate', pin: 401102, fee: 400, id: '5' },
        { Name: 'Dr.Rachana Gharat', cat: 'Heart', Location: 'Churchgate', pin: 401102, fee: 400, id: '6' },
        { Name: 'Dr.Kundan Gharat', cat: 'General', Location: 'Andheri', pin: 401102, fee: 400, id: '7' },
        { Name: 'Dr.Vardhan Gharat', cat: 'Heart', Location: 'Palghar', pin: 401102, fee: 400, id: '8' },
        { Name: 'Dr.Samradhni Patil', cat: 'Ear', Location: 'Palghar', pin: 401102, fee: 400, id: '9' },
        { Name: 'Dr.Shivani Patil', cat: 'General', Location: 'Palghar', pin: 401102, fee: 400, id: '10' },
        { Name: 'Dr.Yamini Barhate', cat: 'ENT', Location: 'Palghar', pin: 401102, fee: 400, id: '11' },
        { Name: 'Dr.Samruddhi Patil', cat: 'Bone', Location: 'Churchgate', pin: 401102, fee: 400, id: '12' },
        { Name: 'Dr.Samiksha Patil', cat: 'Brain', Location: 'Churchgate', pin: 401102, fee: 400, id: '13' },
        { Name: 'Dr.Rachana Gharat', cat: 'Brain', Location: 'Palghar', pin: 401102, fee: 400, id: '14' },
        { Name: 'Dr.Kundan Gharat', cat: 'Bone', Location: 'Palghar', pin: 401102, fee: 400, id: '15' },
        { Name: 'Dr.Vardhan Gharat', cat: 'Lung', Location: 'Churchgate', pin: 401102, fee: 400, id: '16' },
    ]);

    const arr = [
        // {id: '1',ConsultationFee: 548,DOB: '24/8/2020',Email: "C@gmail.com",Gender: "Female",LicenseNo: "Cl19292",Location: "LA",Mobile: "880649644",Name: "Dr. Cloe Decor",Specialization: "Gynecology",},
        // {id: '2',ConsultationFee: "4549",DOB: "12/8/2020",Email: "S@gmail.com",Gender: "Male",LicenseNo: "Stf9202",Location: "Mystic falls ",Mobile: "88069469",Name: "Dr. Stefan salvatore ",Specialization: "Bones",},
        // {
        //     id: '3',
        //     ConsultationFee: "400",
        //     DOB: "10/8/2020",
        //     Email: "L@gmail.com",
        //     Gender: "Male",
        //     LicenseNo: "Luci2922",
        //     Location: "LA",
        //     Mobile: "94646494",
        //     Name: "Dr. Lucifer Morningstar",
        //     Specialization: "Teeth",
        // },
        ];

        useEffect(() => {
        const dbRef = ref(getDatabase());
            get(child(dbRef, `Doctors/`)).then((snapshot) => {
            if (snapshot.exists()) {
            
                snapshot.forEach(function(childSnapshot) {
                    var docidd = childSnapshot.key;
                    // console.log("docidd : "+ docidd); // output is    docidd :Doc1836
                    const starCountRef = ref(db, 'Doctors/'+ docidd);
                    onValue(starCountRef, (snapshot) => {
                        data = snapshot.val();
                        arr.push(data);
                        // console.log('arr',arr);
                    }); 
                    // console.log('arr2',arr);
                });
                console.log('arr3',arr);
            } else {
                console.log("No data available");
            }
            }).catch((error) => {
            console.error(error);
            });
    });

    const findDocs = (doc, cat) => {
       
        var doc = Docs.filter(person => person.cat == cat)
        // console.log('docbookappointment',doc);
        if (mode == 'online') {
            navigation.navigate('Doclistvid', {
                doc,
                cat,
                arr,
            });            
        } else {
            navigation.navigate('DoclistInperson', {
                doc,
                cat,
                arr,
            });            
        }
        
    }

    return (
        <View style={styles.bg}>
            <View style={{flexDirection: 'row'}}>
                <Text style={{ fontSize: 21, color: '#fff', marginLeft: '4%', marginTop: '8%',fontWeight:'bold'}}>Book Your Specialist</Text>
            </View>
            <View style={{ backgroundColor: '#fff', height: 640, width: '93%', alignSelf: 'center',marginTop: '7%', borderRadius: 20}}>
                <View style={{marginBottom: '5%',}}>
                    <Image style={styles.img} source={bookapp} />
                </View>
                <View style={{ flexDirection: 'column' }}>
                    <ScrollView>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity style={[styles.box, styles.elevation]} onPress={()=> findDocs(Docs,'General')}>
                            <Image style={styles.imgcat} source={gen} />
                            <Text style={styles.namecat}>General</Text>
                        </TouchableOpacity>
                            <TouchableOpacity style={[styles.box, styles.elevation]} onPress={() => findDocs(Docs, 'Heart')}>
                            <Image style={styles.imgcat} source={heart} />
                            <Text style={styles.namecat}>Heart</Text>
                        </TouchableOpacity>
                            <TouchableOpacity style={[styles.box, styles.elevation]} onPress={() => findDocs(Docs, 'Ear')}>
                            <Image style={styles.imgcat} source={ear} />
                            <Text style={styles.namecat}>Ear</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={[styles.box, styles.elevation]} onPress={() => findDocs(Docs, 'Teeth')}>
                            <Image style={styles.imgcat} source={dental} />
                            <Text style={styles.namecat}>Teeth</Text>
                        </TouchableOpacity>
                            <TouchableOpacity style={[styles.box, styles.elevation]} onPress={() => findDocs(Docs, 'Lungs')}>
                            <Image style={styles.imgcat} source={lung} />
                            <Text style={styles.namecat}>Lungs</Text>
                        </TouchableOpacity>
                            <TouchableOpacity style={[styles.box, styles.elevation]} onPress={() => findDocs(Docs, 'Brain')}>
                            <Image style={styles.imgcat} source={brain} />
                            <Text style={styles.namecat}>Brain</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={[styles.box, styles.elevation]} onPress={() => findDocs(Docs, 'Bones')}>
                            <Image style={styles.imgcat} source={bone} />
                            <Text style={styles.namecat}>Bones</Text>
                        </TouchableOpacity>
                            <TouchableOpacity style={[styles.box, styles.elevation]} onPress={() => findDocs(Docs, 'Gynecology')}>
                            <Image style={styles.imgcat} source={gynac} />
                            <Text style={styles.namecat}>Gynecology</Text>
                        </TouchableOpacity>
                            <TouchableOpacity style={[styles.box, styles.elevation]} onPress={() => findDocs(Docs, 'ENT')}>
                            <Image style={styles.imgcat} source={ent} />
                            <Text style={styles.namecat}>ENT</Text>
                        </TouchableOpacity>
                    </View>
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
        justifyContent: 'center',
    },
    bg: {
        backgroundColor: '#077395',
        height: 750,
    },   
    
    img:{
        width: '39%', 
        height: 140, 
        borderRadius: 75, 
        marginLeft: '60%', 
        marginTop: '-20%',
    },
    box:{
        width: '90%',
        height: 130,
        borderRadius: 10,
        backgroundColor:'#fff',
        borderColor: '#c4c4c4',  
        borderBottomWidth: 1,   
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        marginLeft: '10%',
        marginTop:'7%',
        marginBottom:'5%',
        paddingTop:2,

    },
    elevation: {
        elevation: 10,
        shadowColor: 'black',
    },
    imgcat:{
        width: 80, 
        height: 80, 
        borderRadius: 60, 
        alignSelf: 'center', 
        marginTop: '4%',
    },
    namecat:{
        alignSelf:'center',
        fontSize: 16,
        marginTop:'5%'
    }
});
