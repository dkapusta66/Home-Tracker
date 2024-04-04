import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import { View, Text, SafeAreaView, TouchableOpacity, Alert, ScrollView } from 'react-native';
import styles from './style'

function HomeScreen({ navigation }) {






    const linesData_Deadline = [
      { date: "02.04.2024", time: "23:15", isCollapsible: false, index: 1, number: "1" },
      { date: "03.04.2024", time: "00:00", isCollapsible: false, index: 2, number: "0" },
      { date: "21.04.2024", time: "10:05", isCollapsible: false, index: 3, number: "5" },
      { date: "21.26.2024", time: "10:05", isCollapsible: false, index: 4, number: "5" },
      { date: "21.26.2024", time: "10:05", isCollapsible: false, index: 5, number: "5" },
      // Добавьте другие объекты данных, если необходимо
    ];


    handler = (date)=>{navigation.navigate('DeadlineScreen', {data: date})}    


  
    const [collapsedItems, setCollapsedItems] = useState(Array(3).fill(true));
  
    const toggleCollapse = (index) => {
      const newCollapsedItems = [...collapsedItems];
      newCollapsedItems[index] = !newCollapsedItems[index];
      setCollapsedItems(newCollapsedItems);
    };
  
    
    const Line = ({date, time, number, isCollapsible, index, toggleCollapse}) => {
      // Получаем текущую дату
      const currentDate = new Date();
      const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0');
      const currentDay = currentDate.getDate().toString().padStart(2, '0');    
      const currentYear = currentDate.getFullYear();
    
      // Преобразуем дату в формат "ДД.ММ.ГГГГ"
      const formattedCurrentDate = `${currentDay}.${currentMonth}.${currentYear}`;
    
      // Преобразуем переданную дату в формат "ДД.ММ.ГГГГ"
  
      const formattedDate = date;
  
    
      // Определяем текст для отображения в зависимости от сравнения
      let displayText = '';
      if (formattedDate === formattedCurrentDate) {
        displayText = 'СЕГОДНЯ';
      } else {
        tomorrowDay = currentDate.getDate()+1;
        tomorrowDay = tomorrowDay.toString().padStart(2, '0')
        const formattedTomorrowDate = `${tomorrowDay}.${currentMonth}.${currentYear}`;
        console.log(formattedTomorrowDate )
    
        if (formattedDate === formattedTomorrowDate) {
          displayText = 'ЗАВТРА';
        } else {
          // Если не "СЕГОДНЯ" и не "ЗАВТРА", то отображаем просто дату
          displayText = date;
        }
      }

      // Отображение зеленого текста, если нет задач
      let deadline_number_style = ' ';
      let deadline_text_style = ' ';
      

      if(number == 0){
        deadline_number_style = 'deadlineNumberClear';
        deadline_text_style = 'deadlineDayClear';
        time = ' '
      }else{
        deadline_number_style = 'deadlineNumber';
        deadline_text_style = 'deadlineDay';
      }

    
      return (
          <TouchableOpacity
            style={isCollapsible ? styles.TaskPZButton : styles.deadlineButton}
            onPress={isCollapsible ? () => toggleCollapse(index) : ()=>handler(date)} // Обратите внимание, что я убрал лишнюю функцию в вызове handlePress
          >
  
          <View style={styles.deadlineDate}>
            <Text style={styles[deadline_text_style]}>{displayText}</Text>
            <Text style={styles.deadlineTime}>{time}</Text>
          </View>
          <Text style={styles[deadline_number_style]}>{number}</Text>
          {isCollapsible && (
            <Collapsible collapsed={collapsedItems[index]}>
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
                </Collapsible>
        )}
      </TouchableOpacity>
    );
  };
  
  
    const handlePress = () => {
      Alert.alert('Button pressed', 'You pressed the button!');
    };
  
    const [fontsLoaded, fontError] = useFonts({
      // "NeueMachina-Ultrabold": require("./assets/fonts/NeueMachina-Ultrabold.otf"),
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
  
          {linesData_Deadline.map((data, index) => (
              <Line key={index} {...data} />
            ))}
  
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

export default HomeScreen;