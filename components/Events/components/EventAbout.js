import { useState } from "react";
import { Text,View,TouchableOpacity} from "react-native"
import { AntDesign } from '@expo/vector-icons';
import EventLocation from "./EventLocation";


const EventAbout = ({description,lat,long}) => {
  const [Showmore, setShowmore] = useState(true)

  function showmorebtn(){
    setShowmore(!Showmore);
  }
  return (
    <View className="px-4 py-4 bg-black">
    
    <Text className="text-lg font-semibold text-white">About</Text>
    {Showmore ? 
    <View className="w-full h-[8vh] overflow-hidden">
      <Text className="text-gray-400 text-xs">{description}</Text>
    </View> :
     <View className="w-full h-auto overflow-hidden">
       <Text className="text-gray-400 text-xs">{description}</Text>
     </View>}


    <TouchableOpacity onPress={() => showmorebtn()}>
          {Showmore ? <View className="flex flex-row items-center justify-center py-2 gap-2">
          <Text className="font-semibold text-white">Show more</Text>
          <AntDesign name="down" size={12} color="white" />
          </View>:
          <View className="flex flex-row items-center justify-center gap-2">
          <Text className="font-semibold text-white">Show less</Text>
          <AntDesign name="up" size={12} color="white" />
          </View>}
    </TouchableOpacity>

    <View className="w-full pt-4">
    <View className="px-4 py-2 bg-gray-800 rounded-t-lg">
          <Text className="font-semibold text-white">
            Event location
          </Text>
          <Text className="text-slate-600 text-xs">Click on the red circle for direction</Text>
        </View>
      <EventLocation lat={lat} long={long}/>

    </View>

    
  </View>
  )
}

export default EventAbout