import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import { View, Text, SafeAreaView, StyleSheet, StatusBar, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Collapsible from 'react-native-collapsible';


const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  const handlePress = () => {
    Alert.alert('Button pressed', 'You pressed the button!');
  };

  const [fontsLoaded, fontError] = useFonts({
    "NeueMachina-Ultrabold": require("./assets/fonts/NeueMachina-Ultrabold.otf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.groupContainer}>
        <Text style={styles.header}>23ДЦИ-1</Text>
        <Text style={styles.header}>п.2</Text>
        <TouchableOpacity onPress={handlePress} style={styles.button}>
          <View style={styles.rectangle}></View>
          <View style={styles.rectangle}></View>
          <View style={styles.rectangle}></View>
        </TouchableOpacity>
      </View>
      <View style={styles.themeContainer}>
        <Text style={styles.header}>ДЗ</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SecondScreen')}>
          <Text style={styles.subtitle}>переключиться на ПЗ</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.deadlineContainer}>
        <Text style={styles.header}>Дедлайны</Text>
        <ScrollView style={styles.scrollableContainerDeadline}>
        <TouchableOpacity style={styles.deadlineButton} onPress={handlePress}>
          <View style={styles.deadlineDate}>
            <Text style={styles.deadlineDay}>СЕГОДНЯ</Text>
            <Text style={styles.deadlineTime}>23:15</Text>
          </View>
          <Text style={styles.deadlineNumber}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.deadlineButton} onPress={handlePress}>
          <View style={styles.deadlineDate}>
            <Text style={styles.deadlineDayClear}>ЗАВТРА</Text>
            <Text style={styles.deadlineTime}></Text>
          </View>
          <Text style={styles.deadlineNumberClear}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.deadlineButton} onPress={handlePress}>
          <View style={styles.deadlineDate}>
            <Text style={styles.deadlineDay}>СЕГОДНЯ</Text>
            <Text style={styles.deadlineTime}>23:15</Text>
          </View>
          <Text style={styles.deadlineNumber}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.deadlineButton} onPress={handlePress}>
          <View style={styles.deadlineDate}>
            <Text style={styles.deadlineDay}>СЕГОДНЯ</Text>
            <Text style={styles.deadlineTime}>23:15</Text>
          </View>
          <Text style={styles.deadlineNumber}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.deadlineButton} onPress={handlePress}>
          <View style={styles.deadlineDate}>
            <Text style={styles.deadlineDay}>СЕГОДНЯ</Text>
            <Text style={styles.deadlineTime}>23:15</Text>
          </View>
          <Text style={styles.deadlineNumber}>1</Text>
        </TouchableOpacity>
      
        </ScrollView>
      </View>
      <TouchableOpacity style={styles.tasksContainer} onPress={handlePress}>
        <View style={styles.tasksWholeCount}>
          <Text style={styles.header}>Задания</Text>
          <Text style={styles.header}>12</Text>
        </View>
        <View style={styles.tasksCount}>
          <Text style={styles.tasksSubtitle}>Непросмотренные</Text>
          <Text style={styles.tasksSubtitleRed}>4</Text>
        </View>
        <View style={styles.tasksCount}>
          <Text style={styles.tasksSubtitle}>Завершенные</Text>
          <Text style={styles.tasksSubtitleGreen}>7</Text>
        </View>
        <View style={styles.tasksCount}>
          <Text style={styles.tasksSubtitle}>Незавершенные</Text>
          <Text style={styles.tasksSubtitle}>1</Text>
        </View>
        <View style={styles.ShowMoreTasks}>
          <Text style={styles.subtitle}>Посмотреть все</Text>
        </View>
        </TouchableOpacity>
    </SafeAreaView>
  );
}


function SecondScreen({navigation}) {

  const handlePress = () => {
    Alert.alert('Button pressed', 'You pressed the button!');
  };

  const [fontsLoaded, fontError] = useFonts({
    "NeueMachina-Ultrabold": require("./assets/fonts/NeueMachina-Ultrabold.otf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  const [collapsedItems, setCollapsedItems] = useState(Array(3).fill(true));

   const toggleCollapse = (index) => {
    const newCollapsedItems = [...collapsedItems];
    newCollapsedItems[index] = !newCollapsedItems[index];
    setCollapsedItems(newCollapsedItems);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.groupContainer}>
        <Text style={styles.header}>23ДЦИ-1</Text>
        <Text style={styles.header}>п.2</Text>
        <TouchableOpacity onPress={handlePress} style={styles.button}>
          <View style={styles.rectangle}></View>
          <View style={styles.rectangle}></View>
          <View style={styles.rectangle}></View>
        </TouchableOpacity>
      </View>
      <View style={styles.themeContainer}>
        <Text style={styles.header}>ПЗ</Text>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={styles.subtitle}>переключиться на ДЗ</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.TasksPZContainer}>
        <Text style={styles.headerBlack}>Задания на ПЗ</Text>
        <ScrollView style={styles.scrollableContainerTasksPZ}>
          {Array.from({ length: 5 }, (_, index) => (
            <TouchableOpacity
              key={index}
              style={styles.TaskPZButton}
              onPress={() => toggleCollapse(index)}
            >
              <View style={styles.PZDate}>
                <Text style={styles.deadlineDay}>Завтра</Text>
                <Text style={styles.deadlineNumber}>3</Text>
              </View>
              <Collapsible collapsed={collapsedItems[index]}>
                {index === 0 && (
                  <View>
                    <View style={styles.PZCollapsedElement}>
                      <TouchableOpacity>
                      <View style={styles.PZDate}>
                        <Text style={styles.tasksSubtitle}>Микроэкономика</Text>
                        <Text style={styles.tasksSubtitleRed}>КР</Text>
                      </View>
                      <Text style={styles.tasksSubtitle}>Темы: 4-6 (до картеля)</Text>
                      <Text style={styles.subtitle}>+ Тема 7 - разбор</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.PZCollapsedElement}>
                    <TouchableOpacity>
                      <View style={styles.PZDate}>
                        <Text style={styles.tasksSubtitle}>Вышмат</Text>
                        <Text style={styles.subtitle}>Вектора</Text>
                      </View>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.PZCollapsedElement}>
                    <TouchableOpacity>
                      <View style={styles.PZDate}>
                        <Text style={styles.tasksSubtitle}>ИБГ</Text>
                        <Text style={styles.subtitle}>Посмотреть доклады</Text>
                      </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
                {index === 1 && (
                  <View>
                    <Text>Содержимое для второго элемента</Text>
                  </View>
                )}
                {index === 2 && (
                  <View>
                    <Text>Содержимое для третьего элемента</Text>
                  </View>
                )}
                {index === 3 && (
                  <View>
                    <Text>Содержимое для третьего элемента</Text>
                  </View>
                )}
              </Collapsible>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    paddingTop:StatusBar.currentHeight
  },
  groupContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#357266',
    alignItems: 'center',
    paddingVertical: "4%",
    paddingHorizontal: "4%",
    marginTop: "4%",
    borderRadius: 25,
  },
  themeContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#357266',
    alignItems: 'center',
    paddingVertical: "1%",
    paddingHorizontal: "4%",
    marginTop: "4%",
    borderRadius: 25,
  },
  deadlineContainer: {
    width: '90%',
    height: '40%',
    flexDirection: 'column',
    // justifyContent: 'space-between',
    backgroundColor: '#FF8E72',
    alignItems: 'Left',
    paddingVertical: "1%",
    paddingHorizontal: "4%",
    marginTop: "4%",
    borderRadius: 25,
  },
  TasksPZContainer: {
    width: '90%',
    height: '70%',
    flexDirection: 'column',
    // justifyContent: 'space-between',
    backgroundColor: '#FF8E72',
    alignItems: 'Left',
    paddingVertical: "1%",
    paddingHorizontal: "4%",
    marginTop: "4%",
    borderRadius: 25,
  },
  tasksContainer:{
    width: '90%',
    flexDirection: 'column',
    // justifyContent: 'space-between',
    backgroundColor: '#357266',
    alignItems: 'Left',
    paddingVertical: "3%",
    paddingHorizontal: 15,
    marginTop: "4%",
    borderRadius: 25,
  },
  deadlineDate:{
    flexDirection: 'row',
  },
  PZDate:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scrollableContainerDeadline:{
    marginBottom: '5%'
  },
  deadlineButton: {
    marginTop: '5%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    borderRadius: 25,
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    backgroundColor: '#fff',
  },
  TaskPZButton: {
    marginTop: '5%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignSelf: 'center',
    borderRadius: 25,
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    backgroundColor: '#fff',
  },
  PZCollapsedElement:{
    backgroundColor: '#357266',
    marginTop: '5%',
    paddingHorizontal: '2%',
    paddingVertical: '2%',
    borderRadius: 25
  },
  deadlineDay:{
    color: '#000',
    fontSize: 25,
    fontWeight: '900',
    marginRight: '3%',
  },
  deadlineDayClear:{
    color: '#72C55D',
    fontSize: 25,
    fontWeight: '900',
    marginRight: '3%',
  },
  deadlineTime:{
    color: '#000',
    fontSize: 15,
    alignSelf: 'flex-end',
    fontWeight: '900',
  },
  deadlineNumber:{
    fontSize: 25,
    fontWeight: '900',
  },
  deadlineNumberClear:{
    fontSize: 25,
    fontWeight: '900',
    color: '#72C55D'
  },
  tasksWholeCount:{
    justifyContent: 'space-between',
    flexDirection: 'row', 
    marginBottom: '5%'
  },
  tasksCount:{
    justifyContent: 'space-between',
    flexDirection: 'row', 
    marginBottom: '5%',
    color: '#FF8E72'
  },
  ShowMoreTasks:{
    alignSelf: 'flex-end',
    alignItems: 'flex-end'
  },
  header: {
    fontSize: 35,
    fontWeight: 'bold',
    color: "#fff",
  },
  headerBlack: {
    fontSize: 35,
    fontWeight: 'bold',
    color: "#000",
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: "#fff",
    fontFamily: "NeueMachina-Ultrabold",
    alignSelf: 'center'
  },
  tasksSubtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#fff",
    fontFamily: "NeueMachina-Ultrabold",
  },
  tasksSubtitleRed: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#FF8E72",
    fontFamily: "NeueMachina-Ultrabold",
  },
  tasksSubtitleGreen: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#72C55D",
    fontFamily: "NeueMachina-Ultrabold",
  },
  button: {
    flexDirection: 'row',
  },
  rectangle: {
    width: 8,
    height: 40,
    backgroundColor: '#FF8E72',
    borderRadius: 12,
    transform: 'rotate(25deg)',
    marginHorizontal: 5,
  },
});


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
      </Stack.Navigator>
    </NavigationContainer>
  );
}