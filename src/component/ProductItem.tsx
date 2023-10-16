import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {ApplicationStyles, Colors, Fonts, width} from '../theme';
import {AppImage} from '../assets/icon';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setCartArr, updateFeedLikes} from '../store/feed/reducer';

const ProductItem = ({item, index, showBtn = true, onPress = () => null}) => {
  const dispatch = useDispatch();
  const {feed} = useSelector(state => state);

  const productArr = feed?.productArr;

  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setIsLiked(item?.liked);
  }, [item]);

  const onLikePress = () => {
    setIsLiked(!isLiked);
    let index = productArr?.findIndex(x => x?.id === item?.id);
    if (index !== -1) {
      dispatch(updateFeedLikes({index: index}));
    }
  };

  const addCartItem = () => {
    dispatch(setCartArr(item));
  };

  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.item} onPress={onPress}>
      <TouchableOpacity activeOpacity={0.5} onPress={onLikePress}>
        <FastImage
          source={isLiked ? AppImage.fillHeart : AppImage.emptyHeart}
          style={styles.likeIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <FastImage source={{uri: item?.images[0]}} style={styles.img} />
      <View
        style={[
          ApplicationStyles.rowAlignCenterJustifyBetween,
          {paddingTop: 46},
        ]}>
        <Text style={styles.price}>{`$${item?.price}`}</Text>
        {showBtn && (
          <TouchableOpacity activeOpacity={0.5} onPress={addCartItem}>
            <FastImage
              source={AppImage.add}
              style={styles.addCartIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.title} numberOfLines={2}>
        {item?.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    width: width * 0.5 - 28,
    padding: 20,
    backgroundColor: Colors.white20,
    borderRadius: 12,
    marginBottom: 22,
    shadowColor: Colors.black10,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  img: {
    width: 68,
    height: 68,
    borderRadius: 10,
    alignSelf: 'center',
  },
  price: {
    fontSize: Fonts.size.f14,
    fontWeight: Fonts.Weight.semi,
    color: Colors.black10,
  },
  likeIcon: {
    width: 14,
    height: 14,
  },
  addCartIcon: {
    width: 24,
    height: 24,
  },
  title: {
    paddingTop: 4,
    fontSize: Fonts.size.f12,
    fontWeight: Fonts.Weight.lower,
    color: Colors.grey30,
  },
});

export default ProductItem;
