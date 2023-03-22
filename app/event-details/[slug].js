import React from 'react'
import { useRouter,useSearchParams } from "expo-router"
import { Text,View,SafeAreaView,ScrollView } from "react-native"
import EventHeader from "../../components/Events/components/EventHeader"
import EventAbout from "../../components/Events/components/EventAbout"
import EventSocials from "../../components/Events/components/EventSocials"
import EventDisplay from "../../components/Events/components/EventDisplay"




const EventDetails = () => {

  const params = useSearchParams()
  const router = useRouter()

  return (
    <SafeAreaView>
      <ScrollView>


    <View>
        <Text>
        {params.slug}

            Event Details
        </Text>

        <View>
          <EventHeader/>
          <EventAbout/>
          <EventSocials/>
          <EventDisplay/>          
        </View>
    </View>

 
    </ScrollView>
    </SafeAreaView>
  )
}

export default EventDetails