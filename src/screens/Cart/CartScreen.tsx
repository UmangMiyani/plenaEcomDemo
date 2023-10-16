import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ApplicationStyles} from '../../theme';
import {AppImage} from '../../assets/icon';
import FastImage from 'react-native-fast-image';
import {AppConstant} from '../../constant';
import styles from './CartScreen.styles';
import CartItem from '../../component/CartItem';
import {ActionButton} from '../../component';
import {useSelector} from 'react-redux';

const CartScreen = ({navigation}) => {
  const {feed} = useSelector(state => state);

  const [cartList, setCartList] = useState([]);

  const cartArr = feed?.cartArr;
  const deliveryCharge = 2.0;

  useEffect(() => {
    setCartList(cartArr);
  }, [cartArr]);

  const renderCartItem = ({item}) => {
    return <CartItem item={item} />;
  };

  const subTotal = () => {
    let arr = [];
    cartList?.map(res => {
      arr.push(res?.price);
    });
    const sum = arr.reduce(add, 0);

    function add(accumulator, a) {
      return accumulator + a;
    }
    return sum;
  };

  return (
    <SafeAreaView style={styles.mainContainer} edges={['top']}>
      <View
        style={[
          ApplicationStyles.pageSpacing,
          ApplicationStyles.rowAlignItemCenter,
        ]}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.goBack()}>
          <FastImage
            style={{width: 40, height: 40}}
            source={AppImage.backArrow}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>{AppConstant.SHOPPING_CART}</Text>
      </View>
      <FlatList
        data={cartList}
        renderItem={renderCartItem}
        style={styles.flatlist}
        ListFooterComponent={() => {
          return (
            <TouchableOpacity
              style={{alignSelf: 'flex-end', marginBottom: 60}}
              activeOpacity={0.5}>
              <Text style={styles.edit}>{AppConstant.EDIT}</Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item, index) => item?.id + index}
      />
      <View style={styles.checkOutContainer}>
        <View style={styles.priceInfo}>
          <Text style={styles.infoTitle}>{AppConstant.SUBTOTAL}</Text>
          <Text style={styles.infoPrice}>{`$${subTotal()}`}</Text>
        </View>
        <View style={styles.priceInfo}>
          <Text style={styles.infoTitle}>{AppConstant.DELIVERY}</Text>
          <Text style={styles.infoPrice}>{`$${deliveryCharge}`}</Text>
        </View>
        <View style={styles.priceInfo}>
          <Text style={styles.infoTitle}>{AppConstant.TOTAL}</Text>
          <Text style={styles.infoPrice}>{`$${
            subTotal() + deliveryCharge
          }`}</Text>
        </View>
        <ActionButton
          title={AppConstant.PROCEED_CHECKOUT}
          containerStyle={{marginVertical: 30}}
        />
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
