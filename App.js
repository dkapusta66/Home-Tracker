import React, { useCallback } from 'react'; // Import useCallback from react
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import DeadlineScreen from './components/pages/deadlineScreen/deadlineScreen'
import SecondScreen from './components/pages/SecondScreen/secondScreen'
import HomeScreen from './components/pages/HomeScreen/HomeScreen';
import ResultsScreen from './components/pages/resultsScreen/resultsScreen';
import { useFonts } from 'expo-font';




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }} // Эта опция скроет верхнюю панель навигации
      />
        <Stack.Screen 
        name="SecondScreen" 
        component={SecondScreen} 
        options={{ headerShown: false }}
        />
        <Stack.Screen 
        name="DeadlineScreen" 
        component={DeadlineScreen} 
        options={{ headerShown: false }}
        initialParams={{ date: '00.00.0000', number: "1"}}
        />
        <Stack.Screen 
        name="resultsScreen" 
        component={ResultsScreen} 
        options={{ headerShown: false }}
        initialParams={{ date: '00.00.0000', number: "1"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}