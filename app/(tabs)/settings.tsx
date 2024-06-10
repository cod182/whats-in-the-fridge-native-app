import { Text, View } from 'react-native'

import CustomButton from '@/components/CustomButton'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import arrowRight from '@/assets/icons/right-arrow.png';
import { logout } from '@/utils/logout'

const settings = () => {
  return (
    <SafeAreaView>
      <View className='flex-col w-full h-full'>
        <CustomButton
          title={`Logout ${arrowRight}`}
          handlePress={() => logout()}
          containerStyles=''
        />
      </View>
    </SafeAreaView>
  )
}

export default settings