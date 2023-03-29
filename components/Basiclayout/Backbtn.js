import React from 'react'
import { View,Text } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";


const Backbtn = () => {

    const router = useRouter()

    function goBack(){
        router.back()
    }
  return (
    <TouchableOpacity onPress={() => goBack()}>
     <Ionicons name="arrow-back-circle-sharp" size={35} color="white" /> 
    </TouchableOpacity>
  )
}

export default Backbtn