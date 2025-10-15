import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.constainer}
    >
      <Text style={styles.content}>Edit app/index.tsx to edit this screen.</Text>
      <Text>hi</Text>
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
