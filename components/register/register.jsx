import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, Text, View, TouchableOpacity, Image,Alert } from "react-native";
import { Stack, useRouter } from "expo-router";
import { useNavigation } from '@react-navigation/native'; 
import * as ImagePicker from "expo-image-picker";
import { Dimensions } from "react-native";
import axios from "axios";

import { COLORS, api } from "../../constants";
import styles from "./register.style";
import InputContainer from "../common/card/inputContainer/inputContainer";
import {Picker} from '@react-native-picker/picker';

const Register = () => {

    const navigation = useNavigation();
    
    const [storeImage, setStoreImage] = useState(null);
    const [qrcodeImage, setQRcodeImage] = useState(null);
    const [storeName, setStoreName] = useState();
    const [username, setUsername] = useState();
    const [number, setNumber] = useState();
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [storetype, setStoretype] = useState("อาหารจานหลัก"); 
    const [stayAt, setStayAt] = useState("โรงอาหารคณะวิทยาศาสตร์");

    const [storeImageChangeText, setStoreImageChangeText] = useState("เลือกรูปภาพ");
    const [qrcodeImageChangeText, setQRcodeImageChangeText] = useState("เลือกรูปภาพ");
    const { height, width } = Dimensions.get("window");
        
    imageHeight = 0.2 * height;
    imageWidth = 0.8 * width;
    


    const storetypeOptions = ["อาหารจานหลัก", "เครื่องดื่ม", "ขนมขบเคี้ยว","ของหวาน"];
    const stayAtOptions = [
        "โรงอาหารคณะวิทยาศาสตร์",
        "โรงอาหารพระเทพ",
        "โรงอาหารคณะครุศาสตร์และศิลปศาสตร์",
    ];

    const pickImage = async (imageType) => {
        try {
            const data = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
            });

            if (!data.canceled) {
                if (imageType === 'storeImage') {
                    setStoreImage(data.assets[0].uri);
                    setStoreImageChangeText("เปลี่ยนรูปภาพ");
                } else if (imageType === 'qrcodeImage') {
                    setQRcodeImage(data.assets[0].uri);
                    setQRcodeImageChangeText("เปลี่ยนรูปภาพ");
                }
            }
        } catch (error) {
            console.error(error);
        }
    };

    const registerHandler = async () => {
        try {
            const formData = new FormData();

            if (storeImage) {
                const uri = storeImage;
                const fileType = uri.split(".").pop();
                formData.append("storeImage", {
                    uri,
                    name: `storeImage.${fileType}`,
                    type: `image/${fileType}`,
                });
            }

            if (qrcodeImage) {
                const uri = qrcodeImage;
                const fileType = uri.split(".").pop();
                formData.append("qrcodeImage", {
                    uri,
                    name: `qrcodeImage.${fileType}`,
                    type: `image/${fileType}`,
                });
            }

            formData.append("storeName", storeName);
            formData.append("username", username);
            formData.append("number", number);
            formData.append("password", password);
            formData.append("storetype", storetype);
            formData.append("stayAt", stayAt);

            const response = await axios.post(`${api.api}SmartCanteen/store/register`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            if (response.status === 200) {
                showSuccessPopup();
                navigation.navigate("home");

            }

        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    const showSuccessPopup = () => {
        Alert.alert(
            "ลงทะเบียนสำเร็จ",
            "ร้านคุณได้ลงทะเบียนเรียบร้อยแล้ว!",
            [
                {
                    text: "OK",
                    style: styles.inputText,
                },
            ],
            { cancelable: false }
        );
    };    

    return (

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.container}  // if have image flex be 0
            >
                <Stack.Screen
                    options={{
                    headerShown: true,
                    }}
                />

                    <View>
                        <Text style={styles.header}>ข้อมูลร้าน</Text>
                        <InputContainer name={"ชื่อร้าน"} requir={true} placeholder={"กรอกชื่อร้านของคุณ"} onValueChange={(value) => {setStoreName(value)}}/>
                        <InputContainer name={"ชื่อผู้ใช้งาน (ใช้สำหรับเข้าสู่ระบบ)"} requir={true} placeholder={"กรอกชื่อผู้ใช้งาน ex. aek10"} onValueChange={(value) => {setUsername(value)}}/>
                        <InputContainer name={"เบอร์โทร"} requir={true} placeholder={"0812345678"} onValueChange={(value) => {setNumber(value)}}/>
                        <InputContainer name={"รหัสผ่าน"} requir={true} secureTextEntry={true} placeholder={"รหัสผ่าน"} onValueChange={(value) => {setPassword(value)}}/>
                        <InputContainer name={"ยืนยันรหัสผ่าน"} requir={true} secureTextEntry={true} placeholder={"ยืนยันรหัสผ่าน"} onValueChange={(value) => {setPasswordConfirm(value)}}/>

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
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>รูปที่หน้าร้านที่ลูกค้าเห็น (แนะนำให้ถ่ายแนวนอน)</Text>
                            <Text style={styles.start}> *</Text>
                        </View>
                        {(storeImage) ? <Image
                            source={{ uri: storeImage }}
                            style={styles.image(imageHeight, imageWidth)}
                            resizeMode="cover"
                            /> : <View></View>
                        }
                        <View style={styles.imagePicker}>
                            <TouchableOpacity  onPress={() => pickImage('storeImage')}>
                                <Text style={styles.labelText}>{storeImageChangeText}</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.textContainer}>
                            <Text style={styles.text}>รูป QRcode สำหรับจ่ายเงิน</Text>
                            <Text style={styles.start}> *</Text>
                        </View>
                        {(qrcodeImage) ? <Image
                            source={{ uri: qrcodeImage }}
                            style={styles.image(imageHeight, imageWidth)}
                            resizeMode="cover"
                            /> : <View></View>
                        }
                        <View style={styles.imagePicker}>
                            <TouchableOpacity onPress={() => pickImage('qrcodeImage')}>
                                <Text style={styles.labelText}>{qrcodeImageChangeText}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                    <TouchableOpacity onPress={registerHandler} >
                        <View style={styles.line}></View>
                        <View style={styles.bottomContainer}>
                            <Text style={styles.bottomText}>ลงทะเบียน</Text>
                        </View>
                    </TouchableOpacity>
            </ScrollView>
    );
};

export default Register;
