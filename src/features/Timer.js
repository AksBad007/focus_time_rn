import { useState } from 'react';
import { View, Text, StyleSheet, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake';
import RoundedButton from '../components/RoundedButton';
import Countdown from '../components/Countdown';
import Timing from './Timing';
import { sizes } from '../utils/sizes';
import colors from '../utils/colors';

const ONE_SECOND_IN_MS = 1000;
const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export default Timer = ({ subject, onClear, onTimerEnd }) => {
  useKeepAwake();
  const [started, setStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(subject);
  }

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!started}
          onProgress={setProgress}
          onEnd={onEnd}
        />

        <View style={{ paddingTop: sizes.xxl }}>
          <Text style={styles.title}>Focusing on:</Text>
          <Text style={styles.task}>{subject}</Text>
        </View>
      </View>

      <View style={{ paddingTop: sizes.sm }}>
        <ProgressBar
          progress={progress}
          color={colors.progressBar}
          style={{ height: sizes.sm }}
        />
      </View>

      <Timing onChange={setMinutes} />

      <View style={styles.buttonWrapper}>
        {!started ? (
          <RoundedButton title="start" onPress={() => setStarted(true)} />
        ) : (
          <RoundedButton title="pause" onPress={() => setStarted(false)} />
        )}
      </View>

      <View style={styles.clearWrapper}>
        <RoundedButton size={50} title="-" onPress={onClear} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: sizes.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
  },
  task: {
    color: colors.white,
    textAlign: 'center',
  },
});
