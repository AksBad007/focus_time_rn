import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import RoundedButton from '../components/RoundedButton';
import { sizes } from '../utils/sizes';

export default Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState('');

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={subject}
          onChangeText={setSubject}
          label="What would you like to focus on?"
        />
        <View style={styles.button}>
          <RoundedButton title="+" size={50} onChangeText={addSubject} onPress={() => addSubject(subject)} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    marginRight: sizes.sm,
  },
  button: {
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: sizes.lg,
    justifyContent: 'flex-start',
  },
});
