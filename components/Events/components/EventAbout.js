import { useState } from "react";
import { Text,View,TouchableOpacity,Modal,ToastAndroid} from "react-native"
import { useRouter } from "expo-router"
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import EventLocation from "./EventLocation";
import AsyncStorage from '@react-native-async-storage/async-storage';



const EventAbout = ({title,description,lat,long,nrml,vip,elite}) => {

  const router = useRouter()

  function showToast() {
    ToastAndroid.show('Wishlist Not Setup', ToastAndroid.SHORT);
  }
  const [Showmore, setShowmore] = useState(true)
  const [modalVisible, setModalVisible] = useState(false);

  const [prices] = useState([nrml,vip,elite])

  const qty = [1 , 2 , 3 , 4 , 5 ]

  const [selectPrice, setselectPrice] = useState()
  const [selectQTY, setselectQTY] = useState()
  const [IsPriceSelected, setIsPriceSelected] = useState(false)
  const [IsQtySelected, setIsQtySelected] = useState(false)


  

  function selectedPrice(price){
    console.log(price)
    setselectPrice(price)
    setIsPriceSelected(true)
    AsyncStorage.setItem('price',JSON.stringify( price) )
    ToastAndroid.show('PRice added to localstorage', ToastAndroid.SHORT);

  }
  function selectedQTY(qty){
    console.log(qty)
    setselectQTY(qty)
    setIsQtySelected(true)
    AsyncStorage.setItem('Qty', JSON.stringify(qty) )
    ToastAndroid.show('Qty added to localstorage', ToastAndroid.SHORT);
 
  }

  const total = selectPrice * selectQTY


  function showmorebtn(){
    setShowmore(!Showmore);
  }


  const handleCheckout = (title) => {

    AsyncStorage.setItem('Eventname', JSON.stringify(title) )

    router.push("/checkout");  
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

          {/* inside modal */}
          <View className="bg-black flex flex-col justify-between h-[350px] w-[95vw] rounded-lg py-4">

            <View className="flex flex-row justify-between items-center px-4  ">
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <Ionicons name="ios-arrow-back-circle-sharp" size={35} color="white" />
            </TouchableOpacity>

            <Text style={{fontFamily : "SPOTFONT"}} 
            className="text-white font-semibold py-2 px-2">Choose your tickets</Text>
            </View>

            
            {/* prices of tickets */}

            <View className="flex flex-col gap-3">           
            <View className="flex flex-row gap-2 justify-evenly">
            {prices.map( (item) => (
            
            <TouchableOpacity
             onPress={() => selectedPrice(item)} 
            key={item} 
            className="bg-white py-2 px-4 rounded-full items-center active:bg-yellow-200">
            <Text style={{fontFamily : "SPOTFONT"}} 
            className="text-black font-semibold">Rs {item}</Text>
            </TouchableOpacity>
            ) )}
            </View>
            <Text style={{fontFamily : "SPOTFONT"}} 
            className="text-white text-xs font-semibold py-2 px-4">Selected Ticket : Rs {selectPrice} </Text>

            </View>

              
            {/* QTY of tickets */}

            <View className="flex flex-col gap-3">

            <View className="flex flex-row justify-evenly gap-2">            
            {qty.map( (item) => (
            <TouchableOpacity 
            onPress={() => selectedQTY(item)}
            key={item} 
            className="border border-white py-2 px-4 rounded-lg items-center active:bg-white">
            <Text style={{fontFamily : "SPOTFONT"}} 
            className="text-white">{item}</Text>
            </TouchableOpacity>
            ) )}
            </View>

            <Text style={{fontFamily : "SPOTFONT"}} 
            className="text-white text-xs font-semibold py-2 px-4">Quantity : {selectQTY} </Text>


            </View>

            {/* total and checkouit */}

            {IsPriceSelected && IsQtySelected ?
            <View className="flex flex-row justify-between px-4 items-center">
            <Text style={{fontFamily : "SPOTFONT"}} 
            className="text-white text-xs font-semibold">TOTAL : Rs {total}</Text>
            <TouchableOpacity onPress={() => handleCheckout(title)}>
            <Ionicons name="arrow-forward-circle-sharp" size={40} color="yellow" />
            </TouchableOpacity>
            </View>
            : <Text style={{fontFamily : "SPOTFONT"}} 
            className="text-white text-xs font-semibold uppercase m-auto">Select Both options above to continue</Text>         
            }
          </View>
        </View>
      </Modal>
         
         <TouchableOpacity onPress={() => showToast()}>
         <View className="px-3 py-2 rounded-lg">
           <Ionicons name="ios-heart" size={25} color="red" />
         </View>
         </TouchableOpacity>

         <TouchableOpacity
         onPress={() => setModalVisible(!modalVisible)}>
          <View className="bg-white px-20 py-3 rounded-full">
             <Text style={{fontFamily : "SPOTFONT"}} 
             className="text-black font-semibold">Buy ticket</Text>              
          </View>
         </TouchableOpacity>
       </View>
    
    <Text style={{fontFamily : "SPOTFONT"}} 
    className="text-lg font-semibold text-white py-2">About</Text>
    {Showmore ? 
    <View className="w-full h-[10vh] overflow-hidden">
      <Text style={{fontFamily : "SPOTFONT"}} 
      className="text-gray-500 text-xs">{description}</Text>
    </View> :
     <View className="w-full h-auto overflow-hidden">
       <Text style={{fontFamily : "SPOTFONT"}}
        className="text-gray-500 text-xs">{description}</Text>
     </View>}


    <TouchableOpacity onPress={() => showmorebtn()}>
          {Showmore ? <View className="flex flex-row items-center justify-center py-2 gap-2">
          <Text style={{fontFamily : "SPOTFONT"}} 
          className="font-semibold text-white">Show more</Text>
          <AntDesign name="down" size={12} color="white" />
          </View>:
          <View className="flex flex-row items-center justify-center gap-2">
          <Text style={{fontFamily : "SPOTFONT"}} 
          className="font-semibold text-white">Show less</Text>
          <AntDesign name="up" size={12} color="white" />
          </View>}
    </TouchableOpacity>

    <View className="w-full pt-4">
    <View className="px-4 py-2 bg-white rounded-t-lg">
          <Text style={{fontFamily : "SPOTFONT"}} 
          className="font-semibold text-black">
            Event location
          </Text>
          <Text style={{fontFamily : "SPOTFONT"}} 
          className="text-slate-600 text-xs">Click on the red circle for direction</Text>
        </View>
      {/* <EventLocation lat={lat} long={long}/> */}

    </View>

    
  </View>
  )
}

export default EventAbout