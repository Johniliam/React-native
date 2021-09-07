import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';
import { Animation101Screen } from '../screens/Animation101Screen';
import { Animation102Screen } from '../screens/Animation102Screen';
import { HomeScreen } from '../screens/HomeScreen';

export const StackNavigator = () => {
    
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='HomeScreen' component={HomeScreen}/>
            <Stack.Screen name='Animation101Screen' component={Animation101Screen}/>
            <Stack.Screen name='Animation102Screen' component={Animation102Screen}/>
        </Stack.Navigator>
    )
}