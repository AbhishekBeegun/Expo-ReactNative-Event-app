import React from 'react'
import { Text,View,ScrollView, ActivityIndicator} from "react-native"
import Header from "./EventHeader"
import About from "./EventAbout"
import Prices from "./EventPrices"
import Display from "./EventDisplay"
import { useQuery } from "@apollo/client"
import { EVENT_DETAILS } from "../../../app/GQLQueries"



const EventINDetails = ({params}) => {
    
    slug = params

    const {data} = useQuery(EVENT_DETAILS,{
        variables : {slug}
    })

  return (
    <ScrollView>
    
    {data && data.event ? 
    <View>

    <Header poster={data.event.poster}
    title={data.event.title}
    location={data.event.locationTitle}
    date={data.event.date}/>



    <About description={data.event.eventdescription}
    lat={data.event.location.latitude}
    long={data.event.location.longitude}
    />

    
    <Prices nrml={data.event.nmltickets}
    vip={data.event.viptickets}
    elite={data.event.abovevip}/>

    <Display artist={data.event.artist}/> 

    </View>       
     :
     <View className="flex justify-center items-center bg-black h-screen w-screen">
     <ActivityIndicator size={60}>

     </ActivityIndicator>
     </View>
    
     } 




</ScrollView>
  )
}

export default EventINDetails