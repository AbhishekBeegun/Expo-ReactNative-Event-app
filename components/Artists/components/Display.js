import React from 'react'
import { FlatList, Text,View,Image, ScrollView } from "react-native"
import YoutubeIframe from "react-native-youtube-iframe"

const Display = ({gridfoto,videoLinks}) => {



  return (
    <View className="px-2 py-4 bg-black">
      {/* photos */}
      <View className="rounded-lg ">
        <View className="px-4 py-2 bg-gray-800 rounded-t-lg">
        <Text className="font-semibold text-white">Photos</Text>   
        </View>

      <ScrollView contentContainerStyle={{flexDirection : "row" ,flexWrap :"wrap"}} >
        
        {gridfoto.map((item) => ( 
        <View className="w-1/2 h-[150px]">
         <Image className="w-full h-full"
         resizeMode="cover" 
          source={{ uri : `${item.url}`}}/>
        </View>
        ))}

      </ScrollView>

        
        <View className="rounded-lg py-8 ">
       
        <View className="px-4 py-2 bg-gray-800 rounded-t-lg">
         <Text className="font-semibold text-white">Video</Text>   
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

        <View>

        </View>

      </View>
      {/* video */}

      <View>
        
      </View>

      {/* music */}

      <View>
        
      </View>

    </View>
  )
}

export default Display