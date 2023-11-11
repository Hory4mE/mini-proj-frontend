import React, { useState, useEffect, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native'; 
import { Alert, Dimensions } from "react-native";
import axios from "axios";
import {
  Animated,
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";

import styles from "./home.style";
import { COLORS, api, images } from "../../constants";

import CircularCheckbox from "../common/card/checkbox/CircularCheckbox";
import { ScrollView } from "react-native-gesture-handler";

export default function Home() {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginText, setLoginText] = useState("เข้าสู่ระบบ");

  const [isChecked, setIsChecked] = useState(false);

  const { width } = Dimensions.get("window");
  const imageSize = 0.30 * width;
  const fadeInOutAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    loadSavedCredentials();
    Animated.sequence([
      Animated.timing(fadeInOutAnimation, {
        toValue: 1, // Fade in
        duration: 750,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const saveCredentials = async () => {
    try {
      await AsyncStorage.setItem('username', username);
      await AsyncStorage.setItem('password', password);
    } catch (error) {
      console.error('Error saving credentials:', error);
    }
  };

  const loadSavedCredentials = async () => {
    try {
      const savedUsername = await AsyncStorage.getItem('username');
      const savedPassword = await AsyncStorage.getItem('password');
      if (savedUsername !== null && savedPassword !== null) {
        setUsername(savedUsername);
        setPassword(savedPassword);
        setIsChecked(true);
      }
    } catch (error) {
      console.error('Error loading credentials:', error);
    }
  };

  const clearCredentials = async () => {
    try {
      await AsyncStorage.removeItem('username');
      await AsyncStorage.removeItem('password');
      setUsername('');
      setPassword('');
      setIsChecked(false);
    } catch (error) {
      console.error('Error deleting credentials:', error);
    }
  };

  const loginHandler = async () => {
    setLoginText("กรุณารอสักครู่...");
    try {
      const response = await axios.post(`${api.api}SmartCanteen/store/login`, {
        username: username,
        password: password
      });
      if (response.status === 200) {
        const data = response.data;
        if (isChecked) {
                saveCredentials();
              } else {
                clearCredentials();
              }
        setLoginText("เข้าสู่ระบบ");
        navigation.navigate("dashboard", {
            responseData: data,
        });

      }

    } catch (error) {
      console.error('Authentication failed:', error);
    }

  };


  const registerPress = () => {
    navigation.navigate('register');
  };

  const popup = (title,text) => {
        Alert.alert(
            title,
            text,
            [
            ],
            { cancelable: true }
        );
    };  


  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
      <Animated.View style={styles.animatedContainer(fadeInOutAnimation)}>
        <Image source={images.logo} style={styles.logo(imageSize)} resizeMode="contain" />

        <Text style={styles.header}>เข้าสู่ระบบสำหรับร้านค้า</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputText}
              value={username}
              onChangeText={(text) => {
                setUsername(text);
              }}
              placeholder={"ชื่อผู้ใช้งาน หรือ เบอร์โทรศัพท์" }
              placeholderTextColor={COLORS.gray}
            />
          </View>
          <View style={{height:20}}></View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputText}
              value={password}
              onChangeText={(text) => {
                setPassword(text);
              }}
              placeholder={"รหัสผ่าน" }
              placeholderTextColor={COLORS.gray}
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity style={styles.pwdForget}>
            <Text style={styles.pwdForgetText}>ลืมรหัสผ่าน ?</Text>
          </TouchableOpacity>
          <Text style={styles.pwdSave}>
            <CircularCheckbox
              checked={isChecked}
              label="จำรหัสผ่าน"
              onPress={() => setIsChecked(!isChecked)}
            />
          </Text>

          <TouchableOpacity 
            style={styles.submitBtn} 
            onPress={loginHandler}
          >
            <Text style={styles.submitText}>{loginText}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={registerPress}>
            <Text style={styles.registerText}>ลงทะเบียน</Text>
          </TouchableOpacity>

      </Animated.View>
    </ScrollView>
  );
}
