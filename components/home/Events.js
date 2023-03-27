import React from 'react'
import { Text,View,FlatList,ActivityIndicator } from "react-native"
import EventCard from "../Events/EventCard"
import { useQuery } from "@apollo/client"
import { EVENT_QUERY } from "../../app/GQLQueries"

const Events = () => {

  const {data} = useQuery(EVENT_QUERY);


  return (
    <View className="py-4 bg-black">
        <Text className="text-white">Event Available -----</Text>

        {data && data.events ?   

        <FlatList
        horizontal
        data={data.events}   
        renderItem={({item}) => 
          <View className="px-1">
            <EventCard item={item}/>
          </View>
         }  
        keyExtractor={item => item.id}   
        />
        : <ActivityIndicator size={50}>
        </ActivityIndicator>
        }


    </View>
  )
}

export default Events