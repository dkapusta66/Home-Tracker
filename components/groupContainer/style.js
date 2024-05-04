import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import { View, Text, SafeAreaView, StyleSheet, StatusBar, TouchableOpacity, Alert, ScrollView } from 'react-native';
import colors from '../ColorPalette/colorPalette';

const style = StyleSheet.create({
    groupContainer: {
      width: '90%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: colors.secondary,
      alignItems: 'center',
      paddingVertical: "4%",
      paddingHorizontal: "4%",
      marginTop: "4%",
      borderRadius: 20,
    },
    button: {
      flexDirection: 'row',
    },
    rectangle: {
      width: 8,
      height: 40,
      backgroundColor: 'white',
      borderRadius: 12,
      transform: 'rotate(25deg)',
      marginHorizontal: 5,
    },
    header: {
      fontSize: 35,
      fontWeight: 'bold',
      color: "#fff",
    }
  });
  

export default style;