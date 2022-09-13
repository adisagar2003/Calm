import { View, Text,Image,TouchableHighlight } from 'react-native'
import React, { FunctionComponent } from 'react'

const Podcast:FunctionComponent = () => {
  return (
    <TouchableHighlight style={{padding:20, height: 120,borderRadius:40,backgroundColor:'#0080FF'}}>
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <Image source={{
        uri:'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80'
    }} style={{borderRadius:40,width:80,height:80}} />
    <View style={{flexDirection:'column',padding:20}}>
<Text>Cloudy Night</Text>
<Text>24 mins</Text>

    </View>
    <View style={{padding:35}}>
    <TouchableHighlight >
                <Text>Play</Text>
            </TouchableHighlight>

            </View>
    </View>
    </TouchableHighlight>
  )
}

export default Podcast