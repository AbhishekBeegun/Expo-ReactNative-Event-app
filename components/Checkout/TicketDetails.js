import React from 'react'
import { View,Text, SafeAreaView, Image, ScrollView } from "react-native"


const TicketDetails = () => {
  return (
    <View className="flex flex-col justify-between items-center h-screen w-screen">


    {/* <Image source={{uri : "https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/yTPa26KqT92rH97XoiD3"}}
    className="w-full h-full opacity-40" /> */}
     {/* title and location */}
    <View>

      <Text className="text-2xl text-red-500">Afro love by tayc</Text>
      <Text>Stade Gremondo bamboo</Text>

    </View>


    {/*date */}
    <View>
      <Text>2023 / 04 / 18 </Text>
    </View>


    {/* id */}

    <View>
      <Text className="text-xs">Order Number</Text>

      <Text>eugduycfeatfduyaedea5146985e456a1de458</Text>

    </View>

    {/* QR CODE */}
    <View>
    {/* npm i react-native-qrcode-svg */}
    </View>


  </View>
  )
}

export default TicketDetails