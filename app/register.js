import React, { useState, useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS } from "../constants";
import Registerpage from "../components/register/register";

const Register = () => {
  return (
    <SafeAreaView
      style={{
        flex: 2,
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

      <Registerpage />
    </SafeAreaView>
  );
};

export default Register;
