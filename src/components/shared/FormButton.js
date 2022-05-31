import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { COLORS } from '../../constants/theme';

const FormButton = ({
    labelText='',
    handleOnPress=null,
    style,
    isPrimary=true,
    ...more
}) => {
  return (
      <TouchableOpacity style={{
          paddingVertical:10,
          backgroundColor:isPrimary ?COLORS.primary :COLORS.white,
          borderWidth:1,
          borderRadius:25,
          borderColor:COLORS.primary,
          ...style,
      }}

      activeOpacity = {0.9}
      onPress = {handleOnPress}
      {...more}> 
          <Text style={{
              paddingHorizontal:30,
              textAlign:'center',
              color:isPrimary ? COLORS.white : COLORS.primary,
          }}>{labelText}</Text>
      </TouchableOpacity>
    
  );
};

export default FormButton