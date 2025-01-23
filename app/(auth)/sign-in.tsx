import { View, StyleSheet, Text, ImageBackground } from "react-native";
import { useRouter } from "expo-router";
import Animated, { FadeIn } from "react-native-reanimated";
import { useCallback } from "react";
import { Button } from "../../src/components/ui/Button";
import { StatusBar } from "expo-status-bar";

export default function SignIn() {
  const router = useRouter();

  const handleSignIn = useCallback(() => {
    router.push("/onboarding");
  }, [router]);

  return (
    <ImageBackground
      source={require("../../assets/images/auth-bg.png")}
      style={styles.container}
    >
      <StatusBar style="light" />
      <View style={styles.overlay} />

      <Animated.View entering={FadeIn.delay(300)} style={styles.content}>
        <Text style={styles.title}>Ms Nova</Text>
        <Text style={styles.subtitle}>Discover Your Cosmic Path</Text>
      </Animated.View>

      <Animated.View
        entering={FadeIn.delay(600)}
        style={styles.buttonContainer}
      ></Animated.View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 100,
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: "rgba(255,255,255,0.8)",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 50,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    gap: 12,
  },
});
