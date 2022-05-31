import { View, Text,Alert } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../constants/theme'
import FormInput from '../components/shared/FormInput'
import FormButton from '../components/shared/FormButton'
import { signUp } from '../utils/auth'

const SignUpScreen = ({navigation}) => {

  const [email,setEmail] = useState('')
  const [password,setpassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')

  const handleOnSubmit=() =>{
    if(email!='' && confirmPassword!=""){
      if(password==confirmPassword){
        signUp(email,password);
      }else{
        Alert.alert('password did not match');
      }
    }
  };



  return (
    <SafeAreaView style={{
      flex:1,
      backgroundColor:'#000000',
      alignItems:'center',
      justifyContent:'flex-start',
      padding:20,
    }}>
      <Text 
      style= {{
        fontSize:35,
        color:'white',
        fontWeight:'bold',
        marginTop:25,
        fontFamily:'sans-serif-medium',
        borderWidth:2,
        borderColor:'white',
        borderColor:'blue',
        borderRadius:20,
        padding:7,

      }}
      >
        QUIZ APP

      </Text>
      {/*Header*/}
      <Text style={{
        fontSize:24,
        color:COLORS.white,
        fontWeight:'bold',
        marginVertical:32,
        borderColor:'white',
        borderBottomWidth:2,
      }}>
        Sign Up
      </Text>

      {/*Email*/}
      <FormInput 
      labelText='Email' 
      placeholderText="Enter your email" 
      onChangeText={value =>setEmail(value)} 
      value={email} 
      keyboardType={'email-address'}
      />

    


      {/*Password*/}
      <FormInput 
      labelText='Password' 
      placeholderText="Enter your password" 
      onChangeText={value =>setpassword(value)} 
      value={password} 
      secureTextEntry={true}
      />

      {/*Confirm Password*/}
      <FormInput 
      labelText='Confirm Password' 
      placeholderText="Enter your password again" 
      onChangeText={value =>setConfirmPassword(value)} 
      value={confirmPassword} 
      secureTextEntry={true}
      />
      

      {/*Submit password*/}
      <FormButton labelText="Sign Up" 
      handleOnPress={handleOnSubmit} 
      style={{width:'100%'}} />

      {/*Footer*/}
      <View style = {{flexDirection:'row', alignItems:'center',marginTop:4}}>
        <Text style={{color:'white'}}>Already An Account?</Text>
        <Text style = {{marginLeft:4,color:COLORS.primary}}
        onPress={()=>navigation.navigate('SignInScreen')}
        >
          Sign In
          </Text>
      </View>
      <View style={{marginTop:44,alignSelf:'flex-end'}}>
        <Text style={{color:'white'}}>
          Made With ♥ by DARKFIRE
        </Text>
      </View>

    </SafeAreaView>
  )
}

export default SignUpScreen