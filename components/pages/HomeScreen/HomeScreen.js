import React, { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { View, Text, SafeAreaView, TouchableOpacity, Alert, ScrollView } from 'react-native';
import styles from './style';
import { createClient } from '@supabase/supabase-js';
import GroupContainer from '../../groupContainer/groupContainer';

function HomeScreen({ navigation }) {

  
  const [linesData, setLinesData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const parts = dateString.split('-');
    if (parts.length === 3) {
      const day = parts[2].padStart(2, '0');
      const month = parts[1].padStart(2, '0');
      const year = parts[0];
      return `${day}.${month}.${year}`;
    }
    return null; // Обработка неверного формата даты
  };

  const fetchData = async () => {
    try {
      const supabase = createClient(
        'https://vwatdijcodvrpykqwylv.supabase.co',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3YXRkaWpjb2R2cnB5a3F3eWx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI0MTY2NzUsImV4cCI6MjAyNzk5MjY3NX0.D9hltWrPhMgBu8LAtdrwg_c6A9UPCKNVMzIiWWNMLEI'
      );

      const { data: deadlines, error_dl } = await supabase
        .from('Deadlines')
        .select('Date')
        .eq('TaskType', 'Homework');

      if (error_dl) {
        throw error_dl;
      }

      
      
      const promises = deadlines.map(async (deadline) => {
        const { data: tasks, error_ts } = await supabase
          .from('Tasks')
          .select('*')
          .eq('TaskDate', deadline.Date);

        if (error_ts) {
          throw error_ts;
        }



        
        return { date: formatDate(deadline.Date), number: tasks.length};
      });

      const data = await Promise.all(promises);
      setLinesData(data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
      setLinesData([]);
    }
  };

  const handlePress = () => {
    Alert.alert('Button pressed', 'You pressed the button!');
  };

  const Line = ({ date, number }) => {

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
      
          if (formattedDate === formattedTomorrowDate) {
            displayText = 'ЗАВТРА';
          } else {
            // Если не "СЕГОДНЯ" и не "ЗАВТРА", то отображаем просто дату
            displayText = date;
          }
        }
  
        // Отображение зеленого текста, если нет задач
        let deadline_number_style = ' ';
        let deadline_text_style = 'deadlineDay';
        
  
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
        style={styles.deadlineButton}
        onPress={() => handler(date, number)}
      >
        <View style={styles.deadlineDate}>
          <Text style={styles[deadline_text_style]}>{displayText}</Text>
        </View>
        <Text style={styles[deadline_number_style]}>{number}</Text>
      </TouchableOpacity>
    );
  };

  const handler = (displayText, number) => {
    navigation.navigate('DeadlineScreen', { data: displayText, count: number });
  };

  return (
    <SafeAreaView style={styles.container}>
    
    <GroupContainer handlePress={handlePress} />

        <View style={styles.themeContainer}>
          <Text style={styles.header}>ДЗ</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SecondScreen')}>
            <Text style={styles.subtitle}>переключиться на ПЗ</Text>
          </TouchableOpacity>
        </View>
      <View style={styles.deadlineContainer}>
        <Text style={styles.header}>Дедлайны</Text>
        <ScrollView style={styles.scrollableContainerDeadline}>
          {linesData.map((data, index) => (
            <Line key={index} date={data.date} number={data.number} />
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