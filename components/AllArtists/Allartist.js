import React from 'react'
import {Text,View,FlatList, ScrollView,ActivityIndicator} from "react-native"
import ArtistCard from "../Artists/ArtistCard";
import { ALLARTIST_QUERY } from "../../app/GQLQueries";
import { useQuery } from "@apollo/client";

const Allartist = () => {
  const {data} = useQuery(ALLARTIST_QUERY);

  return (
    <View className="bg-black items-center w-screen">

         {data && data.artists ?  

        <FlatList
         
        
         numColumns={2}
         data={data.artists}

         renderItem={({item}) => 
         <View className="px-3 py-2">
            
         <ArtistCard item={item}/>

         </View>
         }
         
         keyExtractor={item => item.slug}
        /> 
        : 
        <View className="h-screen w-screen">       
        <ActivityIndicator size={50}>
        </ActivityIndicator>
        </View>

        }
    </View>
  )
}

export default Allartist