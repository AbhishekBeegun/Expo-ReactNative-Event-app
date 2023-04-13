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
    Stars.push(<FontAwesome key={i} name="star" size={15} color="gold"  />)
  }

function instagramprofile(){
  Linking.openURL(`${instagram}`)
}


  

  return (
    <View className="px-2 py-4 bg-black">
      {/* reviews and social */}
      <View>
       
        <View className="flex flex-row items-center justify-between px-4 py-3 bg-white rounded-t-lg">
          <Text style={{fontFamily : "SPOTFONT"}} 
          className="font-semibold text-black">Reviews</Text>
          <View className="flex flex-row gap-2 items-center">
          {/* {Stars} */}
          </View>
      
        </View>

        <View className="flex flex-row items-center justify-center gap-5 py-4">
          <TouchableOpacity onPress={() => instagramprofile()}>
           <View className="border border-white rounded-lg py-2 px-6">
            
            <FontAwesome name="instagram" size={24} color="white" />
       
           </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => instagramprofile()}>
          <View className="border border-white rounded-lg py-2 px-6">
          
          <MaterialIcons name="email" size={24} color="white" />   
         
          </View>
          </TouchableOpacity>

          <View className="border border-white rounded-lg py-2 px-6">
            
            <FontAwesome name="facebook" size={24} color="white" />
       
           </View>
           <View className="border border-white rounded-lg py-2 px-6">
            
            <FontAwesome name="whatsapp" size={24} color="white" />
       
           </View>

        </View>
      
      </View>
    </View>
  )
}

export default Socials