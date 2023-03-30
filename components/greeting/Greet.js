import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import { View,Text } from "react-native"

const Greet = () => {
    var myDate = new Date();
    var hrs = myDate.getHours();

    const [greet, setgreet] = useState('Hello')

useEffect(() => {
    if (hrs < 12)
    setgreet( 'Good Morning');
  else if (hrs >= 12 && hrs <= 17)
  setgreet( 'Good Afternoon');
  else if (hrs >= 17 && hrs <= 24)
  setgreet( 'Good Evening');
}, [])


  return (
    <View>
    <Text className="font-semibold text-2xl text-white px-2">{greet}</Text>
    </View>
  )
}

export default Greet