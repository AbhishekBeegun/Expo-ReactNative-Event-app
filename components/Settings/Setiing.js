import React from 'react'
import { Text,View} from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const Setiing = () => {
    const router = useRouter()

  return (
    <View className="px-4">
      <TouchableOpacity onPress={ () => {router.push('/settings')} }>
      <Ionicons name="ios-settings-outline" size={25} color="white" />    
      </TouchableOpacity>
    </View>
  )
}

export default Setiing