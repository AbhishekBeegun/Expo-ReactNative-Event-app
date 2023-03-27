import React from 'react'
import { Text,View,Image } from "react-native"

const EventHeader = ({poster,title,location,date }) => {
  return (
    <View className="h-[40vh] w-full m-auto bg-black">

    <Image className="h-full w-full opacity-60" 
    resizeMode="cover"
    source={{         
      uri : `${poster.url}`
    }}/>
      
      <View className="absolute bottom-0 left-0 flex flex-row h-[150px] w-full items-center justify-center">

        {/* artist name & Rating location */}
        <View className="flex flex-col justify-between px-8">
        {/* artist name */}
         <View className="py-2">
          <Text className="text-xl font-semibold text-white">{title}</Text>
         </View>

        {/*date anf location */}

          {/* location */}
          <View className="py-1">
            <Text className="text-sm font-medium text-white">{location}</Text>
          </View>
    
     

        <View className="py-1">
            <Text className="text-sm font-medium text-white">{date}</Text>
        </View>


        </View>

      </View>

      
  </View>
  )
}

export default EventHeader