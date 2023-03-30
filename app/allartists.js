import React from 'react'
import { SafeAreaView ,Text} from "react-native"
import { Stack } from "expo-router";
import { ApolloClient, InMemoryCache, ApolloProvider ,HttpLink } from '@apollo/client';
import {GRAPHQL_CMS_API} from '@env'
import Allartist from "../components/AllArtists/Allartist";
import Backbtn from "../components/Basiclayout/Backbtn";

// Initialize Apollo Client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({uri: GRAPHQL_CMS_API})
});


const Allartists = () => {

  return (
    <SafeAreaView>
        <Stack.Screen
        options={{
        headerTitle:"",
        headerTransparent : true,
        headerLeft :  () => (
            <Backbtn/>
        )   
      }}/>
        <ApolloProvider client={client}>
        

            <Allartist />
        </ApolloProvider>

    </SafeAreaView>
  )
}

export default Allartists