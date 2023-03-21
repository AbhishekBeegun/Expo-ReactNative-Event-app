import React from 'react'
import { useRouter,useSearchParams } from "expo-router"
import { Text,View,SafeAreaView,ScrollView } from "react-native"
import Header from "../../components/Artists/components/Header"
import About from "../../components/Artists/components/About"
import Socials from "../../components/Artists/components/Socials"
import Display from "../../components/Artists/components/Display"
import Footer from "../../components/Basiclayout/Footer"

const ArtistDetails = () => {
  const params = useSearchParams()
  const router = useRouter()
  return (
    <SafeAreaView>
      <ScrollView>
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


    <Footer/>
    </ScrollView>
    </SafeAreaView>
  )
}

export default ArtistDetails