import { Pressable, StyleSheet, Text } from "react-native";
import { BlurView } from "expo-blur";
import Animated, { FadeIn } from "react-native-reanimated";

export function Button({
  onPress,
  title,
  variant = "primary",
}: {
  onPress: () => void;
  title: string;
  variant?: "primary" | "secondary";
}) {
  return (
    <Animated.View entering={FadeIn}>
      <Pressable onPress={onPress}>
        <BlurView
          intensity={90}
          style={[styles.button, variant === "secondary" && styles.secondary]}
        >
          <Text
            style={[
              styles.text,
              variant === "secondary" && styles.secondaryText,
            ]}
          >
            {title}
          </Text>
        </BlurView>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 30,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
  },
  secondary: {
    backgroundColor: "transparent",
    borderColor: "rgba(255,255,255,0.2)",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  secondaryText: {
    color: "rgba(255,255,255,0.8)",
  },
});
