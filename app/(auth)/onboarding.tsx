import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeIn } from "react-native-reanimated";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Platform } from "react-native";

export default function Onboarding() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [birthDate, setBirthDate] = useState(new Date());
  const [nickname, setNickname] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setBirthDate(selectedDate);
    }
  };

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else {
      // Kullanıcı bilgilerini kaydet ve ana sayfaya yönlendir
      router.push("/home");
    }
  };

  return (
    <LinearGradient
      colors={["#2A0944", "#3B185F", "#2A0944"]}
      style={styles.container}
    >
      <StatusBar style="light" />

      <Animated.View entering={FadeIn.delay(300)} style={styles.content}>
        {step === 1 ? (
          <>
            <Text style={styles.title}>When were you born?</Text>
            <Text style={styles.subtitle}>
              This helps us personalize your experience
            </Text>

            <Pressable
              style={styles.dateButton}
              onPress={() => setShowDatePicker(true)}
            >
              <Text style={styles.dateText}>
                {birthDate.toLocaleDateString()}
              </Text>
            </Pressable>

            {showDatePicker &&
              (Platform.OS === "android" || Platform.OS === "ios") && (
                <DateTimePicker
                  value={birthDate}
                  mode="date"
                  onChange={handleDateChange}
                  maximumDate={new Date()}
                  minimumDate={new Date(1900, 0, 1)}
                />
              )}
          </>
        ) : (
          <>
            <Text style={styles.title}>What should we call you?</Text>
            <Text style={styles.subtitle}>
              Choose a name you'd like us to use
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Enter your preferred name"
              placeholderTextColor="rgba(255,255,255,0.6)"
              value={nickname}
              onChangeText={setNickname}
              autoFocus
            />
          </>
        )}
      </Animated.View>

      <Animated.View
        entering={FadeIn.delay(600)}
        style={styles.buttonContainer}
      >
        <Pressable style={styles.mainButton} onPress={handleNext}>
          <Text style={styles.buttonText}>
            {step === 1 ? "Next" : "Get Started"}
          </Text>
        </Pressable>
      </Animated.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "rgba(255,255,255,0.8)",
    textAlign: "center",
    marginBottom: 32,
  },
  dateButton: {
    width: "100%",
    height: 50,
    backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
  },
  dateText: {
    color: "#fff",
    fontSize: 16,
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
  buttonContainer: {
    position: "absolute",
    bottom: 50,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
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
});
