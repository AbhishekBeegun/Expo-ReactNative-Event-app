import React from 'react'
import { useState } from "react"
import { useEffect } from "react"
import { View,Text, Image, ScrollView ,ToastAndroid} from "react-native"
import QRCode from "react-native-qrcode-svg"
import AsyncStorage from '@react-native-async-storage/async-storage';

const Userticket = () => {
    const [Eventname, setEventname] = useState()
    const [pricedata, setpricedata] = useState()
    const [qtydata, setqtydata] = useState()
    const [ranID, setranID] = useState()

    useEffect(() => {
        const getData =  () => {
            AsyncStorage.getItem('uniqueid').then(data => {
                if (data !== null){
                  setranID(JSON.parse(data))
                }
                 })
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
            }
            getData()
        },[]);

        const id = `id : ${ranID} , Event :${Eventname} , price : ${pricedata} ,quantity : ${qtydata} , status : paid ,`
  return (
    <View className="h-[50vh] flex justify-center items-center bg-black">
    {ranID ? 
    
    <>   
     <View className="w-full flex justify-center items-center pt-10 bg-black">

<QRCode 
enableLinearGradient={true}
linearGradient={['rgb(229, 231, 235)','rgb(75, 85, 99)']}
size={250}
value={id}
color="red"
backgroundColor="transparent"
/>
     </View>

      <Text style={{fontFamily : "SPOTFONT"}} 
      className="text-xs text-white font-semibold uppercase text-center py-4 px-4">Ticket for : {Eventname}</Text>  
      </>

      : <Text style={{fontFamily : "SPOTFONT"}}  
      className="text-white uppercase">Buy a ticket to see it here</Text> }
      
  </View>
  )
}

export default Userticket