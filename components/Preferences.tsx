import { View, Text, Switch } from "react-native";
import React, { useState } from "react";
import useTheme from "@/hooks/useTheme";
import { createSettingsStyles } from "@/assets/styles/settings.styles";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const Preferences = () => {
  const [isAutoSync, setIsAutoSync] = useState(true);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);

  const { colors, isDarkMode, toggleDarkMode } = useTheme();

  const SettingsStyles = createSettingsStyles(colors);

  return (
    <LinearGradient
      colors={colors.gradients.surface}
      style={SettingsStyles.section}
    >
      <Text style={SettingsStyles.sectionTitle}>Preferences</Text>

      {/*  */}
      <View style={SettingsStyles.settingItem}>
        <View style={SettingsStyles.settingLeft}>
          <LinearGradient colors={colors.gradients.primary} style={SettingsStyles.settingIcon}>
            <Ionicons name="moon" size={28} color={"#fff"} />
          </LinearGradient>
          <Text style={SettingsStyles.settingText}>Dark Mode</Text>
        </View>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          thumbColor={"#fff"}
          trackColor={{ false: colors.border, true: colors.primary }}
          ios_backgroundColor={colors.border}
        />
      </View>

      {/* NOTIFICATIONS */}
      <View style={SettingsStyles.settingItem}>
        <View style={SettingsStyles.settingLeft}>
          <LinearGradient colors={colors.gradients.warning} style={SettingsStyles.settingIcon}>
            <Ionicons name="notifications" size={28} color={"#fff"} />
          </LinearGradient>
          <Text style={SettingsStyles.settingText}>Notifications</Text>
        </View>
        <Switch
          value={isNotificationsEnabled}
          onValueChange={() =>
            setIsNotificationsEnabled(!isNotificationsEnabled)
          }
          thumbColor={"#fff"}
          trackColor={{ false: colors.border, true: colors.warning }}
          ios_backgroundColor={colors.border}
        />
      </View>


      {/* AUTO SYNC */}
      <View style={SettingsStyles.settingItem}>
        <View style={SettingsStyles.settingLeft}>
          <LinearGradient colors={colors.gradients.success} style={SettingsStyles.settingIcon}>
            <Ionicons name="push" size={28} color={"#fff"} />
          </LinearGradient>
          <Text style={SettingsStyles.settingText}>Auto Sync</Text>
        </View>
        <Switch
          value={isAutoSync}
          onValueChange={() =>
            setIsAutoSync(!isAutoSync)
          }
          thumbColor={"#fff"}
          trackColor={{ false: colors.border, true: colors.success }}
          ios_backgroundColor={colors.border}
        />
      </View>
    </LinearGradient>
  );
};

export default Preferences;
