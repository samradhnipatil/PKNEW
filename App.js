import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet, Text, View } from 'react-native';
import Context, { NewsContext } from "./api/context";

import { MainDrawerScreen } from './routes/maindrawer';

import Signuppage from './screens/signuppage';
import filldet from './screens/doctor/filldetdoc';
import Dochome from './screens/doctor/dochome';
import MyProfDoc from './screens/doctor/myprofdoc';
import MyAppointDoc from './screens/doctor/myappointdoc';
import PatDetails from './screens/doctor/patdetails';
import DocPrescri from './screens/doctor/docprescri';
import Newsscreen from './screens/doctor/Newsscreen';
import Videos from './screens/doctor/Videos';
import Magazines from './screens/doctor/Magazines';

import AdminHome from './screens/admin/adminHome';
import ViewRequests from './screens/admin/ViewRequests';
import ViewDet from './screens/admin/ViewDet';
import bdlist from './screens/admin/bdlist';
import odlist from './screens/admin/odlist';
import PatRecord from './screens/doctor/PatRecord';

const docStack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <docStack.Navigator
      // screenOptions={{
      //   headerShown: false
      // }}
      >
        <docStack.Screen name='Signuppage' component={Signuppage} options={{ headerShown: false }} />
        <docStack.Screen name='filldet' component={filldet} options={{ headerShown: false }} />
        <docStack.Screen name='Dochome' component={Dochome} options={{
          headerStyle: {
            backgroundColor: "#0A6C89",
          },
          headerTintColor: "white",
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }} />
        <docStack.Screen name='MyProfDoc' component={MyProfDoc} options={{ headerShown: false }} />
        <docStack.Screen name='MyAppointDoc' component={MyAppointDoc} options={{ headerShown: false }} />
        <docStack.Screen name='PatDetails' component={PatDetails} options={{ headerShown: false }} />
        <docStack.Screen name='PatRecord' component={PatRecord} options={{ headerShown: false }} />
        <docStack.Screen name='DocPrescri' component={DocPrescri} options={{ headerShown: false }} />
        <docStack.Screen name='Homepat' component={MainDrawerScreen} options={{ headerShown: false }} />
        <docStack.Screen name='Newsscreen' component={Newsscreen} options={{ headerShown: false }} />
        <docStack.Screen name='Videos' component={Videos} options={{ headerShown: false }} />
        <docStack.Screen name='Magazines' component={Magazines} options={{ headerShown: false }} />
        
        <docStack.Screen name='AdminHome' component={AdminHome} options={{ headerShown: false }} />
        <docStack.Screen name='ViewRequests' component={ViewRequests} options={{ headerShown: false }} />
        <docStack.Screen name='ViewDet' component={ViewDet} options={{ headerShown: false }} />
        <docStack.Screen name='bdlist' component={bdlist} options={{ headerShown: false }} />
        <docStack.Screen name='odlist' component={odlist} options={{ headerShown: false }} />
      
      
      
      </docStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40,
  },
});

export default () => {
  return (
    <Context>
      <App />
    </Context>
  );
};
