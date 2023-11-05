import React, { useState, useEffect, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native'; 
import {
  Animated,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";

import styles from "./home.style";
import { COLORS, images } from "../../constants";
import { Dimensions } from "react-native";
import CircularCheckbox from "../common/card/checkbox/CircularCheckbox";

export default function Home() {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const { height, width } = Dimensions.get("window");
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
      console.log(username,password)
      console.log('Credentials saved successfully.');
    } catch (error) {
      console.error('Error saving credentials:', error);
    }
  };

  const loadSavedCredentials = async () => {
    try {
      const savedUsername = await AsyncStorage.getItem('username');
      const savedPassword = await AsyncStorage.getItem('password');
      if (savedUsername !== null && savedPassword !== null) {
        // Username and password found in storage, set them in the state
        setUsername(savedUsername);
        setPassword(savedPassword);
        setIsChecked(true); // Check the "Remember Password" checkbox
      }
    } catch (error) {
      console.error('Error loading credentials:', error);
    }
  };

  const clearCredentials = async () => {
    try {
      await AsyncStorage.removeItem('username');
      await AsyncStorage.removeItem('password');
      console.log('Credentials deleted successfully.');
      setUsername('');
      setPassword('');
      setIsChecked(false);
    } catch (error) {
      console.error('Error deleting credentials:', error);
    }
  };

  const handleLogin = () => {
    if (isChecked) {
                saveCredentials();
              } else {
                clearCredentials();
              }
    // handle username pwd
  };

  const handleRegister = () => {
    navigation.navigate('register');
  };


  return (
    <SafeAreaView style={styles.container(height, width)}>
      <Animated.View style={styles.animatedContainer(fadeInOutAnimation)}>
        <Image source={images.logo} style={styles.logo(imageSize)} resizeMode="contain" />
        <Text style={styles.header}>เข้าสู่ระบบสำหรับร้านค้า</Text>

          <View style={styles.textContainer}>
            <TextInput
              style={styles.textInput}
              value={username}
              onChangeText={(text) => {
                setUsername(text);
              }}
              placeholder={"ชื่อร้าน หรือ เบอร์โทรศัพท์" }
              placeholderTextColor={COLORS.gray}
            />
          </View>
          <View style={{height:20}}></View>
          <View style={styles.textContainer}>
            <TextInput
              style={styles.textInput}
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
            onPress={handleLogin}
          >
            <Text style={styles.submitText}>เข้าสู่ระบบ</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.registerText}>ลงทะเบียน</Text>
        </TouchableOpacity>

      </Animated.View>
    </SafeAreaView>
  );
}
