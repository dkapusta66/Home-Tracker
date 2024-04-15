import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import { View, Text, SafeAreaView, StyleSheet, StatusBar, TouchableOpacity, Alert, ScrollView } from 'react-native';
import colors from '../../ColorPalette/colorPalette';

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
      backgroundColor: colors.primary,
      borderRadius: 12,
      transform: 'rotate(25deg)',
      marginHorizontal: 5,
    },
    themeContainer: {
      width: '90%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: colors.secondary,
      alignItems: 'center',
      paddingVertical: "1%",
      paddingHorizontal: "4%",
      marginTop: "4%",
      borderRadius: 20,
    },
    deadlineContainer: {
      width: '90%',
      height: '40%',
      flexDirection: 'column',
      // justifyContent: 'space-between',
      backgroundColor: colors.primary,
      alignItems: 'Left',
      paddingVertical: "1%",
      paddingHorizontal: "4%",
      marginTop: "4%",
      borderRadius: 20,
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
    deadlineDate:{
      flexDirection: 'row',
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
    tasksContainer:{
      width: '90%',
      flexDirection: 'column',
      // justifyContent: 'space-between',
      backgroundColor: colors.secondary,
      alignItems: 'Left',
      paddingVertical: "3%",
      paddingHorizontal: 15,
      marginTop: "4%",
      borderRadius: 20,
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
      color: '#FFA18A'
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
      alignSelf: 'center'
    },
    tasksSubtitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: "#fff",
    },
    tasksSubtitleRed: {
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.test_color,
    },
    tasksSubtitleGreen: {
      fontSize: 20,
      fontWeight: 'bold',
      color: "#72C55D",
  
    },
  });
  

export default styles;