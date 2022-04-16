import React, {useState} from "react";
import {Text, View, StyleSheet, Linking, Button,TouchableOpacity,SafeAreaView,ImageBackground,Image, ScrollView} from "react-native";
// import { getAuth} from "firebase/auth";
// import { getDatabase, ref, set,get, onValue,child,} from "firebase/database";
// import { LogBox } from 'react-native';
import Modal from "react-native-modal";

import corona from '../../assets/images/covid.jpg';
import medinstru from '../../assets/images/medinstru.jpg';
import diet from '../../assets/images/diet.jpg';
import ayu from '../../assets/images/ayu.jpg';


export default function Magazines({ route, navigation }) {

    const openpdf = (link) =>{
      Linking.openURL(link)
    }

    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalVisible1, setModalVisible1] = useState(false);
    const [isModalVisible2, setModalVisible2] = useState(false);
    const [isModalVisible3, setModalVisible3] = useState(false);

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
    const toggleModal1 = () => {
      setModalVisible1(!isModalVisible1);
    };
    const toggleModal2 = () => {
      setModalVisible2(!isModalVisible2);
    };
    const toggleModal3 = () => {
      setModalVisible3(!isModalVisible3);
    };

    return(
      <View style={{ flex: 1 }}>
      <View
          style={{ backgroundColor: '#077395', height: 60, width: '100%', justifyContent: 'center' }}>
          <Text
              style={{ color: '#fff', fontSize: 22, alignSelf: 'center', }}>
              Magzines
          </Text>
      </View>
      <View style={{ flexDirection: 'column', marginBottom:70 }}>
      <ScrollView>
        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop:20, }}>
            <TouchableOpacity 
              onPress={toggleModal}>
              <View style={{ flexDirection: 'column' }}>
                <View style={styles.catbox}>
                  <View style={{marginLeft:150}}>
                    <Text style={{color:'#fff',fontSize:19,fontWeight:'bold'}}>COVID-19 Virus</Text>
                    <Text style={{color:'#fff',fontSize:17,fontStyle: 'italic'}}>Let's fight the Virus</Text>
                  </View>
                </View>
                <Image source={corona} style={styles.img}/>                
              </View>
            </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop:30, }}>
            <TouchableOpacity 
              onPress={toggleModal1}>
              <View style={{ flexDirection: 'column' }}>
                <View style={[styles.catbox,{marginLeft:8}]}>
                <View style={{marginLeft:15}}>
                  <Text style={{color:'#fff',fontSize:19,fontWeight:'bold'}}>Medical Instruments</Text>
                  <Text style={{color:'#fff',fontSize:17,fontStyle: 'italic'}}>Improve Lives Together</Text>
                </View>                  
                </View>
                <Image source={medinstru} style={[styles.img,{marginLeft:220}]}/>                
              </View>
            </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop:30, }}>
            <TouchableOpacity 
              onPress={toggleModal2}>
              <View style={{ flexDirection: 'column' }}>
                <View style={styles.catbox}>
                  <View style={{marginLeft:150}}>
                    <Text style={{color:'#fff',fontSize:19,fontWeight:'bold'}}>Diet Guide</Text>
                    <Text style={{color:'#fff',fontSize:17,fontStyle: 'italic'}}>Eat right, be bright.</Text>
                  </View>
                </View>
                <Image source={diet} style={styles.img}/>                
              </View>
            </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop:30,marginBottom:40, }}>
            <TouchableOpacity 
              onPress={toggleModal3}>
              <View style={{ flexDirection: 'column' }}>
                <View style={[styles.catbox,{marginLeft:8}]}>
                <View style={{marginLeft:15}}>
                  <Text style={{color:'#fff',fontSize:19,fontWeight:'bold'}}>Ayurveda Journals</Text>
                  <Text style={{color:'#fff',fontSize:17,fontStyle: 'italic'}}>Let's Expolre the herbs</Text>
                </View>                  
                </View>
                <Image source={ayu} style={[styles.img,{marginLeft:220}]}/>                
              </View>
            </TouchableOpacity>
        </View>
        </ScrollView>
      </View>

      {/* model for COVID-19 Virus Articles */}
      <Modal isVisible={isModalVisible} style={styles.modalbox}>
        <View style={{ flex: 1 }}>
        <Text style={{color:'#fff',alignSelf:'center',fontSize:18, fontWeight:'bold',marginTop:20}}>COVID-19 Virus Articles</Text>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
            onPress={() =>openpdf('https://reader.elsevier.com/reader/sd/pii/S0188440921001417?token=3797C01A8BE6C23BB122D9103E804CB84016BF0199FE21FCB6927D31F0245CCBF1091ACFAB598D0BC538358E4CDB964A&originRegion=eu-west-1&originCreation=20220227121437')}
            style={styles.catbutt}>
            <Text style={{color:'#fff', fontSize:18,fontWeight:'bold'}}>Article 1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>openpdf('https://reader.elsevier.com/reader/sd/pii/S0188440921001417?token=3797C01A8BE6C23BB122D9103E804CB84016BF0199FE21FCB6927D31F0245CCBF1091ACFAB598D0BC538358E4CDB964A&originRegion=eu-west-1&originCreation=20220227121437')}
            style={styles.catbutt}>
            <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Article 2</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
            onPress={() =>openpdf('https://reader.elsevier.com/reader/sd/pii/S0188440921001417?token=3797C01A8BE6C23BB122D9103E804CB84016BF0199FE21FCB6927D31F0245CCBF1091ACFAB598D0BC538358E4CDB964A&originRegion=eu-west-1&originCreation=20220227121437')}
            style={styles.catbutt}>
            <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Article 3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>openpdf('https://reader.elsevier.com/reader/sd/pii/S0188440921001417?token=3797C01A8BE6C23BB122D9103E804CB84016BF0199FE21FCB6927D31F0245CCBF1091ACFAB598D0BC538358E4CDB964A&originRegion=eu-west-1&originCreation=20220227121437')}
            style={styles.catbutt}>
            <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Article 4</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
            onPress={() =>openpdf('https://reader.elsevier.com/reader/sd/pii/S0188440921001417?token=3797C01A8BE6C23BB122D9103E804CB84016BF0199FE21FCB6927D31F0245CCBF1091ACFAB598D0BC538358E4CDB964A&originRegion=eu-west-1&originCreation=20220227121437')}
            style={styles.catbutt}>
            <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Article 5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>openpdf('https://reader.elsevier.com/reader/sd/pii/S0188440921001417?token=3797C01A8BE6C23BB122D9103E804CB84016BF0199FE21FCB6927D31F0245CCBF1091ACFAB598D0BC538358E4CDB964A&originRegion=eu-west-1&originCreation=20220227121437')}
            style={styles.catbutt}>
            <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Article 6</Text>
          </TouchableOpacity>
        </View>
          <TouchableOpacity
            onPress={toggleModal}
            style={styles.closebut}>
            <Text style={{color:'#fff',fontSize:18}}>Back</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      {/* model for Medical Instruments */}
      <Modal isVisible={isModalVisible1} style={styles.modalbox}>
        <View style={{ flex: 1 }}>
        <Text style={{color:'#fff',alignSelf:'center',fontSize:18, fontWeight:'bold',marginTop:20}}>Medical InstrumentsArticles</Text>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
            onPress={() =>openpdf('https://reader.elsevier.com/reader/sd/pii/S0188440921001417?token=3797C01A8BE6C23BB122D9103E804CB84016BF0199FE21FCB6927D31F0245CCBF1091ACFAB598D0BC538358E4CDB964A&originRegion=eu-west-1&originCreation=20220227121437')}
            style={styles.catbutt}>
            <Text style={{color:'#fff', fontSize:18,fontWeight:'bold'}}>Article 1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>openpdf('https://reader.elsevier.com/reader/sd/pii/S0188440921001417?token=3797C01A8BE6C23BB122D9103E804CB84016BF0199FE21FCB6927D31F0245CCBF1091ACFAB598D0BC538358E4CDB964A&originRegion=eu-west-1&originCreation=20220227121437')}
            style={styles.catbutt}>
            <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Article 2</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
            onPress={() =>openpdf('https://reader.elsevier.com/reader/sd/pii/S0188440921001417?token=3797C01A8BE6C23BB122D9103E804CB84016BF0199FE21FCB6927D31F0245CCBF1091ACFAB598D0BC538358E4CDB964A&originRegion=eu-west-1&originCreation=20220227121437')}
            style={styles.catbutt}>
            <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Article 3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>openpdf('https://reader.elsevier.com/reader/sd/pii/S0188440921001417?token=3797C01A8BE6C23BB122D9103E804CB84016BF0199FE21FCB6927D31F0245CCBF1091ACFAB598D0BC538358E4CDB964A&originRegion=eu-west-1&originCreation=20220227121437')}
            style={styles.catbutt}>
            <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Article 4</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
            onPress={() =>openpdf('https://reader.elsevier.com/reader/sd/pii/S0188440921001417?token=3797C01A8BE6C23BB122D9103E804CB84016BF0199FE21FCB6927D31F0245CCBF1091ACFAB598D0BC538358E4CDB964A&originRegion=eu-west-1&originCreation=20220227121437')}
            style={styles.catbutt}>
            <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Article 5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>openpdf('https://reader.elsevier.com/reader/sd/pii/S0188440921001417?token=3797C01A8BE6C23BB122D9103E804CB84016BF0199FE21FCB6927D31F0245CCBF1091ACFAB598D0BC538358E4CDB964A&originRegion=eu-west-1&originCreation=20220227121437')}
            style={styles.catbutt}>
            <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Article 6</Text>
          </TouchableOpacity>
        </View>
          <TouchableOpacity
            onPress={toggleModal1}
            style={styles.closebut}>
            <Text style={{color:'#fff',fontSize:18}}>Back</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      {/* model for Diet Guide Articles */}
      <Modal isVisible={isModalVisible2} style={styles.modalbox}>
        <View style={{ flex: 1 }}>
        <Text style={{color:'#fff',alignSelf:'center',fontSize:18, fontWeight:'bold',marginTop:20}}>Diet Guide Articles</Text>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
            onPress={() =>openpdf('https://reader.elsevier.com/reader/sd/pii/S0188440921001417?token=3797C01A8BE6C23BB122D9103E804CB84016BF0199FE21FCB6927D31F0245CCBF1091ACFAB598D0BC538358E4CDB964A&originRegion=eu-west-1&originCreation=20220227121437')}
            style={styles.catbutt}>
            <Text style={{color:'#fff', fontSize:18,fontWeight:'bold'}}>Article 1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>openpdf('https://reader.elsevier.com/reader/sd/pii/S0188440921001417?token=3797C01A8BE6C23BB122D9103E804CB84016BF0199FE21FCB6927D31F0245CCBF1091ACFAB598D0BC538358E4CDB964A&originRegion=eu-west-1&originCreation=20220227121437')}
            style={styles.catbutt}>
            <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Article 2</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
            onPress={() =>openpdf('https://reader.elsevier.com/reader/sd/pii/S0188440921001417?token=3797C01A8BE6C23BB122D9103E804CB84016BF0199FE21FCB6927D31F0245CCBF1091ACFAB598D0BC538358E4CDB964A&originRegion=eu-west-1&originCreation=20220227121437')}
            style={styles.catbutt}>
            <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Article 3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>openpdf('https://reader.elsevier.com/reader/sd/pii/S0188440921001417?token=3797C01A8BE6C23BB122D9103E804CB84016BF0199FE21FCB6927D31F0245CCBF1091ACFAB598D0BC538358E4CDB964A&originRegion=eu-west-1&originCreation=20220227121437')}
            style={styles.catbutt}>
            <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Article 4</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
            onPress={() =>openpdf('https://reader.elsevier.com/reader/sd/pii/S0188440921001417?token=3797C01A8BE6C23BB122D9103E804CB84016BF0199FE21FCB6927D31F0245CCBF1091ACFAB598D0BC538358E4CDB964A&originRegion=eu-west-1&originCreation=20220227121437')}
            style={styles.catbutt}>
            <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Article 5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>openpdf('https://reader.elsevier.com/reader/sd/pii/S0188440921001417?token=3797C01A8BE6C23BB122D9103E804CB84016BF0199FE21FCB6927D31F0245CCBF1091ACFAB598D0BC538358E4CDB964A&originRegion=eu-west-1&originCreation=20220227121437')}
            style={styles.catbutt}>
            <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Article 6</Text>
          </TouchableOpacity>
        </View>
          <TouchableOpacity
            onPress={toggleModal2}
            style={styles.closebut}>
            <Text style={{color:'#fff',fontSize:18}}>Back</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      {/* model for Ayurvedic Journal Articles */}
      <Modal isVisible={isModalVisible3} style={styles.modalbox}>
        <View style={{ flex: 1 }}>
        <Text style={{color:'#fff',alignSelf:'center',fontSize:18, fontWeight:'bold',marginTop:20}}>Ayurvedic Articles</Text>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
            onPress={() =>openpdf('https://reader.elsevier.com/reader/sd/pii/S0188440921001417?token=3797C01A8BE6C23BB122D9103E804CB84016BF0199FE21FCB6927D31F0245CCBF1091ACFAB598D0BC538358E4CDB964A&originRegion=eu-west-1&originCreation=20220227121437')}
            style={styles.catbutt}>
            <Text style={{color:'#fff', fontSize:18,fontWeight:'bold'}}>Article 1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>openpdf('https://reader.elsevier.com/reader/sd/pii/S0188440921001417?token=3797C01A8BE6C23BB122D9103E804CB84016BF0199FE21FCB6927D31F0245CCBF1091ACFAB598D0BC538358E4CDB964A&originRegion=eu-west-1&originCreation=20220227121437')}
            style={styles.catbutt}>
            <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Article 2</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
            onPress={() =>openpdf('https://reader.elsevier.com/reader/sd/pii/S0188440921001417?token=3797C01A8BE6C23BB122D9103E804CB84016BF0199FE21FCB6927D31F0245CCBF1091ACFAB598D0BC538358E4CDB964A&originRegion=eu-west-1&originCreation=20220227121437')}
            style={styles.catbutt}>
            <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Article 3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>openpdf('https://reader.elsevier.com/reader/sd/pii/S0188440921001417?token=3797C01A8BE6C23BB122D9103E804CB84016BF0199FE21FCB6927D31F0245CCBF1091ACFAB598D0BC538358E4CDB964A&originRegion=eu-west-1&originCreation=20220227121437')}
            style={styles.catbutt}>
            <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Article 4</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
            onPress={() =>openpdf('https://reader.elsevier.com/reader/sd/pii/S0188440921001417?token=3797C01A8BE6C23BB122D9103E804CB84016BF0199FE21FCB6927D31F0245CCBF1091ACFAB598D0BC538358E4CDB964A&originRegion=eu-west-1&originCreation=20220227121437')}
            style={styles.catbutt}>
            <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Article 5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>openpdf('https://reader.elsevier.com/reader/sd/pii/S0188440921001417?token=3797C01A8BE6C23BB122D9103E804CB84016BF0199FE21FCB6927D31F0245CCBF1091ACFAB598D0BC538358E4CDB964A&originRegion=eu-west-1&originCreation=20220227121437')}
            style={styles.catbutt}>
            <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Article 6</Text>
          </TouchableOpacity>
        </View>
          <TouchableOpacity
            onPress={toggleModal3}
            style={styles.closebut}>
            <Text style={{color:'#fff',fontSize:18}}>Back</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      </View>
    )
}
const styles = StyleSheet.create({
  container:{ flex: 1, justifyContent: "center"},
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  catbutt:{
    backgroundColor:'#077395',
    borderRadius:10,
    height:80,
    width: 150,
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    marginLeft:'7%',
    marginBottom:'3%',
    marginTop:'4%',
  },
  text: {
    color: "white",
    fontSize: 15,
    alignSelf: 'center',
    marginTop: 50,
    fontWeight: "bold",
    backgroundColor: "#000000c0"
  },
  closebut:{
    backgroundColor:'#909090',
    width: 120,
    height: 40,
    alignItems:'center',
    borderRadius:10,
    padding: 5,
    marginTop: 40,
    marginLeft: 230,
  },
  modalbox:{
    marginTop:60,
    justifyContent:'center',
    backgroundColor:'rgba(1,1,1,0.5)',
    borderRadius:10,
  },
  catbox:{
    backgroundColor:'rgba(1,1,1,0.5)',
    height: 170, 
    width:340,
    // alignItems:'center',
    justifyContent:'center',
    marginTop:30,
    marginLeft:30,
    borderRadius: 10,
    },
  img:{
    width:160,
    height:150,
    marginTop:-185,
    borderRadius: 10,
    opacity:0.9
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});