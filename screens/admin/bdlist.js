
import React,{useEffect} from "react";
import { StyleSheet,View, Text, Image } from "react-native";
import { ScrollView, TouchableOpacity ,FlatList} from "react-native-gesture-handler";
import { DataTable } from 'react-native-paper';
// import { getAuth} from "firebase/auth";
// import { getDatabase, ref, set,get, onValue,child,} from "firebase/database";
import { LogBox } from 'react-native';

export default function bdlist({ route, navigation }) {

    const {bddata} = route.params;
    // console.log('bdiddddddddddddddddddddd', bdid);

    LogBox.ignoreLogs(['Setting a timer']);
    return(
        <View style={styles.container}>
             <View style={{ backgroundColor: '#077395', height: 60, width: '100%', justifyContent: 'center' }}>
                <Text style={{ color: '#fff', fontSize: 22, alignSelf: 'center', }}>
                        Blood Donation Registration
                </Text>
             </View>

            <ScrollView horizontal>
                {/* table */}
                <View style={styles.cont1}>
                <DataTable style={{ borderBottomColor: 'grey', borderBottomWidth: 1,}}>
                    <DataTable.Header style={{borderWidth: 1,borderColor: 'grey',backgroundColor:'#9FDBEE'}}>
                        <DataTable.Title >Full Name</DataTable.Title>
                        <DataTable.Title >DOB</DataTable.Title>
                        <DataTable.Title >Email Id</DataTable.Title>
                        <DataTable.Title >Blood Group</DataTable.Title>
                        <DataTable.Title >Last date</DataTable.Title>
                        <DataTable.Title >Mobile No.</DataTable.Title>
                        <DataTable.Title >Address</DataTable.Title>
                    </DataTable.Header>

                        <FlatList style={{marginTop:10,}}
                            numColumns={1}
                            keyExtractor={(item) => item.bid}
                            data={bddata}
                            renderItem={({ item }) => (
                                <View >
                                    <DataTable.Row style={{borderWidth: 1,borderColor: 'grey',}}>
                                    <DataTable.Cell style={{padding:10}}>{item.Name}</DataTable.Cell>
                                    <DataTable.Cell style={{padding:10}}>{item.DOB}</DataTable.Cell>
                                    <DataTable.Cell style={{padding:10}}>{item.Email}</DataTable.Cell>
                                    <DataTable.Cell style={{padding:10}}>{item.BloodGroup}</DataTable.Cell>
                                    <DataTable.Cell style={{padding:10}}>{item.LastDate}</DataTable.Cell>
                                    <DataTable.Cell style={{padding:10}}>{item.Mobile}</DataTable.Cell>
                                    {/* <DataTable.Cell style={{padding:10}}>{item.Name}</DataTable.Cell> */}
                                </DataTable.Row>
                                </View>
                            )}
                        />

                </DataTable>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cont1:{ 
        paddingTop: 50,
        paddingHorizontal: 30, 
        alignItems: 'center',  
      
        // marginBottom: 30, 
    }
        
  

});