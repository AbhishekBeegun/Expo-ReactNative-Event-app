import React from 'react'
import { Text,View,ScrollView, ActivityIndicator} from "react-native"
import Header from "./Header"
import About from "./About"
import Socials from "./Socials"
import Display from "./Display"
import { useQuery } from "@apollo/client"
import { ARTIST_DETAILS } from "../../../app/GQLQueries"

const ArtistDetails = ({params}) => {

    slug = params

    const {data} = useQuery(ARTIST_DETAILS,{
        variables : {slug}
    })

  return (
    <ScrollView>
    
        {data && data.artist ? 
        <View className="bg-black">
        <Header
        coverPhoto={data.artist.coverPhoto}
        MainPhoto={data.artist.mainPhoto}
        name={data.artist.name}
        location={data.artist.location}
        rating={data.artist.rating}/>

        <About artistDescription={data.artist.artistDescription}
        />

        <Socials instagram={data.artist.socialLinks}
        ratings={data.artist.rating}
        />
        <Display
        gridfoto={data.artist.gridPhoto}
        videoLinks={data.artist.videoLinks}
        /> 
        </View>       
         :
         <ActivityIndicator size={50}>

         </ActivityIndicator>
        
         } 
    



  </ScrollView>
  )
}

export default ArtistDetails