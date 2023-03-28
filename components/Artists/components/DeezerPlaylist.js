import React from 'react'
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView, View,Text, Image,TouchableOpacity } from "react-native"
import {Audio} from "expo-av"


const DeezerPlaylist = ({deezerID}) => {
    // check rapid api deezer
   

    const [Playlistdata, setPlaylistdata] = useState();
    const [isLoading, setisLoading] = useState(false)
    const [error, seterror] = useState(null)

    const [isPlaying, setIsPlaying] = useState(false);
    const [sound, setSound] = useState(null);

    
    const options = {
        method: 'GET',
        url: `https://api.deezer.com/artist/${deezerID}/top?limit=10`,
        headers: {
          'X-RapidAPI-Key': 'a5ef13e236mshd1254dce2b5d8c0p1aa5b0jsna5849b80ca3f',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };


      const fetchData = async () => {
        setisLoading(true);

        try {
            const response = await axios.request(options)
            setPlaylistdata(response.data.data)
            setisLoading(false)

        } catch (error){
            seterror(error);
            alert("Error fetching data")
            
        } finally{
            setisLoading(false)

        }
      }

      useEffect(() => {
        fetchData();
      }, [])


      async function MediaControl(preview){
        const { sound } = await Audio.Sound.createAsync({ uri: preview });
        setSound(sound);
        setIsPlaying(true);
        await sound.playAsync();
        setTimeout(() => {sound.unloadAsync(),setIsPlaying(false)}, 15000)
      }
  

  return (
    <View>
     <ScrollView>
      {Playlistdata && Playlistdata.map((item) => {
        return (
          <TouchableOpacity key={item.id}
          disabled={isPlaying}
          onPress={()=> MediaControl(item.preview)}
          className="w-full h-auto flex flex-row items-center justify-between border px-4 py-2">
            <View className="h-[80px] w-[80px]" >
              <Image className="w-full h-full rounded-lg"
              source={{uri : `${item.album.cover_medium}`}}
              resizeMode="cover"/>
            </View>

            <Text className="text-white font-semibold text-xs">{item.title}</Text>
              {isPlaying ? 
              <MaterialIcons name="play-disabled" size={15} color="white"/>      
               :<FontAwesome name="play" size={13} color="white" />      
              }
          </TouchableOpacity>
        )
      })}
     </ScrollView>
    </View>
  )
}

export default DeezerPlaylist