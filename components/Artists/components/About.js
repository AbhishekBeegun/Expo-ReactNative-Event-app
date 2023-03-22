import React from 'react'
import { useState } from "react";
import { Text,View,TouchableOpacity} from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const About = () => {
  const [Showmore, setShowmore] = useState(true)

  function showmorebtn(){
    setShowmore(!Showmore);
  }


  return (
    <View className="bg-black">
        {/* like heart or book artist */}
        <View className="flex flex-row justify-center py-4 gap-8">
         
          <TouchableOpacity>
          <View className="bg-white border border-black px-8 py-2 rounded-full">
            <Ionicons name="ios-heart" size={20} color="red" />
          </View>
          </TouchableOpacity>

          <TouchableOpacity>
           <View className="bg-yellow-300 px-8 py-2 rounded-full">
              <Text className="text-black font-semibold">Book</Text>              
           </View>
          </TouchableOpacity>
        </View>

        {/* about section */}
        <View className="px-4">
          <Text className="text-lg font-semibold text-white">About</Text>
          {Showmore ? 
          <View className="w-full h-[5vh] overflow-hidden">
            <Text className="text-gray-400">Artist Details</Text>
          </View> :
           <View className="w-full h-[50vh] overflow-hidden">
             <Text className="text-gray-400">ArtistDetails</Text>
           </View>}


          <TouchableOpacity onPress={() => showmorebtn()}>
                {Showmore ? <View className="flex flex-row items-center justify-center gap-2">
                <Text className="font-semibold text-white">Show more</Text>
                <AntDesign name="down" size={12} color="white" />
                </View>:
                <View className="flex flex-row items-center justify-center gap-2">
                <Text className="font-semibold text-white">Show less</Text>
                <AntDesign name="up" size={12} color="white" />
                </View>}


          </TouchableOpacity>
        </View>

    </View>
  )
}

export default About