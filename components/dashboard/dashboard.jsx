import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

const Register = () => {

  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerShown: true,
        }}
      />

    </SafeAreaView>
  );
};

export default Register;
