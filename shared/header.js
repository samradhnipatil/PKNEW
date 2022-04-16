import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function Header({navigation}){
    const openMenu=()=>{
        navigation.openDrawer();
    }
    return(
        <View style={styles.header}>
            {/* {icon for the menu} */}
            <MaterialIcons name='menu' size={28} onPress={openMenu} styles={styles.icon}/>
             <View>
                    <Text style={styles.headerText}>Practo</Text>
            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    header:{
        width:'100%',
        height:'100%',
        flexDirection:'row',
       
        backgroundColor:'#fff',
    },
    headerText:{
        fontWeight:'bold',
        fontSize:20,
         justifyContent:'center',
        alignItems:'center',
        color:'black',
        letterSpacing:1
    },
    icon:{
        position:'absolute',
        marginLeft:15,
    }
});