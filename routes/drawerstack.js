// stack of all the components of drawer
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Pathome from '../screens/patient/pathome';
import BookAppoint from '../screens/patient/bookappoint';
import DoclistInperson from '../screens/patient/doclistInperson';
import Doclistvid from '../screens/patient/doclistvid';
import Viewdocdetails from '../screens/patient/viewdocdetails';
import Onlineappoint from '../screens/patient/onlineappoint';
import Offlineappointment from '../screens/patient/offlineappoint';
import Success from '../screens/patient/success';

import BloodDonation from '../screens/patient/BloodDonation';
import OrganDonation from '../screens/patient/OrganDonation';

import Appointment from "../screens/patient/appointment";

import Expense from '../screens/patient/expense';

import Pastrecord from '../screens/patient/pastrecord';

import History from '../screens/patient/history';
import History1 from '../screens/patient/history1';

import Reminder from '../screens/patient/reminder';
import Addreminder from '../screens/patient/addreminder';
import Allreminder from '../screens/patient/allreminder';
import ReminderType from '../screens/patient/remindertype';

import Allarticle from '../screens/patient/Allarticle';
import Healtharticle from '../screens/patient/healtharticle';
import Insidearticle from '../screens/patient/insidearticle';

import Setting from '../screens/patient/setting';

import Helpcenter from '../screens/patient/helpcenter';

// allnavigators

const HomeStack = createStackNavigator();
const AppointmentStack = createStackNavigator();
const ExpenseStack = createStackNavigator();
const PastRecordsStack = createStackNavigator();
const HistoryStack = createStackNavigator();
const MedicalReminderStack = createStackNavigator();
const HealthStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const HelpStack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

// Home
const HomeStackScreen = ({ navigation }) => {
    return (
        <HomeStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <HomeStack.Screen name='Homepat' component={Pathome} />
            <HomeStack.Screen name='BookAppOn' component={BookAppoint} />
            <HomeStack.Screen name='Doclistvid' component={Doclistvid} />
            <HomeStack.Screen name='DoclistInperson' component={DoclistInperson} />
            <HomeStack.Screen name='Viewdocdetails' component={Viewdocdetails} />
            <HomeStack.Screen name='Onlineappoint' component={Onlineappoint} />
            <HomeStack.Screen name='Offlineappointment' component={Offlineappointment} />
            <HomeStack.Screen name='Success' component={Success} />
            <HomeStack.Screen name='BloodDonation' component={BloodDonation} />
            <HomeStack.Screen name='OrganDonation' component={OrganDonation} />
            {/* <HomeStack.Screen name='DonationTab' component={MainTab} /> */}
        </HomeStack.Navigator>
    );
}
// Appointment
// const AppointmentStackScreen = ({ navigation }) => {
//     return (
//         <AppointmentStack.Navigator
//             screenOptions={{
//                 headerShown: false
//             }}
//         >
//             <AppointmentStack.Screen name='Appointment' component={Appointment} />
//         </AppointmentStack.Navigator>
//     );
// }
// Expense
const ExpenseStackScreen = ({ navigation }) => {
    return (
        <ExpenseStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <ExpenseStack.Screen name='Expense' component={Expense} />
        </ExpenseStack.Navigator>
    );
}
// PastRecords
const PastRecordsStackScreen = ({ navigation }) => {
    return (
        <PastRecordsStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <PastRecordsStack.Screen name='Pastrecord' component={Pastrecord} />
        </PastRecordsStack.Navigator>
    );
}
// History
const HistoryStackScreen = ({ navigation }) => {
    return (
        <HistoryStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <HistoryStack.Screen name='History' component={History} />
            <HistoryStack.Screen name='History1' component={History1} />
        </HistoryStack.Navigator>
    );
}
// MedicalReminder
const MedicalReminderStackScreen = ({ navigation }) => {
    return (
        <MedicalReminderStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <MedicalReminderStack.Screen name='Reminder' component={Reminder} />
            <MedicalReminderStack.Screen name='Addreminder' component={Addreminder} />
            <MedicalReminderStack.Screen name='Allreminder' component={Allreminder} />
            <MedicalReminderStack.Screen name='ReminderType' component={ReminderType} />
        </MedicalReminderStack.Navigator>
    );
}
// health
const HealthStackScreen = ({ navigation }) => {
    return (
        <HealthStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <HealthStack.Screen name='Articles Categories' component={Healtharticle} />
            <HealthStack.Screen name='All Articles' component={Allarticle} />
            <HealthStack.Screen name='Inside Article' component={Insidearticle} />
        </HealthStack.Navigator>
    );
}
// Settings
const SettingsStackScreen = ({ navigation }) => {
    return (
        <SettingsStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <SettingsStack.Screen name='Setting' component={Setting} />
        </SettingsStack.Navigator>
    );
}
// Help Center
const HelpStackScreen = ({ navigation }) => {
    return (
        <HelpStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <HelpStack.Screen name='Helpcenter' component={Helpcenter} />
            <HelpStack.Screen name='Homepat' component={Pathome} />
        </HelpStack.Navigator>
    );
}



export { HomeStackScreen, HealthStackScreen,  ExpenseStackScreen, PastRecordsStackScreen, HistoryStackScreen, MedicalReminderStackScreen,SettingsStackScreen, HelpStackScreen};





// // stack of all the components of drawer
// import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";

// import Pathome from '../screens/patient/pathome';
// import BookAppoint from '../screens/patient/bookappoint';
// import DoclistInperson from '../screens/patient/doclistInperson';
// import Doclistvid from '../screens/patient/doclistvid';
// import Viewdocdetails from '../screens/patient/viewdocdetails';
// import Onlineappoint from '../screens/patient/onlineappoint';
// import Offlineappointment from '../screens/patient/offlineappoint';
// import Success from '../screens/patient/success';

// import Appointment from "../screens/patient/appointment";

// import Expense from '../screens/patient/expense';

// import Pastrecord from '../screens/patient/pastrecord';

// import History from '../screens/patient/history';
// import History1 from '../screens/patient/history1';

// import Reminder from '../screens/patient/reminder';
// import Addreminder from '../screens/patient/addreminder';
// import Allreminder from '../screens/patient/allreminder';
// import ReminderType from '../screens/patient/remindertype';

// import Allarticle from '../screens/patient/Allarticle';
// import Healtharticle from '../screens/patient/healtharticle';
// import Insidearticle from '../screens/patient/insidearticle';

// import Setting from '../screens/patient/setting';

// import Helpcenter from '../screens/patient/helpcenter';

// // allnavigators

// const HomeStack = createStackNavigator();
// const AppointmentStack = createStackNavigator();
// const ExpenseStack = createStackNavigator();
// const PastRecordsStack = createStackNavigator();
// const HistoryStack = createStackNavigator();
// const MedicalReminderStack = createStackNavigator();
// const HealthStack = createStackNavigator();
// const SettingsStack = createStackNavigator();
// const HelpStack = createStackNavigator();

// const screenOptionStyle = {
//   headerStyle: {
//     backgroundColor: "#9AC4F8",
//   },
//   headerTintColor: "white",
//   headerBackTitle: "Back",
// };

// // Home
// const HomeStackScreen = ({ navigation }) => {
//     return (
//         <HomeStack.Navigator
//             screenOptions={{
//                 headerShown: false
//             }}
//         >
//             <HomeStack.Screen name='Homepat' component={Pathome} />
//             <HomeStack.Screen name='BookAppOn' component={BookAppoint} />
//             <HomeStack.Screen name='Doclistvid' component={Doclistvid} />
//             <HomeStack.Screen name='DoclistInperson' component={DoclistInperson} />
//             <HomeStack.Screen name='Viewdocdetails' component={Viewdocdetails} />
//             <HomeStack.Screen name='Onlineappoint' component={Onlineappoint} />
//             <HomeStack.Screen name='Offlineappointment' component={Offlineappointment} />
//             <HomeStack.Screen name='Success' component={Success} />
//         </HomeStack.Navigator>
//     );
// }
// // Appointment
// // const AppointmentStackScreen = ({ navigation }) => {
// //     return (
// //         <AppointmentStack.Navigator
// //             screenOptions={{
// //                 headerShown: false
// //             }}
// //         >
// //             <AppointmentStack.Screen name='Appointment' component={Appointment} />
// //         </AppointmentStack.Navigator>
// //     );
// // }
// // Expense
// const ExpenseStackScreen = ({ navigation }) => {
//     return (
//         <ExpenseStack.Navigator
//             screenOptions={{
//                 headerShown: false
//             }}
//         >
//             <ExpenseStack.Screen name='Expense' component={Expense} />
//         </ExpenseStack.Navigator>
//     );
// }
// // PastRecords
// const PastRecordsStackScreen = ({ navigation }) => {
//     return (
//         <PastRecordsStack.Navigator
//             screenOptions={{
//                 headerShown: false
//             }}
//         >
//             <PastRecordsStack.Screen name='Pastrecord' component={Pastrecord} />
//         </PastRecordsStack.Navigator>
//     );
// }
// // History
// const HistoryStackScreen = ({ navigation }) => {
//     return (
//         <HistoryStack.Navigator
//             screenOptions={{
//                 headerShown: false
//             }}
//         >
//             <HistoryStack.Screen name='History' component={History} />
//             <HistoryStack.Screen name='History1' component={History1} />
//         </HistoryStack.Navigator>
//     );
// }
// // MedicalReminder
// const MedicalReminderStackScreen = ({ navigation }) => {
//     return (
//         <MedicalReminderStack.Navigator
//             screenOptions={{
//                 headerShown: false
//             }}
//         >
//             <MedicalReminderStack.Screen name='Reminder' component={Reminder} />
//             <MedicalReminderStack.Screen name='Addreminder' component={Addreminder} />
//             <MedicalReminderStack.Screen name='Allreminder' component={Allreminder} />
//             <MedicalReminderStack.Screen name='ReminderType' component={ReminderType} />
//         </MedicalReminderStack.Navigator>
//     );
// }
// // health
// const HealthStackScreen = ({ navigation }) => {
//     return (
//         <HealthStack.Navigator
//             screenOptions={{
//                 headerShown: false
//             }}
//         >
//             <HealthStack.Screen name='Articles Categories' component={Healtharticle} />
//             <HealthStack.Screen name='All Articles' component={Allarticle} />
//             <HealthStack.Screen name='Inside Article' component={Insidearticle} />
//         </HealthStack.Navigator>
//     );
// }
// // Settings
// const SettingsStackScreen = ({ navigation }) => {
//     return (
//         <SettingsStack.Navigator
//             screenOptions={{
//                 headerShown: false
//             }}
//         >
//             <SettingsStack.Screen name='Setting' component={Setting} />
//         </SettingsStack.Navigator>
//     );
// }
// // Help Center
// const HelpStackScreen = ({ navigation }) => {
//     return (
//         <HelpStack.Navigator
//             screenOptions={{
//                 headerShown: false
//             }}
//         >
//             <HelpStack.Screen name='Helpcenter' component={Helpcenter} />
//             <HelpStack.Screen name='Homepat' component={Pathome} />
//         </HelpStack.Navigator>
//     );
// }



// export { HomeStackScreen, HealthStackScreen,  ExpenseStackScreen, PastRecordsStackScreen, HistoryStackScreen, MedicalReminderStackScreen,SettingsStackScreen, HelpStackScreen};