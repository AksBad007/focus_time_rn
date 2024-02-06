import { View, Text, StyleSheet, FlatList } from 'react-native';
import colors from '../utils/colors';
import { sizes } from '../utils/sizes';

export default FocusHistory = ({ history }) => {
  if (history && history.length)
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Things we've focussed on:</Text>
        <FlatList
          data={history}
          renderItem={({ item }) => <Text style={styles.item}>- {item}</Text>}
        />
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: sizes.md,
  },
  title: {
    color: colors.white,
    fontSize: sizes.md,
    fontWeight: 'bold',
  },
  item: {
    color: colors.white,
    fontSize: sizes.md,
    paddingTop: sizes.sm,
  },
});
