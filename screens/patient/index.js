import React, {useState} from "react";
import { StyleSheet,View, Text,ScrollView, Switch,state } from "react-native";

export default function Home({ navigation }) {
   
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  
    return (
        
        <View style={styles.container}>
            <ScrollView>
            <View >
                 <View
                    style={{ backgroundColor: '#077395', height: 60, width: 412, justifyContent: 'center',flexDirection:'row'}}>
                    <Text
                        style={{ color: '#fff',fontSize: 19,alignSelf:'center' }}>
                       Medicine
                    </Text>
                   
                 </View>
                 <View  style={{ backgroundColor: '#fff', height: 54, width: 412,flexDirection:'row', padding:10  }}>
                     <Text style={{ marginLeft:16,color: '#000000', fontSize: 16}}>
                        Reminder On/Off
                     </Text>
                     <View style={{marginLeft:200}}>
                      <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                    </View>
                 </View>
                 <View
                style={{ backgroundColor: '#eee', height: 50, width: 412, }}>
                <Text
                    style={{ marginLeft:16 ,color: '#000000',  fontSize: 16, padding:10 }}>
                    Details
                </Text>
            </View>

                <Text style={styles.textup}>Title</Text>
                  <Text  style={[styles.nameinput,{borderBottomWidth:1,borderBottomColor: 'grey',}]}>Medi honey 250</Text>

                <Text style={styles.textup}>Types of reminder</Text>
                   <Text  style={[styles.nameinput,{borderBottomWidth:1,borderBottomColor: 'grey',}]}>Medicine</Text>
                
                <Text style={styles.textup}>Timing</Text>
                    <Text style={[styles.nameinput,{borderBottomWidth:1,borderBottomColor: 'grey',}]}> 10AM, 2PM, 10PM</Text>
                
                <Text style={styles.textup}>Days</Text>
                    <Text style={[styles.nameinput,{borderBottomWidth:1,borderBottomColor: 'grey',}]}>Mon, Tue, Wed</Text>

                <Text style={styles.textup}>Duration</Text>
                    <Text style={[styles.nameinput,{borderBottomWidth:1,borderBottomColor: 'grey',}]}>5 days</Text>

               
              
            </View>
        </ScrollView>
    </View>
       
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textup:{ 
        fontSize:16,
        color:'#5E5E5E',
        marginBottom: 10,
        marginLeft:24,
        marginTop:10,
    },
    nameinput:{
        width:360,
        height:30,
        alignSelf:"center",
        fontSize:16,
        borderRightWidth: 0,
        borderTopWidth:0,
        borderLeftWidth: 0,
        paddingVertical:10,
        marginBottom: 20,
    },
    
  
});




















// import React , {useState} from "react";
// import { StyleSheet, View, Text, Image } from "react-native";
// import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
// // import CarouselCards from './CarouselCards';
// import Footer from '../screens/footer';
// import { Picker } from '@react-native-picker/picker';
// import vidapp from '../assets/images/vidapp.png';
// import inper from '../assets/images/inperapp.png';
// import nearhosp from '../assets/images/nearhosp.png';
// import blood from '../assets/images/blood.png';
// import med from '../assets/images/medical.png';
// import del from '../assets/images/delivery.png';
// import mediguide from '../assets/images/mediguide.png';
// import gen from '../assets/images/gen.png';
// import bone from '../assets/images/bone.png';
// import brain from '../assets/images/brain.png';
// import dental from '../assets/images/dental.png';
// import ear from '../assets/images/ear.png';
// import ent from '../assets/images/ent.png';
// import gynac from '../assets/images/gynac.png';
// import heart from '../assets/images/heart.png';
// import lung from '../assets/images/lung.png';
// import user from '../assets/images/user.png';
// import doctor from '../assets/images/doctor.png';
// import hosp from '../assets/images/hospital.png';
// import pstory from '../assets/images/pstories.jpg';
// import Loca from '../assets/images/location.png';

// export default function Home({ navigation }) {

//     const [Loc, setLoc] = useState('');
//     return (
//         <View>
//             <ScrollView>
//                 <View>
//                     <View style={styles.box}>
//                         <Image style={{width:16, height:16,marginTop: 8, marginLeft:10 }} source={Loca}/>
//                         <Picker
//                             style={styles.picker}
//                             selectedValue={Loc}
//                             onValueChange={(itemValue) => setLoc(itemValue)}
//                         >
//                             <Picker.Item label='Location' style={{ color: '#000000' }} />
//                             <Picker.Item label='Mumbai' value='Churchgate' />
//                             <Picker.Item label='Banglore' value='Banglore' />
//                             <Picker.Item label='Mumbai' value='Delhi' />
//                             <Picker.Item label='Banglore' value='palghar' />
//                             <Picker.Item label='Mumbai' value='thane' />
//                             <Picker.Item label='Banglore' value='Virar' />
//                         </Picker></View>
//                 </View>
                

//                 {/* Tagline */}
//                 <View style={styles.upper}>
//                     {/* <Image style={styles.docimage} source={docimg} /> */}
//                     <Text style={styles.tagline}></Text>
//                 </View>


//                 {/* Appoints boxex */}
//                 <View style={styles.secondcontainer}>
//                     <View>
//                     <TouchableOpacity
//                         style={[styles.appoincard, styles.elevation]}
//                         >
//                             <Text style={{ fontSize: 19, fontWeight: 'bold',alignSelf:'center',marginLeft: 20, }}>Book Video Consultation</Text>
//                     </TouchableOpacity>
//                     <Image style={styles.appointmentimage} source={vidapp} />
//                     </View>
//                     <View>
//                         <TouchableOpacity
//                             style={[styles.appoincard, styles.elevation]}
//                             >
//                             <Text style={{ fontSize: 19, fontWeight: 'bold', alignSelf: 'center', marginLeft: 17, }}>Book In-person Consultation</Text>
//                         </TouchableOpacity>
//                         <Image style={styles.appointmentimage} source={inper} />
//                     </View>
//                 </View>
//                 {/* Other features */}
//                 <View style={styles.feature}>
//                     <ScrollView horizontal={true}>
//                         <View style={{ flexDirection: 'column', marginLeft: 15 }}>
//                             <TouchableOpacity style={[styles.video, styles.elevation]}>
//                                 <Image style={{ width: 90, height: 90, borderRadius: 60,alignSelf:'center', marginTop: 5 }} source={nearhosp} />
//                                 <Text style={{ fontSize: 17, fontWeight: 'bold', alignSelf: 'center'}}>Nearest Hospitals</Text>
//                             </TouchableOpacity>
//                         </View>
//                         <View style={{ flexDirection: 'column', marginLeft: 15 }}>
//                             <TouchableOpacity style={[styles.video, styles.elevation]}>
//                                 <Image style={{ width: 90, height: 90, borderRadius: 60, alignSelf: 'center', marginTop: 5 }} source={blood} />
//                                 <Text style={{ fontSize: 17, fontWeight: 'bold', alignSelf: 'center' }}>Blood Donation</Text>
//                             </TouchableOpacity>
//                         </View>
//                         <View style={{ flexDirection: 'column', marginLeft: 15 }}>
//                             <TouchableOpacity style={[styles.video, styles.elevation]}>
//                                 <Image style={{ width: 90, height: 90, borderRadius: 60, alignSelf: 'center', marginTop: 5 }} source={med} />
//                                 <Text style={{ fontSize: 17, fontWeight: 'bold', alignSelf: 'center' }}>Order Medicine</Text>
//                             </TouchableOpacity>
//                         </View>
//                     </ScrollView>
//                 </View>
//                 {/* Medical register */}
//                 <View style={styles.middle}>
//                     <View style={{flexDirection: 'column'}}>
//                         <View style={{flexDirection: 'row'}}>
//                             <Image style={styles.delimg} source={del} />
//                             <Text style={styles.tagline1}>     Conect with us and Extend Your hands to more people.</Text>
//                         </View>
//                         <Text style={styles.tagline}>Register Your Medical Now!!!</Text>
//                     </View>
//                 </View>

//                 {/* Specialists doctors */}
//                 <View style={{ flexDirection: 'column' }}>
//                     <Text style={{alignSelf: 'center', fontSize: 25, fontStyle:'italic', marginTop: 25, marginBottom: 10, fontWeight:'bold'}}>Specialist</Text>
//                     <View style={{flexDirection:'row', alignSelf:'center'}}>
//                         <View style={{flexDirection: 'column'}}>
//                             <Image style={{ width: 90, height: 90, borderRadius: 60, alignSelf: 'center', marginTop: 10, }} source={gen} />
//                             <Text style={{fontSize:16, alignSelf: 'center', }}>General</Text>
//                         </View>
//                         <View style={{ flexDirection: 'column' }}>
//                             <Image style={{ width: 90, height: 90, borderRadius: 60, alignSelf: 'center', marginTop: 10, marginLeft: 30 }} source={heart} />
//                             <Text style={{ fontSize: 16, alignSelf: 'center', marginLeft: 30 }}>Heart</Text>
//                         </View>
//                         <View style={{ flexDirection: 'column' }}>
//                             <Image style={{ width: 90, height: 90, borderRadius: 60, alignSelf: 'center', marginTop: 10, marginLeft: 30 }} source={ear} />
//                             <Text style={{ fontSize: 16, alignSelf: 'center', marginLeft: 30 }}>Ear</Text>
//                         </View>
//                     </View>
//                     <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
//                         <View style={{ flexDirection: 'column' }}>
//                             <Image style={{ width: 90, height: 90, borderRadius: 60, alignSelf: 'center', marginTop: 10, }} source={dental} />
//                             <Text style={{ fontSize: 16, alignSelf: 'center' }}>Teeth</Text>
//                         </View>
//                         <View style={{ flexDirection: 'column' }}>
//                             <Image style={{ width: 90, height: 90, borderRadius: 60, alignSelf: 'center', marginTop: 10, marginLeft: 30 }} source={lung} />
//                             <Text style={{ fontSize: 16, alignSelf: 'center', marginLeft: 30 }}>Lungs</Text>
//                         </View>
//                         <View style={{ flexDirection: 'column' }}>
//                             <Image style={{ width: 90, height: 90, borderRadius: 60, alignSelf: 'center', marginTop: 10, marginLeft: 30 }} source={brain} />
//                             <Text style={{ fontSize: 16, alignSelf: 'center', marginLeft: 30 }}>Brain</Text>
//                         </View>
//                     </View>
//                     <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
//                         <View style={{ flexDirection: 'column' }}>
//                             <Image style={{ width: 90, height: 90, borderRadius: 60, alignSelf: 'center', marginTop: 10, }} source={bone} />
//                             <Text style={{ fontSize: 16, alignSelf: 'center' }}>Bones</Text>
//                         </View>
//                         <View style={{ flexDirection: 'column' }}>
//                             <Image style={{ width: 90, height: 90, borderRadius: 60, alignSelf: 'center', marginTop: 10, marginLeft: 30 }} source={gynac} />
//                             <Text style={{ fontSize: 16, alignSelf: 'center', marginLeft: 30 }}>Gynecology</Text>
//                         </View>
//                         <View style={{ flexDirection: 'column' }}>
//                             <Image style={{ width: 90, height: 90, borderRadius: 60, alignSelf: 'center', marginTop: 10, marginLeft: 30 }} source={ent} />
//                             <Text style={{ fontSize: 16, alignSelf: 'center', marginLeft: 30 }}>ENT</Text>
//                         </View>
//                     </View>
//                 </View>
//                 <View style={styles.middle}>
//                     <Image style={styles.mediimg} source={mediguide} />
//                     <Text style={{width : 150,fontSize: 13, fontStyle: 'italic', marginTop: -60, marginLeft:10, fontWeight:'bold' }}>Get Medical Information at finger- tips using Medi-guide</Text>
//                 </View>
//                 {/* <CarouselCards/> */}
                    
//                 <View style={styles.count1}>
//                     <View style={styles.count2}>
//                         <View style={styles.count3}>
//                             <Image style={{ width: 45, height: 45, marginTop: 5, marginBottom: 10 }} source={user} />
//                             <Text style={{ fontSize: 16, }}>Our Users</Text>
//                             <Text style={{ fontSize: 19, fontWeight: 'bold' }}>30 Crores</Text>
//                         </View>
//                         <View style={styles.count3}>
//                             <Image style={{ width: 45, height: 45, marginTop: 5, marginBottom: 10 }} source={doctor} />
//                             <Text style={{ fontSize: 16, }}>Our Doctors</Text>
//                             <Text style={{ fontSize: 19, fontWeight: 'bold' }}>1 Lakh</Text>
//                         </View>
//                     </View>
//                     <View style={styles.count2}>
//                         <View style={styles.count3}>
//                             <Image style={{ width: 45, height: 45, marginTop: 5, marginBottom: 10 }} source={hosp} />
//                             <Text style={{ fontSize: 16, }}>Hospitals</Text>
//                             <Text style={{ fontSize: 19, fontWeight: 'bold' }}>20,000</Text>
//                         </View>
//                         <View style={styles.count3}>
//                             <Image style={{ width: 45, height: 45, marginTop: 5, marginBottom: 10 }} source={pstory} />
//                             <Text style={{ fontSize: 16, }}>Patient Stories</Text>
//                             <Text style={{ fontSize: 19, fontWeight: 'bold' }}>40 Lakh</Text>
//                         </View>
//                     </View>
//                 </View>
//                 <Footer />
//             </ScrollView>
//         </View>
//         )
//     }

// const styles =  StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     upper: {
//         width: 370,
//         height: 160,
//         backgroundColor: '#0A6C89',
//         borderRadius: 10,
//         alignSelf: 'center',
//         marginTop: 20,
//     },
//     middle: {
//         width: 370,
//         height: 160,
//         backgroundColor: '#52A2BA',
//         borderRadius: 10,
//         alignSelf: 'center',
//         marginTop: 60,
//     },
//     tagline: {
//         marginLeft: 20,
//         marginTop: 20,
//         width: 350,
//         fontSize: 24,
//         color: '#fff',
//         fontFamily: 'Roboto',
//         fontStyle: 'italic',
//     },
//     tagline1: {
//         marginLeft: 10,
//         marginTop: 10,
//         fontSize: 16,
//         width: 200,
//         color: '#fff',
//         fontFamily: 'Roboto',
//         fontStyle: 'italic',
//     },
//     docimage: {
//         width: 130,
//         height: 200,
//         marginTop: -30,
//         marginLeft: 10,
//     },
//     delimg: {
//         width: 160,
//         height: 120,
//         marginTop: -55,
//         marginLeft: 10,
//     },
//     secondcontainer: {
//         flexDirection: "row",
//     },
//     appointmentimage: {
//         width: 60,
//         height: 60,
//         marginLeft: 130,
//         marginTop: -30,
//     },
//     appoincard: {
//         marginTop: 37,
//         marginLeft: 25,
//         width: 170,
//         height: 120,
//         backgroundColor: '#fff',
//         borderRadius: 10,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     profcard: {
//         marginTop: 37,
//         marginLeft: 25,
//         width: 170,
//         height: 120,
//         backgroundColor: '#fff',
//         borderRadius: 10,
//         alignItems: 'center',
//     },
//     elevation: {
//         elevation: 10,
//         shadowColor: 'black',
//     },
//     video: {
//         width: 180,
//         height: 130,
//         borderRadius: 10,
//         backgroundColor: '#fff',
//         alignSelf: 'center',
//     },
//     feature: {
//         height: 180,
//         width: '100%',
//         backgroundColor: 'rgba(159,219,238,0.5)',
//         marginTop: 15,
//         padding: 20,
//         flexDirection: "row",
//     },
//     count1: {
//         flexDirection: 'column',
//         marginTop: 30,
//         // paddingBottom: 20,
//         backgroundColor: 'rgba(196,196,196,0.21)',
//     },
//     count2: {
//         flexDirection: 'row',
//     },
//     count3: {
//         width: 175,
//         height: 120,
//         alignItems: 'center',
//         marginLeft: 20,
//         marginBottom: 20,
//     },
//     mediimg:{
//         width: 370,
//         height: 170,
//         backgroundColor: '#52A2BA',
//         borderRadius: 10,
//         alignSelf: 'center',
//         marginTop:-10
//     },
//     picker: {
//         width: 180,
//         height: 30,
//         fontSize: 17,
//         borderBottomWidth: 1,
//         borderBottomColor: '#000000',
//         color: '#000000',
//         marginBottom: 25,
//         borderBottomWidth: 1,
//     },
//     box: {
//         borderBottomWidth: 1,
//         borderTopWidth: 1,
//         borderLeftWidth: 1,
//         borderRightWidth: 1,
//         width: 200,
//         height: 35,
//         alignSelf: 'center',
//         borderColor: '#C4C4C4',
//         borderRadius: 10,
//         marginLeft: 170,
//         marginTop:20,
//         flexDirection:'row',
//     },
// });


