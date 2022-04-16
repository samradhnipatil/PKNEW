import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity, ScrollView } from "react-native";

export default function Allreminder({ navigation }) {
    const [Remin, setRemin] = useState([
        { RemName: 'Medicine', Dosage: '1.0 tsp', Days: 'Everyday', Time: '5.40 PM', id: '1' },
        { RemName: 'Get Milk', Dosage: '1.0 tsp', Days: 'Everyday', Time: '5.40 PM', id: '2' },
        { RemName: 'Get Milk', Dosage: '1.0 tsp', Days: 'Everyday', Time: '5.40 PM', id: '3' },
        { RemName: 'Medicine', Dosage: '1.0 tsp', Days: 'Everyday', Time: '5.40 PM', id: '4' },
        { RemName: 'Medicine', Dosage: '1.0 tsp', Days: 'Everyday', Time: '5.40 PM', id: '5' },
        { RemName: 'Get Milk', Dosage: '1.0 tsp', Days: 'Everyday', Time: '5.40 PM', id: '6' },
        { RemName: 'Get Milk', Dosage: '1.0 tsp', Days: 'Everyday', Time: '5.40 PM', id: '7' },
        { RemName: 'Medicine', Dosage: '1.0 tsp', Days: 'Everyday', Time: '5.40 PM', id: '8' },

    ])

    const pressHandler = () => {
        navigation.navigate('ReminderType');
    }
    const setalram = () => {
        navigation.navigate('Addreminder');
    }

    return (
        <View style={styles.container}>
            {/* <View
                style={{ backgroundColor: '#077395', height: 60, width: '100%', justifyContent: 'center' }}>
                <Text
                    style={{ color: '#fff', fontSize: 22, alignSelf: 'center', }}>
                    Reminders
                </Text>
            </View> */}
            {/* <ScrollView> */}
            {/* <View
                style={{ backgroundColor: '#eee', height: 54, width: '100%', }}>
                <Text
                    style={{ color: '#000000', fontSize: 18, padding: '4%' }}>
                    current
                </Text>
            </View> */}

            <FlatList
                numColumns={1}
                keyExtractor={(item) => item.id}
                data={Remin}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={pressHandler}
                    >
                        <View style={[styles.itemappoin, styles.elevation]}>
                            <View style={styles.docdet}>
                                <Text style={{ fontWeight: 'bold', fontSize: 19, marginLeft: '3%' }}> {item.RemName}</Text>
                                <Text style={{ marginLeft: '4%' }}>{item.Dosage}</Text>
                                <Text style={{ marginLeft: '4%', paddingBottom: '3%' }}>{item.Days} | {item.Time}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />

            <View style={{ width: '90%', paddingTop: '4%', alignItems: 'center' }}>
                <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginTop: '10%', color: '#DFDADA', width: '96%' }} />


                <TouchableOpacity style={styles.button}
                onPress={setalram}
                >
                    <Text style={styles.bottontext}>Set a reminder</Text>
                </TouchableOpacity>
            </View>
            {/* </ScrollView> */}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        alignItems: 'center',
    },
    itemappoin: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: '2%',
        // marginBottom: '2%',
        width: '100%',
        height: 85,
        marginTop:8,
    },
    elevation: {
        elevation: 10,
        shadowColor: 'black',
    },
    button: {
        marginTop: '3%',
        marginBottom: '6%',
        width: '70%',
        height: 47,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#13B5E8',

    },

    bottontext: {
        padding: '3%',
        fontSize: 18,
        color: '#ffff',

    }
    ,
    docdet: {
        width: '95%',
    },

});




