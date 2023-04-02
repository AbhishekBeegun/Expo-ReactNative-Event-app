import React from 'react'
import { Text,View,Image } from "react-native"
import YoutubeIframe from "react-native-youtube-iframe"


const EventDisplay = ({artist}) => {


  return (
    <View>
        {artist.map((item) => (
          <View key={item.id} className="bg-black px-2">

        <View className="px-4 py-2 bg-gray-700 rounded-t-lg">
          <Text style={{fontFamily : "SPOTFONT"}} 
          className="font-semibold text-white">Main artist</Text>   
        </View>

          <View className="flex flex-row justify-between items-center px-10 py-4">

          <View className="h-[90px] w-[90px]">
           <Image
           className="h-full w-full rounded-full" 
           source={{
            uri : `${item.mainPhoto.url}`
           }}/>
          </View>

          <View>
            <Text style={{fontFamily : "SPOTFONT"}} 
            className="text-base font-semibold text-white">{item.name}</Text>
           </View>

           </View>
{/* endofsdofjsidf */}

       <View className="rounded-lg py-4">
       
       <View className="px-4 py-2 bg-gray-700 rounded-t-lg">
        <Text style={{fontFamily : "SPOTFONT"}} 
        className="font-semibold text-white">Video</Text>   
        </View>
        <View className="w-full">
         <YoutubeIframe
         webViewStyle={{opacity:0.99}}
         height={200}
         play={false}
         videoId={item.videoLinks[0]}
         />  
         </View> 
         <View className="w-full">
         <YoutubeIframe
         webViewStyle={{opacity:0.99}}
         height={200}
         play={false}
         videoId={item.videoLinks[1]}
         />     
         </View>

       </View>

          </View>
        ))}
    </View>
  )
}

export default EventDisplay