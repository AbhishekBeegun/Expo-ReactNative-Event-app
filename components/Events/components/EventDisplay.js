import React from 'react'
import { Text,View,Image,TouchableOpacity } from "react-native"
import { useRouter } from "expo-router"

import YoutubeIframe from "react-native-youtube-iframe"


const EventDisplay = ({artist}) => {

  const router = useRouter()
  console.log(artist[0].slug)

  const handlePress = () => {
    router.push(`/event-details/${artist[0].slug}`);  
  }


  return (
    <View>
        {artist.map((item) => (
          <View key={item.id} className="bg-black px-2">

        <View className="px-4 py-3 bg-white rounded-t-lg">
          <Text style={{fontFamily : "SPOTFONT"}} 
          className="font-semibold text-black">Main artist</Text>   
        </View>

          <TouchableOpacity onPress={handlePress} className="flex flex-row justify-between items-center px-10 py-4">

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

           </TouchableOpacity>
{/* endofsdofjsidf */}

       <View className="rounded-lg py-4">
       
       <View className="px-4 py-3 bg-white rounded-t-lg">
        <Text style={{fontFamily : "SPOTFONT"}} 
        className="font-semibold text-black">Video</Text>   
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