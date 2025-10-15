import useTheme from "@/hooks/useTheme";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Index() {
  const {toggleDarkMode} = useTheme()
  return (
    <View
      style={styles.constainer}
    >
      <Text style={styles.content}>Edit app/index.tsx to edit this screen.</Text>
      <Text>hi</Text>
      <TouchableOpacity onPress={toggleDarkMode}><Text>Toggle the mode</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
        flex: 1,
        justifyContent: "center",
        gap: 10,
        alignItems: "center",
      },
      content: {
        fontSize: 22
      }
})
