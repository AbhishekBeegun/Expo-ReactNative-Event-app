import React from 'react'
import { useRouter,useSearchParams,Stack } from "expo-router"
import { SafeAreaView,Text } from "react-native";
import ArtistDetails from "../../components/Artists/components/ArtistDetails";
import { ApolloClient, InMemoryCache, ApolloProvider ,HttpLink } from '@apollo/client';
import {GRAPHQL_CMS_API} from '@env'


// Initialize Apollo Client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({uri: GRAPHQL_CMS_API})
});

const ArtistDetail = () => {

  const params = useSearchParams()
  const router = useRouter()

  return (
    <SafeAreaView>

      <Stack.Screen
      options={{
        headerTitle:"Artist details",
        headerTransparent:true        
      }}/>
      <ApolloProvider client={client}>
      <ArtistDetails params={params.id}/>
      </ApolloProvider>

    </SafeAreaView>
  )
}

export default ArtistDetail