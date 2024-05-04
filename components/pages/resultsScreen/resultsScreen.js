import React, { useState, useEffect} from 'react';
import { useFonts } from 'expo-font';
import { View, Text, SafeAreaView, TouchableOpacity, Alert, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Collapsible from 'react-native-collapsible';
import styles from './styles';
import { createClient } from '@supabase/supabase-js';

function ResultsScreen({route, navigation}) {


  // Пример использования

  const {task, name, data, count, id} = route.params;

  const [linesData, setLinesData] = useState([]);

  useEffect(() => {

  // const linesData = [
  //   { name: "Гейчик Евгений", isCollapsible: true, index: 1, number: "5",
  //     inner:{
  //       score: '9.7/10'
  //     },
  //     collapse: () => {toggleCollapse(2)},
  //   },
  //   // позже будет подтянута БД
  // ];


  handler = () =>{navigation.navigate("DeadlineScreen", {data: data, count: count})}

    fetchData(TASK_ID); // Передаем filterDate в качестве аргумента
}, [TASK_ID]);

const fetchData = async (TASK_ID) => {
  try {
    const supabase = createClient(
      'https://vwatdijcodvrpykqwylv.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3YXRkaWpjb2R2cnB5a3F3eWx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI0MTY2NzUsImV4cCI6MjAyNzk5MjY3NX0.D9hltWrPhMgBu8LAtdrwg_c6A9UPCKNVMzIiWWNMLEI'
    );

    const { data: ress, error_dl } = await supabase
      .from('Results')
      .select('*')
      .eq('TASK_ID', TASK_ID);

    if (error_dl) {
      throw error_dl;
    }

    // Format and extract data from the response
    const formattedTasks = ress.map((res) => {
      const tasks = Object.keys(res.Clipped).map((taskKey) => ({
        question: res.Clipped[taskKey].question,
        answer: res.Clipped[taskKey].answer,
        correct: res.Clipped[taskKey].correct
      }));

      return {
        name: res.Name,
        isCollapsible: true,
        number: 1,
        inner: tasks
      };
    });

    // Update the state with the formatted data
    setLinesData(formattedTasks);
  } catch (error) {
    console.error('Error fetching data:', error.message);
    setLinesData([]); // Clear the state in case of an error
  }
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
  
  
    // Inside ResultsScreen component
const [collapsedItems, setCollapsedItems] = useState(Array(linesData.length).fill(true)); // Ensure collapsedItems length matches linesData length

// Define toggleCollapse function
const toggleCollapse = (index) => {
  setCollapsedItems((prevState) => {
    const newCollapsedItems = [...prevState];
    newCollapsedItems[index] = !newCollapsedItems[index];
    return newCollapsedItems;
  });
};
    const TASK_ID = id;
    
  const Line = ({name, number, isCollapsible, inner, collapse, index, score}) => {
    const handleCollapse = () => {
      // Call the collapse function passed from props
      collapse(index);
    };
  
    return (
      <TouchableOpacity
        style={styles.DynamicContainer}
        onPress={handleCollapse} // Call the handleCollapse function when pressed
      >
        <View style={styles.contHeader}>
          <Text style={styles.deadlineDay}>{name}</Text>
          <Text style={styles.deadlineDay}>{score}</Text>
        </View>
        <Text style={styles.headerBlack}>{null}</Text>
        <Collapsible collapsed={collapsedItems[index]}>
  <View>
    {/* Iterate over each task in the inner object */}
    {Object.keys(inner).map((taskKey) => (
      <View key={taskKey}>
        <Text style={styles.deadlineTime}>Вопрос {parseInt(taskKey)+1}: {inner[taskKey].question}</Text>
        <Text style={styles.deadlineTime}>Ответ: {inner[taskKey].answer}</Text>
        <Text style={styles.deadlineTime}>Правильный: {inner[taskKey].correct}</Text>
        <Text></Text><Text></Text>
      </View>
    ))}
  </View>
</Collapsible>

        <View style={styles.results}>
          <Text style={styles.subtitle}>Посмотреть заметки</Text>
          <Text style={styles.deadlineDay}>↘</Text>
        </View>
      </TouchableOpacity>
    );
  };
  
    return (
      <SafeAreaView style={styles.container}>
        
        <GroupContainer handlePress={handlePress} />

        <View style={styles.TasksContainer}>
          <View style={styles.contHeader}>
            <Text style={styles.headerBlack}>{name}</Text>
            <Text style={styles.deadlineDay}>{task}</Text>
          </View>
          <ScrollView style={styles.scrollableContainerTasks}>
          {linesData.map((data, index) => (
               <Line key={index} {...data} collapse={() => toggleCollapse(index)} index={index} />
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