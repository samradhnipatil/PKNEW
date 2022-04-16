import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import success1 from "../../assets/images/Success.png"
import tick from "../../assets/images/blue-tick.png"

export default function success({ route,navigation }) {

    const { name, patdata, Slot, Disease, today, docdata} = route.params;
    var name1 = name;
    console.log('successdocname', name1);
     console.log('patdata', patdata);

    //  var dob = new Date("13/11/1999"); 
    // var month_diff = Date.now() - dob.getTime(); 
    // var age_dt = new Date(month_diff); 
    // var year = age_dt.getUTCFullYear();
    // var age = Math.abs(year - 1970);  
    // console.log(age);  

    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.out} source={success1} />
                <Image style={{height: 100, width: '25%', top: '20%',alignSelf:'center' }} source={tick} />
                <Text style={{ fontSize: 18, lineHeight: 21, color: '#fff', fontWeight: 'bold', marginTop: '10%', alignSelf: 'center'}}>Awesome!!</Text>
                <Text style={{ fontSize: 17, lineHeight: 19, color: '#fff', marginTop: '1%', alignSelf: 'center'}}>You have successfully booked a slot</Text>
            </View>
            <View style={styles.inner}>
                <View>
                    <Text style={styles.dethead}>Appointment Details</Text>

                    <Text style={styles.dettitle}>Appointment with: </Text> 
                    <Text style={{ fontSize: 16, left: '50%', top: '-11%',}}>{docdata["Name"]}</Text>

                    <Text style={styles.dettitle}>Date: </Text> 
                    <Text style={{ fontSize: 16, left: '18%', top: '-11%',}}>{today}</Text>

                    <Text style={styles.dettitle}>Slots: </Text> 
                    <Text style={{ fontSize: 16, left: '18%', top: '-11%',}}>{Slot}</Text>

                    <Text style={styles.dettitle}>Fees: </Text> 
                    <Text style={{ fontSize: 16, left: '18%', top: '-11%',}}>Rs.{docdata["ConsultationFee"]}/-</Text>
               
                </View>

                <View>
                    <Text style={styles.dethead}>Patient’s Details</Text>

                    <Text style={styles.dettitle}>Patient Name: </Text> 
                    <Text style={{ fontSize: 16, left: '40%', top: '-14%',}}>{patdata["Name"]}</Text>

                    <Text style={styles.dettitle}>Age: </Text> 
                    
                    <Text style={{ fontSize: 16, left: '16%', top: '-14%',}}>{patdata["DOB"]}</Text>

                    <Text style={styles.dettitle}>Disease: </Text> 
                    <Text style={{ fontSize: 16, left: '24%', top: '-14%',}}>{Disease}</Text>
               
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    out: {
        position: "absolute",
        width: '100%',
        height: 380,
    },
    inner:{
        backgroundColor: '#fff',
        height: 500,
        width:'90%',
        padding:'7%',
        borderRadius: 15,
        top: '5%',
        alignSelf:'center',
        elevation: 8,
    },
    dethead:{
        fontSize: 21, 
        fontWeight: 'bold', 
        paddingBottom: 25, 
        lineHeight: 22, 
        color: '#077395', 
        alignSelf: 'center',
    },
    dettitle:{
        fontSize: 16, 
        paddingBottom: '2%', 
        lineHeight: 19, 
        fontWeight: 'bold',
    },
})





// import React from 'react'
// import { StyleSheet, Text, View, Image } from 'react-native'
// import success1 from "../../assets/images/Success.png"
// import tick from "../../assets/images/blue-tick.png"

// export default function success({ route,navigation }) {

//     const { name } = route.params;
//     var name1 = name;
//     console.log('successdocname', name1);

//     return (
//         <View style={styles.container}>
//             <View>
//                 <Image style={styles.out} source={success1} />
//                 <Image style={{height: 100, width: '25%', top: '20%',alignSelf:'center' }} source={tick} />
//                 <Text style={{ fontSize: 18, lineHeight: 21, color: '#fff', fontWeight: 'bold', marginTop: '10%', alignSelf: 'center'}}>Awesome!!</Text>
//                 <Text style={{ fontSize: 17, lineHeight: 19, color: '#fff', marginTop: '1%', alignSelf: 'center'}}>You have successfully booked a slot</Text>
//             </View>
//             <View style={styles.inner}>
//                 <View>
//                     <Text style={styles.dethead}>Appointment Details</Text>

//                     <Text style={styles.dettitle}>Appointment with: </Text> 
//                     <Text style={{ fontSize: 16, left: '50%', top: '-11%',}}>{name1}</Text>

//                     <Text style={styles.dettitle}>Date: </Text> 
//                     <Text style={{ fontSize: 16, left: '18%', top: '-11%',}}>22/01/2022</Text>

//                     <Text style={styles.dettitle}>Slots: </Text> 
//                     <Text style={{ fontSize: 16, left: '18%', top: '-11%',}}>Morning , 7:00 am To 7:15 am</Text>

//                     <Text style={styles.dettitle}>Fees: </Text> 
//                     <Text style={{ fontSize: 16, left: '18%', top: '-11%',}}>Rs. 400/-</Text>
               
//                 </View>

//                 <View>
//                     <Text style={styles.dethead}>Patient’s Details</Text>

//                     <Text style={styles.dettitle}>Patient Name: </Text> 
//                     <Text style={{ fontSize: 16, left: '40%', top: '-14%',}}>Samradhni Patil</Text>

//                     <Text style={styles.dettitle}>Age: </Text> 
//                     <Text style={{ fontSize: 16, left: '16%', top: '-14%',}}>22</Text>

//                     <Text style={styles.dettitle}>Disease: </Text> 
//                     <Text style={{ fontSize: 16, left: '24%', top: '-14%',}}>Headache,Stomach ache</Text>
               
//                 </View>
//             </View>

//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//     },
//     out: {
//         position: "absolute",
//         width: '100%',
//         height: 380,
//     },
//     inner:{
//         backgroundColor: '#fff',
//         height: 500,
//         width:'90%',
//         padding:'7%',
//         borderRadius: 15,
//         top: '5%',
//         alignSelf:'center',
//         elevation: 8,
//     },
//     dethead:{
//         fontSize: 21, 
//         fontWeight: 'bold', 
//         paddingBottom: 25, 
//         lineHeight: 22, 
//         color: '#077395', 
//         alignSelf: 'center',
//     },
//     dettitle:{
//         fontSize: 16, 
//         paddingBottom: '2%', 
//         lineHeight: 19, 
//         fontWeight: 'bold',
//     },
// })