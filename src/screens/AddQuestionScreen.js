import { View, Text } from 'react-native'
import React from 'react'

const AddQuestionScreen = () => {
  return (
    <View style={{
        backgroundColor:'#000',

        flex:1,
    }}>
      <Text style={{
          color:"white",
          alignSelf:'center',
          marginVertical:"60%",
          fontWeight:'bold',
          fontSize:52,
          borderBottomWidth:4,
          borderColor:"white",

      }}>DONE FOR NOW</Text>
      <Text style={{
          color:"blue",
          alignSelf:'center',
          fontSize:30,
          marginVertical:2}}>
          Made By DARKFIRE
      </Text>

    </View>
    
  )
}

export default AddQuestionScreen