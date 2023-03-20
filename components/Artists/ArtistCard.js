import React from 'react'
import { Text,View,TouchableOpacity } from "react-native"
import { useRouter } from "expo-router"

const ArtistCard = () => {

  const router = useRouter()

  const handleCardPress = () => {
    router.push(`/artist-details/${1}`);  
  };

  return (
    <View>
        <Text>
            Artist Card
        </Text>
        <TouchableOpacity onPress={handleCardPress}> 
          <Text>Link to Artist details</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ArtistCard