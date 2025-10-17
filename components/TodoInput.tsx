import { View, Text } from 'react-native'
import React, { useState } from 'react'
import useTheme from '@/hooks/useTheme'
import { createHomeStyles } from '@/assets/styles/home.styles'


const TodoInput = () => {
    const {colors} = useTheme()
    const homeStyles = createHomeStyles(colors)

    const [newTodo, setNewTodo] = useState("")
    
  return (
    <View>
      <Text>TodoInput</Text>
    </View>
  )
}

export default TodoInput