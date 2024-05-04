import React, { useState, useEffect} from 'react';
import { useFonts } from 'expo-font';
import { View, Text, SafeAreaView, TouchableOpacity, Alert, ScrollView, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Collapsible from 'react-native-collapsible';
import styles from './styles';
import { createClient } from '@supabase/supabase-js';

function DeadlineScreen({route, navigation}) {

  // Пример использования

  let { data, count } = route.params;

  function convertDateToISO(dateString) {
    // Разбиваем строку на части по точке
    const parts = dateString.split('.');
    // Проверяем, что дата состоит из трех частей (день, месяц, год)
    if (parts.length === 3) {
        // Переставляем части местами и соединяем их через дефис
        const isoDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
        return isoDate;
    } else {
        // Возвращаем null, если входная строка имеет неверный формат
        return null;
    }
}
  const filterDate = convertDateToISO(data);

  const [linesData, setLinesData] = useState([]);


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

  useEffect(() => {
    fetchData(filterDate); // Передаем filterDate в качестве аргумента
}, [filterDate]);

const fetchData = async (filterDate) => {
  try {
      const supabase = createClient(
          'https://vwatdijcodvrpykqwylv.supabase.co',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3YXRkaWpjb2R2cnB5a3F3eWx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI0MTY2NzUsImV4cCI6MjAyNzk5MjY3NX0.D9hltWrPhMgBu8LAtdrwg_c6A9UPCKNVMzIiWWNMLEI'
      );

      const { data: tasks, error_dl } = await supabase
          .from('Tasks')
          .select('*')
          .eq('TaskDate', filterDate);
        
      if (error_dl) {
          throw error_dl;
      }

      // Преобразуем полученные данные в формат, который можно использовать в вашем компоненте
      const formattedTasks = tasks.map((task) => ({
          name: task.Subject,
          time: task.Time,
          isCollapsible: false,
          id: task.ID,
          number: 1,
          inner: task.Task
      }));

      // Сохраняем полученные данные в состоянии компонента
      setLinesData(formattedTasks);
  } catch (error) {
      console.error('Error fetching data:', error.message);
      setLinesData([]); // Очищаем состояние в случае ошибки
  }
};

 
const Line = ({ name, time, number, isCollapsible, id, inner }) => {
  // Проверяем наличие объекта inner и свойства task
  const task = inner;

  return (
      <TouchableOpacity
          style={styles.DynamicContainer}
          onPress={() => { handler(task, name, data, count, id) }}
      >
          <View style={styles.contHeader}>
              <Text style={styles.deadlineDay}>{name}</Text>
              <Text style={styles.subtitle}>{time}</Text>
          </View>
          <Text style={styles.deadlineDay}>{task}</Text>
          <View style={styles.results}>
              <Text style={styles.subtitle}>Результаты одногруппников</Text>
          </View>
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
  
  
    const [collapsedItems, setCollapsedItems] = useState(Array(3).fill(true));
  
    const toggleCollapse = (index) => {
      const newCollapsedItems = [...collapsedItems];
      newCollapsedItems[index] = !newCollapsedItems[index];
      setCollapsedItems(newCollapsedItems);
    };
  
    handler = (task, name, data, count, id)=>{navigation.navigate('resultsScreen', {task: task, name: name, data: data, count:count, id:id}); count = 0; data = " ";}    

  
    return (
      <SafeAreaView style={styles.container}>
        
        <GroupContainer handlePress={handlePress} />

        <View style={styles.TasksContainer}>
          <View style={styles.contHeader}>
            <Text style={styles.headerBlack}>{data}</Text>
            <Text style={styles.headerBlack}>{count}</Text>
          </View>
          <ScrollView style={styles.scrollableContainerTasks}>
          {linesData.map((data, index) => (
              <Line key={index} {...data} />
            ))}
            {!linesData || linesData.length === 0 && 
            <View style={{justifyContent: 'center', paddingVertical: '20%'}}>
              <Text style={styles.subtitle}>ДЗ нет</Text>
              <Text style={styles.headerBlackCentered}>Свободен, пахарь</Text>
              <Image
                source={require('../../../assets/ui-shigure-ui-chan.gif')}
                style={{height: 250, width: 'auto'}} // Укажите размеры гифки
              />
            </View>}
          </ScrollView>
        </View>
        <TouchableOpacity style={styles.BackButton} onPress={()=>{navigation.navigate("HomeScreen")}}>
          <Text style={styles.header}>Назад</Text>
          <Text style={styles.headerPlus}>⟶</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

export default DeadlineScreen;