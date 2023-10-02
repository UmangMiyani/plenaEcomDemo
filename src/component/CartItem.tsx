import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {ApplicationStyles, Colors, Fonts} from '../theme';
import {AppImage} from '../assets/icon';
import {useState} from 'react';

const CartItem = () => {
  const [itemCount, setItemCount] = useState(0);

  const increase = () => {
    setItemCount(itemCount + 1);
  };

  const decrease = () => {
    itemCount > 0 && setItemCount(itemCount - 1);
  };

  return (
    <View style={styles.cartItem}>
      <FastImage
        style={styles.icon}
        source={AppImage.placeholderDark}
        resizeMode="contain"
      />
      <View style={{flex: 1, paddingLeft: 26}}>
        <Text style={styles.text}>Bananas</Text>
        <Text style={[styles.text, {fontWeight: Fonts.Weight.low}]}>$7.90</Text>
      </View>

      <View style={ApplicationStyles.rowAlignCenterJustifyBetween}>
        <TouchableOpacity activeOpacity={0.5} onPress={decrease}>
          <Text>-</Text>
        </TouchableOpacity>
        <Text style={[styles.text, {paddingHorizontal: 10}]}>{itemCount}</Text>
        <TouchableOpacity activeOpacity={0.5} onPress={increase}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    ...ApplicationStyles.rowAlignCenterJustifyBetween,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.white40,
    paddingBottom: 15,
    marginBottom: 26,
  },
  icon: {
    width: 30,
    height: 30,
  },
  text: {
    fontSize: Fonts.size.f14,
    fontWeight: Fonts.Weight.medium,
    color: Colors.black10,
  },
});

export default CartItem;
