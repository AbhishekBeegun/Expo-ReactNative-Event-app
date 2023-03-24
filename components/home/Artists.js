import React from 'react'
import {Text,View,FlatList, ScrollView,ActivityIndicator} from "react-native"
import ArtistCard from "../Artists/ArtistCard"

import { useQuery } from "@apollo/client"
import { ARTIST_QUERY } from "../../app/GQLQueries"

const Artists = () => {

  const {data} = useQuery(ARTIST_QUERY);

  return (
    <View className="bg-black">
        <Text className="text-white">Artist Available-----</Text>

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

export default Artists