import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS } from "../constants";
import Dashboard from "../components/dashboard/dashboard";

const menu = (id) => {
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

      <Text>editemenu</Text>
    </SafeAreaView>
  );
};

export default menu;
