import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS } from "../constants";
import Dashboard from "../components/dashboard/dashboard";

const addon = (text) => {
  return (
    <SafeAreaView
      style={{
        height: "100%",
        backgroundColor: COLORS.white,
      }}
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <Text>editeaddon</Text>
    </SafeAreaView>
  );
};

export default addon;
