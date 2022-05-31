import React, {useState} from 'react';
import {View, Text, SafeAreaView, ToastAndroid} from 'react-native';
import {COLORS} from '../constants/theme';
import FormInput from '../components/shared/FormInput';
import FormButton from '../components/shared/FormButton';
import {createQuiz} from '../utils/database';

const CreateQuizScreen = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleQuizSave = async () => {
    const currentQuizId = Math.floor(100000 + Math.random() * 9000).toString();
    // Save to firestore
    await createQuiz(currentQuizId, title, description);

    // Navigate to Add Question string
    navigation.navigate('AddQuestionScreen', {
      currentQuizId: currentQuizId,
      currentQuisTitle: title,
    });

    // Reset
    setTitle('');
    setDescription('');
    ToastAndroid.show('Quiz Saved', ToastAndroid.SHORT);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#000',
        padding: 20,
      }}>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          marginVertical: 20,
          fontWeight: 'bold',
          color: 'white',
        }}>
        Create Quiz
      </Text>

      <FormInput
        labelText="Title"
        placeholderText="Enter Quiz Title"
        onChangeText={val => setTitle(val)}
        value={title}
      />
      <FormInput
        labelText="Description"
        placeholderText="Enter quiz Description"
        onChangeText={val => setDescription(val)}
        value={description}
      />

      <FormButton labelText="Save Quiz" handleOnPress={handleQuizSave} />
      <FormButton labelText='Navgate to next page' handleOnPress={() =>{
          navigation.navigate('AddQuestionScreen', {
            currentQuizId: '103404',
            currentQuisTitle:'demo quiz',
          });

      }}/>
    
    
      
    </SafeAreaView>
  );
};

export default CreateQuizScreen;