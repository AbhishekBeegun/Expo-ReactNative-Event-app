import React from 'react'
import { Text,View,TouchableNativeFeedback,StyleSheet } from "react-native"

const HeaderBanner = () => {
  return (
    <View className="bg-black flex flex-col gap-5 justify-center items-center p-10 pt-32">
        <Text className="text-3xl text-yellow-300 font-semibold">Start booking artists.</Text>
        <Text className="text-gray-500">BeatGig is the easiest 
          way to book talent for private
         parties, colleges, bars, weddings
          & more.
        </Text>

       <View className="flex flex-row justify-center gap-5">
        <View>
        <TouchableNativeFeedback>
          <View className="bg-white px-4 py-2 rounded-full">
          <Text className="text-black font-semibold">Sign up</Text>
          </View>
        </TouchableNativeFeedback>
        </View>


        <View>
        <TouchableNativeFeedback>     
          <View className="bg-gray-600 px-4 py-2 rounded-full"> 
          <Text className="text-white font-semibold">Learn more</Text>
          </View>
        </TouchableNativeFeedback>
        </View>
        </View>
        

    </View>
  )
}

export default HeaderBanner