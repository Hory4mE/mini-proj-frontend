import React from "react";
import { View, Text, SafeAreaView, Image, ActivityIndicator, TouchableOpacity, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native'; 

import useFetch from "../../hook/useFetch";
import { COLORS, icons } from "../../constants";
import styles from "./dashboard.style";

const Dashboard = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const storeid = route.params.responseData?.storid;
  const { data, isLoading, error} = useFetch("dashboard",{id: storeid});
  const { store_name, store_locate, store_image, open_time, close_time } = data

  const { height, width } = Dimensions.get("window");
  const bgHeight = height * 0.25;

  const iconsData = [
    { icon: icons.menu, label: "เมนู/ตัวเลือก", path: "menu_option" },
    { icon: icons.open, label: "เวลาเปิด - ปิด", path: "timesetting" },
    { icon: icons.history, label: "ประวัติการขาย", path: "history" },
    { icon: icons.analysis, label: "สรุปยอดขาย", path: "summary" },
    { icon: icons.editshop, label: "แก้ไขข้อมูลร้าน", path: "editestore" },
    { icon: icons.bug, label: "แจ้งปัญหา", path: "reportbug" }
  ];

  const groupIconsIntoSetsOfFour = (icons) => {
    const iconSets = [];
    for (let i = 0; i < icons.length; i += 4) {
      const iconSet = icons.slice(i, i + 4);
      iconSets.push(iconSet);
    }
    return iconSets;
  };

  const iconPress = (path) => {
    navigation.navigate(path, {
      storeid: storeid
    });
  };

  return (
    <SafeAreaView>
      {isLoading ? (
        <ActivityIndicator style={styles.loading} size={100} color={COLORS.primary} />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <View style={styles.container}>
          {store_image ? (
            <>
              <Image
                source={{ uri: `data:image/jpeg;base64,${store_image}` }}
                style={{ width: width, height: bgHeight, borderBottomRightRadius: 12, borderBottomLeftRadius: 12 }}
                resizeMode="cover"
              />
              <View style={styles.headeContainer(height*0.125,width*0.04)}>
                <Text style={styles.headerText(COLORS.lightGray)}>{store_name}</Text>
                <Text style={styles.littleText(COLORS.lightGray)}>{store_locate}</Text>
              </View>
            </>
          ) : (
            <View></View>
          )}
          <View style={styles.timeContainer(height * 0.045)}>
            <TouchableOpacity 
              style={styles.timeText} onPress={() => { navigation.navigate("timesetting") }}>
              {open_time && close_time ? (
                <>
                  <Text style={styles.text(COLORS.primary)}>เปิดรับออเดอร์ </Text>
                  <Text style={styles.text(COLORS.black)}>{open_time} - {close_time}</Text>
                </>
              ) : (
                <Text style={styles.text(COLORS.gray)}>ตั้งเวลาเปิด - ปิดร้านของวันนี้</Text>
              )}
              <Text style={styles.text(COLORS.lightGray)}> | เปลี่ยน</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity 
            style={styles.orderContainer(height * 0.045)}
            onPress={() => iconPress("order")}
          >
            <Text style={styles.text(COLORS.white)}>รายการอาหารที่สั่งเข้ามา</Text>
            <Image
              source={icons.rightArrow}
              style={styles.rightArrow}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <View style={{width:"100%"}}>
            {groupIconsIntoSetsOfFour(iconsData).map((iconSet, index) => (
              <View key={index} style={styles.iconRow}>
                {iconSet.map((item, subIndex) => (
                  <TouchableOpacity 
                    style={styles.iconContainer}
                    onPress={() => iconPress(item.path)}
                    key={subIndex}
                  >
                    <View style={styles.iconbg(width*0.14)}>
                      <Image
                        source={item.icon}
                        style={styles.icon} 
                        resizeMode="cover"
                      />
                    </View>
                    <Text style={[styles.label(COLORS.drakGray), { marginTop: 4 }]}>{item.label}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            ))}
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Dashboard;
