import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { FunctionComponent } from 'react';
import { useFonts } from 'expo-font';
const Dashboard:FunctionComponent = () => {
    const [fontsLoaded] = useFonts({
        'Cursive-heading': require('../fonts/font-bold.ttf'),
      });


  return (
    <View>
<ImageBackground
        source={{
          uri: 
'https://res.cloudinary.com/dvdwmixyk/image/upload/v1662816984/Adventure-minimalistic-artwork_oozetc.png',
        }}
        resizeMode="cover"
    style={{width:199,height:500,padding:40}} blurRadius={3}
    > 
    <View>

<Text style={{fontWeight:600,color:'white',fontSize:29}}>What Brings you </Text>


<View style={{flexDirection:'row',gap:9,left:30}}>


    <Text style={{fontWeight:400,color:'white',fontSize:20}}>to</Text>

<Text style={{fontWeight:400,color:'white',fontFamily:'Cursive-heading',fontSize:40}}>Calm?</Text>

</View>

    </View>

{/*

Cards to show the shit


*/}
    </ImageBackground>

    </View>
  )
}

export default Dashboard