import React from 'react'
import { Text,View,Image, ScrollView } from "react-native"
import YoutubeIframe from "react-native-youtube-iframe"
import DeezerPlaylist from "./DeezerPlaylist"

const Display = ({gridfoto,videoLinks,deezerID}) => {



  return (
    <View className="px-2 py-4 bg-black">
      {/* photos */}
      <View className="rounded-lg ">
        <View className="px-4 py-3 bg-white rounded-t-lg">
        <Text style={{fontFamily : "SPOTFONT"}} 
        className="font-semibold text-black">Photos</Text>   
        </View>

      <ScrollView contentContainerStyle={{flexDirection : "row" ,flexWrap :"wrap"}} >
        
        {gridfoto.map((item) => ( 
        <View key={item.id} className="w-1/2 h-[150px]">
         <Image className="w-full h-full"
         resizeMode="cover" 
          source={{ uri : `${item.url}`}}/>
        </View>
        ))}

      </ScrollView>
      </View>

           {/* video */}
        <View className="rounded-lg py-4 ">
       
        <View className="px-4 py-3 bg-white rounded-t-lg">
         <Text style={{fontFamily : "SPOTFONT"}} 
         className="font-semibold text-black">Video</Text>   
         </View>
         <View className="w-full">
          <YoutubeIframe
          webViewStyle={{opacity:0.99}}
          height={200}
          play={false}
          videoId={videoLinks[0]}
          />  
          </View> 
          <View className="w-full">
          <YoutubeIframe
          webViewStyle={{opacity:0.99}}
          height={200}
          play={false}
          videoId={videoLinks[1]}
          />     
          </View>

        </View>

      {/* music */}
      <View className="rounded-lg py-4 ">
       
       <View className="px-4 py-3 flex flex-row justify-between items-center bg-white rounded-t-lg h-10">
        <Text style={{fontFamily : "SPOTFONT"}} 
        className="font-semibold text-black">Music</Text> 
        
        <Image className="w-20 h-full" 
        source={{ uri : "https://download.logo.wine/logo/Deezer/Deezer-Logo.wine.png"}}/>  
        {/* <Text className="font-semibold text-xs text-slate-700">SetTimout = 15 sec</Text>  */}
       </View>

      <DeezerPlaylist deezerID={deezerID}/>
        
      </View>

    </View>
  )
}

export default Display