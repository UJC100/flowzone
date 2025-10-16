import { createHomeStyles } from "@/assets/styles/home.styles";
import { api } from "@/convex/_generated/api";
import useTheme, { ColorScheme } from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { Text, View, StyleSheet, TouchableOpacity, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {LinearGradient} from "expo-linear-gradient"

export default function Index() {
  const {toggleDarkMode, colors} = useTheme()
  const homeStyles = createHomeStyles(colors)

  // const todos = useQuery(api.todos.getTodos)

  // const addTodo = useMutation(api.todos.addTodo);
  // const clearAllTodos = useMutation(api.todos.clearAllTodos)

  return (
    <LinearGradient colors={colors.gradients.background} style={homeStyles.container}>
      <StatusBar barStyle={colors.statusBarStyle}/>
    <SafeAreaView
      style={homeStyles.safeArea}
    >
      <Text>hi</Text>
      <TouchableOpacity onPress={toggleDarkMode}><Text>Toggle the mode</Text></TouchableOpacity>
    </SafeAreaView>
    </LinearGradient>
  );
}



