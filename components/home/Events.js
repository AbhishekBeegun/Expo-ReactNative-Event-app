import React from 'react'
import { Text,View,FlatList,ActivityIndicator } from "react-native"
import EventCard from "../Events/EventCard"
import { useQuery } from "@apollo/client"
import { EVENT_QUERY } from "../../app/GQLQueries"
import { TouchableOpacity } from "react-native-gesture-handler"

const Events = () => {

  const {data} = useQuery(EVENT_QUERY);


  return (
    <View className="py-4 bg-black">
        <View className="flex flex-row justify-between items-baseline px-2 py-4">
        <Text className="text-white font-bold text-2xl">Upcoming Events</Text>
        <TouchableOpacity>
        <Text className="text-white font-semibold text-[8px] uppercase">Show all</Text>
        </TouchableOpacity>
        </View>

        {data && data.events ?   

        <FlatList
        horizontal
        data={data.events}   
        renderItem={({item}) => 
          <View className="px-1">
            <EventCard item={item}/>
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

export default Events