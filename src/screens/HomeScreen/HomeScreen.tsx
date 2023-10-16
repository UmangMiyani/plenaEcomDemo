import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ApplicationStyles, Colors, Fonts, height} from '../../theme';
import {AppConstant} from '../../constant';
import FastImage from 'react-native-fast-image';
import {AppImage} from '../../assets/icon';
import {Dropdown} from 'react-native-element-dropdown';
import {ADDRESS_DATA, TIME_DATA} from '../../constant/AppConstant';
import styles from './HomeScreen.styles';
import {CashBackItem, ProductItem} from '../../component';
import {get} from '../../services/ApiServices';
import API_CONSTANT from '../../services/ApiConstant';
import {useDispatch, useSelector} from 'react-redux';
import {addFeedArr} from '../../store/feed/reducer';

const HomeScreen = ({navigation}: any) => {
  const dispatch = useDispatch();
  const {feed} = useSelector(state => state);

  const [searchText, SetSearchText] = useState();
  const [addressVal, setaddressVal] = useState(null);
  const [timeVal, setTimeVal] = useState(null);
  const [productList, setProductList] = useState([]);
  const [isLoad, setIsLoad] = useState(false);

  const productArr = feed?.productArr;
  const cartArr = feed?.cartArr;

  const cashBackOffer = [0, 0, 0, 0];

  useEffect(() => {
    productArr?.length <= 0 && getProductList();
  }, []);

  useEffect(() => {
    setProductList(productArr);
  }, [productArr]);

  const getProductList = () => {
    setIsLoad(true);
    get(API_CONSTANT.PRODUCTS)
      .then(res => {
        dispatch(addFeedArr(res?.products));
      })
      .catch(err => Alert.alert(err?.response?.data))
      .finally(() => setIsLoad(false));
  };

  const onPressCart = () => {
    navigation.navigate('CartScreen');
  };

  const renderProduct = ({item, index}) => {
    const onDetailPost = () => {
      navigation.navigate('DetailPostScreen', {
        postId: item?.id,
      });
    };

    return <ProductItem item={item} index={index} onPress={onDetailPost} />;
  };

  return (
    <SafeAreaView style={styles.mainContainer} edges={['bottom']}>
      <View style={styles.container}>
        <View style={styles.headerInfo}>
          <Text style={styles.welcomeText}>{AppConstant.HEY}</Text>
          <TouchableOpacity activeOpacity={0.5} onPress={onPressCart}>
            <FastImage
              source={AppImage.bag}
              style={styles.bagIcon}
              resizeMode="contain"
            />
            <View style={styles.cartContainer}>
              <Text style={styles.cartText}>{cartArr?.length}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.textInputContainer}>
          <FastImage
            source={AppImage.search}
            style={styles.searchIcon}
            resizeMode="contain"
          />
          <TextInput
            value={searchText}
            placeholder={AppConstant.SEARCH_STORE_PRODUCT}
            placeholderTextColor={Colors.grey}
            style={styles.textInput}
            onChangeText={SetSearchText}
          />
        </View>
        <View style={styles.deviveryInfo}>
          <View style={{flex: 0.53}}>
            <Text style={styles.deliveryText}>{AppConstant.DELIVERY_TO}</Text>
            <Dropdown
              labelField="label"
              valueField="value"
              placeholder={ADDRESS_DATA[0]?.label}
              data={ADDRESS_DATA}
              value={addressVal}
              itemTextStyle={{
                fontSize: Fonts.size.f12,
              }}
              iconColor={Colors.grey20}
              selectedTextStyle={styles.dropDownText}
              placeholderStyle={styles.dropDownText}
              onChange={item => {
                setaddressVal(item.value);
              }}
            />
          </View>
          <View style={[{flex: 0.19}]}>
            <Text style={styles.deliveryText}>{AppConstant.WITHIN}</Text>
            <Dropdown
              labelField="label"
              valueField="value"
              placeholder={TIME_DATA[0]?.label}
              data={TIME_DATA}
              value={timeVal}
              iconColor={Colors.grey20}
              itemTextStyle={{
                fontSize: Fonts.size.f11,
              }}
              selectedTextStyle={styles.dropDownText}
              placeholderStyle={styles.dropDownText}
              onChange={item => {
                setTimeVal(item.value);
              }}
            />
          </View>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{paddingVertical: 27}}>
          {cashBackOffer?.map((item, index) => {
            return (
              <CashBackItem
                item={item}
                lastItem={index === cashBackOffer?.length - 1}
                index={index}
                key={index}
              />
            );
          })}
        </ScrollView>

        <View style={[ApplicationStyles.pageSpacing, {paddingBottom: 50}]}>
          <Text style={styles.recommedText}>{AppConstant.RECOMMENDED}</Text>

          {isLoad ? (
            <View
              style={[ApplicationStyles.centerView, {height: height / 2.5}]}>
              <ActivityIndicator size={'large'} color={Colors.primary} />
            </View>
          ) : (
            <FlatList
              numColumns={2}
              showsVerticalScrollIndicator={false}
              columnWrapperStyle={{justifyContent: 'space-between'}}
              data={productList}
              renderItem={renderProduct}
              keyExtractor={item => item?.id}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
