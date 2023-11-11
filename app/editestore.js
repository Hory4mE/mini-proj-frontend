import React, { useState, useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS } from "../constants";

const editestore = () => {
  return (
    <SafeAreaView
      style={{
        flex: 2,
        height: "100%",
        backgroundColor: COLORS.white,
      }}
    >
      <Stack.Screen
        options={{
          headerTitle: "",
          headerShadowVisible: false,
          headerShown: true,
        }}
      />

      <Text>editestore</Text>
    </SafeAreaView>
  );
};

export default editestore;
