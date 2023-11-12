import React, { useState } from "react";
import { View, Text, SafeAreaView, Image, ActivityIndicator, TouchableOpacity, ScrollView } from "react-native";
import { Dimensions } from "react-native";
import { useNavigation,useRoute } from '@react-navigation/native'; 

import useFetch from "../../hook/useFetch";
import { COLORS, icons } from "../../constants";
import styles from "../menuoption/menuoption.style";
import { useRouter } from "expo-router";

const Menuoption = () => {
  const router = useRouter();
  const route = useRoute();
  const storeid = route.params.storeid;
  const navigation = useNavigation();

  const handleBottonPress = (path) => {
    navigation.navigate(path,{
      storeid:storeid
    });
  };
  
  const [selectMenubar,SetSelectMenuBar] = useState(true)

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity 
          style={styles.uppernunderline(selectMenubar ? COLORS.primary : '')}
          onPress={() => {SetSelectMenuBar(true)}}
        >
          <Text style={styles.headerText(selectMenubar ? COLORS.primary : '')}>เมนู</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.uppernunderline(selectMenubar ?  '' : COLORS.primary )}
          onPress={() => {SetSelectMenuBar(false)}}
        >
          <Text style={styles.headerText(selectMenubar ?  '' : COLORS.primary )}>ตัวเลือก</Text>
        </TouchableOpacity>
      </View>
      {selectMenubar ? 
        <View style={styles.container}>
          <ScrollView>

          </ScrollView>
          <View>
            <View style={styles.bottomContainer}>
              <TouchableOpacity style={styles.botton("45%")} onPress={() => handleBottonPress("menutype")}>
                <Text style={styles.headerText()}>แก้ไขหมวดหมู่</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.botton("45%")} onPress={() => handleBottonPress("editemenu")}>
                <Text style={styles.headerText()}>เพิ่มราการอาหาร</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        :<View style={styles.container}>
          <ScrollView>

          </ScrollView>
          <View>
            <View style={styles.bottomContainer}>
              <TouchableOpacity style={styles.botton("95%")} onPress={() => handleBottonPress("editeaddon")}>
                <Text style={styles.headerText()} >เพิ่มตัวเลือก</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      }
    </SafeAreaView>
  );
};

export default Menuoption;
