import Dashboard from "@/src/screens/Dashboard";
import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";

export default function Index() {


  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
      <Dashboard />
      </SafeAreaView>
</ScrollView>
  )
}

const styles = StyleSheet.create({

  container: {
    // width: '100%',
    // height: '100%',
    flex: 1,
    backgroundColor: '#83b1fc'
  }
});