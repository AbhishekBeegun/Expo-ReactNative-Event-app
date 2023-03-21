import React from 'react'
import { Text,View,TouchableOpacity } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons'; 

import { useRouter } from "expo-router"
const Footer = () => {

  const router = useRouter();

  const company = [
    {
      page :"career",
      text : "Career"
    },
    {
      page :"privacy",
      text : "Privacy Policy"
    },
    {
      page :"Termsservice",
      text : "Terms Of Service"
    },
    {
      page :"cookies",
      text : "Cookies Policy"
    }
  ]

  return (
    <View className="bg-gray-900 p-4 flex flex-col gap-2">
      {/* company list and policy */}
      <View className="flex flex-row justify-evenly text-left">
        {/* company */}
        <View>
          <Text className="text-slate-500 font-semibold text-sm">COMPANY</Text>
          {company.map((item) =>
           <TouchableOpacity onPress={() => router.push(item.page)}>
            <Text className="text-white font-semibold py-1">{item.text}</Text>
          </TouchableOpacity>)}
        </View>

        {/* otherpage */}
        <View >
          <Text className="text-slate-500 font-semibold text-sm">PRODUCTS</Text>
          <Text className="text-white font-semibold py-1">
            Artist Booking
          </Text>
          <Text className="text-white font-semibold py-1">
            Event Tickets
          </Text>
        </View>

      </View>
      {/* account and social */}
      <View className="flex flex-row justify-evenly">
        {/* account */}
        <View >
          <Text className="text-slate-500 font-semibold text-sm">ACCOUNT</Text>
          <Text className="text-white font-semibold py-1">
            Sign Up
          </Text>
          <Text className="text-white font-semibold py-1">
            Log In
          </Text>
        </View>

        {/* socials */}
        <View>
        <Text className="text-slate-500 font-semibold text-sm">SOCIAL</Text>

        <View className="flex flex-row gap-2 py-1">
        <FontAwesome5 name="instagram" size={24} color="white" />
        <FontAwesome5 name="facebook" size={24} color="white" />
        </View>

        <View className="flex flex-row gap-1 items-center py-1">
        <FontAwesome5 name="copyright" size={14} color="white" />
        <Text className="text-slate-500 font-semibold text-[3px]">2023 Abhishek Beegun.ALL rights reversed.</Text>
        </View>
        
        
        </View>


      </View>

    </View>
  )
}

export default Footer