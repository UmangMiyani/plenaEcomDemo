import {StyleSheet} from 'react-native';
import {ApplicationStyles, Colors, Fonts} from '../../theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  headerText: {
    fontSize: Fonts.size.f16,
    fontWeight: Fonts.Weight.lower,
    color: Colors.black10,
    paddingLeft: 10,
  },
  flatlist: {
    ...ApplicationStyles.pageSpacing,
    paddingTop: 45,
  },
  edit: {
    fontSize: Fonts.size.f12,
    fontWeight: Fonts.Weight.medium,
    color: Colors.primary,
  },
  checkOutContainer: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: Colors.white20,
    marginHorizontal: 8,
    paddingHorizontal: 36,
    paddingVertical: 17,
  },
  priceInfo: {
    ...ApplicationStyles.rowAlignCenterJustifyBetween,
    paddingVertical: 7,
  },
  infoTitle: {
    fontSize: Fonts.size.f14,
    fontWeight: Fonts.Weight.lower,
    color: Colors.grey30,
  },
  infoPrice: {
    fontSize: Fonts.size.f14,
    fontWeight: Fonts.Weight.medium,
    color: Colors.black10,
  },
});

export default styles;
