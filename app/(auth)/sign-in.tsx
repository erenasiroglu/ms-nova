import { View, StyleSheet, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";
import Animated, { FadeIn } from "react-native-reanimated";
import { useCallback, useState } from "react";
import { Button } from "@/app/src/components/ui/Button";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function SignIn() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = useCallback(() => {
    if (isLogin) {
      // Login logic
      router.push("/(auth)/onboarding");
    } else {
      // Signup requires additional fields
      if (!email || !password) {
        // Show error
        return;
      }
      router.push("/(auth)/onboarding");
    }
  }, [isLogin, email, password, router]);

  const handleGoogleSignIn = useCallback(() => {
    // Google sign in logic
  }, []);

  const handleAppleSignIn = useCallback(() => {
    // Apple sign in logic
  }, []);

  return (
    <LinearGradient
      colors={["#2A0944", "#3B185F", "#2A0944"]}
      style={styles.container}
    >
      <StatusBar style="light" />

      <Animated.View entering={FadeIn.delay(300)} style={styles.content}>
        <Text style={styles.title}>Ms Nova</Text>
        <Text style={styles.subtitle}>
          {isLogin ? "Welcome Back" : "Create Account"}
        </Text>

        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="rgba(255,255,255,0.6)"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="rgba(255,255,255,0.6)"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          {!isLogin && (
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="rgba(255,255,255,0.6)"
              secureTextEntry
            />
          )}

          {isLogin && (
            <Pressable
              onPress={() => {
                /* Forgot password logic */
              }}
            >
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </Pressable>
          )}

          <View style={styles.socialButtonsContainer}>
            <Text style={styles.dividerText}>or continue with</Text>
            <View style={styles.socialButtons}>
              <Pressable
                style={styles.socialButton}
                onPress={handleGoogleSignIn}
              >
                <AntDesign name="google" size={24} color="white" />
              </Pressable>
              <Pressable
                style={styles.socialButton}
                onPress={handleAppleSignIn}
              >
                <AntDesign name="apple1" size={24} color="white" />
              </Pressable>
            </View>
          </View>
        </View>
      </Animated.View>

      <Animated.View
        entering={FadeIn.delay(600)}
        style={styles.buttonContainer}
      >
        <Pressable style={styles.mainButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>
            {isLogin ? "Sign In" : "Sign Up"}
          </Text>
        </Pressable>

        <Pressable onPress={() => setIsLogin(!isLogin)}>
          <Text style={styles.switchText}>
            {isLogin
              ? "Don't have an account? Sign Up"
              : "Already have an account? Sign In"}
          </Text>
        </Pressable>
      </Animated.View>
    </LinearGradient>
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
  formContainer: {
    width: "100%",
    paddingHorizontal: 30,
    marginTop: 40,
    gap: 16,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: 12,
    paddingHorizontal: 16,
    color: "#fff",
    fontSize: 16,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
  },
  switchText: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 14,
    textAlign: "center",
    marginTop: 16,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 50,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    gap: 12,
  },
  socialButtonsContainer: {
    marginTop: 24,
    alignItems: "center",
  },
  dividerText: {
    color: "rgba(255,255,255,0.6)",
    fontSize: 14,
    marginBottom: 16,
  },
  socialButtons: {
    flexDirection: "row",
    gap: 16,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  mainButton: {
    width: "100%",
    height: 50,
    borderRadius: 12,
    backgroundColor: "#A239EA",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  forgotPassword: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 14,
    textAlign: "right",
    marginTop: 8,
  },
});
