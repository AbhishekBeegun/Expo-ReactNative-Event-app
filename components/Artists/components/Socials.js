import React from 'react'
import { Linking, Text,View } from "react-native"
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from "react";
import { TouchableOpacity } from "react-native";

const Socials = ({instagram,ratings}) => {
  const rating = ratings

  const [Stars] = useState([])

  for(let i = 0 ; i < rating ; i++){
    Stars.push(<FontAwesome name="star" size={15} color="gold"  />)
  }

function instagramprofile(){
  Linking.openURL(`${instagram}`)
}


  

  return (
    <View className="px-2 py-4 bg-black">
      {/* reviews and social */}
      <View>
       
        <View className="flex flex-row items-center justify-between px-4 py-2 bg-gray-800 rounded-t-lg">
          <Text className="font-semibold text-white">Reviews</Text>
          <View className="flex flex-row gap-2 items-center">
          {Stars}
          </View>
      
        </View>

        <View className="flex flex-row items-center justify-center gap-5 py-2">
          <TouchableOpacity onPress={() => instagramprofile()}>
           <View className="bg-gray-800 rounded-lg py-2 px-6">
            
            <FontAwesome name="instagram" size={24} color="white" />
       
           </View>
          </TouchableOpacity>

          <TouchableOpacity>
          <View className="bg-gray-800 rounded-lg py-2 px-6">
          
          <MaterialIcons name="email" size={24} color="white" />   
         
          </View>
          </TouchableOpacity>

        </View>
      
      </View>
    </View>
  )
}

export default Socials