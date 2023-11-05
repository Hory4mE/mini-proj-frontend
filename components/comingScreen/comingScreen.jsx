import React, { useEffect, useRef } from 'react';
import { Animated, View, Dimensions, Text } from 'react-native';

import styles from "./comingScreen.style";
import { images } from "../../constants";

export default function ComingScreen() {
  const { width, height } = Dimensions.get("window");
  const imageSize = 0.65 * Math.min(width, height);

  const fadeInOutAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const fadeIn = Animated.timing(fadeInOutAnimation, {
      toValue: 1, // Fade in
      duration: 750,
      useNativeDriver: true,
    });

    const fadeOut = Animated.timing(fadeInOutAnimation, {
      toValue: 0, // Fade out
      duration: 500,
      useNativeDriver: true,
    });

    Animated.sequence([fadeIn, Animated.delay(1500), fadeOut]).start();
  }, []);

  return (
    <View style={styles.container}>

      <Animated.View style={styles.logocontainer(fadeInOutAnimation)}>
        <Animated.Image
          source={images.logo} 
          style={styles.logo(imageSize)}
        />
      </Animated.View>
    </View>
  );
}
