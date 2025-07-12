import {Dashboard} from "@/src/screens/Dashboard";
import DayDetails from "@/src/screens/DayDetails";
import { COLORS } from "@/src/themes/colors";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import dayjs from 'dayjs'
import 'dayjs/locale/pl'
import isToday from 'dayjs/plugin/isToday';
// import { ForecastDay } from '../types/api'

dayjs.extend(isToday)
dayjs.locale('pl')

export default function Index() {


  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        {/* <Dashboard /> */}
        {<DayDetails />}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {

    flex: 1,
    backgroundColor: COLORS.background
  }
});