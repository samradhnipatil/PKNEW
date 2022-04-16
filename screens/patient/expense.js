import React,{useState} from "react";
import { StyleSheet, View, Text, FlatList, Button,ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LogBox } from 'react-native';

export default function Expense({route,navigation}) {
    LogBox.ignoreLogs(['Setting a timer']);
    const { Harr,Sum } = route.params
    

    
    return(
        
        <View styles={styles.container}>
            
            <View style={{height:670}}>
                <View style={[styles.box,styles.elevation, {backgroundColor:'#2294B8',zIndex: 1}]}>
                    <Text style={styles.text}>Total Expense</Text>
                    <Text style={styles.text1}>₹ {Sum}</Text>
                </View>
                {/* <ScrollView> */}
                        <FlatList
                            numColumns={1}
                            keyExtractor={(item) => item.id}
                            data={Harr}
                            renderItem={({ item }) => (
                                <View style={styles.subContainer}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={[styles.textStyle, { fontWeight: 'bold',color: 'black' }]}>Appointment-{item.dpost}</Text>
                                        <Text style={[styles.textStyle, { textAlign: 'right' ,color: item.clr}]}>{item.Status}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.subconborder}>{item.date}{'    '} Rs.{item.feecharge}</Text>
                                    </View>
                                    </View>
                            )}
                        />
                        {/* </ScrollView> */}
            </View>
           
        </View>
       
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    box:{
        height:100,
        width:'65%',
        alignSelf:'center',
        marginTop:'7%',
        marginBottom: '3%',
        backgroundColor:'#2294B8',
        borderRadius: 20,
        textAlignVertical:"center",
     
    },
    box1:{
        minHeight:453,
        width:'90%',
        alignSelf:'center',
        backgroundColor:'#DFDFDF',
        marginTop:'-10%',
        alignItems:'center',
       
    },
    elevation: {
        elevation: 11,
        shadowColor: 'black',
    },
    text:{
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:'6%',
        alignSelf:"center",
        fontSize:26,
        fontWeight:'bold',
        marginBottom: 8,
        textAlignVertical:"center",
    },
    text1:{
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf:"center",
        fontSize:24,
    },
    subContainer:{
        alignSelf:'center',
        width: '89%',
        marginRight: 30,
        marginLeft: 30, 

      },
    textStyle:{
        fontSize: 18,
        marginTop:'5%',
        // color:'black', 
        flex:1,
    },
    subconborder:{
        color: 'grey', 
        fontSize: 16, 
        flex: 1, 
        borderBottomColor: 'grey', 
        paddingBottom:'5%',
        borderBottomWidth: 1,
    },
    listtab:{
        flex:1,
        backgroundColor:'#fff',
        padding:15,
    }

});

    


