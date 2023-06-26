import { View, Text, SafeAreaView, ScrollView, Image, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from "@react-navigation/native";
import {
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from '../components/Categories';


const HomeScreen = () => {

    const navigation = useNavigation();

    // getting rid of header
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);


  return (
    <SafeAreaView className="bg-white pt-5">
      {/* <Text className='text-red-500'>HomeScreen</Text> */}

        {/* Header */}
        <View className="flex-row pb-3 items-center space-x-2 px-4">
            <Image 
                source={{
                    uri: 'https://links.papareact.com/wru'
                }}
                className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            />

            {/* this view will take up most of the room */}
            <View className="flex-1">
                <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                <Text className="font-bold text-xl">
                    Current Location
                    <ChevronDownIcon size={20} color="#00CCBB" />
                </Text>
            </View>

            <UserIcon size={35} color="#00CCBB"/>
        </View>


        {/* Search */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
            <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
                <MagnifyingGlassIcon color='gray' size={20}/>
                <TextInput 
                    placeholder="Restaurants and cuisines"
                    keyboardType="default"
                />
            </View>
            <AdjustmentsVerticalIcon color="#00CCBB"/>
        </View>


        {/* Body */}
        <ScrollView
         className="bg-gray-100"
         contentContainerStyle={{

         }}>


            {/* Categories */}
            <Categories/>


            {/* Featured Rows */}
            <FeaturedRow 
                title="Featured"
                description="Paid placements from our partners"
                featuredCategory="featured"
            />

        </ScrollView>

    </SafeAreaView>
  )
}

export default HomeScreen