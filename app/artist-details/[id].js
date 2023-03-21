import React from 'react'
import { useRouter,useSearchParams } from "expo-router"
import { Text,View } from "react-native"
import Header from "../../components/Artists/components/Header"
import About from "../../components/Artists/components/About"
import Socials from "../../components/Artists/components/Socials"
import Display from "../../components/Artists/components/Display"

const ArtistDetails = () => {
  const params = useSearchParams()
  const router = useRouter()
  return (
    <View>
        <Text>
          {params.id}
            Artist Details
        </Text>

        <View>
          <Header/>
          <About/>
          <Socials/>
          <Display/>  
        </View>
    </View>
  )
}

export default ArtistDetails