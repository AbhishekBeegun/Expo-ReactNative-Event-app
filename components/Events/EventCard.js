import React from 'react'
import { Text,View,TouchableOpacity ,Image} from "react-native"
import { useRouter } from "expo-router"
import { Ionicons } from '@expo/vector-icons';



const EventCard = ({item}) => {

  const router = useRouter()

  const handleCardPress = () => {
    router.push(`/event-details/${item.id}`);  
  };
  return (
    <View className="h-[200px] rounded-lg w-[280px] border bg-black">
      {/* backgroundImage */}
      <Image className="absolute w-full h-full rounded-lg opacity-80" 
      resizeMode="cover"
        source={{uri : `${item.img}` }}/>

        <TouchableOpacity onPress={handleCardPress}> 

           <View className="flex flex-col justify-between h-full w-full p-2">

              <View className="flex flex-row justify-between">
                {/* mainArtist */}
                <View className="h-[30px] w-[30px]">
                  <Image className="w-full h-full rounded-full"
                  resizeMode="cover"
                   source={{uri : `${item.mainArtist}` }}/>
          
                </View>

                {/* addtofavorite */}
               <TouchableOpacity>
                <Ionicons name="ios-heart" size={25} color="red" />
               </TouchableOpacity>
              </View>


              {/* EventName */}
              <Text className="text-white font-semibold text-xl px-2 py-2 shadow-lg">{item.name}</Text>

            </View>

        </TouchableOpacity>
    </View>
  )
}

export default EventCard