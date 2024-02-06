import { View, StyleSheet } from 'react-native';
import RoundedButton from '../components/RoundedButton';
import { sizes } from '../utils/sizes';

export default Timing = ({ onChange }) => {
  return (
    <View style={styles.timingWrapper}>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="10" onPress={() => onChange(10)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="15" onPress={() => onChange(15)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="20" onPress={() => onChange(20)} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
  },
  timingWrapper: {
    flex: 0.1,
    paddingTop: sizes.xxl,
    flexDirection: 'row',
  },
})