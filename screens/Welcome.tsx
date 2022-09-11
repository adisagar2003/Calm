import { View, Text,Image,ImageBackground,StyleSheet,TouchableOpacity } from 'react-native';
import { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import { useFonts } from 'expo-font';

const Welcome:FunctionComponent = ({navigation}) => {

//FONT-------------------SECTION---------------------------------------------------------------------
//FONT-------------------SECTION---------------------------------------------------------------------
//FONT-------------------SECTION---------------------------------------------------------------------
const [fontsLoaded] = useFonts({
  'Cursive-heading': require('../fonts/font-bold.ttf'),
});
//FONT-------------------SECTION---------------------------------------------------------------------
//FONT-------------------SECTION---------------------------------------------------------------------
//FONT-------------------SECTION---------------------------------------------------------------------


//STYLES GO HERE----------------------------------------------------------------------------------------------------------
//STYLES GO HERE----------------------------------------------------------------------------------------------------------
//STYLES GO HERE----------------------------------------------------------------------------------------------------------
//STYLES GO HERE----------------------------------------------------------------------------------------------------------
//STYLES GO HERE----------------------------------------------------------------------------------------------------------

  const ButtonContainer = styled.View`
  position: absolute;
  bottom:170px;
  left:25%;
  display: flex;
  justify-content: center;
  align-items: center;
padding: 5px;
border-radius: 25px;
background:#552d58;

  `

  const StartButton = styled.TouchableOpacity`
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:25px;
    background-color: darkpurple;

    color:"#fff";
    bottom: 50px;
    padding: 10px;


  `

    const WelcomeBlock  = styled.View`
   
    position:absolute;
    min-width: "100vw";
    max-width:"100vw"
    min-height:"100vh";
    max-width:"100vh";
    background-color: #4B5563;
  
    `

    const styles = StyleSheet.create({
        img: {
          height: 100,
          width: 200,
     
        },
        input: {
          height: 40,
          margin: 12,
          borderWidth: 2,
          padding: 10,
        },
        heading:{
            position:'absolute',
            left: '35%',
            top:'10%',
            fontSize:83,
            color: 'white',
            fontFamily:'Cursive-heading',

        }
      });

 //STYLES End HERE----------------------------------------------------------------------------------------------------------
//STYLES End HERE----------------------------------------------------------------------------------------------------------
//STYLES End HERE----------------------------------------------------------------------------------------------------------
//STYLES End HERE----------------------------------------------------------------------------------------------------------
//STYLES End HERE----------------------------------------------------------------------------------------------------------   
  return (
<WelcomeBlock >


<ImageBackground
        source={{
          uri: 
'https://res.cloudinary.com/dvdwmixyk/image/upload/v1662816984/Adventure-minimalistic-artwork_oozetc.png',
        }}
        resizeMode="cover"
        style={styles.img}>
        
<Text style={styles.heading}>
Calm
</Text>


<ButtonContainer>
  <StartButton><Text style={{color: 'white',top:50,fontSize:20,position:'relative', fontWeight:500,fontFamily:'sans-serif'}} onPress={()=>navigation.navigate("")}>Get started</Text></StartButton>
</ButtonContainer>

        </ImageBackground>
</WelcomeBlock>
  )
}

export default Welcome