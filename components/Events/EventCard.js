import React from 'react'
import { Text,View,TouchableOpacity ,Image,ToastAndroid} from "react-native"
import { useRouter } from "expo-router"
import { Ionicons } from '@expo/vector-icons';



const EventCard = ({item}) => {

  const router = useRouter()
  function showToast() {
    ToastAndroid.show('Wishlist Not Setup', ToastAndroid.SHORT);
  }

  const handleCardPress = () => {
    router.push(`/event-details/${item.slug}`);  
  }


  return (
    <View className="h-[200px] rounded-lg w-[280px] border bg-black">
      {/* backgroundImage */}
      <Image className="absolute w-full h-full rounded-lg opacity-80" 
      resizeMode="cover"
        source={{uri : `${item.poster.url}` }}/>

        <TouchableOpacity onPress={handleCardPress}> 

           <View className="flex flex-col justify-between h-full w-full p-2">

              <View className="flex flex-row justify-between">
                {/* mainArtist */}
                {item.artist.map( (item) => (
                <View key={item} className="h-[30px] w-[30px]">
                  <Image className="w-full h-full rounded-full"
                  resizeMode="cover"
                   source={{uri : `${item.mainPhoto.url}` }}/>
                </View>
                ))}

                {/* addtofavorite */}
               <TouchableOpacity onPress={() => showToast()}>
                <Ionicons name="ios-heart" size={25} color="red" />
               </TouchableOpacity>
              </View>


              {/* EventName */}
              <Text style={{fontFamily : "SPOTFONT"}} 
              className="text-white font-semibold text-xl px-2 py-2 shadow-lg">{item.title}</Text>

            </View>

        </TouchableOpacity>
    </View>
  )
}

export default EventCard