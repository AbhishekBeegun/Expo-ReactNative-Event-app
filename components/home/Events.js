import React from 'react'
import { Text,View,FlatList } from "react-native"
import EventCard from "../Events/EventCard"

const Events = () => {

  const Eventavailable = [
    { id : "10",
      name : "TayC Afro Love",
      img : 'https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/yTPa26KqT92rH97XoiD3',
      mainArtist : "https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/8iZaerncTNOEPKIvDIes"
    },
    { id : "11",
      name : "Desire Francois",
      img : 'https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/wULIuiwLTNuAp9pbZmED',
      mainArtist : "https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/ZWXeaORTQmkUSFemW0pa"

    },
    { id : "12",
      name : "DJ Seeb LA FAYA",
      img : 'https://otayo.com/wp-content/uploads/2023/02/la-faya-roulman-dan-green-village.jpg',
      mainArtist : "https://otayo.com/wp-content/uploads/2022/07/bigg-frankii-4.png"
    }
]
  return (
    <View className="py-4">
        <Text>Event Available -----</Text>
        <FlatList
        horizontal
        data={Eventavailable}   
        renderItem={({item}) => <View className="px-1">
            <EventCard item={item}/>
          </View>
         }  
        keyExtractor={item => item.id}   
        />
    </View>
  )
}

export default Events