import { View, Text, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SliderImage from '../components/SliderImage';
import BodyParts from '../components/BodyParts';

export default function Home() {
 
  return (
    <SafeAreaView className='flex-1 bg-white space-y-5 flex' edges={['top']}>
      <StatusBar style='dark' />
      {/* Punch line and avatar */}
      <View className='flex flex-row justify-between items-center mx-5'>
        <View className='space-y-2'>
          <Text
            style={{ fontSize: hp(4.5) }}
            className='font-bold tracking-wider text-neutral-700'
          >
            Ready to
          </Text>
          <Text
            style={{ fontSize: hp(4.5) }}
            className='font-bold tracking-wider text-rose-500'
          >
            Workout
          </Text>
        </View>
        <View className='flex justify-center items-center space-y-2'>
          <Image
            className='rounded-full'
            source={require('../../fitness-app/assets/images/avatar.jpg')}
            style={{ height: hp(6), width: hp(6) }}
          />
          <View
            className='bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300'
            style={{ height: hp(5.5), width: hp(5.5) }}
          >
            <Ionicons name='notifications' size={hp(3)} color='gray' />
          </View>
        </View>
      </View>
      <View>
        <SliderImage />
      </View>
      <View className='flex-1'>
        <BodyParts />
      </View>
    </SafeAreaView>
  );
}
