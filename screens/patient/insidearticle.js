import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';

import artimg from '../../assets/images/fruit.jpg';

export default function Insidearticle({ navigation,route }) {


    const {Id,Title,Content,Lin}=route.params;
    // console.log("appoin::::::",Id,Title,Content,Lin);

   

    return (
        <View>
            <View style={{ backgroundColor: '#077395', height: 70, width: '100%', justifyContent: 'center' }}>
                <Text style={{ fontSize: 21, color: '#fff', alignSelf: 'center', }}>Health Articles</Text>
            </View>
            
            <ScrollView>  

            <Image style={{ height: 280, width: '100%', }} source={{uri:Lin}} />            
                <View>
                    <Text style={styles.quetext}>{Title}</Text>
                    <Text style={styles.anstext}>{Content}

                        {/* THURSDAY, July 23, 2020 (HealthDay News) — If you want to live longer, you should choose beans over beef for your protein, a new analysis suggests.

                        “These findings have important public health implications as intake of plant protein can be increased relatively easily by replacing animal protein and could have a large effect on longevity,” the researchers reported.

                        More information

                        The U.S. National Heart, Lung, and Blood Institute offers healthy eating advice.“These findings have important public health implications as intake of plant protein can be increased relatively easily by replacing animal protein and could have a large effect on longevity,” the researchers reported.

                        More information

                        The U.S. National Heart, Lung, and Blood Institute offers healthy eating advice.
                        “These findings have important public health implications as intake of plant protein can be increased relatively easily by replacing animal protein and could have a large effect on longevity,” the researchers reported.

                        More information

                        The U.S. National Heart, Lung, and Blood Institute offers healthy eating advice.“These findings have important public health implications as intake of plant protein can be increased relatively easily by replacing animal protein and could have a large effect on longevity,” the researchers reported.

                        More information

                        The U.S. National Heart, Lung, and Blood Institute offers healthy eating advice. */}
                    </Text> 
                </View>
        
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    quetext:{
        color: '#000',
        fontSize:22,
        fontWeight: 'bold',
        alignSelf:'center',
        width:'80%',
        marginBottom:'8%',
    },
    anstext: {
        color: '#000',
        fontSize: 15,
        alignSelf:'center',
        width: '80%',
        marginBottom:'20%'
    }
});



// import React from 'react'
// import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from "react-native";
// import { ScrollView } from 'react-native-gesture-handler';

// import artimg from '../../assets/images/fruit.jpg';

// export default function Insidearticle({ navigation }) {

//     return (
//         <View>
//             <View style={{ backgroundColor: '#077395', height: 70, width: '100%', justifyContent: 'center' }}>
//                 <Text style={{ fontSize: 21, color: '#fff', alignSelf: 'center', }}>Food and Nutrition</Text>
//             </View>
            
//             <ScrollView>  
//                 <Image style={{ height: 280, width: '100%', }} source={artimg} />            
//                 <View>
//                     <Text style={styles.quetext}>Could vegetables Be the Fountain of Youth?</Text>
//                     <Text style={styles.anstext}>
//                         THURSDAY, July 23, 2020 (HealthDay News) — If you want to live longer, you should choose beans over beef for your protein, a new analysis suggests.

//                         “These findings have important public health implications as intake of plant protein can be increased relatively easily by replacing animal protein and could have a large effect on longevity,” the researchers reported.

//                         More information

//                         The U.S. National Heart, Lung, and Blood Institute offers healthy eating advice.“These findings have important public health implications as intake of plant protein can be increased relatively easily by replacing animal protein and could have a large effect on longevity,” the researchers reported.

//                         More information

//                         The U.S. National Heart, Lung, and Blood Institute offers healthy eating advice.
//                         “These findings have important public health implications as intake of plant protein can be increased relatively easily by replacing animal protein and could have a large effect on longevity,” the researchers reported.

//                         More information

//                         The U.S. National Heart, Lung, and Blood Institute offers healthy eating advice.“These findings have important public health implications as intake of plant protein can be increased relatively easily by replacing animal protein and could have a large effect on longevity,” the researchers reported.

//                         More information

//                         The U.S. National Heart, Lung, and Blood Institute offers healthy eating advice.
//                     </Text>
//                 </View>
//             </ScrollView>
//         </View>
//     )
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//     },
//     quetext:{
//         color: '#000',
//         fontSize:22,
//         fontWeight: 'bold',
//         alignSelf:'center',
//         width:'80%',
//         marginBottom:'8%',
//     },
//     anstext: {
//         color: '#000',
//         fontSize: 15,
//         alignSelf:'center',
//         width: '80%',
//         marginBottom:'20%'
//     }
// });


