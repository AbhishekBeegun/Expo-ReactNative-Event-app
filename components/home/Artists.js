import React from 'react'
import {Text,View,FlatList, ScrollView} from "react-native"
import ArtistCard from "../Artists/ArtistCard"

const Artists = () => {

    const artistavailable = [
        { id : "1",
          name : "Steve Aoki",
          img : 'https://res.cloudinary.com/dn29xlaeh/image/upload/q_75,w_3000/beatgig-prod/f4xxp9vkgqid4ucwa7wl',
          Rating : "5"
        },
        { id : "2",
          name : "MINDTRIX",
          img : 'https://res.cloudinary.com/dn29xlaeh/image/upload/q_75,w_3000/beatgig-prod/hwiahsaovryyjg1seej3',
          Rating : "4.5"
        },
        { id : "3",
          name : "Waka Floka Flame",
          img : 'https://res.cloudinary.com/dn29xlaeh/image/upload/q_75,w_3000/beatgig-live/fn2nh4utog4rcnlanjrq',
          Rating : "3"
        }
    ]

  return (
    <View>
        <Text>Artist Available-----</Text>

        <FlatList
         horizontal
         data={artistavailable}

         renderItem={({item}) => <View className="px-1">
            
         <ArtistCard item={item}/>

         </View>
         }
         
         keyExtractor={item => item.id}
        />

        <ScrollView>

        </ScrollView>
    </View>
  )
}

export default Artists