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
  bagIcon: {
    width: 24,
    height: 24,
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
  category: {
    fontSize: Fonts.size.f50,
    fontWeight: Fonts.Weight.lower,
    color: Colors.black10,
    lineHeight: 70,
  },
  reviews: {
    fontSize: Fonts.size.f14,
    fontWeight: Fonts.Weight.lower,
    color: Colors.grey40,
    paddingLeft: 5,
  },
  scrollContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    marginVertical: 4,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0, 0.7)',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: Colors.white30,
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  likeContainer: {
    zIndex: 9999,
    position: 'absolute',
    top: 15,
    right: 35,
  },
  priceContainer: {
    ...ApplicationStyles.rowAlignItemCenter,
    paddingTop: 26,
  },
  priceText: {
    fontSize: Fonts.size.f16,
    fontWeight: Fonts.Weight.seven,
    color: Colors.primary,
  },
  addCartBtn: {
    flex: 1,
    backgroundColor: 'transparent',
    marginRight: 23,
  },
  detailsText: {
    fontSize: Fonts.size.f16,
    fontWeight: Fonts.Weight.lower,
    color: Colors.black10,
    paddingTop: 30,
    paddingBottom: 6,
  },
  description: {
    fontSize: Fonts.size.f16,
    fontWeight: Fonts.Weight.lower,
    color: Colors.grey,
    paddingBottom: 30,
  },
});

export default styles;
