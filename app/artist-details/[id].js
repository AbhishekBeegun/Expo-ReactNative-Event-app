import React from 'react'
import { useRouter,useSearchParams,Stack } from "expo-router"
import { Text,View,SafeAreaView,ScrollView } from "react-native"
import Header from "../../components/Artists/components/Header"
import About from "../../components/Artists/components/About"
import Socials from "../../components/Artists/components/Socials"
import Display from "../../components/Artists/components/Display"

const ArtistDetails = () => {
  const params = useSearchParams()
  const router = useRouter()
  return (
    <SafeAreaView>

      <ScrollView>
      <View>
          <Header/>
          <About/>
          <Socials/>
          <Display/>  
    </View>


 
    </ScrollView>
    </SafeAreaView>
  )
}

export default ArtistDetails