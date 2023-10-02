import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {AppImage} from '../assets/icon';
import {ApplicationStyles, Colors, Fonts} from '../theme';

const CashBackItem = ({item, index, lastItem}) => {
  const deactiveItem = index === 1;
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[
        styles.container,
        lastItem && {marginRight: 18},
        deactiveItem && styles.deactivate,
      ]}>
      <FastImage source={AppImage.placeholder} style={styles.img} />
      <Text style={styles.text}>
        {`Get\n`}
        <Text style={styles.percentageText}>50% OFF</Text>
        <Text style={styles.orderText}>
          {`\nOn first`}
          <Text style={{fontWeight: Fonts.Weight.semi}}> 03 </Text>Order
        </Text>
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    ...ApplicationStyles.rowAlignItemCenter,
    padding: 22,
    backgroundColor: Colors.yellow10,
    borderRadius: 16,
    marginLeft: 18,
  },
  img: {
    width: 68,
    height: 68,
    marginRight: 50,
  },
  text: {
    fontSize: Fonts.size.f22,
    fontWeight: Fonts.Weight.lower,
    color: Colors.secondary,
    lineHeight: 33,
  },
  percentageText: {
    fontSize: Fonts.size.f28,
    fontWeight: Fonts.Weight.bold,
  },
  orderText: {
    fontSize: Fonts.size.f13,
    lineHeight: 20,
  },
  deactivate: {
    opacity: 0.5,
  },
});

export default CashBackItem;
