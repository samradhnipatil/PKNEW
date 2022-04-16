import React, { useState } from "react";
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StyleSheet, View,FlatList, Text, ScrollView, Image } from "react-native";
import ladydoc from '../../assets/images/ladydoc.png';

export default function History1({ route, navigation }) {

  const {Doctname,Dpost,Ddate,Demail,Patname,Patcontact,Pbloodg,Disease,Dosage,Frequency,Medicine,Test } = route.params;
  console.log("arrrrrrrrrrrrhhhhhhhhhhhhhhhhhhhhhh",Disease,Dosage,Frequency,Medicine,Test);
  // console.log('hist11111111111111111111', Harr);

  return (
    <View style={styles.container}>
      
          <View>
            {/* <View
              style={{ backgroundColor: '#077395', height: 60, width: '100%', justifyContent: 'center' }}>
              <Text
                style={{ color: '#fff', fontSize: 22, alignSelf: 'center', }}>
                Appointment-{Dpost}
              </Text>
            </View> */}
            <ScrollView>
              <View style={{ width: '100%', minHeight: 155, backgroundColor: "#eee", marginTop: '8%' }}>

                <Text style={{ textAlign: 'center', fontSize: 20, borderBottomColor: 'black', borderBottomWidth: 1, fontWeight: 'bold' }}>Doctor details</Text>
                <View style={{ flexDirection: 'row', marginTop: '8%', marginBottom: '8%' }}>
                  <Image style={{ width: '22%', height: 84, marginLeft: '10%' }} source={ladydoc} />
                  <View style={{ flexDirection: 'column', marginLeft: '10%', fontSize: 20 }}>
                    <Text><Text style={{ fontWeight: 'bold' }}>Doctor:</Text> {Doctname}</Text>
                    {/* <Text><Text style={{ fontWeight: 'bold' }}>Prescription No.:</Text> 12345</Text> */}
                    <Text><Text style={{ fontWeight: 'bold' }}>Qualification:</Text> {Dpost}</Text>
                    <Text><Text style={{ fontWeight: 'bold' }}>Date:</Text> {Ddate}</Text>
                    <Text><Text style={{ fontWeight: 'bold' }}>Email:</Text> {Demail}</Text>
                  </View>
                </View>

              </View>
              {/* table */}
            <View>
              <View style={styles.tab}>
                <Grid>
                  <Col size={80}>
                    <Row style={[styles.cell, { backgroundColor: '#9FDBEE' }]}>
                      <Text style={{ fontWeight: 'bold' }} >Medicine</Text>
                    </Row>
                    <Row style={styles.cell}>
                      <Text>{Medicine}</Text>
                    </Row>
                    {/* <Row style={styles.cell}>
                      <Text>Syrup</Text>
                    </Row> */}

                  </Col>
                  <Col size={80}>
                    <Row style={[styles.cell, { backgroundColor: '#9FDBEE' }]}>
                      <Text style={{ fontWeight: 'bold' }}>Dosage</Text>
                    </Row>
                    <Row style={styles.cell}>
                      <Text>{Dosage}</Text>
                    </Row>
                    {/* <Row style={styles.cell}>
                      <Text>2</Text>
                    </Row> */}
                  </Col>
                  <Col size={80}>
                    <Row style={[styles.cell, { backgroundColor: '#9FDBEE', }]}>
                      <Text style={{ fontWeight: 'bold' }}>Frequency</Text>
                    </Row>
                    <Row style={styles.cell}>
                      <Text>{Frequency}</Text>
                    </Row>
                    
                  </Col>
                </Grid>
              </View>

              {/* table */}
              <View style={[styles.tab]}>
                <Grid>
                  <Col size={80}>
                    <Row style={[styles.cell, { backgroundColor: '#9FDBEE', }]}>
                      <Text style={{ fontWeight: 'bold' }}>Recommended Test</Text>
                    </Row>
                    <Row style={styles.cell}>
                      <Text>{Test}</Text>
                    </Row>
                    
                  </Col>
                </Grid>
              </View>
            </View>
              <View style={{ width: '100%', minHeight: 149, backgroundColor: "#eee" }}>

                <Text style={{ textAlign: 'center', fontSize: 20, borderBottomColor: 'black', borderBottomWidth: 1, fontWeight: 'bold', marginTop: '5%' }}>Patients Details</Text>

                <View style={{ flexDirection: 'column', fontSize: 20, alignItems: 'center', justifyContent: 'center', marginTop: '6%', marginBottom: '8%' }}>
                  <Text><Text style={{ fontWeight: 'bold' }}>Mr./Ms./Mrs.:  </Text>{Patname}</Text>
                  {/* <Text><Text style={{ fontWeight: 'bold' }}>Consultation:</Text>  Operation required</Text> */}
                  {/* <Text><Text style={{ fontWeight: 'bold' }}>Address:</Text> Pasthal, Boisar.</Text> */}
                  <Text><Text style={{ fontWeight: 'bold' }}>Contact:  </Text>{Patcontact}</Text>
                  <Text><Text style={{ fontWeight: 'bold' }}>BloodGroup:  </Text>{Pbloodg}</Text>

                </View>


              </View>
            </ScrollView>
          </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  tab: {
    width: '100%',
    height: 109,
    padding: '3%',
    paddingTop: '6%',
    backgroundColor: '#fff',
  },
  cell: {
    borderWidth: 1,
    borderColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

});
