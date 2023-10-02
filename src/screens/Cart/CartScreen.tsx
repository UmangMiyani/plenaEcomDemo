import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ApplicationStyles} from '../../theme';
import {AppImage} from '../../assets/icon';
import FastImage from 'react-native-fast-image';
import {AppConstant} from '../../constant';
import styles from './CartScreen.styles';
import CartItem from '../../component/CartItem';
import {ActionButton} from '../../component';

const CartScreen = ({navigation}) => {
  const renderCartItem = () => {
    return <CartItem />;
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
        data={[0, 0, 0, 0, 0, 0, 0, 0, 0]}
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
      />
      <View style={styles.checkOutContainer}>
        <View style={styles.priceInfo}>
          <Text style={styles.infoTitle}>{AppConstant.SUBTOTAL}</Text>
          <Text style={styles.infoPrice}>$35.25</Text>
        </View>
        <View style={styles.priceInfo}>
          <Text style={styles.infoTitle}>{AppConstant.DELIVERY}</Text>
          <Text style={styles.infoPrice}>$2.00</Text>
        </View>
        <View style={styles.priceInfo}>
          <Text style={styles.infoTitle}>{AppConstant.TOTAL}</Text>
          <Text style={styles.infoPrice}>$37.25</Text>
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
