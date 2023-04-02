import React from 'react'
import { Text,View,Image,TouchableOpacity } from "react-native"
import { MaterialIcons } from '@expo/vector-icons';

const EventHeader = ({poster,title,location,date }) => {

  const newdate = date.slice(0,10)


  return (
    <View className="h-[40vh] w-full m-auto bg-black">

    <Image className="h-full w-full opacity-60" 
    resizeMode="cover"
    source={{         
      uri : `${poster.url}`
    }}/>
      
      <View className="absolute bottom-3 left-0 flex flex-row h-[120px] w-full items-center justify-center">

        {/* artist name & Rating location */}
        <View className="flex flex-col justify-between px-8 ">
        {/* artist name */}
         <View className="py-1">
          <Text style={{fontFamily : "SPOTFONT"}} 
          className="text-lg font-semibold text-white">{title}</Text>
         </View>

        {/*date anf location */}

          {/* location */}
          <View className="py-1">
            <Text style={{fontFamily : "SPOTFONT"}} 
            className="text-sm font-medium text-white">{location}</Text>
          </View>
    

        <View className="py-1 flex flex-row gap-2 items-center">
            <MaterialIcons name="date-range" size={20} color="white" />
            <Text style={{fontFamily : "SPOTFONT"}}
            className="text-sm font-medium text-white">{newdate}</Text>
        </View>


        </View>

      </View>


 

      
  </View>
  )
}

export default EventHeader