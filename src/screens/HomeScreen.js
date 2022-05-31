import { View, Text } from 'react-native'
import React from 'react'
import { signOut } from '../utils/auth'
import FormButton from '../components/shared/FormButton';


const HomeScreen = ({navigation}) => {
  return (
    <View style={{backgroundColor:"#000",flex:1}}>
      <Text style={{color:"white",padding:20,fontSize:15}}>HomeScreen</Text>
      <Text style={{
        color:"white",
        padding:30,
        fontSize:15,

      }} onPress={signOut}>Logout</Text>
      <FormButton labelText='Create Quiz'
       handleOnPress={ () => {
         navigation.navigate('CreateQuizScreen');

      }}
      />
    </View>
  );
};

export default HomeScreen;