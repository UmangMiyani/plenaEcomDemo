import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {ApplicationStyles, Colors, Fonts} from '../theme';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {decreaseCartItem, removeFromCart} from '../store/feed/reducer';

const CartItem = ({item}) => {
  const dispatch = useDispatch();
  const {feed} = useSelector(state => state);
  const [itemCount, setItemCount] = useState(0);

  const cartArr = feed?.cartArr;

  useEffect(() => {
    setItemCount(item?.itemCount);
  }, [item]);

  const increase = () => {
    setItemCount(itemCount + 1);
  };

  const decrease = () => {
    setItemCount(itemCount - 1);
    let index = cartArr?.findIndex(x => x?.id === item?.id);

    itemCount > 1 ? dispatch(decreaseCartItem({index: index})) : removeItem();
  };

  const removeItem = () => {
    const feedFiltered = cartArr?.filter(x => {
      return x.id !== item?.id;
    });
    dispatch(removeFromCart(feedFiltered));
  };

  return (
    <View style={styles.cartItem}>
      <FastImage
        style={styles.icon}
        source={{uri: item?.images[0]}}
        resizeMode="contain"
      />
      <View style={{flex: 1, paddingLeft: 26}}>
        <Text style={styles.text}>{item?.title}</Text>
        <Text style={[styles.text, {fontWeight: Fonts.Weight.low}]}>
          {`$${item?.price}`}
        </Text>
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
