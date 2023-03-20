import React from 'react'
import { Stack,useRouter } from "expo-router";
import { Text , View,SafeAreaView } from "react-native"
import ArtistCard from "../components/Artists/ArtistCard"
import EventCard from "../components/Events/EventCard"
import HeaderBanner from "../components/home/HeaderBanner";
const index = () => {
  return (
    <SafeAreaView>

      <Stack.Screen
      options={{
        headerTitle:" Event App",
        headerShadowVisible:true
      }}/>


     <View>
        <HeaderBanner/>
        

        <View>
        <Text>Artist Available-----</Text>
        <ArtistCard/>
        </View>


        <View>
        <Text>Event Available------</Text>
        <EventCard/>
        </View>
    </View>

    </SafeAreaView>
  )
}

export default index