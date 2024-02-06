import { useState } from 'react';
import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';
import Focus from './src/features/Focus';
import FocusHistory from './src/features/FocusHistory';
import Timer from './src/features/Timer';
import colors from './src/utils/colors';

export default function App() {
  const [subject, setSubject] = useState('');
  const [history, setHistory] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      {subject ? (
        <Timer
          subject={subject}
          onTimerEnd={(subject) => {setHistory([ ...history, subject ])}}
          onClear={() => setSubject('')}
        />
      ) : (
        <>
          <Focus addSubject={setSubject} />
          <FocusHistory history={history} />
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    paddingTop: Platform.OS === 'android' && StatusBar.currentHeight,
  },
});
