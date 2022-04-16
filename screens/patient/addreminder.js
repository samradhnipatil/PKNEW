import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, ScrollView, SafeAreaView, TouchableHighlight, CheckBox, days,TouchableOpacity } from "react-native";
import { Picker } from '@react-native-picker/picker';

// import ReactWeeklyDayPicker from "react-weekly-day-picker";

// import WeekdayPicker from "react-native-weekday-picker"
// import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';  


import Dialog, {
    DialogTitle,
    DialogContent,
    DialogFooter,
    DialogButton,

} from 'react-native-popup-dialog';


export default function Addreminder({ navigation }) {

    const [Title, setTitle] = useState('');
    const [Type, setType] = useState('');
    // const [dose, setdose] = useState('');
    // const [time, settime] = useState('');
    // const [days, setdays] = useState('');
    const [duration, setduration] = useState('');
    const [defaultAnimationDialog, setDefaultAnimationDialog] = useState(false);
    const [isSelected1, setSelection1] = useState(false);
    const [isSelected2, setSelection2] = useState(false);
    const [isSelected3, setSelection3] = useState(false);
    const [isSelected4, setSelection4] = useState(false);
    const [isSelected5, setSelection5] = useState(false);
    const [isSelected6, setSelection6] = useState(false);
    const [isSelected7, setSelection7] = useState(false);
    const [isSelected8, setSelection8] = useState(false);
    const [isSelected9, setSelection9] = useState(false);
    const [isSelected10, setSelection10] = useState(false);
    const [isSelected11, setSelection11] = useState(false);
    const [isSelected12, setSelection12] = useState(false);
    const [isSelected13, setSelection13] = useState(false);
    const [isSelected14, setSelection14] = useState(false);
    const [isSelected15, setSelection15] = useState(false);
    const [isSelected16, setSelection16] = useState(false);

    const [isSelected25, setSelection25] = useState(false);
    const [isSelected26, setSelection26] = useState(false);
    const [isSelected27, setSelection27] = useState(false);
    const [isSelected28, setSelection28] = useState(false);
    const [isSelected29, setSelection29] = useState(false);
    const [isSelected30, setSelection30] = useState(false);
    const [isSelected31, setSelection31] = useState(false);
    const [isSelected32, setSelection32] = useState(false);
    // const [isSelected33, setSelection33] = useState(false);



    const pressHandler = () => {
        navigation.navigate('Allreminder');
    }
    const seeallalram = () => {
        navigation.navigate('Addreminder');
    }
    const selectall = () => {
        if (isSelected32 == false) {
            setSelection25(true);
            setSelection26(true);
            setSelection27(true);
            setSelection28(true);
            setSelection29(true);
            setSelection30(true);
            setSelection31(true);
            setSelection32(true);
        }
        else if (isSelected32 == true) {
            setSelection25(false);
            setSelection26(false);
            setSelection27(false);
            setSelection28(false);
            setSelection29(false);
            setSelection30(false);
            setSelection31(false);
            setSelection32(false);
        }

    }
    const slot = () => {
        if (isSelected1 == true) {
            console.log('7AM');
        }
        setDefaultAnimationDialog(false);
    }

    return (

        <View style={styles.container}>
            <ScrollView>
                <View >
                    <View
                        style={{ backgroundColor: '#077395', height: 60, width: '100%', flexDirection: 'row' }}>
                        <Text
                            style={{ color: '#fff', fontSize: 19, alignSelf: 'center' }}>
                            Add a Reminder
                        </Text>
                        <TouchableOpacity onPress={pressHandler}>
                            <Text
                                style={{ color: '#fff', fontSize: 20, padding: '4%', marginLeft: '50%', fontWeight: 'bold' }}>
                                SAVE
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.textup}>Title</Text>
                    <TextInput
                        style={[styles.nameinput, { borderBottomWidth: 1, borderBottomColor: '#C4C4C4', }]}
                        value={Title}
                        onChange={(val) => setTitle(val)}
                        placeholder="Medi honey 250"
                    />

                    <Text style={styles.textup}>Types of reminder</Text>
                    <View style={{ borderBottomWidth: 1, width: '80%', alignSelf: 'center', borderBottomColor: '#C4C4C4', }}>
                        <Picker
                            style={styles.picker}
                            selectedValue={Type}
                            onValueChange={(itemValue) => setType(itemValue)}
                        >
                            <Picker.Item label='Medicine' value='Medicine' />
                            <Picker.Item label='Other' value='Other' />
                        </Picker>
                    </View>
                    <Text style={styles.textup}>Timing</Text>
                    <SafeAreaView style={styles.container1}>
                        <View style={styles.container1}>

                            {/* <View style={{ height: 40 }} />
                            <Text style={{ fontSize: 20, paddingBottom: 10 }}>MultiSelect Demo</Text>
                            <SelectBox style={{ height: 80 }}
                                label="Select multiple"
                                options={K_OPTIONS}
                                selectedValues={selectedTeams}
                                onMultiSelect={onMultiChange()}
                                onTapClose={onMultiChange()}
                                isMulti
                            /> */}

                            <Dialog
                                onDismiss={() => {
                                    setDefaultAnimationDialog(false);
                                }}
                                width={0.9}
                                visible={defaultAnimationDialog}
                                rounded
                                actionsBordered
                                dialogTitle={
                                    <DialogTitle
                                        title="Timing"
                                        style={{
                                            backgroundColor: '#F7F7F8',
                                        }}
                                        hasTitleBar={false}
                                        align="center"
                                    />
                                }
                                footer={
                                    <DialogFooter>
                                        <DialogButton
                                            text="CANCEL"
                                            bordered
                                            onPress={() => {
                                                setDefaultAnimationDialog(false);
                                            }}
                                            key="button-1"
                                        />
                                        <DialogButton
                                            text="OK"
                                            bordered
                                            onPress={slot}
                                            key="button-2"
                                        />
                                    </DialogFooter>
                                }>
                                <DialogContent
                                    style={{
                                        // backgroundColor: '#F7F7F8',
                                        width: 90
                                    }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={styles.checkboxContainer}>
                                            <CheckBox
                                                value={isSelected1}
                                                onValueChange={setSelection1}
                                                style={styles.checkbox}
                                            />
                                            <Text style={styles.label}>7 AM</Text>
                                        </View>
                                        <View style={styles.checkboxContainer}>
                                            <CheckBox
                                                value={isSelected2}
                                                onValueChange={setSelection2}
                                                style={styles.checkbox}
                                            />
                                            <Text style={styles.label}>8 AM</Text>
                                        </View>
                                        <View style={styles.checkboxContainer}>
                                            <CheckBox
                                                value={isSelected3}
                                                onValueChange={setSelection3}
                                                style={styles.checkbox}
                                            />
                                            <Text style={styles.label}>9 AM</Text>
                                        </View>
                                        <View style={styles.checkboxContainer}>
                                            <CheckBox
                                                value={isSelected4}
                                                onValueChange={setSelection4}
                                                style={styles.checkbox}
                                            />
                                            <Text style={styles.label}>10 AM</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={styles.checkboxContainer}>
                                            <CheckBox
                                                value={isSelected5}
                                                onValueChange={setSelection5}
                                                style={styles.checkbox}
                                            />
                                            <Text style={styles.label}>11 AM</Text>
                                        </View>
                                        <View style={styles.checkboxContainer}>
                                            <CheckBox
                                                value={isSelected6}
                                                onValueChange={setSelection6}
                                                style={styles.checkbox}
                                            />
                                            <Text style={styles.label}>12 PM</Text>
                                        </View>
                                        <View style={styles.checkboxContainer}>
                                            <CheckBox
                                                value={isSelected7}
                                                onValueChange={setSelection7}
                                                style={styles.checkbox}
                                            />
                                            <Text style={styles.label}>1 PM</Text>
                                        </View>
                                        <View style={styles.checkboxContainer}>
                                            <CheckBox
                                                value={isSelected8}
                                                onValueChange={setSelection8}
                                                style={styles.checkbox}
                                            />
                                            <Text style={styles.label}>2 PM</Text>
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={styles.checkboxContainer}>
                                            <CheckBox
                                                value={isSelected9}
                                                onValueChange={setSelection9}
                                                style={styles.checkbox}
                                            />
                                            <Text style={styles.label}>3 PM</Text>
                                        </View>
                                        <View style={styles.checkboxContainer}>
                                            <CheckBox
                                                value={isSelected10}
                                                onValueChange={setSelection10}
                                                style={styles.checkbox}
                                            />
                                            <Text style={styles.label}>4 PM</Text>
                                        </View>
                                        <View style={styles.checkboxContainer}>
                                            <CheckBox
                                                value={isSelected11}
                                                onValueChange={setSelection11}
                                                style={styles.checkbox}
                                            />
                                            <Text style={styles.label}>5 PM</Text>
                                        </View>
                                        <View style={styles.checkboxContainer}>
                                            <CheckBox
                                                value={isSelected12}
                                                onValueChange={setSelection12}
                                                style={styles.checkbox}
                                            />
                                            <Text style={styles.label}>6 PM</Text>
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={styles.checkboxContainer}>
                                            <CheckBox
                                                value={isSelected13}
                                                onValueChange={setSelection13}
                                                style={styles.checkbox}
                                            />
                                            <Text style={styles.label}>7 PM</Text>
                                        </View>
                                        <View style={styles.checkboxContainer}>
                                            <CheckBox
                                                value={isSelected14}
                                                onValueChange={setSelection14}
                                                style={styles.checkbox}
                                            />
                                            <Text style={styles.label}>8 PM</Text>
                                        </View>
                                        <View style={styles.checkboxContainer}>
                                            <CheckBox
                                                value={isSelected15}
                                                onValueChange={setSelection15}
                                                style={styles.checkbox}
                                            />
                                            <Text style={styles.label}>9 PM</Text>
                                        </View>
                                        <View style={styles.checkboxContainer}>
                                            <CheckBox
                                                value={isSelected16}
                                                onValueChange={setSelection16}
                                                style={styles.checkbox}
                                            />
                                            <Text style={styles.label}>10 PM</Text>
                                        </View>
                                    </View>

                                </DialogContent>
                            </Dialog>

                        </View>
                    </SafeAreaView>

                    <Text style={styles.textup1}>Duration</Text>

                    <Picker
                        style={styles.picker2}
                        selectedValue={duration}
                        onValueChange={(itemValue) => setduration(itemValue)}
                    >
                        <Picker.Item label='5 days' value='day5' />
                        <Picker.Item label='1 days' value='day1' />
                        <Picker.Item label='3 days' value='day3' />
                        <Picker.Item label='5 days' value='day5' />
                        <Picker.Item label='7 days' value='day7' />
                        <Picker.Item label='10 days' value='day10' />
                        <Picker.Item label='2 week' value='week2' />
                        <Picker.Item label='3 week' value='week3' />
                        <Picker.Item label='1 month' value='month1' />
                        <Picker.Item label='2 month' value='month2' />
                        <Picker.Item label='3 month' value='month3' />
                        <Picker.Item label='6 month' value='month6' />
                        <Picker.Item label='Forever' value='forever' />
                    </Picker>
                    <View style={{ borderBottomWidth: 1, width: '80%', alignSelf: 'center', borderBottomColor: '#C4C4C4', }}></View>

                    {/* my code */}
                    <Text style={styles.textup}>Days</Text>
                    <View style={[styles.nameinput], { width: '50%', marginLeft: '8%', marginTop: '5%' }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={isSelected25}
                                    onValueChange={setSelection25}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}>Sun</Text>

                            </View>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={isSelected26}
                                    onValueChange={setSelection26}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}>Mon</Text>

                            </View>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={isSelected27}
                                    onValueChange={setSelection27}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}>Tue</Text>

                            </View>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={isSelected28}
                                    onValueChange={setSelection28}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}>Wed</Text>

                            </View>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={isSelected29}
                                    onValueChange={setSelection29}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}>Thur</Text>

                            </View>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={isSelected30}
                                    onValueChange={setSelection30}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}>Fir</Text>

                            </View>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={isSelected31}
                                    onValueChange={setSelection31}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}>Sat</Text>

                            </View>
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={isSelected32}
                                    onValueChange={selectall}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}>Everyday</Text>

                            </View>
                        </View>
                    </View>

                </View>
                <View style={{ width: '90%', paddingTop: '4%', alignItems: 'center' }}>
                    <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginTop: '10%', color: '#DFDADA', width: '96%' }} />


                    <TouchableOpacity style={styles.button}
                        onPress={seeallalram}
                    >
                        <Text style={styles.bottontext}>See All reminder</Text>
                    </TouchableOpacity>
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
    textup: {
        fontSize: 16,
        color: '#5E5E5E',
        marginLeft: '7%',
        marginTop: '2%',
        fontWeight: 'bold'
    },
    textup1: {
        fontSize: 16,
        color: '#5E5E5E',
        marginLeft: '7%',
        marginTop: '-7%',
        fontWeight: 'bold'
    },
    nameinput: {
        width: '80%',
        height: 40,
        alignSelf: "center",
        fontSize: 16,
        borderBottomWidth: 1,
        marginBottom: '8%',
    },
    picker: {
        width: '80%',
        height: 30,
        fontSize: 16,
        borderBottomWidth: 1,
        backgroundColor: '#ffff',
        marginBottom: '5%',
    },
    picker2: {
        width: '80%',
        height: 30,
        fontSize: 16,
        borderBottomWidth: 1,
        backgroundColor: '#ffff',
        marginBottom: '2%',
        marginLeft: '9%',
    },

    // not my code
    container1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2%',
    },
    buttonTextStyle: {
        color: 'black',
        fontSize: 16,

    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: '5%',
    },
    checkbox: {
        alignSelf: "center",
        marginLeft: '5%'

    },
    label: {
        margin: 8,
    },
    button: {
        marginTop: '3%',
        marginBottom: '6%',
        width: '90%',
        height: 47,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#13B5E8',

    },

    bottontext: {
        padding: '3%',
        fontSize: 18,
        color: '#ffff',

    }

});