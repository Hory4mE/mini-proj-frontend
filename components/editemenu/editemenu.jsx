import React from "react";
import { View, Text, SafeAreaView, Image, ActivityIndicator, TouchableOpacity, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native'; 

import useFetch from "../../hook/useFetch";
import { COLORS, icons } from "../../constants";
import styles from "./menuoption.style";

const EditeMenu = () => {

  return (
    <SafeAreaView>
        <Text>เมนู</Text>
        <Text>ตัวเลือก</Text>

    </SafeAreaView>
  );
};

export default EditeMenu;
