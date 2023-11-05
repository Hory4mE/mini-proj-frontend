import React, { useState, useEffect } from "react";
import { SafeAreaView,ScrollView,Text,View } from "react-native";
import { Stack, useRouter } from "expo-router";

import styles from "./register.style";
import InputContainer from "../common/card/inputContainer/inputContainer";
import {Picker} from '@react-native-picker/picker';

const Register = () => {
    const [name, setName] = useState("");
    const [dealer, setDealer] = useState("");
    const [number, setNumber] = useState("");
    const [storetype, setStoretype] = useState("อาหารจานหลัก"); // Initial value
    const [stayAt, setStayAt] = useState("โรงอาหารคณะวิทยาศาสตร์");

    const storetypeOptions = ["อาหารจานหลัก", "เครื่องดื่ม", "ขนมขบเคี้ยว","ของหวาน"];
    const stayAtOptions = [
        "โรงอาหารคณะวิทยาศาสตร์",
        "โรงอาหารพระเทพ",
        "โรงอาหารคณะครุศาสตร์และศิลปศาสตร์",
    ];

    return (
        <SafeAreaView>
            <ScrollView>
                <Stack.Screen
                    options={{
                    headerShown: true,
                    }}
                />
                <View style={styles.container}>
                    <Text style={styles.header}>ข้อมูลร้าน</Text>
                    <InputContainer name={"ชื่อร้าน"} requir={true} placeholder={"กรอกชื่อร้านของคุณ"} onValueChange={(value) => {setName(value)}}/>
                    <InputContainer name={"ชื่อสำหรับติดต่อ"} requir={true} placeholder={"กรอกชื่อคนที่สามารถติดต่อได้"} onValueChange={(value) => {setDealer(value)}}/>
                    <InputContainer name={"เบอร์โทร"} requir={true} placeholder={"0812345678"} onValueChange={(value) => {setNumber(value)}}/>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>ประเภทร้านอาหาร</Text>
                        <Text style={styles.start}> *</Text>
                    </View>
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={storetype}
                            onValueChange={(itemValue) => setStoretype(itemValue)}
                            style={styles.picker}
                        >
                            {storetypeOptions.map((option, index) => (
                            <Picker.Item label={option} value={option} key={index} />
                            ))}
                        </Picker>

                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>สถานที่ตั้ง</Text>
                        <Text style={styles.start}> *</Text>
                    </View>
                    <View style={styles.pickerContainer}>
                        
                        <Picker
                            selectedValue={stayAt}
                            onValueChange={(itemValue) => setStayAt(itemValue)}
                            style={styles.picker}
                        >
                            {stayAtOptions.map((option, index) => (
                            <Picker.Item label={option} value={option} key={index} />
                            ))}
                        </Picker>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Register;
