import {StyleSheet} from 'react-native';
import {ApplicationStyles, Colors, Fonts} from '../../theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  container: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 20,
    paddingBottom: 12,
  },
  welcomeText: {
    fontSize: Fonts.size.f22,
    fontWeight: Fonts.Weight.semi,
    color: Colors.white20,
  },
  bagIcon: {
    width: 24,
    height: 24,
  },
  headerInfo: {
    ...ApplicationStyles.rowAlignCenterJustifyBetween,
    paddingTop: 52,
    paddingBottom: 35,
  },
  textInput: {
    paddingLeft: 12,
    fontSize: Fonts.size.f14,
    fontWeight: Fonts.Weight.medium,
    color: Colors.white20,
  },
  textInputContainer: {
    ...ApplicationStyles.rowAlignItemCenter,
    paddingHorizontal: 28,
    paddingVertical: 19,
    borderRadius: 50,
    backgroundColor: Colors.blue10,
  },
  searchIcon: {
    width: 18,
    height: 18,
  },
  dropDownText: {
    color: Colors.white20,
  },
  deliveryText: {
    fontSize: Fonts.size.f11,
    fontWeight: Fonts.Weight.secondlast,
    color: Colors.white20,
    opacity: 0.5,
  },
  deviveryInfo: {
    ...ApplicationStyles.rowAlignCenterJustifyBetween,
    paddingTop: 29,
  },
  cartText: {
    color: Colors.secondary,
    fontSize: Fonts.size.f14,
    fontWeight: Fonts.Weight.semi,
  },
  cartContainer: {
    width: 18,
    height: 18,
    backgroundColor: Colors.yellow10,
    borderRadius: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: -5,
    top: -2,
  },
  recommedText: {
    fontSize: Fonts.size.f30,
    fontWeight: Fonts.Weight.lower,
    color: Colors.black10,
    paddingBottom: 12,
  },
});

export default styles;
