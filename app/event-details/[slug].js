import React from 'react'
import { Text,View } from "react-native"
import EventHeader from "../../components/Events/components/EventHeader"
import EventAbout from "../../components/Events/components/EventAbout"
import EventSocials from "../../components/Events/components/EventSocials"
import EventDisplay from "../../components/Events/components/EventDisplay"




const EventDetails = () => {
  return (
    <View>
        <Text>
            Event Details
        </Text>

        <View>
          <EventHeader/>
          <EventAbout/>
          <EventSocials/>
          <EventDisplay/>          
        </View>
    </View>
  )
}

export default EventDetails