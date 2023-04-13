import React from 'react'
import { Text,View } from "react-native"


const EventPrices = ({nrml,vip,elite}) => {

  return (
    <View className="px-2 py-4 bg-black">
        <View className="px-4 py-3 bg-white rounded-t-lg">
          <Text style={{fontFamily : "SPOTFONT"}} 
          className="font-semibold text-black">
            Ticket Prices
          </Text>
        </View>

      <View className="px-8 py-4">

        <View className="w-full flex flex-row items-center justify-between py-2 gap-5">
        <Text style={{fontFamily : "SPOTFONT"}} 
        className="font-semibold text-amber-600">Normal tickets</Text>
        <Text
        className="text-green-300 font-semibold">Rs {nrml}</Text>
      
        </View>

        <View className="w-full flex flex-row items-center justify-between py-2 gap-5">
        <Text style={{fontFamily : "SPOTFONT"}} 
        className="font-semibold text-gray-300">VIP tickets</Text>
        <Text className="text-green-300 font-semibold">Rs {vip}</Text>
        </View>

        <View className="w-full flex flex-row items-center justify-between py-2 gap-5">
        <Text style={{fontFamily : "SPOTFONT"}} 
        className="font-semibold text-yellow-400">VVIIIPP tickets</Text>
        <Text className="text-green-300 font-semibold">Rs {elite}</Text>
        </View>

      </View>


    </View>
  )
}

export default EventPrices