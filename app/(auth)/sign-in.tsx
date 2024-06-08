import { Alert, Image, ScrollView, Text, View } from 'react-native'
import { Link, router } from 'expo-router';
import React, { useState } from 'react'
import { getCurrentUser, signIn } from '@/lib/appwrite';

import CustomButton from '@/components/CustomButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGlobalContext } from '@/context/globalProvider';

const SignIn = () => {

  const { setUser, setIsLoggedIn } = useGlobalContext();
  // States
  const [form, setForm] = useState({ email: '', password: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Functions
  const submit = async () => {
    if (!form.email || !form.password) {
      Alert.alert('Error', 'Please fill all fields');
    }

    setIsSubmitting(true);

    try {
      await signIn(form.email, form.password)
      const result = await getCurrentUser();
      setUser(result);
      setIsLoggedIn(true);;

      router.replace('/home') // redirect to home

    } catch (error: any) {
      Alert.alert('Error', error.message);
    } finally {
      setIsSubmitting(false);
    }
  }
  
  return (
    <SafeAreaView className='h-full bg-primary'>
      <ScrollView>
        <View className='w-full min-h-[85vh] px-4 my-6 justify-center'>

          <Text className='mt-10 text-2xl text-white text-semibold font-psemibold'>Log in to Maya</Text>
          

          <CustomButton
            title='Sign In'
            handlePress={submit}
            containerStyles='mt-7'
            isLoading={isSubmitting}
          />

        </View>
      </ScrollView>
    </ SafeAreaView >
  )
}

export default SignIn