import React from 'react'
import { Text,View,Image,TouchableOpacity } from "react-native"
import { FontAwesome } from '@expo/vector-icons';


const Header = ({coverPhoto, MainPhoto,name,rating,location,minprice,maxprice}) => {


  return (
    <View className="h-[40vh] w-full m-auto bg-black">

      <Image className="h-full w-full bg-black opacity-80" 
      source={{         
        uri : `${coverPhoto.url}`
      }}/>
        
        <View className="absolute bottom-0 left-0 flex flex-row h-[100px] w-full items-center justify-center">

          {/* artist image */}
          <View className="h-[90px] w-[90px]">
           <Image
           className="h-full w-full rounded-full" 
           source={{
            uri : `${MainPhoto.url}`
           }}/>
          </View>

          {/* artist name & Rating location */}
          <View className="flex flex-col justify-evenly px-8">
          {/* artist name */}
           <View>
            <Text className="text-xl font-semibold text-white">{name}</Text>
           </View>

          {/* rating anf location */}
          <View className="flex flex-row gap-5 items-baseline justify-center py-1">
            {/* rating */}
            <View className="flex flex-row items-center justify-center gap-1">
              <Text className="text-sm font-semibold text-white">{rating}</Text>
              <FontAwesome name="star" size={15} color="gold"  />
            </View>

            {/* location */}
            <View>
              <Text className="text-sm font-medium text-white">{location}</Text>
            </View>



          </View>
          <View className="py-1 flex flex-row gap-1 px-4">
              <Text className="text-xs font-semibold text-white">Rs {minprice}</Text>
              <Text className="text-xs font-semibold text-white"> - </Text>             
              <Text className="text-xs font-semibold text-white">Rs {maxprice}</Text>

            </View>
          </View>

        </View>

        
    </View>
  )
}

export default Header