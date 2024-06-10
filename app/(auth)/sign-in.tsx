// import { useGlobalContext } from '@/context/globalProvider';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';

import { Alert, Image, Pressable, ScrollView, Text, View } from 'react-native'
import { Link, router } from 'expo-router';
import React, { useEffect, useState } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '@/components/CustomButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import icon from '../../assets/images/adaptive-icon.png'

WebBrowser.maybeCompleteAuthSession();


const SignIn = () => {

  // States
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [userInfo, setUserInfo] = useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: process.env.EXPO_PUBLIC_ANDROID_CLIENTID,
    iosClientId: process.env.EXPO_PUBLIC_IOS_CLIENTID,
    webClientId: process.env.EXPO_PUBLIC_WEB_CLIENTID
  });


  useEffect(() => {
    handleSignInWithGoogle()
  }, [response])


  // Functions

  const getUserInfo = async (token: string) => {
    if (!token) return;

    try {
      const response = await fetch('https://www.googleapis.com/userinfo/v2/me',
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      )

      const user = await response.json();
      await AsyncStorage.setItem('@user', JSON.stringify(user));
    } catch (error) {
      console.log(error)
    }
  }


  async function handleSignInWithGoogle() {
    const user = await AsyncStorage.getItem('@user');

    if (!user) {
      if (response?.type === 'success' && response?.authentication?.accessToken) {

        await getUserInfo(response?.authentication?.accessToken)
      }
    } else {
      setUserInfo(JSON.parse(user));
    }
  }
  return (
    <SafeAreaView className='h-full bg-primary'>
      <ScrollView className='h-full'>

        <View className='w-full justify-center items-center min-h-[85vh] px-4'>

          <View className='relative w-full'>
            <Image source={icon} className='w-full h-[200px]' resizeMode='contain' />
          </View>

          <View className='justify-center w-full px-4'>
            <Text>{JSON.stringify(userInfo)}</Text>

            <CustomButton
              title='Remove User'
              handlePress={() => AsyncStorage.removeItem('@user')}
              containerStyles=''
            />
            <Text className='text-2xl text-white text-semibold font-psemibold'>Choose a provider below</Text>

            <CustomButton
              title='Sign In with Google'
              handlePress={() => promptAsync()}
              containerStyles='mt-7'

              isLoading={isSubmitting}
            />
          </View>
        </View>
      </ScrollView>
    </ SafeAreaView >
  )
}

export default SignIn