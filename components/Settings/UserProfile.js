import React from 'react'
import {View, Text,Image } from "react-native"

const UserProfile = () => {
  
  return (
    
  <View className="flex flex-row h-[100px] w-full items-center justify-center bg-black">

{/*user image */}
<View className="h-[80px] w-[80px]">
 <Image
 className="h-full w-full rounded-full" 
 source={{
  uri : "https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/8rFC4L3lRimJAvgkeERJ"
 }}/>
</View>

<View className="flex flex-col justify-evenly px-8">
{/* user name */}
 <View>
  <Text className="text-xl font-semibold text-white">User Name</Text>
 </View>
</View>

</View>
  
  )
}

export default UserProfile