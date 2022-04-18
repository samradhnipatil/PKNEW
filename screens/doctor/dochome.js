
import React,{useEffect} from "react";
import { StyleSheet,View, Text, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Footer from '../footer';

import { getAuth} from "firebase/auth";
import { getDatabase, ref, set,get, onValue,child,} from "firebase/database";
import { LogBox } from 'react-native';

import docimg from '../../assets/images/doc_home.png';
import vid from '../../assets/images/vid.png';
import magz from '../../assets/images/mag.jpg';
import blog from '../../assets/images/blog.jpg';
import news from '../../assets/images/news.jpg';
import doc_appoin from '../../assets/images/doctor-appointment.png';
import docpro from '../../assets/images/docprofile.png';
import user1 from '../../assets/images/user.png';
import doctor from '../../assets/images/doctor.png';
import hosp from '../../assets/images/hospital.png';
import pstory from '../../assets/images/pstories.png';


export default function Dochome({ route, navigation }) {
    LogBox.ignoreLogs(['Setting a timer']);
    const auth = getAuth();
    const db = getDatabase();
    // const offdata = {};
    const user = auth.currentUser;
    // console.log('user',user['uid']);
    const useri = user['uid'];
    var arr = [];
    var arrcn = [];
    var arrcmp = [];
    const patids = [];

    useEffect(() => {


        const dbRef = ref(getDatabase());
        get(child(dbRef, `Online_Appointments/`)).then((snapshot) => {
            if (snapshot.exists()) {
            
                snapshot.forEach(function(childSnapshot) {
                    var patidd = childSnapshot.key;
                    childSnapshot.forEach(function(snapshot3) {
                        var docidd = snapshot3.key;
                        if (useri == docidd)
                        {
                            snapshot3.forEach(function(snapshot4) {
                            var appidd = snapshot4.key;


                            const starCountRef = ref(db, 'Online_Appointments/'+ patidd+'/'+ docidd +'/'+ appidd);
                            onValue(starCountRef, (snapshot) => {
                                const data1 = snapshot.val(); 
                                data1.pid = patidd;
                                data1.id = appidd;
                                data1.session = 'Morning';                               
                                arr.push(data1);
                                console.log('data1modified :',data1);
                                console.log('data1 :',data1);
                                console.log("\npatidd : "+ patidd+"\ndocidd : "+ docidd+ "\nappidd : "+ appidd+'\n\n\n');
                            }); 
                            
                            });
                        }
                        else
                        {
                            console.log('error:No Appoiintments available found');
                        }                
                });
            });
            console.log('arr3on',arr);
            // var arrpend = arr.filter(person => person.Status == "pending")
            // console.log('Arrrrayy1111111111111111111111 :',arr);
            // arr = arrpend;
            // console.log('Arrrrayy2222222222222222222222 :',arr);
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
        console.error(error);
        });
    });


    const showmyprof = () => {
        var data;
        const starCountRef = ref(db, 'Doctors/'+ useri);
        onValue(starCountRef, (snapshot) => {
        data = snapshot.val();
        console.log('datahome',data);
        navigation.navigate('MyProfDoc',{
            docdata: data,
        });
        });        
    }
    
    const showmyappoin = () => {
        navigation.navigate('MyAppointDoc',{
            arr
        });  
        
    }

    const newsec = () => {
        navigation.navigate('Newsscreen');
    }

    const showvid = () => {
        navigation.navigate('Videos');
    }
    const showmag = () => {
        navigation.navigate('Magazines');
    }


    return(
        <View>
            <ScrollView>
                <View style={styles.upper}>
                    <Image style={styles.docimage} source={docimg} />
                    <Text style={styles.tagline}>Much more than the white coats.</Text>
                </View>
                <View style={styles.secondcontainer}>
                    <TouchableOpacity 
                        style={[styles.appoincard, styles.elevation]}
                        onPress={showmyappoin}>
                        <Image style={styles.appointmentimage} source={doc_appoin}/>
                        <Text style={{ fontSize: 16, fontWeight: 'bold'}}>View Appointment</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.profcard, styles.elevation]}
                        onPress={showmyprof}>
                        <Image style={styles.appointmentimage} source={docpro}/>
                        <Text style={{ fontSize: 16, fontWeight: 'bold'}}>My Profile</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.feature}>
                    <ScrollView horizontal= {true}>
                    <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                            <TouchableOpacity style={[styles.video, styles.elevation]}
                            onPress={newsec}>
                                <Image style={styles.featureimg} source={news} />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 19, fontWeight: 'bold', alignSelf: 'center',marginTop: 12 }}>News</Text>
                        </View>
                        <View style={{flexDirection:'column',marginLeft:15}}>
                            <TouchableOpacity style={[styles.video, styles.elevation]}
                            onPress={showvid}>
                                <Image style={styles.featureimg} source={vid}/>
                            </TouchableOpacity>
                            <Text style={{ fontSize: 19, fontWeight: 'bold', alignSelf: 'center',marginTop: 12}}>Video</Text>
                        </View>
                        <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                            <TouchableOpacity style={[styles.video, styles.elevation]}
                            onPress={showmag}>
                                <Image style={styles.featureimg} source={magz} />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 19, fontWeight: 'bold', alignSelf: 'center',marginTop: 12 }}>Magazines</Text>
                        </View>
                        <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                            <TouchableOpacity style={[styles.video, styles.elevation]}>
                                <Image style={styles.featureimg} source={blog} />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 19, fontWeight: 'bold', alignSelf: 'center',marginTop: 12 }}>Blogs</Text>
                        </View>
                        
                    </ScrollView>
                </View>
                <View style={styles.count1}>
                    <View style={styles.count2}>
                        <View style={styles.count3}>
                            <Image style={styles.countitem} source={user1} />
                            <Text style={{ fontSize: 16, }}>Our Users</Text>
                            <Text style={{ fontSize: 19, fontWeight: 'bold' }}>30 Crores</Text>
                        </View>
                        <View style={styles.count3}>
                            <Image style={styles.countitem} source={doctor} />
                            <Text style={{ fontSize: 16, }}>Our Doctors</Text>
                            <Text style={{ fontSize: 19, fontWeight: 'bold' }}>1 Lakh</Text>
                        </View>
                    </View>
                    <View style={styles.count2}>
                        <View style={styles.count3}>
                            <Image style={styles.countitem} source={hosp} />
                            <Text style={{ fontSize: 16, }}>Hospitals</Text>
                            <Text style={{ fontSize: 19, fontWeight: 'bold' }}>20,000</Text>
                        </View>
                        <View style={styles.count3}>
                            <Image style={styles.countitem} source={pstory} />
                            <Text style={{ fontSize: 16, }}>Patient Stories</Text>
                            <Text style={{ fontSize: 19, fontWeight: 'bold' }}>40 Lakh</Text>
                        </View>
                    </View>
                </View>
                <Footer/>
            </ScrollView>
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
    upper:{
        width: '90%',
        height: 160,
        backgroundColor: '#0A6C89',
        borderRadius:10,
        alignSelf: 'center',
        marginTop: '10%',
    },
    tagline:{
        marginLeft:'45%',
        marginTop: '-40%',
        fontSize:24,
        color:'#D8D8D8',
        fontFamily:'Roboto',
        fontStyle: 'italic',
    },
    docimage:{
        width:'38%',
        height:200,
        marginTop:'-6%',
        marginLeft:'5%',
    },
    secondcontainer:{
        flexDirection: "row",
    },
    appointmentimage:{
        width: '65%',
        height: 90, 
    },
    appoincard:{
        marginTop:'19%',
        marginLeft:'10%',
        width:'95%',
        height:120,
        backgroundColor:'#fff',
        borderRadius:10,
        alignItems:'center',
    },
    profcard: {
        marginTop: '19%',
        marginLeft: '23%',
        width: '95%',
        height: 120,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
    },
    elevation:{
        elevation:10,
        shadowColor:'black',
    },
    video:{
        width:'100%',
        height:110,
        borderRadius:60,
        backgroundColor: '#fff',
        alignSelf:'center'
    },
    feature:{
        height: 190,
        width: '100%',
        backgroundColor:'rgba(159,219,238,0.5)',        
        marginTop:'9%',
        padding:'5%',
        flexDirection: "row",
    },
    featureimg:{
        width: 110, 
        height: 110, 
        borderRadius: 60, 
        opacity: 0.5,
    },
    count1:{
        flexDirection: 'column',
        marginTop:'8%',
    },
    count2:{
        flexDirection:'row'
    },
    count3: {
        width: '40%',
        height: 120,
        alignItems:'center',
        marginLeft: '7%',
        marginBottom: '5%',
    },
    countitem: {
        width: '28%',
        height: 45,
        marginTop: '3%',
        marginBottom: '8%'
    },
});