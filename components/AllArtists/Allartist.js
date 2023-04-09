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
        <View className="h-[100vh] w-screen flex flex-row justify-center items-center">       
        <ActivityIndicator size={50} color={"yellow"}>
        </ActivityIndicator>
        </View>

        }
    </View>
  )
}

export default Allartist