import React from 'react'
import { Text,View,Image,TouchableOpacity } from "react-native"
import { FontAwesome } from '@expo/vector-icons';


const Header = () => {
  return (
    <View className="h-[50vh] w-full m-auto">

      <Image className="h-full w-full" 
      source={{         
        uri : 'https://res.cloudinary.com/dn29xlaeh/image/upload/q_75,h_1400/beatgig-live/jybufbh5j9fob7gp6lzv'
      }}/>
        
        <View className="absolute bottom-0 left-0 flex flex-row h-[100px] w-full items-center justify-center">

          {/* artist image */}
          <View className="h-[90px] w-[90px]">
           <Image
           className="h-full w-full rounded-full" 
           source={{
            uri : "https://res.cloudinary.com/dn29xlaeh/image/upload/q_75,w_640/beatgig-live/wyrzpswnoks7c0g24ccq"
           }}/>
          </View>

          {/* artist name & Rating location */}
          <View className="flex flex-col justify-evenly px-8">
          {/* artist name */}
           <View>
            <Text className="text-xl font-semibold text-white">Myles O'Neal</Text>
           </View>

          {/* rating anf location */}
          <View className="flex flex-row gap-5 items-center justify-center">
            {/* rating */}
            <View className="flex flex-row items-center justify-center gap-1">
              <Text className="text-sm font-semibold text-white">5</Text>
              <FontAwesome name="star" size={15} color="gold"  />
            </View>

            {/* location */}
            <View>
              <Text className="text-sm font-medium text-white">Location</Text>
            </View>

          </View>

          </View>

        </View>

        
    </View>
  )
}

export default Header