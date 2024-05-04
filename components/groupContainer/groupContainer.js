import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';

const GroupContainer = ({ handlePress }) => {
  return (
    <View style={styles.groupContainer}>
      <Text style={styles.header}>23ДЦИ-1</Text>
      <Text style={styles.header}>п.2</Text>
      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <View style={styles.rectangle}></View>
        <View style={styles.rectangle}></View>
        <View style={styles.rectangle}></View>
      </TouchableOpacity>
    </View>
  );
};

export default GroupContainer;