import { View, Text, ScrollView } from "react-native";
import useTheme from "@/hooks/useTheme";
import { createSettingsStyles } from "@/assets/styles/settings.styles";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import ProgressStats from "@/components/ProgressStats";
import Preferences from "@/components/Preferences";
import DangerZone from "@/components/DangerZone";

const SettingsScreen = () => {
  
  const { colors } = useTheme();

  const SettingsStyles = createSettingsStyles(colors);
  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={SettingsStyles.container}
    >
      <SafeAreaView style={SettingsStyles.safeArea}>
        <View style={SettingsStyles.header}>
          <View style={SettingsStyles.titleContainer}>
            <LinearGradient
              style={SettingsStyles.iconContainer}
              colors={colors.gradients.primary}
            >
              <Ionicons name="settings" size={28} color={"#fff"} />
            </LinearGradient>
            <Text style={SettingsStyles.title}>Settings</Text>
          </View>
        </View>

        <ScrollView style={SettingsStyles.scrollView}
        contentContainerStyle={SettingsStyles.content}
        showsVerticalScrollIndicator={false}
        >
          <ProgressStats/>
          <Preferences/>
          <DangerZone/>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SettingsScreen;

