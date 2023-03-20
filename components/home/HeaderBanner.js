import React from 'react'
import { Text,View,TouchableOpacity } from "react-native"

const HeaderBanner = () => {
  return (
    <View>
        <Text>Start booking artists.</Text>
        <Text>BeatGig is the easiest 
          way to book talent for private
         parties, colleges, bars, weddings
          & more.
        </Text>

        <TouchableOpacity>
         <View style={{ backgroundColor: 'white',width:'8rem' }}>
          <Text>Sign up</Text>
         </View>
        </TouchableOpacity>


    </View>
  )
}

export default HeaderBanner