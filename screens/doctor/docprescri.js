import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image, TextInput } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { getAuth} from "firebase/auth";
import { child, getDatabase, ref, set,get,remove ,onValue} from "firebase/database";
import patdet from '../../assets/images/patdet.png';
import { ScrollView } from 'react-native-gesture-handler';
import { LogBox } from 'react-native';


// working code
import email from 'react-native-email';


export default function DocPrescri({route,navigation}) {
    LogBox.ignoreLogs(['Setting a timer']);
    const {patName, patdob, patSession, patTime, patbg, patcon, symp, confee,patEmail, Patid, Appointmentid } = route.params
   
    

    const showmyappoin = () => {
        navigation.navigate('Dochome');
    }
    let arr1 = [];

    const auth = getAuth();
    const db = getDatabase();

    const patinfo = () => {
        navigation.navigate('PatDetails',{
            patName, 
            patdob, 
            patSession, 
            patTime, 
            patbg, 
            patcon,
            symp, 
            confee, 
            Patid,
        });
    }
    const [Disease, setDisease] = useState('');
    const [Medicine, setMedicine] = useState('');
    const [Dosage, setDosage] = useState('');
    const [Frequency, setFrequency] = useState('');
    const [Test, setTest] = useState('');
    // const [Comments, setComments] = useState('');


    const pressdone =()=>{
        // e.preventDefault();
        console.log(Disease);
        console.log(Medicine);
        console.log(Dosage);
        console.log(Frequency);
        console.log(Test);

        const userId = auth.currentUser;
        console.log('user',userId['uid']);
        var useri=userId['uid'];


        set(ref(db,'Prescription/'+ Patid + '/' + useri + '/' +  Appointmentid ), {
            Disease: Disease,
            Medicine: Medicine,
            Dosage: Dosage,
            Frequency: Frequency,
            Test : Test,
        });

// for marking appointment as completed********************************DO NOT REMOVE*******************************************************
        const starCountRef = ref(db, 'Online_Appointments/'+ Patid+'/'+ useri +'/'+ Appointmentid);
        onValue(starCountRef, (snapshot) => {
            const adata = snapshot.val();
            console.log('CANCELadata',Patid,useri,Appointmentid);
            set(ref(db,'Online_Appointments/'+ Patid+'/'+ useri +'/'+ Appointmentid), {
                Pat_Dob: adata["Pat_Dob"],
                Pat_Nam: adata["Pat_Nam"],
                Symptoms: adata["Symptoms"],
                Timings: adata["Timings"],
                date: adata["date"],
                feecharge: adata["feecharge"],
                Status: "Completed",
            })
            .then(() => {
                console.log("Data Upadted successfully!");
            })
            .catch((error) => {
                console.log("Error");
            });
        });


        // email sending code
        const to = [patEmail] 
        email(to, {
            // Optional additional arguments
            // cc: ['yamini.barhate03@gmail.com'], 
            // bcc: 'samradhni.patil14@gmail.com', 
            subject: 'Pocket Doctor-Prescription',
            // body: 'Disease: Heart disease,\n Medicine: alprazolam, \n Dosage: 2, \n Frequency: day,\n Test: blood count'
            body:'Disease: '+Disease+'\n Medicine: '+Medicine+'\nDosage:'+ Dosage+'\nFrequency:'+ Frequency+'\nTest :'+ Test
            
        }).catch(console.error)
        

        setDisease('');
        setMedicine('');
        setDosage('');
        setFrequency('');
        setTest('');
        // setComments('');

        

        navigation.navigate('Dochome');
    }
    return (
        <View style={styles.bg}>
            <Text style={{ color: '#fff', fontSize: 26, marginBottom: '6%', alignSelf:'center'}}>Prescription form</Text>
            <View style={styles.form}>
                <ScrollView>
                    <TouchableOpacity onPress={patinfo}>
                    <View style={styles.pinfo}>
                        <Image style={{ width: '10%', height: 28, marginLeft: '10%', marginTop: '2%'}} source={patdet}></Image>
                        <Text style={{ marginLeft: '15%', fontSize: 17, fontWeight: 'bold', marginTop: '2%'}}>Patient information</Text>
                    </View>
                    </TouchableOpacity>
                    <Text style={styles.labelstyle}>Disease</Text>
                    <View style={styles.box}>
                        <Picker
                            style={styles.picker}
                            selectedValue={Disease}
                            onValueChange={(itemValue) => setDisease(itemValue)}
                        >
                            <Picker.Item label='Select a Disease' style={{ color: '#000000' }} /> 
                            <Picker.Item label='Anxiety' value='Anxiety' />
                            <Picker.Item label='Heart disease.' value='Fever' />
                            <Picker.Item label='Cough' value='Cough' />
                        </Picker>
                    </View>
                    <Text style={styles.labelstyle}>Medicine</Text>
                    <View style={styles.box}>
                    <Picker
                        style={styles.picker}
                            selectedValue={Medicine}
                            onValueChange={(itemValue) => setMedicine(itemValue)}
                    >
                        <Picker.Item label='Medicine' style={{ color: '#000000' }} />
                        <Picker.Item label='alprazolam' value='alprazolam' />
                        <Picker.Item label='lorazepam' value='lorazepam' />
                        </Picker></View>
                    <Text style={styles.labelstyle1}>Dosage</Text>
                    <View style={styles.box1}>
                    <Picker
                        style={styles.picker1}
                            selectedValue={Dosage}
                            onValueChange={(itemValue) => setDosage(itemValue)}
                    >
                        <Picker.Item label='Dosage' style={{ color: '#000000' }} />
                        <Picker.Item label='1' value='1' />
                        <Picker.Item label='2' value='2' />
                        <Picker.Item label='3' value='3' />
                    </Picker></View>
                    <Text style={styles.labelstyle1}>Frequency</Text>
                    <View style={styles.box1}>
                    <Picker
                        style={styles.picker1}
                            selectedValue={Frequency}
                            onValueChange={(itemValue) => setFrequency(itemValue)}
                    >
                        <Picker.Item label='Frequency' style={{ color: '#000000' }} />
                        <Picker.Item label='Day' value='Day' />
                        <Picker.Item label='Week' value='Week' />
                        <Picker.Item label='15 days' value='15 days' />
                        <Picker.Item label='Month' value='Month' />
                    </Picker></View>
                    <Text style={styles.labelstyle}>Test</Text>
                    <View style={styles.box}>
                    <Picker
                        style={styles.picker}
                            selectedValue={Test}
                            onValueChange={(itemValue) => setTest(itemValue)}
                    >
                        <Picker.Item label='Choose a Test' style={{ color: '#000000' }} />
                            <Picker.Item label='blood count' value='blood count' />
                            <Picker.Item label='blood typing' value='blood typing' />
                            <Picker.Item label='glucose tolerance test' value='glucose tolerance test' />
                            <Picker.Item label='hematocrit' value='hematocrit' />
                            <Picker.Item label='bone marrow aspiration' value='bone marrow aspiration' />
                            <Picker.Item label='enzyme analysis' value='enzyme analysis' />
                    </Picker>
                    </View>
                    {/* <Text style={styles.labelstyle}>Comment</Text>
                    <TextInput 
                        multiline={true} 
                        style={{ fontSize: 17, backgroundColor: 'rgba(196,196,196, 0.28)', height: 120, width: '85%',borderRadius: 10, alignSelf: 'center'}}
                        // value={Comments}
                        // keyboardType='default'
                        // onChange={(val) => setComments(val)}
                        ></TextInput> */}
                    <TouchableOpacity 
                        style={styles.but}
                        onPress={()=>pressdone()}
                        // onPress={this.handleEmail}
                        ><Text style={{fontSize: 23, color: '#fff', }}>Done</Text></TouchableOpacity>
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
    },
    bg:{
        backgroundColor: '#077395',
        paddingBottom: '40%',
        paddingTop: '6%',
    },
    form:{
        backgroundColor: '#fff',
        borderRadius: 20,
        alignSelf: 'center',
        width: '90%',
    },
    pinfo:{
        backgroundColor: 'rgba(196,196,196, 0.28)',
        height: 40, 
        width: '80%', 
        alignSelf: 'center', 
        marginTop: '7%', 
        flexDirection: 'row',
        marginBottom: '7%',
    },
    labelstyle:{
        marginLeft: '12%',
        fontWeight: 'bold', 
        fontSize: 18, 
        marginBottom: '3%',
    },
    labelstyle1: {
        marginLeft: '19%',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: '4%',
    },
    
    box:{
        borderBottomWidth: 1, 
        width: '75%',
        height: 40, 
        alignSelf: 'center',
        borderColor: '#C4C4C4',
        marginBottom: '4%',
    },
    box1: {
        borderBottomWidth: 1,
        width: '65%',
        height: 40,
        alignSelf: 'center',
        borderColor: '#C4C4C4',
        marginBottom: '4%',
    },
    picker: {
        width: '90%',
        height: 30,
        fontSize: 17,
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
        color: '#000000',
        marginBottom: '8%',
        borderBottomWidth: 1,
    },
    picker1: {
        width: '100%',
        height: 30,
        fontSize: 17,
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
        color: '#000000',
        marginBottom: '10%',
    },
    but: {
        width: '40%',
        height: 40,
        borderRadius: 25,
        backgroundColor: '#077395',
        color: '#fff',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '8%',
        marginBottom: '8%',
    },
});





// import React, { useState } from "react";
// import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image, TextInput } from "react-native";
// import { Picker } from '@react-native-picker/picker';
// import { getAuth} from "firebase/auth";
// import { child, getDatabase, ref, set,get,remove ,onValue} from "firebase/database";
// import patdet from '../../assets/images/patdet.png';
// import { ScrollView } from 'react-native-gesture-handler';
// import { LogBox } from 'react-native';


// export default function DocPrescri( {route,navigation}) {
//     LogBox.ignoreLogs(['Setting a timer']);
//     const {patName, patdob, patSession, patTime, patbg, patcon, symp, confee, Patid, Appointmentid } = route.params

//     const showmyappoin = () => {
//         navigation.navigate('Dochome');
//     }
//     let arr1 = [];

//     const auth = getAuth();
//     const db = getDatabase();

//     const patinfo = () => {
//         navigation.navigate('PatDetails',{
//             patName, 
//             patdob, 
//             patSession, 
//             patTime, 
//             patbg, 
//             patcon,
//             symp, 
//             confee, 
//             Patid,
//         });
//     }
//     const [Disease, setDisease] = useState('');
//     const [Medicine, setMedicine] = useState('');
//     const [Dosage, setDosage] = useState('');
//     const [Frequency, setFrequency] = useState('');
//     const [Test, setTest] = useState('');
//     // const [Comments, setComments] = useState('');

//     const pressdone =()=>{
//         // e.preventDefault();
//         console.log(Disease);
//         console.log(Medicine);
//         console.log(Dosage);
//         console.log(Frequency);
//         console.log(Test);

//         const userId = auth.currentUser;
//         console.log('user',userId['uid']);
//         var useri=userId['uid'];


//         set(ref(db,'Prescription/'+ Patid + '/' + useri + '/' +  Appointmentid ), {
//             Disease: Disease,
//             Medicine: Medicine,
//             Dosage: Dosage,
//             Frequency: Frequency,
//             Test : Test,
//         });
// // for marking appointment as completed********************************DO NOT REMOVE*******************************************************
//         const starCountRef = ref(db, 'Online_Appointments/'+ Patid+'/'+ useri +'/'+ Appointmentid);
//         onValue(starCountRef, (snapshot) => {
//             const adata = snapshot.val();
//             console.log('CANCELadata',adata);
//             set(ref(db,'Online_Appointments/'+ Patid+'/'+ useri +'/'+ Appointmentid), {
//                 Pat_Dob: adata["Pat_Dob"],
//                 Pat_Nam: adata["Pat_Nam"],
//                 Symptoms: adata["Symptoms"],
//                 Timings: adata["Timings"],
//                 date: adata["date"],
//                 feecharge: adata["feecharge"],
//                 Status: "Completed",
//             })
//             .then(() => {
//                 console.log("Data Upadted successfully!");
//             })
//             .catch((error) => {
//                 console.log("Error");
//             });
//         });

//         setDisease('');
//         setMedicine('');
//         setDosage('');
//         setFrequency('');
//         setTest('');
//         // setComments('');

//         navigation.navigate('Dochome');
//     }
//     return (
//         <View style={styles.bg}>
//             <Text style={{ color: '#fff', fontSize: 26, marginBottom: '6%', alignSelf:'center'}}>Prescription form</Text>
//             <View style={styles.form}>
//                 <ScrollView>
//                     <TouchableOpacity onPress={patinfo}>
//                     <View style={styles.pinfo}>
//                         <Image style={{ width: '10%', height: 28, marginLeft: '10%', marginTop: '2%'}} source={patdet}></Image>
//                         <Text style={{ marginLeft: '15%', fontSize: 17, fontWeight: 'bold', marginTop: '2%'}}>Patient information</Text>
//                     </View>
//                     </TouchableOpacity>
//                     <Text style={styles.labelstyle}>Disease</Text>
//                     <View style={styles.box}>
//                         <Picker
//                             style={styles.picker}
//                             selectedValue={Disease}
//                             onValueChange={(itemValue) => setDisease(itemValue)}
//                         >
//                             <Picker.Item label='Select a Disease' style={{ color: '#000000' }} /> 
//                             <Picker.Item label='Anxiety' value='Anxiety' />
//                             <Picker.Item label='Heart disease.' value='Fever' />
//                             <Picker.Item label='Cough' value='Cough' />
//                         </Picker>
//                     </View>
//                     <Text style={styles.labelstyle}>Medicine</Text>
//                     <View style={styles.box}>
//                     <Picker
//                         style={styles.picker}
//                             selectedValue={Medicine}
//                             onValueChange={(itemValue) => setMedicine(itemValue)}
//                     >
//                         <Picker.Item label='Medicine' style={{ color: '#000000' }} />
//                         <Picker.Item label='alprazolam' value='alprazolam' />
//                         <Picker.Item label='lorazepam' value='lorazepam' />
//                         </Picker></View>
//                     <Text style={styles.labelstyle1}>Dosage</Text>
//                     <View style={styles.box1}>
//                     <Picker
//                         style={styles.picker1}
//                             selectedValue={Dosage}
//                             onValueChange={(itemValue) => setDosage(itemValue)}
//                     >
//                         <Picker.Item label='Dosage' style={{ color: '#000000' }} />
//                         <Picker.Item label='1' value='1' />
//                         <Picker.Item label='2' value='2' />
//                         <Picker.Item label='3' value='3' />
//                     </Picker></View>
//                     <Text style={styles.labelstyle1}>Frequency</Text>
//                     <View style={styles.box1}>
//                     <Picker
//                         style={styles.picker1}
//                             selectedValue={Frequency}
//                             onValueChange={(itemValue) => setFrequency(itemValue)}
//                     >
//                         <Picker.Item label='Frequency' style={{ color: '#000000' }} />
//                         <Picker.Item label='Day' value='Day' />
//                         <Picker.Item label='Week' value='Week' />
//                         <Picker.Item label='15 days' value='15 days' />
//                         <Picker.Item label='Month' value='Month' />
//                     </Picker></View>
//                     <Text style={styles.labelstyle}>Test</Text>
//                     <View style={styles.box}>
//                     <Picker
//                         style={styles.picker}
//                             selectedValue={Test}
//                             onValueChange={(itemValue) => setTest(itemValue)}
//                     >
//                         <Picker.Item label='Choose a Test' style={{ color: '#000000' }} />
//                             <Picker.Item label='blood count' value='blood count' />
//                             <Picker.Item label='blood typing' value='blood typing' />
//                             <Picker.Item label='glucose tolerance test' value='glucose tolerance test' />
//                             <Picker.Item label='hematocrit' value='hematocrit' />
//                             <Picker.Item label='bone marrow aspiration' value='bone marrow aspiration' />
//                             <Picker.Item label='enzyme analysis' value='enzyme analysis' />
//                     </Picker>
//                     </View>
//                     {/* <Text style={styles.labelstyle}>Comment</Text>
//                     <TextInput 
//                         multiline={true} 
//                         style={{ fontSize: 17, backgroundColor: 'rgba(196,196,196, 0.28)', height: 120, width: '85%',borderRadius: 10, alignSelf: 'center'}}
//                         // value={Comments}
//                         // keyboardType='default'
//                         // onChange={(val) => setComments(val)}
//                         ></TextInput> */}
//                     <TouchableOpacity 
//                         style={styles.but}
//                         onPress={()=>pressdone()}
//                         // onPress={showmyappoin}
//                         ><Text style={{fontSize: 23, color: '#fff', }}>Done</Text></TouchableOpacity>
//                 </ScrollView>
//             </View>
//         </View>
//     )
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//     },
//     bg:{
//         backgroundColor: '#077395',
//         paddingBottom: '40%',
//         paddingTop: '6%',
//     },
//     form:{
//         backgroundColor: '#fff',
//         borderRadius: 20,
//         alignSelf: 'center',
//         width: '90%',
//     },
//     pinfo:{
//         backgroundColor: 'rgba(196,196,196, 0.28)',
//         height: 40, 
//         width: '80%', 
//         alignSelf: 'center', 
//         marginTop: '7%', 
//         flexDirection: 'row',
//         marginBottom: '7%',
//     },
//     labelstyle:{
//         marginLeft: '12%',
//         fontWeight: 'bold', 
//         fontSize: 18, 
//         marginBottom: '3%',
//     },
//     labelstyle1: {
//         marginLeft: '19%',
//         fontWeight: 'bold',
//         fontSize: 18,
//         marginBottom: '4%',
//     },
    
//     box:{
//         borderBottomWidth: 1, 
//         width: '75%',
//         height: 40, 
//         alignSelf: 'center',
//         borderColor: '#C4C4C4',
//         marginBottom: '4%',
//     },
//     box1: {
//         borderBottomWidth: 1,
//         width: '65%',
//         height: 40,
//         alignSelf: 'center',
//         borderColor: '#C4C4C4',
//         marginBottom: '4%',
//     },
//     picker: {
//         width: '90%',
//         height: 30,
//         fontSize: 17,
//         borderBottomWidth: 1,
//         borderBottomColor: '#000000',
//         color: '#000000',
//         marginBottom: '8%',
//         borderBottomWidth: 1,
//     },
//     picker1: {
//         width: '100%',
//         height: 30,
//         fontSize: 17,
//         borderBottomWidth: 1,
//         borderBottomColor: '#000000',
//         color: '#000000',
//         marginBottom: '10%',
//     },
//     but: {
//         width: '40%',
//         height: 40,
//         borderRadius: 25,
//         backgroundColor: '#077395',
//         color: '#fff',
//         alignSelf: 'center',
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginTop: '8%',
//         marginBottom: '8%',
//     },
// });


