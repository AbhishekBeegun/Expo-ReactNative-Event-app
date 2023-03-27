import React from 'react'
import { useRouter,useSearchParams,Stack } from "expo-router"
import { SafeAreaView } from "react-native"
import EventINDetails from "../../components/Events/components/EventINDetails";
import { ApolloClient, InMemoryCache, ApolloProvider ,HttpLink } from '@apollo/client';
import {GRAPHQL_CMS_API} from '@env'


// Initialize Apollo Client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({uri: GRAPHQL_CMS_API})
});


const EventDetails = () => {

  const params = useSearchParams()
  const router = useRouter()

  return (
    <SafeAreaView>

      <Stack.Screen
      options={{
        headerTitle:"Event details",
        headerTransparent:true        
      }}/>
      <ApolloProvider client={client}>
      <EventINDetails params={params.slug}/>
      </ApolloProvider>

    </SafeAreaView>
  )
}

export default EventDetails