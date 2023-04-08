import React from 'react'
import { useState } from "react"
import { useEffect } from "react"
import { View,Text, Image, ScrollView ,ToastAndroid} from "react-native"
import QRCode from "react-native-qrcode-svg"
import AsyncStorage from '@react-native-async-storage/async-storage';


const TicketDetails = () => {
  const [Eventname, setEventname] = useState()
  const [pricedata, setpricedata] = useState()
  const [qtydata, setqtydata] = useState()
  const [ranID, setranID] = useState()



  useEffect(() => {
    const getData =  () => {
      AsyncStorage.getItem('Eventname').then(data => {
        if (data !== null){
          setEventname(JSON.parse(data))
        }
       })
      
         AsyncStorage.getItem('Qty').then(data => {
          if (data !== null){
            setqtydata(JSON.parse(data))
          }
         })
         AsyncStorage.getItem('price').then(data => {
          if (data !== null){
            setpricedata(JSON.parse(data))
          }
         })

         console.log("price is" ,pricedata)
        console.log("qty is" ,qtydata)
    };
   

    setranID(randomId(5))  
    getData();
    
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('uniqueid', JSON.stringify(ranID) )
      console.log(ranID)

  }, [ranID])
  

  const randomId = function(length = 6) {
    return Math.random().toString(36).substring(2, length+2);
  };

    const id = `id : ${ranID} , Event :${Eventname} , price : ${pricedata} ,quantity : ${qtydata} , status : paid ,`
  return (
    <View className="flex flex-col justify-between items-center h-[120vh] w-screen pt-14">
        <Image className="w-full h-full absolute" 
      source={{uri : "https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/jAPL6nNfQ16HAIMLExE9"}} />
     {/* title and location */}
    
    <View className="flex flex-col items-center gap-2 py-8 px-5">
    <Text style={{fontFamily : "SPOTFONT"}} 
      className="text-xs text-white font-semibold uppercase">Unique Id : {ranID}</Text>
      <Text style={{fontFamily : "SPOTFONT"}} 
      className="text-xl text-white font-semibold uppercase">{Eventname}</Text>
            <Text style={{fontFamily : "SPOTFONT"}} 
      className="text-sm text-white font-semibold uppercase">Rs {pricedata} per ticket</Text>
            <Text style={{fontFamily : "SPOTFONT"}} 
      className="text-sm text-white font-semibold uppercase">Quantity : {qtydata}</Text>
                  <Text style={{fontFamily : "SPOTFONT"}} 
      className="text-xs text-white font-semibold uppercase">Do not Exit This screen until you screenshot it.</Text>
       <Text style={{fontFamily : "SPOTFONT"}} 
      className="text-xs text-slate-500">Do not share this with anyone. Kindly present this at the entrance.</Text>



    </View>


    {/* id */}

    {/* <View>
      <Text className="text-xs">Order Number</Text>

      <Text>{id}</Text>

    </View> */}

    {/* QR CODE */}
    <View className="w-full h-auto items-center mb-48">

        <QRCode 
        enableLinearGradient={true}
        linearGradient={['rgb(229, 231, 235)','rgb(75, 85, 99)']}
        size={300}
        value={id}
        color="red"
        backgroundColor="transparent"
        />
    </View>


  </View>
  )
}

export default TicketDetails