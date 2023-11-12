import React from "react";
import { SafeAreaView } from "react-native";
import { Stack } from "expo-router";

import { COLORS, FONT } from "../constants";
import MenuType from "../components/menutype/menutype";

const menutype = (text) => {
  return (
    <SafeAreaView
      style={{
        height: "100%",
        backgroundColor: COLORS.white,
      }}
    >
      <Stack.Screen
        options={{
          headerTitle: "หมวดหมู่รายการสินค้า",
          headerTitleStyle: {
            fontFamily: FONT.bold,
            fontSize: 20,
          },
          headerShadowVisible: false,
          headerShown: true,
        }}
      />

      <MenuType />
    </SafeAreaView>
  );
};

export default menutype;
