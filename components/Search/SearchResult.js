import React from 'react'
import { View, Text,FlatList,ActivityIndicator } from "react-native"
import { useQuery } from "@apollo/client";
import { SEARCHARTIST_QUERY } from "../../app/GQLQueries";
import ArtistCard from "../Artists/ArtistCard";


const SearchResult = ({params}) => {

    searchinput = params

    const {data} = useQuery(SEARCHARTIST_QUERY,{
        variables : {searchinput}
    })

  return (
    <View className="bg-black h-[110vh] flex flex-col items-center pt-14">
        <Text style={{fontFamily : "SPOTFONT"}}
        className="text-white font-semibold text-xl">Result for {params}</Text>
    
    {data && data.artists ?   

    <FlatList
     numColumns={2}

     data={data.artists}

    renderItem={({item}) => 
 
    <View className="px-3 py-2">
    
     <ArtistCard item={item}/>

    </View>
    }
 
    keyExtractor={item => item.slug}
    /> 
    :
    <View className="h-[110vh] w-screen">
     <ActivityIndicator size={50}>
     </ActivityIndicator>
    </View>
    }


    </View>
  )
}

export default SearchResult