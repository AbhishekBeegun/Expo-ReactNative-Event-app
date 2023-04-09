import React from 'react'
import {Text,View,FlatList, ScrollView,ActivityIndicator} from "react-native"
import EventCard from "../Events/EventCard"
import { ALLEVENT_QUERY } from "../../app/GQLQueries";
import { useQuery } from "@apollo/client";

const Allevent = () => {
  const {data} = useQuery(ALLEVENT_QUERY);

  return (
    <View className="bg-black items-center w-screen py-10">

         {data && data.events ?  

        <FlatList
         
        
         numColumns={1}
         data={data.events}

         renderItem={({item}) => 
         <View className="px-3 py-2">
            
         <EventCard item={item}/>

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

export default Allevent