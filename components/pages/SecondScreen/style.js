import { StyleSheet, StatusBar} from 'react-native';
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
      borderRadius: 25,
    },
    TasksPZContainer: {
      width: '90%',
      height: '70%',
      flexDirection: 'column',
      // justifyContent: 'space-between',
      backgroundColor: colors.primary,
      alignItems: 'Left',
      paddingVertical: "1%",
      paddingHorizontal: "4%",
      marginTop: "4%",
      borderRadius: 20,
    },
    TasksDeadlinePageContainer: {
      width: '90%',
      height: '75%',
      flexDirection: 'column',
      // justifyContent: 'space-between',
      backgroundColor: colors.primary,
      alignItems: 'Left',
      paddingVertical: "1%",
      paddingHorizontal: "4%",
      marginTop: "4%",
      borderRadius: 20,
    },
    BackButton:{
      backgroundColor: colors.secondary,
      width: "90%",
      height: "8%",
      marginTop: "4%",
      borderRadius: 20,
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: "space-between",
      paddingHorizontal: "5%",
      paddingVertical: "0",
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
    deadlineDate:{
      flexDirection: 'row',
    },
    PZDate:{
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    PZTask:{
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    scrollableContainerDeadline:{
      marginBottom: '5%'
    },
    scrollableContainerDeadlinePage:{
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
      backgroundColor: colors.secondary,
      marginTop: '5%',
      paddingHorizontal: '2%',
      paddingVertical: '2%',
      borderRadius: 15,
      flexDirection: 'column'
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
      color: colors.primary
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
    headerPlus: {
      fontSize: 40,
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
      // alignSelf: 'center'
    },
    tasksSubtitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: "#fff",
    },
    tasksSubtitleRed: {
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.test_color
    },
    tasksSubtitleGreen: {
      fontSize: 20,
      fontWeight: 'bold',
      color: "#72C55D",
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
  });

export default styles;