import React, { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { View, Text, SafeAreaView, TouchableOpacity, Alert, ScrollView } from 'react-native';
import Collapsible from 'react-native-collapsible';
import styles from './style';
import { createClient } from '@supabase/supabase-js';

function SecondScreen({ navigation }) {
  const handlePress = () => {
    Alert.alert('Button pressed', 'You pressed the button!');
  };

  const [fontsLoaded, fontError] = useFonts({});

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const [collapsedItems, setCollapsedItems] = useState([]);
  const [linesData, setLinesData] = useState([]);

  const formatDate = (dateString) => {
    const parts = dateString.split('-');
    if (parts.length === 3) {
      const day = parts[2].padStart(2, '0');
      const month = parts[1].padStart(2, '0');
      const year = parts[0];
      return `${day}.${month}.${year}`;
    }
    return null; // Handle incorrect date format
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const supabase = createClient(
        'https://vwatdijcodvrpykqwylv.supabase.co',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3YXRkaWpjb2R2cnB5a3F3eWx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI0MTY2NzUsImV4cCI6MjAyNzk5MjY3NX0.D9hltWrPhMgBu8LAtdrwg_c6A9UPCKNVMzIiWWNMLEI'
      );

      const { data: deadlines, error_dl } = await supabase
        .from('Deadlines')
        .select('Date')
        .eq('TaskType', 'Practical');

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


        const inner = tasks.map((task) => ({
          Subject: task.Subject,
          Task: task.Task,
          Test: task.TEST
        }));

        return { date: formatDate(deadline.Date), tasksCount: tasks.length, inner };
      });

      const data = await Promise.all(promises);
      setLinesData(data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
      setLinesData([]);
    }
  };

  const Line = ({ date, tasksCount, inner }) => {
    const [collapsed, setCollapsed] = useState(true);

    const handleCollapse = () => {
      setCollapsed(!collapsed);
    };

    return (
      <TouchableOpacity style={styles.TaskPZButton} onPress={handleCollapse}>
        <View style={styles.PZDate}>
          <Text style={styles.deadlineDay}>{date}</Text>
          <Text style={styles.deadlineNumber}>{tasksCount}</Text>
        </View>
        <Collapsible collapsed={collapsed}>
          {inner.map((task, index) => (
            <View key={index} style={styles.PZCollapsedElement}>
              <TouchableOpacity>
                <View style={styles.PZTask}>
                  <Text style={styles.tasksSubtitle}>{task.Subject}</Text>
                  <Text style={styles.subtitle}>{task.Task}</Text>
                </View>
                <Text style={styles.tasksSubtitleRed}>{task.Test}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </Collapsible>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>

    <GroupContainer handlePress={handlePress} />

      <View style={styles.themeContainer}>
        <Text style={styles.header}>ПЗ</Text>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={styles.subtitle}>переключиться на ДЗ</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.TasksPZContainer}>
        <Text style={styles.headerBlack}>Задания на ПЗ</Text>
        <ScrollView style={styles.scrollableContainerTasksPZ}>
          {linesData.map((data, index) => (
            <Line key={index} {...data} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default SecondScreen;
