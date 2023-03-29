import React from 'react'
import { View,Text, SafeAreaView, Image, ScrollView } from "react-native"
import TicketDetails from "../components/Checkout/TicketDetails"

const Checkout = () => {
  return (
   <SafeAreaView>
     <TicketDetails/>
   </SafeAreaView>
  )
}

export default Checkout