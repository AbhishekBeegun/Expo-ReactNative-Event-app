import { useState } from "react";
import { Text,View,TouchableOpacity,Modal} from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import EventLocation from "./EventLocation";


const EventAbout = ({description,lat,long,nrml,vip,elite}) => {
  const [Showmore, setShowmore] = useState(true)
  const [modalVisible, setModalVisible] = useState(false);

  const [prices] = useState([nrml,vip,elite])

  const qty = [1 , 2 , 3 , 4 , 5 ]

  const total = 600 * 2 

  function selectedPrice(price){
    console.log(price)
  }
  function selectedQTY(qty){
    console.log(qty)
  }


  function showmorebtn(){
    setShowmore(!Showmore);
  }
  return (
    <View className="px-2 bg-black">
        <View className="flex flex-row justify-center py-4 gap-8">
{/* modal for selectedf tickets */}
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View className="flex flex-col justify-center items-center h-screen w-screen">
          <View className="bg-black h-64 w-[95vw] rounded-lg">

            <Text className="text-white font-semibold py-2 px-2">Choose your ticket</Text>
            
            {/* prices of tickets */}
            <View className="flex flex-row flex-wrap gap-4">
            {prices.map( (item) => (
            
            <TouchableOpacity onPress={() => selectedPrice(item)} 
            key={item} 
            className="border border-white py-2 px-6 rounded-full items-center">
            <Text className="text-white">Rs {item}</Text>
            </TouchableOpacity>
            ) )}
            </View>

              <Text className="text-white text-lg">X</Text>

              
            {/* QTY of tickets */}

            <View className="flex flex-row justify-evenly gap-4">            
            {qty.map( (item) => (
            <TouchableOpacity onPress={() => selectedQTY(item)}
            key={item} 
            className="border border-white py-2 px-4 rounded-full items-center">
            <Text className="text-white">{item}</Text>
            </TouchableOpacity>
            ) )}
            </View>


            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <Text className="text-white" >close btn!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>








         
         <TouchableOpacity>
         <View className="border border-white px-8 py-2 rounded-full">
           <Ionicons name="ios-heart" size={20} color="red" />
         </View>
         </TouchableOpacity>

         <TouchableOpacity
         onPress={() => setModalVisible(!modalVisible)}>
          <View className="bg-yellow-300 px-8 py-2 rounded-full">
             <Text className="text-black font-semibold">Buy ticket</Text>              
          </View>
         </TouchableOpacity>
       </View>
    
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