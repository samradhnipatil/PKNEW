import React , {useState} from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import CarouselCards from './CarouselCards';
import Footer from '../footer';
import { Picker } from '@react-native-picker/picker';

import Carousel2 from "../../component/Carousel2";
import { dummyData2 } from "../../data/Data2";


import vidapp from '../../assets/images/vidapp.png';
import inper from '../../assets/images/inperapp.png';
import nearhosp from '../../assets/images/nearhosp.png';
import blood from '../../assets/images/blood.png';
import med from '../../assets/images/medical.png';
import del from '../../assets/images/delivery.png';
import mediguide from '../../assets/images/mediguide.png';
import gen from '../../assets/images/gen.png';
import bone from '../../assets/images/bone.png';
import brain from '../../assets/images/brain.png';
import dental from '../../assets/images/dental.png';
import ear from '../../assets/images/ear.png';
import ent from '../../assets/images/ent.png';
import gynac from '../../assets/images/gynac.png';
import heart from '../../assets/images/heart.png';
import lung from '../../assets/images/lung.png';
import user from '../../assets/images/user.png';
import doctor from '../../assets/images/doctor.png';
import hosp from '../../assets/images/hospital.png';
import pstory from '../../assets/images/pstories.png';
import Loca from '../../assets/images/location.png';
import { LogBox } from 'react-native';

export default function Pathome({ navigation }) {

    LogBox.ignoreLogs(['Setting a timer']);

    const [Loc, setLoc] = useState('');

    const [Docs, setDocs] = useState([
        { Name: 'Dr.Samradhni Patil', cat: 'Heart', Location: 'Palghar', pin: 401102, fee: 400, id: '1' },
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

    const findDocs = (doc, cat) => {
        // console.log(cat);
        var doc = Docs.filter(person => person.cat == cat)
        // console.log('docbookappointment', doc);
        navigation.navigate('Doclistvid', {
                doc,
                cat,
            });

    }
    
    const vidAppoin = () => {
        navigation.navigate('BookAppOn',{
            mode: 'online',
        });
    }
    const inperAppoin = () => {
        navigation.navigate('BookAppOn', {
            mode: 'offline',
        });
    }

    const BloodDonationForm = () => {
        navigation.navigate('BloodDonation');
    }

    return (
        <View>
            <ScrollView>
                <View>
                    <View style={styles.box}>
                        <Image style={{width:'10%', height:16,marginTop: '4%', marginLeft:'6%' }} source={Loca}/>
                        <Picker
                            style={styles.picker}
                            selectedValue={Loc}
                            onValueChange={(itemValue) => setLoc(itemValue)}
                        >
                            <Picker.Item label='Location' style={{ color: '#000000' }} />
                            <Picker.Item label='Mumbai' value='Churchgate' />
                            <Picker.Item label='Banglore' value='Banglore' />
                            <Picker.Item label='Mumbai' value='Delhi' />
                            <Picker.Item label='Banglore' value='palghar' />
                            <Picker.Item label='Mumbai' value='thane' />
                            <Picker.Item label='Banglore' value='Virar' />
                        </Picker></View>
                </View>
                

                {/* Tagline */}
                <View style={styles.upper}>
                    {/* <Image style={styles.docimage} source={docimg} /> */}
                    <Carousel2 data={dummyData2} style={{ marginBottom: 100, height:100 }} />
                    <Text style={styles.tagline}></Text>
                </View>


                {/* Appoints boxex */}
                <View style={styles.secondcontainer}>
                    <View>
                    <TouchableOpacity
                        style={[styles.appoincard, styles.elevation]}
                        onPress={vidAppoin}
                        >
                            <Text style={{ fontSize: 19, fontWeight: 'bold',alignSelf:'center',marginLeft: '6%', }}>Book Video Consultation</Text>
                    </TouchableOpacity>
                    <Image style={styles.appointmentimage} source={vidapp} />
                    </View>
                    <View>
                        <TouchableOpacity
                            style={[styles.appoincard2, styles.elevation]}
                            onPress={inperAppoin}
                            >
                            <Text style={{ fontSize: 19, fontWeight: 'bold', alignSelf: 'center', marginLeft: '6%', }}>Book In-person Consultation</Text>
                        </TouchableOpacity>
                        <Image style={styles.appointmentimage2} source={inper} />
                    </View>
                </View>
                {/* Other features */}
                <View style={styles.feature}>
                    <ScrollView horizontal={true}>
                        <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                            <TouchableOpacity style={[styles.video, styles.elevation]}>
                                <Image style={styles.featureimg} source={nearhosp} />
                                <Text style={styles.featuretext}>Nearest Hospitals</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                            <TouchableOpacity style={[styles.video, styles.elevation]}
                            onPress={BloodDonationForm}>
                                <Image style={styles.featureimg} source={blood} />
                                <Text style={styles.featuretext}>Blood Donation</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                            <TouchableOpacity style={[styles.video, styles.elevation]}>
                                <Image style={styles.featureimg} source={med} />
                                <Text style={styles.featuretext}>Order Medicine</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
                {/* Medical register */}
                <View style={styles.middle}>
                    <View style={{flexDirection: 'column'}}>
                        <View style={{flexDirection: 'row'}}>
                            <Image style={styles.delimg} source={del} />
                            <Text style={styles.tagline1}>     Connect with us & Extend Your hands to more and more people.</Text>
                        </View>
                        <Text style={styles.tagline}>Register Your Medical Now!!!</Text>
                    </View>
                </View>
                {/* Specialists doctors */}
                <View style={{ flexDirection: 'column',alignItems:'center' }}>
                    <Text style={{ alignSelf: 'center', fontSize: 25, fontStyle: 'italic', marginTop: '6%', marginBottom: '5%', fontWeight: 'bold' }}>Specialist</Text>
                    
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={[styles.catbox, styles.elevation]} onPress={() => findDocs(Docs, 'General')}>
                                <Image style={styles.imgcat} source={gen} />
                                <Text style={styles.namecat}>General</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.catbox, styles.elevation]} onPress={() => findDocs(Docs, 'Heart')}>
                                <Image style={styles.imgcat} source={heart} />
                                <Text style={styles.namecat}>Heart</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.catbox, styles.elevation]} onPress={() => findDocs(Docs, 'Ear')}>
                                <Image style={styles.imgcat} source={ear} />
                                <Text style={styles.namecat}>Ear</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={[styles.catbox, styles.elevation]} onPress={() => findDocs(Docs, 'Dental')}>
                                <Image style={styles.imgcat} source={dental} />
                                <Text style={styles.namecat}>Teeth</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.catbox, styles.elevation]} onPress={() => findDocs(Docs, 'Lung')}>
                                <Image style={styles.imgcat} source={lung} />
                                <Text style={styles.namecat}>Lungs</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.catbox, styles.elevation]} onPress={() => findDocs(Docs, 'Brain')}>
                                <Image style={styles.imgcat} source={brain} />
                                <Text style={styles.namecat}>Brain</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={[styles.catbox, styles.elevation]} onPress={() => findDocs(Docs, 'Bone')}>
                                <Image style={styles.imgcat} source={bone} />
                                <Text style={styles.namecat}>Bones</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.catbox, styles.elevation]} onPress={() => findDocs(Docs, 'Gynac')}>
                                <Image style={styles.imgcat} source={gynac} />
                                <Text style={styles.namecat}>Gynecology</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.catbox, styles.elevation]} onPress={() => findDocs(Docs, 'ENT')}>
                                <Image style={styles.imgcat} source={ent} />
                                <Text style={styles.namecat}>ENT</Text>
                            </TouchableOpacity>
                        </View>
                </View>
                <View style={styles.middle}>
                    <Image style={styles.mediimg} source={mediguide} />
                    <Text style={{width : '38%',fontSize: 13, fontStyle: 'italic', marginTop: '-18%', marginLeft:'3%', fontWeight:'bold' }}>Get Medical Information at finger- tips using Medi-guide</Text>
                </View>

              
                <CarouselCards/>
                    
                <View style={styles.count1}>
                    <View style={styles.count2}>
                        <View style={styles.count3}>
                            <Image style={styles.countitem} source={user} />
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
                <Footer />
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
    upper: {
        width: 370,
        height: 160,
        backgroundColor: '#0A6C89',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 20,
    },
    middle: {
        width: '90%',
        height: 160,
        backgroundColor: '#52A2BA',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 60,
    },
    tagline: {
        marginLeft: 21,
        marginTop: 17,
        width: 350,
        fontSize: 25,
        color: '#fff',
        fontFamily: 'Roboto',
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    tagline1: {
        // marginLeft: '1%',
        marginTop: '8%',
        fontSize: 16,
        width: '50%',
        color: '#fff',
        fontFamily: 'Roboto',
        fontStyle: 'italic',
        // fontWeight: 'bold',
    },
    docimage: {
        width: 130,
        height: 200,
        marginTop: -30,
        marginLeft: 10,
    },
    delimg: {
        width: "50%",
        height: 120,
        marginTop: '-10%',
    },
    secondcontainer: {
        flexDirection: "row",
    },
    appointmentimage: {
        width: '25%',
        height: 64,
        marginLeft: '45%',
        marginTop: '-10%',
    },
    appointmentimage2: {
        width: '35%',
        height: 60,
        marginLeft: '29%',
        marginTop: '-15%',
    },
    appoincard: {
        marginTop: 37,
        marginLeft: '6%',
        width: '65%',
        height: 120,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    appoincard2: {
        marginTop: 37,
        marginLeft: '-24%',
        width: '90%',
        height: 120,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    profcard: {
        marginTop: 37,
        marginLeft: 25,
        width: 170,
        height: 120,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
    },
    elevation: {
        elevation: 10,
        shadowColor: 'black',
    },
    video: {
        width: 180,
        height: 130,
        borderRadius: 10,
        backgroundColor: '#fff',
        alignSelf: 'center',
    },
    feature: {
        height: 180,
        width: '100%',
        backgroundColor: 'rgba(159,219,238,0.5)',
        marginTop: '6%',
        paddingLeft: '5%',
        paddingTop: '5%',
        flexDirection: "row",
    },
    featureimg:{
        width: '50%', 
        height: 90, 
        borderRadius: 60, 
        alignSelf: 'center', 
        marginTop: '4%'
    },
    featuretext:{
        fontSize: 17, 
        fontWeight: 'bold', 
        alignSelf: 'center'
    },
    count1: {
        flexDirection: 'column',
        marginTop: '8%',
    },
    count2: {
        flexDirection: 'row'
    },
    count3: {
        width: '40%',
        height: 120,
        alignItems: 'center',
        marginLeft: '7%',
        marginBottom: '5%',
    },
    countitem:{
        width: '28%', 
        height: 45, 
        marginTop: '3%', 
        marginBottom: '8%'
    },
    mediimg:{
        width: '100%',
        height: 170,
        backgroundColor: '#52A2BA',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop:'-5%'
    },
    picker: {
        width: '85%',
        height: 30,
        fontSize: 17,
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
        color: '#000000',
        marginBottom: 25,
        borderBottomWidth: 1,
    },
    box: {
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        width: '40%',
        height: 35,
        alignSelf: 'center',
        borderColor: '#C4C4C4',
        borderRadius: 10,
        marginLeft: '40%',
        marginTop:'4%',
        flexDirection:'row',
    },
    catbox: {
        width: '90%',
        height: 140,
        borderRadius: 10,
        backgroundColor: '#fff',
        borderColor: '#c4c4c4',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        marginLeft: '8%',
        marginTop: '7%',
        marginBottom: '5%',

    },
    imgcat: {
        width: 90,
        height: 90,
        borderRadius: 60,
        alignSelf: 'center',
        marginTop: '4%',
    },
    namecat: {
        alignSelf: 'center',
        fontSize: 16,
        marginTop: '5%'
    }
});