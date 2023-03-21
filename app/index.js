import React from 'react'
import { Stack,useRouter } from "expo-router";
import { Text , View,SafeAreaView, ScrollView,FlatList } from "react-native"
import ArtistCard from "../components/Artists/ArtistCard"
import EventCard from "../components/Events/EventCard"
import HeaderBanner from "../components/home/HeaderBanner";
import Artists from "../components/home/Artists";
import Events from "../components/home/Events";
import Footer from "../components/Basiclayout/Footer";
const index = () => {
  return (
    <SafeAreaView>

      <Stack.Screen
      options={{
        headerTitle:" Event App",
        headerShadowVisible:true,        
      }}/>
      <ScrollView>
        <HeaderBanner/>

        <Artists/>   

        <Events/> 

        <Footer/>
               

      </ScrollView>


    </SafeAreaView>
  )
}

export default index