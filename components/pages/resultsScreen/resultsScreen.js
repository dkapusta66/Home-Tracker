import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import { View, Text, SafeAreaView, TouchableOpacity, Alert, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Collapsible from 'react-native-collapsible';
import styles from './styles';

function ResultsScreen({route, navigation}) {



  const linesData = [
    { name: "Гейчик Евгений", isCollapsible: false, index: 1, number: "5",
      inner:{
        score: '9.7/10'
      }
    },
    { name: "Гейчик Евгений", isCollapsible: false, index: 1, number: "5",
      inner:{
        score: 'Сдано'
      }
    },
    { name: "Абобус (real name)", isCollapsible: false, index: 1, number: "5",
      inner:{
        score: ''
      }
    },
    { name: "Абобус (real name)", isCollapsible: false, index: 1, number: "5",
      inner:{
        score: ''
      }
    },
    { name: "Абобус (real name)", isCollapsible: false, index: 1, number: "5",
      inner:{
        score: ''
      }
    },
    // позже будет подтянута БД
  ];


  handler = () =>{navigation.navigate("DeadlineScreen", {data: data, count: count})}

  // Пример использования

  let {task, name, data, count } = route.params;


    const handlePress = () => {
      Alert.alert('Button pressed', 'You pressed the button!');
    };
  
    const [fontsLoaded, fontError] = useFonts({
      // "NeueMachina-Ultrabold": require("./assets/fonts/NeueMachina-Ultrabold.otf"),
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
  
    
  // const linesData_DeadlineTask = [
  //   { 
  //     date: "02.04.2024", 
  //     time: '', 
  //     isCollapsible: true, 
  //     index: 1, 
  //     number: "1",
  //     collapse: () => {toggleCollapse(1)}, // Передаем toggleCollapse с нужным индексом
  //     inner: {
  //       name_1: "Микроэкономика",
  //       task_1: "КР",
  //       theme_1: "4-6 (до картеля)",
  //       addTheme_1: "+Тема 7 - разбор",
  //       name_2: "Вышмат",
  //       task_2: "СР",
  //       theme_2: "Посмотреть фото",
  //       addTheme_2: "",
  //       name_3: "ИБГ",
  //       task_3: "Доклады",
  //       theme_3: "Посмотреть фото",
  //       addTheme_3: "",
  //     },
  //   },
  //   { 
  //     date: "03.04.2024",
  //     time: "10:05", 
  //     isCollapsible: true, 
  //     index: 2, 
  //     number: "5",
  //     collapse: () => {toggleCollapse(2)}, // Передаем toggleCollapse с нужным индексом
  //     inner: {
  //       name_1: "Микроэкономика",
  //       task_1: "КР",
  //       theme_1: "4-6 (до картеля)",
  //       addTheme_1: "+Тема 7 - разбор",
  //       name_2: "Вышмат",
  //       task_2: "СР",
  //       theme_2: "Посмотреть фото",
  //       addTheme_2: "",
  //       name_3: "ИБГ",
  //       task_3: "Доклады",
  //       theme_3: "Посмотреть фото",
  //       addTheme_3: "",
  //     },
  //   },
  //   { date: "21.04.2024", time: "10:05", isCollapsible: false, index: 3, number: "5" },
  //   { date: "21.26.2024", time: "10:05", isCollapsible: false, index: 4, number: "5" },
  //   { date: "21.26.2024", time: "10:05", isCollapsible: false, index: 5, number: "5" },
  //   // Добавьте другие объекты данных, если необходимо
  // ];
  
  
    
    const Line = ({name, time, number, isCollapsible, collapse, index, inner}) => {
      // Получаем текущую дату
      // const currentDate = new Date();
      // const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0');
      // const currentDay = currentDate.getDate().toString().padStart(2, '0');    
      // const currentYear = currentDate.getFullYear();
    
      // // Преобразуем дату в формат "ДД.ММ.ГГГГ"
      // const formattedCurrentDate = `${currentDay}.${currentMonth}.${currentYear}`;
    
      // // Преобразуем переданную дату в формат "ДД.ММ.ГГГГ"
  
      // const formattedDate = date;
  
    
      // // Определяем текст для отображения в зависимости от сравнения
      // let displayText = '';
      // if (formattedDate === formattedCurrentDate) {
      //   displayText = 'СЕГОДНЯ';
      // } else {
      //   tomorrowDay = currentDate.getDate()+1;
      //   tomorrowDay = tomorrowDay.toString().padStart(2, '0')
      //   const formattedTomorrowDate = `${tomorrowDay}.${currentMonth}.${currentYear}`;
    
      //   if (formattedDate === formattedTomorrowDate) {
      //     displayText = 'ЗАВТРА';
      //   } else {
      //     // Если не "СЕГОДНЯ" и не "ЗАВТРА", то отображаем просто дату
      //     displayText = date;
      //   }
      // }
    
      return (
        <TouchableOpacity
        style={styles.DynamicContainer}
        onPress={handlePress} // Теперь используем toggleCollapse из объекта inner
      >
          <View style={styles.contHeader}>
            <Text style={styles.deadlineDay}>{name}</Text>
            <Text style={styles.deadlineDay}>{inner.score}</Text>
          </View>
          <Text style={styles.headerBlack}>{inner.task}</Text>
          <View style={styles.results}>
            <Text style={styles.subtitle}>Посмотреть заметки</Text><Text style={styles.deadlineDay}>↘</Text>
          </View>
      </TouchableOpacity>
    );
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
        <View style={styles.TasksContainer}>
          <View style={styles.contHeader}>
            <Text style={styles.headerBlack}>{name}</Text>
            <Text style={styles.headerBlack}>{task}</Text>
          </View>
          <ScrollView style={styles.scrollableContainerTasks}>
          {linesData.map((data, index) => (
              <Line key={index} {...data} />
            ))}
          </ScrollView>
        </View>
        <TouchableOpacity style={styles.BackButton} onPress={()=>handler()}>
          <Text style={styles.header}>Назад</Text>
          <Text style={styles.headerPlus}>⟶</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

export default ResultsScreen;