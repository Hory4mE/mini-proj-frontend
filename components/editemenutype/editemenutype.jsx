import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, Image, TouchableOpacity, TextInput, Alert } from "react-native";
import { Dimensions } from "react-native";
import { useNavigation,useRoute } from '@react-navigation/native'; 
import axios from "axios";

import { api } from "../../constants";
import { COLORS, icons } from "../../constants";
import styles from "./editemenutype.style";

const EditeMenuType = () => {
  const route = useRoute();
  const storeid = route.params.storeid;
  const menuTypeid = route.params.menuTypeid;
  const menuTypeData = route.params.menuTypeData;

  const navigation = useNavigation();
  const [menuTypeName, setMenuTypeName] = useState("")
  const [oldMenuTypeName, setOldMenuTypeName] = useState("");
  const [bottonText, setBottonText] = useState("บันทึก");
  const [deleteText, setdeleteText] = useState("ลบหมวดหมู่นี้");



  const { height, width } = Dimensions.get("window");

  useEffect(() => {
    if (menuTypeid && menuTypeData) {
      const foundMenuType = menuTypeData.find((item) => item.menu_type_id === menuTypeid);
      if (foundMenuType) {
        setMenuTypeName(foundMenuType.menu_type_name);
        setOldMenuTypeName(foundMenuType.menu_type_name);
      }
    }
  }, [menuTypeid, menuTypeData]);

  const savePressHandle = async (path) => {
    if (menuTypeName.trim() === "") {
      popup("ชื่อหมวดหมู่ว่าง","กรุณาใส่ชื่อหมวดหมู่ก่อนกดบันทึก")
    } else if (menuTypeData.some((item) => item.menu_type_name === menuTypeName)) {
      popup("ชื่อหมวดหมู่นี้ถูกใช้ไปแล้ว","กรุณาใช้ชื่อหมวดหมู่อื่น หรือลบหมวดหมู่นั้นก่อน")
    } else {
      setBottonText("กรุณารอสักครู่...");
      if (menuTypeid){
        if (menuTypeName != oldMenuTypeName){
          try {
            const response = await axios.put(`${api.api}SmartCanteen/store/menutype/${menuTypeid}`, {
              menuType: menuTypeName
            });
            if (response.status === 200) {
              navigation.navigate(path,{
                storeid:storeid,
              });
            }
          } catch (error) {
            console.error('Update menu type failed:', error);
          } finally {
            setBottonText("บันทึก");
          }
        } else {
          // not do anytime
          setBottonText("บันทึก");
          navigation.navigate(path,{
              storeid:storeid,
          });
        }
      } else {
        try {
          const response = await axios.post(`${api.api}SmartCanteen/store/menutype`, {
            storeid: storeid,
            menuType: menuTypeName
          });
          if (response.status === 201) {
            navigation.navigate(path,{
              storeid:storeid,
            });
          }

        } catch (error) {
          console.error('Save menu type failed:', error);
        }
        finally{
          setBottonText("บันทึก");
        }
      }
    }
  };

  const deletePressHandle = async (path) => {
    setdeleteText("กำลังลบ...")
    if (menuTypeid) {
      try {
        const response = await axios.delete(`${api.api}SmartCanteen/store/menutype/${menuTypeid}`);
        if (response.status === 200) {
            navigation.navigate(path,{
              storeid:storeid,
            });
        }
      } catch (error) {
        console.error('Delete menu type failed:', error);
      } finally{
        setdeleteText("ลบหมวดหมู่นี้")
      }
    }
  };

  const popup = (title,text) => {
    Alert.alert(
      title,
      text,
      [
        {
          text: "OK",
          style: styles.inputText,
        },
      ],
      { cancelable: true }
    );
  };  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.text()}
          value={menuTypeName}
          onChangeText={(text) => {
            setMenuTypeName(text);
          }}
          placeholder="ชื่อหมวดหมู่"
          placeholderTextColor={COLORS.gray}
        />
      </View>
      <View style={{marginLeft:'2.4%'}}>
        <Text style={styles.ExtraSmallText}>เช่น อาหารจานหลัก เครื่องดื่ม หมู ผักสด ผลไม้</Text>
      </View>
      {menuTypeid ? 
        <TouchableOpacity style={styles.deleteContainer} onPress={() => deletePressHandle("menutype")}>
          <Image
            source={icons.trashBin}
            style={styles.trashBin}
          />
          <Text style={[styles.text(COLORS.drakGray),{marginLeft:8}]}>{deleteText}</Text>
        </TouchableOpacity> : <></>}

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.botton("95%")} onPress={() => savePressHandle("menutype")}>
          <Text style={styles.headerText(COLORS.white)} >{bottonText}</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

export default EditeMenuType;
