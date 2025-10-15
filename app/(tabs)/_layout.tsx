import { View, Text,  } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import {Ionicons} from '@expo/vector-icons'
 
const TabsLayout = () => {
  return (
    <Tabs 
    screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "green",
        tabBarStyle: {
            backgroundColor:"#1e293b",
            borderTopWidth: 1,
            borderTopColor: "yellow",
            paddingBottom: 30,
            paddingTop: 10,
            height: 90
        },
        tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "600"
        },
        headerShown: false
    }}
    >
        <Tabs.Screen
        name='index'
        options={{title: "Todos", tabBarIcon: ({color, size}) => 
            <Ionicons name='flash-outline' color={color} size={size}/>
        }}/>

        <Tabs.Screen
        name='settings'
        options={{title: "Settings", tabBarIcon: ({color, size}) => 
            <Ionicons name='settings' color={color} size={size}/>
        }}/>
    </Tabs>
  )
}

export default TabsLayout