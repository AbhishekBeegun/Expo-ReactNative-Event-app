import React from 'react'
import { Stack,useRouter } from "expo-router";
import { Text , View,SafeAreaView, ScrollView,FlatList } from "react-native"
// import HeaderBanner from "../components/home/HeaderBanner";
import Artists from "../components/home/Artists";
import Events from "../components/home/Events";
import { ApolloClient, InMemoryCache, ApolloProvider ,HttpLink } from '@apollo/client';
import {GRAPHQL_CMS_API} from '@env'
import LocalArtists from "../components/home/LocalTalents";
import Greet from "../components/greeting/Greet";
import Setiing from "../components/Settings/Setiing";

// Initialize Apollo Client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({uri: GRAPHQL_CMS_API})
});



const index = () => {
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
          <Setiing/>
        )
      }}/>

      <ScrollView>
        {/* <HeaderBanner/> */}

        <ApolloProvider client={client}>

        <LocalArtists/>
        <Artists/>   

        <Events/> 


        </ApolloProvider>


      </ScrollView>


    </SafeAreaView>
  )
}

export default index