import { View, Text, ImageBackground,ScrollView } from 'react-native'
import React from 'react'
import { FunctionComponent,componentWillMount } from 'react';
import { useFonts } from 'expo-font';
import { Dimensions } from 'react-native';
import Podcast from '../components/Podcast';
import { AppLoading, Font } from 'expo'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const podcastHeight = Dimensions.get('window').height-200;
const podcastWidth = Dimensions.get('window').width-80;


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
    style={{width:windowWidth,height:windowHeight,padding:40}} blurRadius={31}
    > 
    <View style={{padding:20}}>

<Text style={{color:'white',fontSize:29}}>What Brings you </Text>


<View style={{flexDirection:'row',gap:9,left:30}}>


    <Text style={{fontWeight:400,color:'white',fontSize:20}}>to</Text>

<Text style={{fontWeight:400,color:'white',fontFamily:'Cursive-heading',fontSize:40}}>Calm?</Text>

</View>

    </View>

{/*
=================
Cards to show
=================
==================
*/}
<ScrollView>
<View style={{flexDirection:'column', gap:20,borderRadius:4,width:podcastWidth,height:podcastHeight,padding:10}}>

<Podcast />
<Podcast />
<Podcast />
<Podcast />
<Podcast />
<Podcast />
<Podcast />
<Podcast />
<Podcast />
</View>

</ScrollView>
{/*
------------------------------------
Cards to show END
-----------------------------------
------------------------------------
*/}

    </ImageBackground>

    </View>
  )
}

export default Dashboard