import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {ProductItem} from '../../component';
import {ApplicationStyles, Colors} from '../../theme';

const FavouriteScreen = ({navigation}) => {
  const {feed} = useSelector(state => state);

  const [productList, setProductList] = useState([]);
  const productArr = feed?.productArr;

  useEffect(() => {
    setProductList(productArr);
  }, [productArr]);

  const renderProduct = ({item, index}) => {
    if (item?.liked) {
      return <ProductItem showBtn={false} item={item} index={index} />;
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        data={productList}
        renderItem={renderProduct}
        keyExtractor={item => item?.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    ...ApplicationStyles.pageSpacing,
    flex: 1,
    backgroundColor: Colors.secondary,
  },
});

export default FavouriteScreen;
