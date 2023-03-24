import React from 'react'
import { Stack,useRouter } from "expo-router";
import { Text , View,SafeAreaView, ScrollView,FlatList } from "react-native"
import HeaderBanner from "../components/home/HeaderBanner";
import Artists from "../components/home/Artists";
import Events from "../components/home/Events";
import { ApolloClient, InMemoryCache, ApolloProvider ,HttpLink } from '@apollo/client';
import {GRAPHQL_CMS_API} from '@env'

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
        headerTitle:" Event App",
        headerTransparent:true        
      }}/>

      <ScrollView>
        <HeaderBanner/>

        <ApolloProvider client={client}>


        <Artists/>   

        <Events/> 


        </ApolloProvider>


      </ScrollView>


    </SafeAreaView>
  )
}

export default index