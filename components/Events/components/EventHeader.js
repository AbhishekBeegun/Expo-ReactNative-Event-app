import React from 'react'
import { Text,View,Image } from "react-native"

const EventHeader = ({poster,title,location }) => {
  return (
    <View className="h-[40vh] w-full m-auto bg-black">

    <Image className="h-full w-full bg-black opacity-80" 
    resizeMode="cover"
    source={{         
      uri : `${poster.url}`
    }}/>
      
      <View className="absolute bottom-0 left-0 flex flex-row h-[100px] w-full items-center justify-center">

        {/* artist name & Rating location */}
        <View className="flex flex-col justify-evenly px-8">
        {/* artist name */}
         <View>
          <Text className="text-xl font-semibold text-white">{title}</Text>
         </View>

        {/* rating anf location */}
        <View className="flex flex-row gap-5 items-center justify-center">

          {/* location */}
          <View>
            <Text className="text-sm font-medium text-white">{location}</Text>
          </View>

        </View>

        </View>

      </View>

      
  </View>
  )
}

export default EventHeader