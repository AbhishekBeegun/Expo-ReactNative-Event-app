import React from 'react'
import { Text,View,TouchableOpacity } from "react-native"
import { useRouter } from "expo-router"


const EventCard = () => {

  const router = useRouter()

  const handleCardPress = () => {
    router.push(`/event-details/${"slug-anme"}`);  
  };
  return (
    <View>
        <Text>
            Event Card on Home Screen
        </Text>
        <TouchableOpacity onPress={handleCardPress}> 
          <Text>Link to Event details</Text>
        </TouchableOpacity>
    </View>
  )
}

export default EventCard