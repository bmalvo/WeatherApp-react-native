import {Dashboard} from "@/src/screens/Dashboard";
import { COLORS } from "@/src/themes/colors";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

export default function Index() {


  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <Dashboard />
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