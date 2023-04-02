import React from 'react'
import { useState } from "react";
import { Stack,useRouter } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import { Text , View,SafeAreaView, ScrollView,FlatList,TouchableOpacity } from "react-native"
// import HeaderBanner from "../components/home/HeaderBanner";
import Artists from "../components/home/Artists";
import Events from "../components/home/Events";
import { ApolloClient, InMemoryCache, ApolloProvider ,HttpLink } from '@apollo/client';
import {GRAPHQL_CMS_API} from '@env'
import LocalArtists from "../components/home/LocalTalents";
import Greet from "../components/greeting/Greet";
import Setiing from "../components/Settings/Setiing"
import SearchQ from "../components/Search/SearchQ";

// Initialize Apollo Client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({uri: GRAPHQL_CMS_API})
});



const index = () => {

  const [showSearchBar, setshowSearchBar] = useState(false)
  function handlePress(){
    setshowSearchBar(!showSearchBar)
}
  return (
    <SafeAreaView>

      <Stack.Screen
      options={{
        headerTitle:"",
        headerStyle: {
          backgroundColor: 'black',
        },
        headerLeft :() => (
          <Greet />
        ),
        headerRight: () => (
          <>
          <View>
           <TouchableOpacity onPress={() => handlePress()}>
           {showSearchBar ? <Ionicons name="close" size={25} color="white" /> : <Ionicons name="search" size={25} color="white"/>}
           </TouchableOpacity>
          </View>
          <Setiing />
          </>
        )
      }}/>

      <ScrollView>
        {/* <HeaderBanner/> */}

        <ApolloProvider client={client}>

    
        {showSearchBar ? <SearchQ /> : <></>}
        <LocalArtists/>
        <Artists/>   

        <Events/> 


        </ApolloProvider>


      </ScrollView>



    </SafeAreaView>
  )
}

export default index