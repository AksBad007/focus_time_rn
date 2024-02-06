import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../utils/colors';

export default RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => (
  <TouchableOpacity
    onPress={props.onPress}
    style={[styles(size).radius, style]}
  >
    <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
  </TouchableOpacity>
);

const styles = (size) =>
  StyleSheet.create({
    text: {
      color: '#fff',
      fontSize: size / 3,
    },
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: colors.white,
      borderWidth: 2,
    },
  });
