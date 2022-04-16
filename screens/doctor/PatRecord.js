///////////////////////////////////No FILE UPLOADED CODE
import React, {useState} from "react";
import { StyleSheet, View, Text, Button,ScrollView,TouchableOpacity,Image ,ImageBackground,FlatList,Linking} from "react-native";
import empfold from '../../assets/images/emptyfold.png';

export default function PatRecord({ route, navigation}) {
    const {patName,recarr} = route.params
    console.log('Doc2',recarr);
    if(recarr == [])
    {
        console.log('empty rec');
    }
    const pressHandler = (link) => {
        Linking.openURL(link)
    }
    return(   
        <View styles={styles.container}>
            <View
                style={{ backgroundColor: '#077395', height: 60,  justifyContent: 'center', marginBottom:60 }}>
                <Text style={{ color: '#fff', fontSize: 22, alignSelf: 'center', }}>{patName}'s Records</Text>
            </View>
            <View>
                <FlatList
                numColumns={1}
                keyExtractor={(item) => item.RecId}
                data={recarr}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() =>pressHandler('https://docs.google.com/document/d/1kCVEG7i-_95BP6mExdJW9f4nZzLJ6SsmqUsNDtfDHPE/edit?usp=sharing')}
                        // onPress={() =>pressHandler(item.Link)}
                        >
                        <View style={styles.box}>
                            <View style={{ flexDirection: 'column', marginLeft: '3%' ,width:150}}>
                                <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: '2%' ,marginLeft:103,color:'#fff',width:150}}>Record ID: {item.RecId}</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 13,marginLeft:103,width:350}}>Link: {item.Link}</Text>
                                </View>
                                <Text style={{ fontSize: 14 ,marginLeft:47,width:350}}>Record Type: {item.cat}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    
                )}
            />
            </View>   
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
        height: 80,
        borderColor: '#c4c4c4',
        backgroundColor: '#c4c4c4',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        marginTop: '1%',
        marginBottom: '1%',
        alignSelf: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        padding: 2,
        paddingLeft:4,
    },

});