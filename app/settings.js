import React from 'react'
import { Stack } from "expo-router"
import { SafeAreaView, ScrollView, Text, View } from "react-native"
import About from "../components/Settings/About"
import UserProfile from "../components/Settings/UserProfile"
import Backbtn from "../components/Basiclayout/Backbtn"
import Userticket from "../components/Settings/Userticket"

const Settings = () => {
  return (
    <SafeAreaView>
    <ScrollView>
    <Stack.Screen
      options={{
        headerTitle:"Settings",
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: 'black',
        },       
        headerTitleAlign : "center", 
        headerLeft:() => (
        <Backbtn/>
        )              
      }}/>
        <UserProfile/>
        <Userticket/>
        <About/>

    </ScrollView>
    </SafeAreaView>
  )
}

export default Settings