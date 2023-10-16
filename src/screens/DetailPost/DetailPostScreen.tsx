import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
  Animated,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {ApplicationStyles, Colors, Fonts} from '../../theme';
import {AppConstant} from '../../constant';
import FastImage from 'react-native-fast-image';
import {AppImage} from '../../assets/icon';
import styles from './DetailPostScreen.styles';
import {ActionButton} from '../../component';
import {get} from '../../services/ApiServices';
import API_CONSTANT from '../../services/ApiConstant';
import {AirbnbRating} from 'react-native-ratings';
import {useDispatch, useSelector} from 'react-redux';
import {updateFeedLikes} from '../../store/feed/reducer';

const DetailPostScreen = ({navigation, route}: any) => {
  const dispatch = useDispatch();
  const {top} = useSafeAreaInsets();
  const [productDetails, setProductDetails] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const {feed} = useSelector(state => state);

  const productArr = feed?.productArr;
  const postId = route?.params?.postId;
  const scrollX = useRef(new Animated.Value(0)).current;
  const {width: windowWidth} = useWindowDimensions();

  useEffect(() => {
    getProductList();
  }, []);

  useEffect(() => {
    setIsLiked(productDetails?.liked);
  }, [productDetails]);

  const getProductList = () => {
    let index = productArr.findIndex(x => x.id === postId);
    if (index !== -1) {
      setProductDetails(productArr[index]);
    } else {
      let endPoints = `${API_CONSTANT.PRODUCTS}/${postId}`;
      get(endPoints)
        .then(res => {
          setProductDetails(res);
        })
        .catch(err => Alert.alert(err?.response?.data));
    }
  };

  const onPressCart = () => {
    navigation.navigate('CartScreen');
  };

  const onPressLike = () => {
    setIsLiked(!isLiked);
    let index = productArr?.findIndex(x => x?.id === postId);
    if (index !== -1) {
      dispatch(updateFeedLikes({index: index}));
    }
  };

  const onPressAddCart = () => {};
  const onPressBuyNow = () => {};

  return (
    <SafeAreaView style={styles.mainContainer} edges={['bottom']}>
      <View
        style={[
          ApplicationStyles.pageSpacing,
          ApplicationStyles.rowAlignCenterJustifyBetween,
          {paddingTop: top},
        ]}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.goBack()}>
          <FastImage
            style={{width: 40, height: 40}}
            source={AppImage.backArrow}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} onPress={onPressCart}>
          <FastImage
            source={AppImage.bag}
            style={styles.bagIcon}
            tintColor={Colors.black10}
            resizeMode="contain"
          />
          <View style={styles.cartContainer}>
            <Text style={styles.cartText}>3</Text>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.category}>{productDetails?.category}</Text>
          <Text
            style={[styles.category, {fontWeight: Fonts.Weight.secondlast}]}>
            {productDetails?.title}
          </Text>
          <View
            style={{
              paddingTop: 15,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <AirbnbRating
              count={5}
              defaultRating={4}
              showRating={false}
              selectedColor={Colors.yellow10}
              size={20}
            />
            <Text style={styles.reviews}>{AppConstant.REVIEWS}</Text>
          </View>

          {/* <View style={{paddingTop: 15}}>
            <TouchableOpacity
              style={{zIndex: 9999}}
              activeOpacity={0.5}
              onPress={onPressLike}>
              <FastImage
                style={{
                  width: 24,
                  height: 24,
                  position: 'absolute',
                  top: 31,
                  right: 40,
                }}
                source={isLiked ? AppImage.fillHeart : AppImage.emptyHeart}
                tintColor={isLiked ? 'red' : Colors.secondary}
                resizeMode="contain"
              />
            </TouchableOpacity>
            {/* {productDetails?.images && (
              <FastImage
                style={{width: width, height: 200, alignSelf: 'center'}}
                source={{uri: productDetails?.images[0]}}
              />
            )} 
          </View> */}
        </View>
        <View style={styles.scrollContainer}>
          <ScrollView
            horizontal={true}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {
                      x: scrollX,
                    },
                  },
                },
              ],
              {useNativeDriver: false},
            )}
            scrollEventThrottle={1}>
            {productDetails?.images &&
              productDetails?.images?.map((image, imageIndex) => {
                return (
                  <View
                    style={{width: windowWidth, height: 250}}
                    key={imageIndex}>
                    <ImageBackground source={{uri: image}} style={styles.card}>
                      <TouchableOpacity
                        style={styles.likeContainer}
                        activeOpacity={0.5}
                        onPress={onPressLike}>
                        <FastImage
                          style={styles.bagIcon}
                          source={
                            isLiked ? AppImage.fillHeart : AppImage.emptyHeart
                          }
                          tintColor={isLiked ? Colors.red : Colors.grey40}
                          resizeMode="contain"
                        />
                      </TouchableOpacity>
                    </ImageBackground>
                  </View>
                );
              })}
          </ScrollView>
          <View style={styles.indicatorContainer}>
            {productDetails?.images?.map((image, imageIndex) => {
              const width = scrollX.interpolate({
                inputRange: [
                  windowWidth * (imageIndex - 1),
                  windowWidth * imageIndex,
                  windowWidth * (imageIndex + 1),
                ],
                outputRange: [8, 16, 8],
                extrapolate: 'clamp',
              });

              return (
                <Animated.View
                  key={imageIndex}
                  style={[styles.normalDot, {width: width}]}
                />
              );
            })}
          </View>
        </View>

        <View style={ApplicationStyles.pageSpacing}>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>
              {`$${productDetails?.price}`}
              <Text style={{fontWeight: Fonts.Weight.lower}}>/KG</Text>
            </Text>
            <View
              style={{
                padding: 5,
                paddingHorizontal: 10,
                backgroundColor: Colors.primary,
                borderRadius: 50,
                marginLeft: 10,
              }}>
              <Text
                style={{
                  color: Colors.secondary,
                }}>{`${productDetails?.discountPercentage}% OFF`}</Text>
            </View>
          </View>

          <View
            style={[ApplicationStyles.rowAlignItemCenter, {paddingTop: 30}]}>
            <ActionButton
              title={AppConstant.ADD_CART}
              onPress={onPressAddCart}
              containerStyle={styles.addCartBtn}
              textStyle={{color: Colors.primary}}
            />
            <ActionButton
              title={AppConstant.BUY_NOW}
              containerStyle={ApplicationStyles.fullFlex}
              onPress={onPressBuyNow}
            />
          </View>

          <Text style={styles.detailsText}>{AppConstant.DETAILS}</Text>
          <Text style={styles.description}>{productDetails?.description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailPostScreen;
