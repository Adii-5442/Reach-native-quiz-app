import { View, Text } from 'react-native'
import React from 'react'
import { TextInput , StyleSheet } from 'react-native-gesture-handler'
import { COLORS } from '../../constants/theme'

const FormInput = ({
    labelText='',
    placeholderText ='',
    onChangeText=null,
    value=null,
    ...more
}) => {
  return (
    <View style = {{width:'100%',marginBottom:20}}>
      <Text style={{color:"white"}}>{labelText}</Text>
      <TextInput 
      placeholderTextColor={'white'}
      style ={{
          padding: 10,
          borderColor: COLORS.white + '20',
          borderWidth:1,
          width:'100%',
          borderRadius:5,
          marginTop:10,
          color:'white',
      
      }}
      placeholder={placeholderText}
      onChangeText = {onChangeText}
      value={value}
      {...more}
      />
    </View>
  );
};

export default FormInput;