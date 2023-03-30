import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider ,HttpLink } from '@apollo/client';
import {GRAPHQL_CMS_API} from '@env'
import { Text } from "react-native";

// Initialize Apollo Client
const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({uri: GRAPHQL_CMS_API})
  });

  
  const search = () =>{
    
    return(
        <View>

        <Text>
            Search page
        </Text>
        </View>
    )
  }