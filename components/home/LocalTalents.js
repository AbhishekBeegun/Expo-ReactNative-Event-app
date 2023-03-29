import React from 'react'
import {Text,View,FlatList, ScrollView,ActivityIndicator} from "react-native"
import ArtistCard from "../Artists/ArtistCard"

import { useQuery } from "@apollo/client"
import { LOCALARTIST_QUERY } from "../../app/GQLQueries"
import { TouchableOpacity } from "react-native-gesture-handler"

const LocalArtists = () => {

  const {data} = useQuery(LOCALARTIST_QUERY);

  return (
    <View className="bg-black">
        <View className="flex flex-row justify-between items-baseline px-2 py-4">
        <Text className="text-white font-bold text-2xl">Local Talents</Text>

        
        <TouchableOpacity>
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

  


        <ScrollView>

        </ScrollView>
    </View>
  )
}

export default LocalArtists