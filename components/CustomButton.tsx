import { Pressable, Text, TouchableOpacity } from 'react-native'

import React from 'react'

type Props = {
  title: string;
  handlePress: () => void;
  containerStyles: string;
  textStyles?: string;
  isLoading?: boolean;
}

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }: Props) => {
  return (
    <Pressable
      onPress={handlePress}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
      disabled={isLoading}
    >
      <Text className={`capitalize text-primary font-psemibold text-lg ${textStyles}`}>{title}</Text>
    </Pressable>
  )
}

export default CustomButton