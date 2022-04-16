import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image ,FlatList } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";

import docs from '../../assets/images/docs.png';
import Loc from '../../assets/images/locicon.png';
import rate from '../../assets/images/rating.png';

export default function DoclistInperson({ route,navigation}) {

    const { doc, cat,arr } = route.params;
    console.log('Doclistvid_arr', arr);
    // category filtering
    var doc2 = arr.filter(person => person.Specialization == cat)
    console.log('Specialization', doc2);

    // console.log('doc', doc);
    const [Docs, setDocs] = useState(doc2);

    // var docaccloc = Docs;
    const [Location, setLocation] = useState('');
    const [sortdoc, setsortdoc] = useState(Docs);

    const locationchange = (val) =>{
        setsortdoc(Docs);
        setLocation(val);
        setsortdoc((prevlist) => {
            return prevlist.filter(person => person.Location == val)
        }); 
    };
    // const viewdet = (Name, id) => {
    //     navigation.navigate('Viewdocdetails',{
    //         Name,
    //         Academic: 'MBBS.,MS GEN SURGERY',
    //         mode: 'offline',
    //         ID: id,
    //     });
    // }
    const viewdet = (Name,id,ConsultationFee , Location, Specialization,Mobile) => {
        navigation.navigate('Viewdocdetails', {
            Name,
            Academic: 'MBBS.,MS GEN SURGERY',
            mode: 'offline',
            ConsultationFee,
            Location,
            Specialization,            
            Mobile,
            ID: id,
        });
    }
    const Bookapp = (Name, id) => {
        navigation.navigate('Offlineappointment',{
            Name,
            Academic: 'MBBS.,MS GEN SURGERY',
            ID: id,
        });
    }

    return (
        <View>
            <View style={{ backgroundColor: '#077395', height: 130, width: '100%', justifyContent: 'center'}}>
                <Text style={{ fontSize: 21, color: '#fff', alignSelf: 'center', marginTop: '6%', marginBottom: '5%', }}>{cat} Specialist  Doctors</Text>
                <View style={styles.boxsearch}>
                    <Picker
                        style={styles.picker}
                        selectedValue={Location}
                        onValueChange={(itemValue) => locationchange(itemValue)}
                    >
                        <Picker.Item label='Search by Location' style={{ color: '#c4c4c4' }} />
                        <Picker.Item label='Palghar' value='Palghar' />
                        <Picker.Item label='Churchgate' value='Churchgate' />
                        <Picker.Item label='Banglore' value='Banglore' />
                        <Picker.Item label='Andheri' value='Andheri' />
                        <Picker.Item label='Malad' value='Malad' />
                        <Picker.Item label='Dahanu' value='Dahanu' />
                        <Picker.Item label='LA' value='LA' />
                    </Picker>
                </View>
                
            </View>
            <FlatList
                numColumns={1}
                keyExtractor={(item) => item.id}
                data={Docs}
                renderItem={({ item }) => (
                    <View style={styles.box}>
                        <View>
                            <Image style={{ width: 80, height: 80, marginTop: '3%' }} source={docs} />
                        </View>
                        <View style={{ flexDirection: 'column', marginLeft: '3%',width:150 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, marginTop: '2%' }}>{item.Name}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={{ width: '9%', height: 30, marginLeft: '2%'}} source={Loc} />
                                <Text style={{ fontSize: 13, marginTop: '3%' }}> {item.Location}</Text>
                            </View>
                            <Text style={{ fontSize: 14,marginLeft:7,marginTop:-4 }}>Fees: {item.fee}</Text>
                            <Image style={{ width: '40%', height: 24, marginLeft: '4%', marginTop: '-3%' }} source={rate} />
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <TouchableOpacity
                                style={styles.but1}
                                onPress={() => viewdet(item.Name, item.id, item.ConsultationFee, item.Location, item.Specialization, item.Mobile)}>
                                {/* onPress={() => viewdet(item.Name, item.id)}> */}
                                <Text style={{ fontSize: 12, fontWeight: 'bold', alignSelf: 'center' }}>View Details</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.but2}
                                onPress={() => Bookapp(item.Name,item.id)}
                            >
                                <Text style={{ fontSize: 12, fontWeight: 'bold', alignSelf: 'center' }}>Book Appointment</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
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
        height: 100,
        borderColor: '#c4c4c4',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        marginTop: '1%',
        marginBottom: '1%',
        alignSelf: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        padding:5,
    },
    but1: {
        backgroundColor: '#c4c4c4',
        width: '97%',
        height: 24,
        marginLeft: '2%',
        marginTop: '15%',
        borderRadius: 10,
        padding:4
    },
    but2: {
        backgroundColor: '#32B757',
        width: '97%',
        height: 24,
        marginLeft: '2%',
        marginTop: '10%',
        borderRadius: 10,
        padding:4,
    },
    picker: {
        width: '100%',
        height: 30,
        alignSelf: "center",
        fontSize: 17,
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
        color: '#000000',
        marginBottom: '10%',
        borderBottomWidth: 1,
    },
    boxsearch: {
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        width: '70%',
        height: 35,
        alignSelf: 'center',
        borderColor: '#C4C4C4',
        borderRadius: 10,
        marginBottom: '8%',
        backgroundColor:'#fff',
    },
});