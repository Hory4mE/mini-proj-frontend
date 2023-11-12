import React from "react";
import { View, Text, SafeAreaView, Image, ActivityIndicator, TouchableOpacity, ScrollView } from "react-native";
import { Dimensions } from "react-native";
import { useRoute, useNavigation, useFocusEffect } from '@react-navigation/native';

import useFetch from "../../hook/useFetch";
import { COLORS, icons } from "../../constants";
import styles from "./menutype.style";

const MenuType = () => {
  const route = useRoute();
  const storeid = route.params.storeid;
  const navigation = useNavigation();
  const { data, isLoading, error, refetch } = useFetch("menutype", { storeid: storeid });

  const { height, width } = Dimensions.get("window");

  useFocusEffect(
    React.useCallback(() => {
      refetch();
    }, [])
  );

  const handleBottonPress = (path, menuTypeid) => {
    const menuTypeData = data.map((item) => ({
      menu_type_id: item.menu_type_id,
      menu_type_name: item.menu_type_name,
    }));
    navigation.navigate(path, {
      storeid: storeid,
      menuTypeid: menuTypeid,
      menuTypeData: menuTypeData,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator style={styles.loading} size={100} color={COLORS.primary} />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        data && data.length > 0 ? (
          <ScrollView style={{height:"100%"}}>
            {data.map((item) => (
              <TouchableOpacity 
                key={item.menu_type_id} 
                style={styles.itemContainer}
                onPress={() => handleBottonPress("editemenutype", item.menu_type_id)}>
                <Text style={styles.text()}>{item.menu_type_name}</Text>
                <Image
                  source={icons.pencil}
                  style={styles.pencilicon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        ) : (
          <View style={styles.center}>
            <View style={styles.forkiconbg(width * 0.24)}>
              <Image
                source={icons.fork}
                style={styles.forkicon}
                resizeMode="cover"
              />
            </View>
            <View style={{ margin: "2%" }} />
            <Text style={styles.text()}>ไม่มีหมวดหมู่</Text>
            <View style={{ margin: "1.5%" }} />
            <Text style={styles.littleText(COLORS.gray)}>หมวดหมู่เมนูอาหาร เช่น ก๋วยเตี๋ยว อาหารจานด่วน อาหารเช้า</Text>
          </View>
        )
      )}
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.botton("95%")} onPress={() => handleBottonPress("editemenutype")}>
          <Text style={styles.headerText(COLORS.white)} >เพิ่มหมวดหมู่</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MenuType;
