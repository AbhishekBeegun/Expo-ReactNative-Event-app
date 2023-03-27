import React from 'react'
import { Text,View } from "react-native"
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const Socials = ({instagram,ratings}) => {
  const rating = {ratings}

  const [Stars] = useState([])

  // for(let i = 0 ; i < rating ; i++){
  //   Stars.push(<FontAwesome name="star" size={15} color="gold"  />)
  // }




  

  return (
    <View className="px-4 py-4 bg-black">
      {/* reviews and social */}
      <View>
       
        <View className="flex flex-row items-center justify-between px-4 py-2 bg-gray-800 rounded-t-lg">
          <Text className="text-base font-semibold text-white">Reviews</Text>
          <View className="flex flex-row gap-2 items-center">
          {/* {Stars} */}
          <Text className="font-semibold text-white">5</Text>
          </View>
      
        </View>

        <View className="flex flex-row items-center justify-center gap-5 py-2">
          <TouchableOpacity>
           <View className="bg-gray-800 rounded-lg py-2 px-6">
            <Text>
            <FontAwesome name="instagram" size={24} color="white" />
            </Text>
           </View>
          </TouchableOpacity>

          <TouchableOpacity>
          <View className="bg-gray-800 rounded-lg py-2 px-6">
          <Text>
          <MaterialIcons name="email" size={24} color="white" />   
          </Text>
          </View>
          </TouchableOpacity>

        </View>
      
      </View>
    </View>
  )
}

export default Socials