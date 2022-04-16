// stack of all the components of drawer
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CustomDrawer } from "../screens/CustomDrawer";
import { HomeStackScreen, HealthStackScreen, ExpenseStackScreen, PastRecordsStackScreen, HistoryStackScreen, MedicalReminderStackScreen, SettingsStackScreen, HelpStackScreen} from './drawerstack';

import Profpat from "../screens/patient/myprofile";
import signuppage from '../screens/signuppage';
import Appointment from "../screens/patient/appointment";
import Expense from '../screens/patient/expense';


// import Pathome from '../screens/patient/pathome';

import History from '../screens/patient/history';
import History1 from '../screens/patient/history1';

import Pastrecord from '../screens/patient/pastrecord';
import Pastrecord1 from '../screens/patient/pastrecord1';
import NoPastRecord from '../screens/patient/NoPastRecord';

import Reminder from '../screens/patient/reminder';
import Addreminder from '../screens/patient/addreminder';
import Allreminder from '../screens/patient/allreminder';
import ReminderType from '../screens/patient/remindertype';

import Allarticle from '../screens/patient/Allarticle';
import Healtharticle from '../screens/patient/healtharticle';
import Insidearticle from '../screens/patient/insidearticle';

import Setting from '../screens/patient/setting';

import Helpcenter from '../screens/patient/helpcenter';

const Drawernav = createDrawerNavigator();

const MainDrawerScreen = ({ navigation }) => {
    return (
        <Drawernav.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: "#077395",
                height:'12%',
                
            },
            headerTintColor: "white",
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize:22,
                marginBottom:-20,
            }}} drawerContent={props => <CustomDrawer {...props} />}>
            
            <Drawernav.Screen name='Home'  component={HomeStackScreen}/>
            {/* patient Home */}




            {/* patient appooint */}
            <Drawernav.Screen name='Appointment' component={Appointment} />
            {/* patient expense */}
            <Drawernav.Screen name='Expense' component={Expense} />
            {/* patient prof */}
            <Drawernav.Screen name='Profpat' component={Profpat} options={{
                headerShown: false
            }}/>
            <Drawernav.Screen name='signuppage' component={signuppage} options={{
                headerShown: false
            }}/>
            {/* history */}
            <Drawernav.Screen name='History' component={History} />
            <Drawernav.Screen name='History1' component={History1} options={{
                headerShown: false
            }} />
            {/* Pastrecord */}
            <Drawernav.Screen name='Pastrecord' component={Pastrecord} options={{
                headerShown: false
            }} />
            <Drawernav.Screen name='Pastrecord1' component={Pastrecord1} options={{
                headerShown: false
            }} />
            <Drawernav.Screen name='NoPastRecord' component={NoPastRecord} options={{
                // headerShown: false
            }} />
            {/* Reminder */}
            <Drawernav.Screen name='Reminder' component={Reminder} />
            <Drawernav.Screen name='Addreminder' component={Addreminder} options={{
                headerShown: false
            }}/>
            <Drawernav.Screen name='Allreminder' component={Allreminder} options={{
                headerShown: false
            }}/>
            <Drawernav.Screen name='ReminderType' component={ReminderType} options={{
                headerShown: false
            }}/>
            {/* Healtharticle */}
            <Drawernav.Screen name='Articles Categories' component={Healtharticle} />
            <Drawernav.Screen name='All Articles' component={Allarticle} options={{
                headerShown: false
            }}/>
            <Drawernav.Screen name='Inside Article' component={Insidearticle} options={{
                headerShown: false
            }}/> 

            {/* Setting */}
            <Drawernav.Screen name='Setting' component={Setting} /> 

            {/* Helpcenter */}
            <Drawernav.Screen name='Helpcenter' component={Helpcenter} />
            {/* <Drawernav.Screen name='Homepat' component={Pathome} options={{
                headerShown: false
            }}/> */}
            

            
              

            
            
        </Drawernav.Navigator>
    );
}

export { MainDrawerScreen};





// // stack of all the components of drawer
// import React from "react";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { CustomDrawer } from "../screens/CustomDrawer";
// import { HomeStackScreen, HealthStackScreen, ExpenseStackScreen, PastRecordsStackScreen, HistoryStackScreen, MedicalReminderStackScreen, SettingsStackScreen, HelpStackScreen} from './drawerstack';

// import Profpat from "../screens/patient/myprofile";
// import signuppage from '../screens/signuppage';
// import Appointment from "../screens/patient/appointment";
// import Expense from '../screens/patient/expense';


// // import Pathome from '../screens/patient/pathome';

// import History from '../screens/patient/history';
// import History1 from '../screens/patient/history1';

// import Pastrecord from '../screens/patient/pastrecord';

// import Reminder from '../screens/patient/reminder';
// import Addreminder from '../screens/patient/addreminder';
// import Allreminder from '../screens/patient/allreminder';
// import ReminderType from '../screens/patient/remindertype';

// import Allarticle from '../screens/patient/Allarticle';
// import Healtharticle from '../screens/patient/healtharticle';
// import Insidearticle from '../screens/patient/insidearticle';

// import Setting from '../screens/patient/setting';

// import Helpcenter from '../screens/patient/helpcenter';

// const Drawernav = createDrawerNavigator();

// const MainDrawerScreen = ({ navigation }) => {
//     return (
//         <Drawernav.Navigator screenOptions={{
//             headerStyle: {
//                 backgroundColor: "#077395",
//                 height:'9%',
                
//             },
//             headerTintColor: "white",
//             headerTitleStyle: {
//                 fontWeight: 'bold',
//                 fontSize:22,
//                 marginBottom:-30,
//             }}} drawerContent={props => <CustomDrawer {...props} />}>
//             <Drawernav.Screen name='Home'  component={HomeStackScreen}/>
//             <Drawernav.Screen name='Appointment' component={Appointment} />
//             <Drawernav.Screen name='Expense' component={Expense} />
//             {/* <Drawernav.Screen name='Past Records' component={PastRecordsStackScreen} /> */}
//             {/* <Drawernav.Screen name='Medicine Reminder' component={MedicalReminderStackScreen} /> */}
//             {/* <Drawernav.Screen name='Health Articles' component={HealthStackScreen} /> */}
//             {/* <Drawernav.Screen name='Settings' component={SettingsStackScreen} /> */}
//             {/* <Drawernav.Screen name='Help Center' component={HelpStackScreen} /> */}
//             <Drawernav.Screen name='Profpat' component={Profpat} options={{
//                 headerShown: false
//             }}/>
//             <Drawernav.Screen name='signuppage' component={signuppage} options={{
//                 headerShown: false
//             }}/>
//             {/* history */}
//             <Drawernav.Screen name='History' component={History} />
//             <Drawernav.Screen name='History1' component={History1} options={{
//                 headerShown: false
//             }} />
//             {/* Pastrecord */}
//             <Drawernav.Screen name='Pastrecord' component={Pastrecord} />
//             {/* Pastrecord */}
//             <Drawernav.Screen name='Reminder' component={Reminder} />
//             <Drawernav.Screen name='Addreminder' component={Addreminder} options={{
//                 headerShown: false
//             }}/>
//             <Drawernav.Screen name='Allreminder' component={Allreminder} options={{
//                 headerShown: false
//             }}/>
//             <Drawernav.Screen name='ReminderType' component={ReminderType} options={{
//                 headerShown: false
//             }}/>
//             {/* Healtharticle */}
//             <Drawernav.Screen name='Articles Categories' component={Healtharticle} />
//             <Drawernav.Screen name='All Articles' component={Allarticle} options={{
//                 headerShown: false
//             }}/>
//             <Drawernav.Screen name='Inside Article' component={Insidearticle} options={{
//                 headerShown: false
//             }}/> 

//             {/* Setting */}
//             <Drawernav.Screen name='Setting' component={Setting} /> 

//             {/* Helpcenter */}
//             <Drawernav.Screen name='Helpcenter' component={Helpcenter} />
//             {/* <Drawernav.Screen name='Homepat' component={Pathome} options={{
//                 headerShown: false
//             }}/> */}
            
//         </Drawernav.Navigator>
//     );
// }

// export { MainDrawerScreen};