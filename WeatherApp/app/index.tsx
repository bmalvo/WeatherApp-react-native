import { StatusBar } from 'expo-status-bar';
import dayjs from 'dayjs'
import 'dayjs/locale/pl'
import isToday from 'dayjs/plugin/isToday';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Root } from "@/src/navigation/Root";
// import {DefaultTheme, NavigationContainer, Theme} from '@react-navigation/native'


dayjs.extend(isToday)
dayjs.locale('pl')

// const MyTheme: Theme = {

//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     background: COLORS.background,
//     card: COLORS.background
//   }
// }

export default function Index() {


  return (

    <SafeAreaProvider>
      <StatusBar style='light' />
      <Root />
    </SafeAreaProvider>

  );
}