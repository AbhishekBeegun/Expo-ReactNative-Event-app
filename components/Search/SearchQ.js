import React from 'react'
import { useState } from "react"
import { Text,View } from "react-native"
import { TextInput } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const SearchQ = () => {

  const router = useRouter()

  const [input, setinput] = useState("")

  const handleSearch = () => {
    router.push(`/search-query/${input}`);  
  }

  return (
    <View className="flex flex-col justify-center items-center px-4 bg-black">
      
      <View className="w-full flex flex-row gap-2 items-center justify-evenly">
      <TextInput
      className="px-4 py-2 rounded-lg w-3/4 border bg-white font-bold"
      placeholder="Looking for . . ."
        onChangeText={setinput}
        value={input}
      />
     <TouchableOpacity onPress={ () => handleSearch()}
     className="bg-yellow-400 rounded-lg py-2 px-2">
      <Ionicons name="search" size={24} color="black" />       
     </TouchableOpacity>
     </View>

     {/* <View className="flex flex-row justify-around w-screen py-2">
      <TouchableOpacity 
      className="py-1 px-4 bg-gray-700 rounded-full">
      
      <Text className="text-white font-semibold">Artist</Text>

      </TouchableOpacity>
      <TouchableOpacity className="py-1 px-4 bg-gray-700 rounded-full">
      
      <Text className="text-white font-semibold">Event</Text>

      </TouchableOpacity>
      
   

     </View> */}
    </View>
  )
}

export default SearchQ