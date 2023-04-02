import React from 'react'
import {View, Text } from "react-native"

const About = () => {
  return (
    <View className="bg-black px-2 py-4">
    <Text style={{fontFamily : "SPOTFONT"}} 
    className="text-lg font-semibold text-white">About</Text>

    <View className="flex flex-col justify-center items-center gap-2">
    <Text style={{fontFamily : "SPOTFONT"}} 
    className="text-white text-xs">Made using React Native, GraphQL, Expo , HyGraph </Text>
  
    <Text style={{fontFamily : "SPOTFONT"}} 
    className="text-white text-xs">Similar to Otayo, Beatgig, ShubHub, Spotify </Text>
    </View>
    </View>
  )
}

export default About