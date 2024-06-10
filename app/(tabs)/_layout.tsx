import { Image, Text, View } from 'react-native'

import React from 'react'
import { Tabs } from 'expo-router'
import add from '@/assets/icons/add.png';
import cog from '@/assets/icons/cog.png';
import fridge from '@/assets/icons/fridge.png';
import profile from '@/assets/icons/profile.png';

type TabIconProps = {
  icon: any;
  color: string;
  name: string;
  focused: boolean;
}
const TabIcon = ({ icon, color, name, focused }: TabIconProps) => {
  return (
    <View className='items-center justify-center gap-2'>
      <Image
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className='w-6 h-6'
      />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{ color: color }}>{name}</Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{ tabBarShowLabel: false, tabBarActiveTintColor: '#ffa001', tabBarInactiveTintColor: '#cdcde0', tabBarStyle: { backgroundColor: '#161622', borderTopWidth: 1, borderTopColor: '#232533', height: 85 } }}
      >
        <Tabs.Screen
          name='profile'
          options={({
            title: 'Profile',
            headerShown: false,
            tabBarItemStyle: {
              maxWidth: 400,
            },
            tabBarIcon: ({ color, focused }: { color: string, focused: boolean }) => (
              <TabIcon
                icon={profile}
                color={color}
                name='Profile'
                focused={focused}
              />
            ),
          })}
        />

        <Tabs.Screen
          name='appliances'
          options={{
            tabBarItemStyle: {
              maxWidth: 400,
            },
            title: 'Appliances',
            headerShown: false,
            tabBarIcon: ({ color, focused }: { color: string, focused: boolean }) => (
              <TabIcon
                icon={fridge}
                color={color}
                name='Appliances'
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name='add-appliance'
          options={{
            tabBarItemStyle: {
              maxWidth: 400,
            },
            title: 'Add Appliance',
            headerShown: false,
            tabBarIcon: ({ color, focused }: { color: string, focused: boolean }) => (
              <TabIcon
                icon={add}
                color={color}
                name='Add Appliance'
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name='settings'
          options={{
            tabBarItemStyle: {
              maxWidth: 400,
            },
            title: 'Settings',
            headerShown: false,
            tabBarIcon: ({ color, focused }: { color: string, focused: boolean }) => (
              <TabIcon
                icon={cog}
                color={color}
                name='Settings'
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout