import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const SettingsScreen = () => {
  return (
    <View>
      <Text style={styles.constainer}>Settings</Text>
    </View>
  )
}

export default SettingsScreen


const styles = StyleSheet.create({
  constainer: {
        flex: 1,
        justifyContent: "center",
        gap: 10,
        alignItems: "center",
        backgroundColor: "green"
      },
      content: {
        fontSize: 22
      }
})