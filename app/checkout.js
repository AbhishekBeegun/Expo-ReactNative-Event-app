import React from 'react'
import { View,Text, SafeAreaView, Image, ScrollView } from "react-native"
import { Stack } from "expo-router"
import TicketDetails from "../components/Checkout/TicketDetails"

const Checkout = () => {
  return (
   <SafeAreaView>
      {/* <Stack.Screen
      options={{
        headerTitle:"Artist details",
        headerTransparent:true        
      }}/> */}
     
      
     <TicketDetails/>
  

   </SafeAreaView>
  )
}

export default Checkout