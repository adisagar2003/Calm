import { View, Text,Image,ImageBackground,StyleSheet,TouchableOpacity } from 'react-native';
import { FunctionComponent,useEffect } from 'react';
import styled from 'styled-components/native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Welcome:FunctionComponent = ({navigation}) => {
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    
    prepare();
  }, []);
//FONT-------------------SECTION---------------------------------------------------------------------
//FONT-------------------SECTION---------------------------------------------------------------------
//FONT-------------------SECTION---------------------------------------------------------------------

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
   
    
  
    `

    const styles = StyleSheet.create({
        img: {
          height: windowHeight,
          width: windowWidth,
     
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
  <StartButton><Text style={{color: 'white',top:50,fontSize:20,position:'relative'}} onPress={()=>navigation.navigate("Dashboard")}>Get started</Text></StartButton>
</ButtonContainer>

        </ImageBackground>
</WelcomeBlock>
  )
}

export default Welcome
