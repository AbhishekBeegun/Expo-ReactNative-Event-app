import React from 'react'
import { Text,View,TouchableOpacity ,Image} from "react-native"
import { useRouter } from "expo-router"
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const ArtistCard = ({item}) => {

  const router = useRouter()

  const handleCardPress = () => {
    router.push(`/artist-details/${item.id}`);  
  };

  return (
    <View className="h-[200px] rounded-lg w-[140px] border">
      {/* backgroundImage */}
      <Image className="absolute w-full h-full rounded-lg" 
      resizeMode="cover"
        source={{uri : `${item.img}` }}/>

        <TouchableOpacity onPress={handleCardPress}>
          <View className="flex flex-col justify-between h-full">

            <View className="flex flex-row justify-between items-center p-2">
              {/* rating */}
              <View className="flex flex-row items-center justify-center gap-1">
              <Text className="text-sm font-semibold text-white">{item.Rating}</Text>
              <FontAwesome name="star" size={15} color="gold"  />
              </View>

              <View>
                {/* add to favorite */}
               <TouchableOpacity>
                <Ionicons name="ios-heart" size={20} color="red" />
               </TouchableOpacity>
              </View>

            </View>
             {/* ArtistName */}
            <Text className="text-white font-semibold text-xl px-2 py-2">{item.name}</Text>
             
          </View>
        </TouchableOpacity>
      
    </View>
  )
}

export default ArtistCard