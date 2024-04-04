import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DeadlinePage from './components/pages/deadlinePage/deadlinePage'
import SecondScreen from './components/pages/SecondScreen/secondScreen'
import HomeScreen from './components/pages/HomeScreen/HomeScreen';



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
        component={DeadlinePage} 
        options={{ headerShown: false }}
        initialParams={{ date: '00.00.0000' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}