import { Image, ScrollView, Text, View } from 'react-native';
import { Redirect, router } from 'expo-router';

import CustomButton from '@/components/CustomButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar'
import icon from '../assets/images/adaptive-icon.png'
import logo from '../assets/images/witf-logo.webp'

// import { useGlobalContext } from '@/context/globalProvider';

export default function App() {
  // const { isLoading, isLoggedIn } = useGlobalContext();

  // if (!isLoading && isLoggedIn) return <Redirect href='/home' />

  return (
    <SafeAreaView className='h-full bg-primary'>
      <ScrollView
        className='h-full'
      >
        <View
          className='w-full justify-center items-center min-h-[85vh] px-4'
        >


          <View className='relative mt-5'>
            {/* <Image source={logo} className='w-auto h-[100px]' resizeMode='contain' /> */}
            <Image source={icon} className='w-auto h-[200px]' resizeMode='contain' />
          </View>

          <View className='justify-center flex-col items-center border-black border-[1px] rounded-lg p-4 bg-gray-400/50 mt-4'>
            <Text className='text-lg text-center text-gray-100 font-pregular'>
              Have you ever wondered what was in your fridge while you were
              shopping?{' '}
            </Text>
            <Text className='text-lg font-semibold text-gray-100'>
              Now you can!
            </Text>
          </View>

          <View>
            <CustomButton title='Login/Register' containerStyles='px-4 py-2 my-4 w-[200px]' textStyles='text-gray-300' handlePress={() => { router.push('/sign-in') }} />
          </View>

        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  )
}