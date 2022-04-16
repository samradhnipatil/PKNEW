import React,{useEffect} from "react";
import remclock from '../../assets/images/remclock.png';
import { StyleSheet, View, Text, Button,Image,TouchableOpacity } from "react-native";

var entry = false;

export default function Reminder({navigation}) {
    
const pressHandler = () => {
        
        navigation.navigate('Addreminder'); 
}
useEffect(() => {
    if (entry == true) {
        navigation.navigate('Allreminder');
    }
});

    return(
        <View style={styles.container}>
            {/* <View
                style={{ backgroundColor: '#077395', height: 60, width: '100%', justifyContent: 'center' }}>
                <Text
                    style={{ color: '#fff', fontSize: 22, alignSelf: 'center', }}>
                    Reminder
                </Text>
            </View> */}
            
            <View style={{flexDirection:'column'}}>
                <Image style={styles.remimage} source={remclock} />

            </View>
            <View>
                <Text style={{fontWeight:'bold',textAlign:'center',marginBottom:'4%',fontSize: 19}}>You have no reminders.</Text>
                <Text style={{textAlign:'center',marginBottom:'3%',color:'#5E5E5E',
                fontSize:14
                    }}>Set a reminder for medicines, to drink enough water,
                    {'\n'} or to take break at work.</Text>
                
                <View style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                        marginTop:'10%',
                        color:'#DFDADA'
                    }}
                    />
            </View>   
                <TouchableOpacity style={styles.button}
                 onPress={pressHandler}                  >
                
                    <Text style={styles.bottontext}>Set a reminder</Text>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    },
    button:{
        marginTop: 10,
        width: '70%',
        height: 47,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#13B5E8',
       
    },
    remimage:{
        width: 255,
        height: 255,
        alignItems:'center',
        marginTop: '10%',
    },
    bottontext:{
        padding:'3%',
        fontSize: 18,
        color:'#ffff',
       
    }
   

});
    


