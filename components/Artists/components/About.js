import React from 'react'
import { useState } from "react";
import { Text,View,TouchableOpacity,ToastAndroid} from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Linking } from "react-native";


const About = ({artistDescription,name}) => {
  const [Showmore, setShowmore] = useState(true)

  function showToast() {
    ToastAndroid.show('Wishlist Not Setup', ToastAndroid.SHORT);
  }

  function showmorebtn(){
    setShowmore(!Showmore);
  }

function handleBook(name) {
    Linking.openURL(`mailto:Abhishekbeegun0642@gmail.com?subject=Quotation for Booking ${name}&body=Need Quote for ${name}`) 
    title=`${name} Booking` 
}

  return (
    <View className="bg-black">
        {/* like heart or book artist */}
        <View className="flex flex-row justify-center py-4 gap-8">
         
          <TouchableOpacity onPress={() => showToast()}>
          <View className="px-3 py-2 rounded-lg">
            <Ionicons name="ios-heart" size={25} color="red" />
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleBook(name)}>
           <View className="bg-gray-700 px-20 py-3 rounded-full">
              <Text style={{fontFamily : "SPOTFONT"}} 
              className="text-white font-semibold">Book</Text>              
           </View>
          </TouchableOpacity>
        </View>

        {/* about section */}
        <View className="px-4">
          <Text style={{fontFamily : "SPOTFONT"}} 
          className="text-lg font-semibold text-white">About</Text>
          {Showmore ? 
          <View className="w-full h-[8vh] overflow-hidden">
            <Text style={{fontFamily : "SPOTFONT"}} 
            className="text-gray-400 text-xs">{artistDescription}</Text>
          </View> :
           <View className="w-full h-auto overflow-hidden">
             <Text style={{fontFamily : "SPOTFONT"}} 
             className="text-gray-400 text-xs">{artistDescription}</Text>
           </View>}


          <TouchableOpacity onPress={() => showmorebtn()}>
                {Showmore ? <View className="flex flex-row items-center justify-center py-2 gap-2">
                <Text style={{fontFamily : "SPOTFONT"}}
                className="font-semibold text-white">Show more</Text>
                <AntDesign name="down" size={12} color="white" />
                </View>:
                <View className="flex flex-row items-center justify-center gap-2">
                <Text style={{fontFamily : "SPOTFONT"}} 
                className="font-semibold text-white">Show less</Text>
                <AntDesign name="up" size={12} color="white" />
                </View>}


          </TouchableOpacity>
        </View>

    </View>
  )
}

export default About