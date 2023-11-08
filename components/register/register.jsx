import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, Text, View, TouchableOpacity, Image } from "react-native";
import { Stack, useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import { Dimensions } from "react-native";
import axios from "axios";

import { api } from "../../constants";
import styles from "./register.style";
import InputContainer from "../common/card/inputContainer/inputContainer";
import {Picker} from '@react-native-picker/picker';

const Register = () => {
    
    const [image, setImage] = useState(null);
    const [storeName, setStoreName] = useState();
    const [dealer, setDealer] = useState();
    const [number, setNumber] = useState();
    const [storetype, setStoretype] = useState("อาหารจานหลัก"); 
    const [stayAt, setStayAt] = useState("โรงอาหารคณะวิทยาศาสตร์");

    const [imageChangeText, setImageChangeText] = useState("เลือกรูปภาพ");
    const { height, width } = Dimensions.get("window");
        
    imageHeight = 0.2 * height;
    imageWidth = 0.8 * width;
    


    const storetypeOptions = ["อาหารจานหลัก", "เครื่องดื่ม", "ขนมขบเคี้ยว","ของหวาน"];
    const stayAtOptions = [
        "โรงอาหารคณะวิทยาศาสตร์",
        "โรงอาหารพระเทพ",
        "โรงอาหารคณะครุศาสตร์และศิลปศาสตร์",
    ];

    const pickImage = async () => {
        try {
            const data = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
            });

        if (!data.canceled) {
            
            setImage(data.assets[0].uri);
            setImageChangeText("เปลี่ยนรูปภาพ")
        }
        } catch (error) {
        console.error(error);
        }
    };

    const registerHandler = async ()  => {    
        try {
            const formData = new FormData();

            // Append image data to the FormData object
            if (image) {
                const uri = image;
                const fileType = uri.split(".").pop(); // Get the file extension from the image URI
                formData.append("image", {
                    uri,
                    name: `image.${fileType}`,
                    type: `image/${fileType}`,
                });
            }
            formData.append("storeName", storeName);
            formData.append("dealer", dealer);
            formData.append("number", number);
            formData.append("storetype", storetype);
            formData.append("stayAt", stayAt);

            const response = await axios.post(`${api.api}SmartCanteen/store/register`, {
                body: formData,
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }); 
            const data = response.data;
            console.log(data)

        } catch (error) {
            console.error('Authentication failed:', error);
        };

        
    };

    

    return (

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.container(image == null ? 1 : 0)}  // if have image flex be 0
            >
                <Stack.Screen
                    options={{
                    headerShown: true,
                    }}
                />

                    <View>
                        <Text style={styles.header}>ข้อมูลร้าน</Text>
                        <InputContainer name={"ชื่อร้าน"} requir={true} placeholder={"กรอกชื่อร้านของคุณ"} onValueChange={(value) => {setStoreName(value)}}/>
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
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>รูปที่หน้าร้านที่ลูกค้าเห็น (แนะนำให้ถ่ายแนวนอน)</Text>
                            <Text style={styles.start}> *</Text>
                        </View>
                        {(image) ? <Image
                            source={{ uri: image }}
                            style={styles.image(imageHeight, imageWidth)}
                            resizeMode="cover"
                            /> : <View></View>
                        }
                        
                        <View style={styles.imagePicker}>
                            <TouchableOpacity  onPress={pickImage}>
                                <Text style={styles.labelText}>{imageChangeText}</Text>
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
