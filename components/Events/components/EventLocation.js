import React from 'react'
import { useState } from "react";
import { View,Text } from "react-native"
import { Marker } from "react-native-maps";
import MapView from "react-native-maps";

const EventLocation = ({lat,long}) => {
    const [mapRegion] = useState({
        latitude: lat,
        longitude: long,
        latitudeDelta: 0.0522,
        longitudeDelta: 0.0121,
      });
      
  return (
    <View className="rounded-lg">
        <MapView className="w-full h-[300px]"
        region={mapRegion}>       
        <Marker coordinate={mapRegion} title='Event Location'>
            <View className="w-8 h-8 bg-black rounded-full flex flex-row justify-center items-center">
              <Text className="text-xs text-white font-semibold">Here</Text> 
            </View>              
        </Marker>
        </MapView>

    </View>
  )
}

export default EventLocation