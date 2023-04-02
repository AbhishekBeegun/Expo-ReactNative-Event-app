import React from 'react'
import { Text,View } from "react-native"


const EventPrices = ({nrml,vip,elite}) => {

  return (
    <View className="px-2 py-4 bg-black">
        <View className="px-4 py-2 bg-gray-700 rounded-t-lg">
          <Text style={{fontFamily : "SPOTFONT"}} 
          className="font-semibold text-white">
            Ticket Prices
          </Text>
        </View>

      <View className="px-8">

        <View className="w-full flex flex-row items-center justify-between py-2 gap-5">
        <Text style={{fontFamily : "SPOTFONT"}} 
        className="font-semibold text-white">Normal tickets</Text>
        <Text className="text-green-300 font-semibold">Rs {nrml}</Text>
      
        </View>

        <View className="w-full flex flex-row items-center justify-between py-2 gap-5">
        <Text style={{fontFamily : "SPOTFONT"}} 
        className="font-semibold text-white">VIP tickets</Text>
        <Text className="text-green-300 font-semibold">Rs {vip}</Text>
        </View>

        <View className="w-full flex flex-row items-center justify-between py-2 gap-5">
        <Text style={{fontFamily : "SPOTFONT"}} 
        className="font-semibold text-white">VVIIIPP tickets</Text>
        <Text className="text-green-300 font-semibold">Rs {elite}</Text>
        </View>

      </View>


    </View>
  )
}

export default EventPrices