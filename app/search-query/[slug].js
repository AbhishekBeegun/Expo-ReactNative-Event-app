import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider ,HttpLink } from '@apollo/client';
import {Stack} from "expo-router";
import Backbtn from "../../components/Basiclayout/Backbtn";
import {GRAPHQL_CMS_API} from '@env'
import { View , Text } from "react-native";
import { SafeAreaView } from "react-native";
import { useSearchParams } from "expo-router";
import SearchResult from "../../components/Search/SearchResult";

// Initialize Apollo Client
const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({uri: GRAPHQL_CMS_API})
  });

  
  const Search = () => {
  

    const params = useSearchParams()    
    return(
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
          <SearchResult params={params.slug}/>
          
        </ApolloProvider>


       
      </SafeAreaView>
    )
  }

  export default Search