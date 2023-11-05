import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS } from "../constants";
import ComingScreen from "../components/comingScreen/comingScreen";
import Homepage from "../components/home/home";

const Home = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Delay for the splash screen
    setTimeout(() => {
      setShowSplash(false);
    }, 2800); // Adjust the delay as needed
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        height: "100%",
      }}
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      {showSplash ? <ComingScreen /> : <Homepage />}
    </SafeAreaView>
  );
};

export default Home;
