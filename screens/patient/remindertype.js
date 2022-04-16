import React, {useState} from "react";
import { StyleSheet,View, Text,ScrollView, Switch,state } from "react-native";

export default function ReminderType({ navigation }) {
   
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  
    return (
        
        <View style={styles.container}>
            <ScrollView>
            <View >
                 <View
                    style={{ backgroundColor: '#077395', height: 60, width: '100%', justifyContent: 'center',flexDirection:'row'}}>
                    <Text
                        style={{ color: '#fff',fontSize: 19,alignSelf:'center' }}>
                       Add
                    </Text>
                   
                 </View>
                 <View  style={{ backgroundColor: '#fff', height: 54, width: '100%',flexDirection:'row', padding:'3%'  }}>
                     <Text style={{ marginLeft:'3%',color: '#000000', fontSize: 16}}>
                        Reminder On/Off
                     </Text>
                     <View style={{marginLeft:'50%'}}>
                      <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                    </View>
                 </View>
                 <View
                style={{ backgroundColor: '#eee', height: 50, width: '100%', }}>
                <Text
                    style={{color: '#000000',  fontSize: 18, padding:'3%',alignSelf:'center' }}>
                    Details
                </Text>
            </View>

                <Text style={styles.textup}>Title</Text>
                  <Text  style={styles.nameinput}>Medi honey 250</Text>

                <Text style={styles.textup}>Types of reminder</Text>
                    <Text style={styles.nameinput}>Medicine</Text>
                
                <Text style={styles.textup}>Timing</Text>
                    <Text style={styles.nameinput}> 10AM, 2PM, 10PM</Text>
                
                <Text style={styles.textup}>Days</Text>
                    <Text style={styles.nameinput}>Mon, Tue, Wed</Text>

                <Text style={styles.textup}>Duration</Text>
                    <Text style={styles.nameinput}>5 days</Text>

            </View>
        </ScrollView>
    </View>
       
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textup:{ 
        fontSize:16,
        color:'#5E5E5E',
        marginBottom: '1%',
        marginLeft:'6%',
        marginTop:'2%',
        fontWeight:'bold',        
    },
    nameinput:{
        width:'90%',
        height:43,
        alignSelf:"center",
        fontSize:16,
        paddingVertical:'2%',
        marginBottom: '4%',
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    },
    
  
});