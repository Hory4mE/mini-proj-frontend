import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, FONT } from "../constants";
import EditeMenuType from "../components/editemenutype/editemenutype";

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

      <EditeMenuType />
    </SafeAreaView>
  );
};

export default menutype;
