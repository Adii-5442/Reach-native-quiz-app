import { View, Text } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../constants/theme'; 
import FormInput from '../components/shared/FormInput';
import FormButton from '../components/shared/FormButton';
import { signIn } from '../utils/auth';

const SignInScreen = ({navigation}) => {

  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')

  const handleOnSubmit = () => {
    if(email!="" && password!=""){
      signIn(email,password);
    }
  }
  return (
    <SafeAreaView style = {{

      backgroundColor: '#000000',
      flex:1,
      alignItems:'center',
      justifyContent:'flex-start',
      padding:20,

    }}>
      <Text 
      style= {{
        fontSize:35,
        color:'white',
        fontWeight:'bold',
        marginTop:34,
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
      {/*HEADER*/}
      <Text 
      style = {{
        fontSize: 24,
        color: COLORS.white,
        fontWeight:'bold',
        marginVertical:34,
        borderBottomWidth:2,
        borderColor:'white',
      }}> 
        Sign in
      </Text>

      {/*Email*/}
      <FormInput labelText="Email" placeholderText='Enter your email'
      onChangeText={value => setEmail(value)}
      value={email}
      keyboardType={'email-address'}
      
      />


      {/*Password*/}
      <FormInput 
      labelText="Password"
      placeholderText='Enter your password'
      onChangeText={value => setpassword(value)}
      value={password}
      secureTextEntry={true} 
      />

      {/*Submit button*/}
      <FormButton labelText='Submit' handleOnPress={handleOnSubmit}
      style = {{width:'100%'}}/>

      {/*Footer*/}
      <View  style = {{flexDirection:'row', alignItems:'center',marginTop:15}}>
        <Text style={{color:"white"}}>* Dont Have An Account?</Text>
        <Text style = {{marginLeft:4,color:COLORS.primary}}
        onPress={()=>navigation.navigate('SignUpScreen')}
        >
          Create Account
          </Text>
      </View>
      <View style={{marginTop:114,alignSelf:'flex-end'}}>
        <Text style={{color:'white'}}>
          Made With ♥ by DARKFIRE
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen