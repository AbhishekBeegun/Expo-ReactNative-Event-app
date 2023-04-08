import React from 'react'
import { View,Text, SafeAreaView, Image, ScrollView } from "react-native"
import { Stack } from "expo-router"
import TicketDetails from "../components/Checkout/TicketDetails"
import Backbtn from "../components/Basiclayout/Backbtn";


const Checkout = () => {
  return (
   <SafeAreaView>
      <Stack.Screen
      options={{
        headerTitle:"",
        headerTransparent:true     ,
        headerLeft: () => (
          <Backbtn />
        )  }} />
     
      
     <TicketDetails/>
  

   </SafeAreaView>
  )
}

export default Checkout