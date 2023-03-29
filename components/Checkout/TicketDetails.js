import React, { Component } from 'react'
import { View,Text, SafeAreaView, Image, ScrollView } from "react-native"
import QRCode from "react-native-qrcode-svg"

const TicketDetails = () => {

    const id = "id : 123456 , Event :Afro love by tayc , Ticket : normal , price : 900 ,quantity : 3 , status : paid ,purchasedDate : today"
  return (
    <View className="flex flex-col justify-between items-center h-[110vh] w-screen py-10">
        <Image className="w-full h-full absolute" 
      source={{uri : "https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/jAPL6nNfQ16HAIMLExE9"}} />
     {/* title and location */}
    
    <View className="flex flex-col items-center gap-2 py-8 px-5">

      <Text className="text-xl text-white font-semibold uppercase">Afro love by tayc</Text>
      <Text className="text-xs text-slate-500">Stade Gremondo bamboo</Text>
      <Text className="text-white font-bold">2023 / 04 / 18 </Text>
      <Text className="text-xs text-slate-500">Do not share this with anyone. Kindly please take a screenshot and present this at the entrance.</Text>



    </View>


    {/* id */}

    {/* <View>
      <Text className="text-xs">Order Number</Text>

      <Text>{id}</Text>

    </View> */}

    {/* QR CODE */}
    <View className="w-full h-auto items-center mb-48">

        <QRCode 
        enableLinearGradient={true}
        linearGradient={['rgb(229, 231, 235)','rgb(75, 85, 99)']}
        size={300}
        value={id}
        color="red"
        backgroundColor="transparent"
        />
    </View>


  </View>
  )
}

export default TicketDetails