import { View, Text } from 'react-native'
import React from 'react'

const Preferences = () => {
    const [isAutoSync, setAutoSync] = useState(true);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);

  return (
    <View>
      <Text>Preferences</Text>
    </View>
  )
}

export default Preferences