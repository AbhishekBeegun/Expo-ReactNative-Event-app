import React from 'react'
import { Stack,useRouter } from "expo-router";
import { Text , View,SafeAreaView, ScrollView,FlatList } from "react-native"
import HeaderBanner from "../components/home/HeaderBanner";
import Artists from "../components/home/Artists";
import Events from "../components/home/Events";
const index = () => {
  return (
    <SafeAreaView>

      <Stack.Screen
      options={{
        headerTitle:" Event App",
        headerShadowVisible:true,
        headerTransparent:true        
      }}/>

      <ScrollView>
        <HeaderBanner/>

        <Artists/>   

        <Events/> 

      </ScrollView>


    </SafeAreaView>
  )
}

export default index