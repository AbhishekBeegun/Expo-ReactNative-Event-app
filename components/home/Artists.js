import React from 'react'
import {Text,View,FlatList, ScrollView,ActivityIndicator} from "react-native"
import ArtistCard from "../Artists/ArtistCard"

import { useQuery } from "@apollo/client"
import { ARTIST_QUERY } from "../../app/GQLQueries"
import { TouchableOpacity } from "react-native"
import { useRouter } from "expo-router"

const Artists = () => {

  const router = useRouter()

  const {data} = useQuery(ARTIST_QUERY);

  return (
    <View className="bg-black">
        <View className="flex flex-row justify-between items-baseline px-2 py-4">
        <Text className="text-white font-bold text-2xl">Featured Artists</Text>

        
        <TouchableOpacity onPress={() => router.push("/allartists")}>
        <Text className="text-white font-semibold text-[8px] uppercase">Show all</Text>
        </TouchableOpacity>
        </View>
        {data && data.artists ?   

        <FlatList
         horizontal

         data={data.artists}

         renderItem={({item}) => <View className="px-1">
            
         <ArtistCard item={item}/>

         </View>
         }
         
         keyExtractor={item => item.slug}
        /> 
        : <ActivityIndicator size={50}>
        </ActivityIndicator>
        }
    </View>
  )
}

export default Artists