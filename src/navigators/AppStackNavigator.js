import { View, Text } from 'react-native'
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens';
import { CreateQuizScreen } from '../screens';
import { AddQuestionScreen } from '../screens';

const Stack = createStackNavigator();

const AppStackNavigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown:false,
            
        }}>
        <Stack.Screen name ="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="CreateQuizScreen" component={CreateQuizScreen}/>
        <Stack.Screen name="AddQuestionScreen" component={AddQuestionScreen}/>


    </Stack.Navigator>
  )
}

export default AppStackNavigator