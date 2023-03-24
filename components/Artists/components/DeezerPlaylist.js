import React from 'react'
import { useState } from "react"
import { useEffect } from "react"
import { FlatList, ScrollView, View } from "react-native"

const DeezerPlaylist = () => {
    // check rapid api deezer
    artistid= 3

    const deezerapi = `https://api.deezer.com/artist/${artistid}/top?limit=5`

    const [Playlistdata, setPlaylistdata] = useState();

    useEffect(() => {
        fetch(deezerapi)
        .then(response => setPlaylistdata({response}) )
    
        console.log(Playlistdata)
    }, [])
    


  return (
    <View>
        {/* <ScrollView>
            {Playlistdata.map(function (item) {
                return (
                    <Text>{item.title}</Text>
                )
            })}
        </ScrollView>   */}

    </View>
  )
}

export default DeezerPlaylist