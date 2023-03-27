import React from 'react'
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import { ScrollView, View,Text, Image,TouchableOpacity } from "react-native"
import {Audio} from "expo-av"


const DeezerPlaylist = ({deezerID}) => {
    // check rapid api deezer
   

    const [Playlistdata, setPlaylistdata] = useState();
    const [isLoading, setisLoading] = useState(false)
    const [error, seterror] = useState(null)

    const [Music, setMusic] = useState()

    
    const options = {
        method: 'GET',
        url: `https://api.deezer.com/artist/${deezerID}/top?limit=2`,
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



      // useEffect(() => {
      //   return Music
      //   ? () => {
      //       console.log('Unloading Sound');
      //       sound.unloadAsync();
      //     }
      //   : undefined;
      
      // }, [])


      //  async function MediaControl (preview) {
      //   const {sound} = new Audio.Sound()
        
      //   await Music.loadAsync({uri: preview})
      //   setMusic(sound)


      // console.log(Music)
      //  } 
      // await Music.playAsync()
    

  
      

  return (
    <View>
     <ScrollView>
      {Playlistdata && Playlistdata.map((item) => {
        return (
          <TouchableOpacity key={item.id}
          className="w-full h-auto flex flex-row items-center justify-between border px-2 py-1">
            <View className="h-[100px] w-[100px]" >
              <Image className="w-full h-full rounded-lg"
              source={{uri : `${item.album.cover_medium}`}}
              resizeMode="cover"/>
            </View>

            <Text className="text-white font-semibold text-xs">{item.title}</Text>
          </TouchableOpacity>
        )
      })}
     </ScrollView>
    </View>
  )
}

export default DeezerPlaylist