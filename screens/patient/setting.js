import React from "react";
import { StyleSheet, View, Text, Button,ScrollView } from "react-native";

export default function Setting({route, navigation}) {
    // const pressHandler=()=>{
    //     navigation.goBack(); 
    // }
    // const {arr} = route.params
    return(
        
        <View styles={styles.container}>
            <View
                    style={{ backgroundColor: '#077395', height: 60, width: 412, justifyContent: 'center' }}>
                    <Text
                        style={{ color: '#fff', fontSize: 22, alignSelf: 'center', }}>
                        My Expense
                    </Text>
            </View>
            <ScrollView>
            <View>
                <View style={[styles.box, {backgroundColor:'#2294B8',zIndex: 1}]}>
                    <Text style={styles.text}>Total Expense</Text>
                    <Text style={styles.text1}>₹ 1000</Text>
                </View>

                <View style={styles.box1}>

                            <View style={styles.subContainer}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={[styles.textStyle,{fontWeight: 'bold'}]}>Appointment-1</Text>
                                    <Text style={[styles.textStyle,{textAlign:'right',color:'green'}]}>Completed</Text>
                                </View>
                                <View style={{flexDirection:'row'}}> 
                                    <Text style={{color:'#979494',fontSize: 18, flex:1, borderBottomColor: 'black',borderBottomWidth: 1,}}>22/09{'    '} Rs.500</Text>
                                </View>

                                <View style={{flexDirection:'row'}}>
                                    <Text style={[styles.textStyle,{fontWeight: 'bold'}]}>Appointment-2</Text>
                                    <Text style={[styles.textStyle,{textAlign:'right',color:'blue'}]}>Refunded</Text>
                                </View>
                                <View style={{flexDirection:'row'}}> 
                                    <Text style={{color:'#979494',fontSize: 18, flex:1, borderBottomColor: 'black',borderBottomWidth: 1,}}>22/09{'    '} Rs.500</Text>
                                </View>

                                
                                <View style={{flexDirection:'row'}}>
                                    <Text style={[styles.textStyle,{fontWeight: 'bold'}]}>Appointment-3</Text>
                                    <Text style={[styles.textStyle,{textAlign:'right',color:'red'}]}>Missed</Text>
                                </View>
                                <View style={{flexDirection:'row'}}> 
                                    <Text style={{color:'#979494',fontSize: 18, flex:1, borderBottomColor: 'black',borderBottomWidth: 1,}}>22/09{'    '} Rs.500</Text>
                                </View>

                            </View>
                </View>
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
        justifyContent: 'center',
    },
    box:{
        minHeight:135,
        width:280,
         marginLeft:38,
        // Left:38,
        marginTop:35,
        backgroundColor:'#2294B8',
        borderRadius: 20,
     
    },
    box1:{
        minHeight:453,
        width:338,
         marginLeft:10,
        backgroundColor:'#DFDFDF',
        marginTop:-35,
       
    },
    text:{
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
         marginTop:45,
        alignSelf:"center",
        fontSize:25,
    },
    text1:{
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf:"center",
        fontSize:25,
    },
    subContainer:{
        marginTop:55,
        marginLeft:20,
        width: 300, 
        height: 500, 
      },
      textStyle:{
        fontSize: 20,
        marginTop:30,
        color:'black', 
        flex:1,
      }

});

    


