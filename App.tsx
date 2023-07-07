import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Banner from './src/components/Banner';
import FloatingButton from './src/components/FloatingButton';


export default function App() {
  return (
    <View style={styles.container}>
      <Banner />
      <FloatingButton style={styles.floatingButton}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
  },
  floatingButton:{
    position: 'absolute',
    bottom: 20,
    right: 20,
  }
});
