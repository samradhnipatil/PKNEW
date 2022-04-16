import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList, ImageBackground, ScrollView, colors, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import foodnutri from '../../assets/images/foodnutri.png';


export default function Allarticle({ navigation,route }) {

    const {sectionarray}=route.params;
    // console.log("appoin::::::",sectionarray);

    const pressHandler = (Id,Title,Content,Lin) => {

        navigation.navigate('Inside Article',{Id,Title,Content,Lin});
    }

    return (

        <View style={styles.container}>
            <View
                style={{ backgroundColor: '#077395', height: 60, width: '100%', justifyContent: 'center' }}>
                <Text
                    style={{ color: '#fff', fontSize: 22, alignSelf: 'center', }}>
                    Food and Nutrition
                </Text>
            </View>
            <FlatList
                numColumns={1}
                keyExtractor={(item) => item.id}
                data={sectionarray}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={()=>pressHandler(item.id,item.title,item.content,item.lin)}
                    >
                        <View style={[styles.itemappoin, styles.elevation]}>
                            <View style={styles.docdet}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image style={{ width: 99, height: 79, marginTop: '4%' }} source={{uri:item.lin}} />
                                </View>
                            </View>
                            <View style={{ marginTop: '8%', marginLeft: '2%', width: '65%', }}>
                                <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />

        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemappoin: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: '1%',
        marginTop: '3%',
        borderRadius: 10,
        width: '100%',
        height: 96,
    },
    elevation: {
        elevation: 10,
        shadowColor: 'black',
    },


});


// import React, { useState, useEffect } from "react";
// import { StyleSheet, View, Text, FlatList, ImageBackground, ScrollView, colors, Image } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
// import foodnutri from '../../assets/images/foodnutri.png';


// export default function Allarticle({ navigation }) {

//     const [Appoin, setAppoin] = useState([
//         { title: 'Could vegetables Be the Fountain of Youth?', id: '1' },
//         { title: 'Coffee : Good for you or not?', id: '2' },
//         { title: 'Even One high-Fat meal may dull your mind', id: '3' },
//         { title: 'Healthy food for diabetes', id: '4' },
//         { title: 'Importance of breakfast', id: '5' },
//     ])

//     const pressHandler = () => {

//         navigation.navigate('Inside Article');
//     }

//     return (

//         <View style={styles.container}>
//             <View
//                 style={{ backgroundColor: '#077395', height: 60, width: '100%', justifyContent: 'center' }}>
//                 <Text
//                     style={{ color: '#fff', fontSize: 22, alignSelf: 'center', }}>
//                     Food and Nutrition
//                 </Text>
//             </View>
//             <FlatList
//                 numColumns={1}
//                 keyExtractor={(item) => item.id}
//                 data={Appoin}
//                 renderItem={({ item }) => (
//                     <TouchableOpacity
//                         onPress={pressHandler}
//                     >
//                         <View style={[styles.itemappoin, styles.elevation]}>
//                             <View style={styles.docdet}>
//                                 <View style={{ flexDirection: 'row' }}>
//                                     <Image style={{ width: 99, height: 79, marginTop: '4%' }} source={foodnutri} />
//                                 </View>
//                             </View>
//                             <View style={{ marginTop: '8%', marginLeft: '2%', width: '65%', }}>
//                                 <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
//                             </View>
//                         </View>
//                     </TouchableOpacity>
//                 )}
//             />

//         </View>

//     )
// }


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#eee',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     itemappoin: {
//         flexDirection: 'row',
//         backgroundColor: '#fff',
//         padding: '1%',
//         marginTop: '3%',
//         borderRadius: 10,
//         width: '100%',
//         height: 96,
//     },
//     elevation: {
//         elevation: 10,
//         shadowColor: 'black',
//     },


// });
