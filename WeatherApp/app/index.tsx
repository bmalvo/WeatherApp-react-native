import { COLORS } from "@/src/themes/colors";
import { SafeAreaView, StyleSheet} from "react-native";
import { StatusBar } from 'expo-status-bar';
import dayjs from 'dayjs'
import 'dayjs/locale/pl'
import isToday from 'dayjs/plugin/isToday';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Root } from "@/src/navigation/Root";


dayjs.extend(isToday)
dayjs.locale('pl')


export default function Index() {


  return (

    <SafeAreaProvider>
      <StatusBar style='light' />
      <SafeAreaView style={styles.container}>
        <Root />
      </SafeAreaView>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({

  container: {

    flex: 1,
    backgroundColor: COLORS.background,
  }
});