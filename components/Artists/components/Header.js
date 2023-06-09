import React from 'react'
import { Text,View,Image,TouchableOpacity, ImageBackground } from "react-native"
import { FontAwesome } from '@expo/vector-icons';
import {LinearGradient} from "expo-linear-gradient"
const Header = ({coverPhoto, MainPhoto,name,rating,location,minprice,maxprice}) => {


  return (
    <View className="h-[40vh] w-full m-auto ">

      <Image 
      className="h-full w-full opacity-95" 
      source={{         
        uri : `${coverPhoto.url}`
      }}/>
    

        <LinearGradient
            colors={["#66000000","#000000"]}
            start={{x:1,y:0 }}
            end={{x:1,y:1 }} 
        className="absolute bottom-0 left-0 flex flex-row h-[100px] w-full items-center justify-center ">
            
          {/* artist image */}
          <View className="h-[90px] w-[90px]">
           <Image
           className="h-full w-full rounded-full" 
           source={{
            uri : `${MainPhoto.url}`
           }}/>
          </View>

          {/* artist name & Rating location */}
          <View className="flex flex-col justify-evenly items-center px-8">
          {/* artist name */}
           <View>
            <Text style={{fontFamily : "SPOTFONT"}} 
            className="text-lg font-semibold text-white">{name}</Text>
           </View>

          {/* rating anf location */}
          <View className="flex flex-row gap-5 items-baseline justify-center py-1">
            {/* rating */}
            <View className="flex flex-row items-center justify-center gap-1">
              <Text style={{fontFamily : "SPOTFONT"}} 
              className="text-sm font-semibold text-white">{rating}</Text>
              <FontAwesome name="star" size={15} color="gold"  />
            </View>

            {/* location */}
            <View>
              <Text style={{fontFamily : "SPOTFONT"}} 
              className="text-xs text-white">{location}</Text>
            </View>



          </View>
          <View  
          className="py-1 flex flex-row gap-1 px-4">
              <Text style={{fontFamily : "SPOTFONT"}} 
               className="text-xs font-semibold text-white">Rs {minprice}</Text>
              <Text style={{fontFamily : "SPOTFONT"}} 
              className="text-xs font-semibold text-white"> - </Text>             
              <Text style={{fontFamily : "SPOTFONT"}} 
              className="text-xs font-semibold text-white">Rs {maxprice}</Text>

            </View>
          </View>

        </LinearGradient>

        
    </View>
  )
}

export default Header