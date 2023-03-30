import React from 'react'
import { Text,View} from "react-native"
import { Ionicons } from '@expo/vector-icons';
import Greet from "../greeting/Greet";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const HeaderBanner = () => {
  const router = useRouter()
  return (
    <View className="bg-black flex flex-row gap-2 justify-between px-4 items-baseline pt-16 pb-5">
      <Greet/>

      <TouchableOpacity onPress={ () => {router.push('/settings')} }>
      <Ionicons name="ios-settings-outline" size={30} color="white" />    
      </TouchableOpacity>

    </View>
  )
}

export default HeaderBanner