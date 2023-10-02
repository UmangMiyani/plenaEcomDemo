import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors, Fonts} from '../theme';

const ActionButton = ({
  title,
  onPress = () => null,
  containerStyle,
  textStyle,
}: any) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 19,
    backgroundColor: Colors.primary,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  text: {
    fontSize: Fonts.size.f14,
    fontWeight: Fonts.Weight.semi,
    color: Colors.secondary,
    textAlign: 'center',
  },
});

export default ActionButton;
