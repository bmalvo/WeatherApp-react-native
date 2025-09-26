import { StatusBar } from 'expo-status-bar';
import dayjs from 'dayjs'
import 'dayjs/locale/pl'
import isToday from 'dayjs/plugin/isToday';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Root } from "@/src/navigation/Root";
import {DefaultTheme, NavigationContainer, Theme} from '@react-navigation/native'
import { COLORS } from '@/src/themes/colors';
import { Provider as StoreProvider } from 'react-redux'
import { store } from '@/src/store/store';


dayjs.extend(isToday)
dayjs.locale('pl')

const MyTheme: Theme = {

  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.background,
    card: COLORS.background
  }
}

export default function Index() {


  return (
    // <NavigationContainer>

    <SafeAreaProvider>
      <StatusBar style='light' />
      <StoreProvider store= {store}>
      <Root />
      </StoreProvider>
    </SafeAreaProvider>
    // </ NavigationContainer>

  );
}