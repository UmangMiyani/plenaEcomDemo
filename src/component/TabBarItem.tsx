import React, {useEffect, useRef} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Colors} from '../theme';
import {AppImage} from '../assets/icon';
import Fonts from '../theme/Fonts';

const TabBarItem = (props: {
  item: any;
  onPress: any;
  accessibilityState: any;
}) => {
  const {item, onPress, accessibilityState} = props;
  const isFocusedTab = accessibilityState?.selected;
  const viewRef = useRef<any>(null);
  const circleRef = useRef<any>(null);

  const focusedAnimate = {
    0: {scale: 0.5, translateY: 7},
    0.92: {translateY: -20},
    1: {scale: 1.2, translateY: -10},
  };
  const normalAnimate = {
    0: {scale: 1.2, translateY: -10},
    1: {scale: 1, translateY: 7},
  };

  const AnimateCircle = {
    0: {scale: 0},
    0.3: {scale: 0.9},
    0.5: {scale: 0.2},
    0.8: {scale: 0.7},
    1: {scale: 1},
  };
  const normalCircle = {0: {scale: 1}, 1: {scale: 0}};

  useEffect(() => {
    if (isFocusedTab) {
      viewRef.current.animate(focusedAnimate);
      circleRef.current.animate(AnimateCircle);
    } else {
      viewRef.current.animate(normalAnimate);
      circleRef.current.animate(normalCircle);
    }
  }, [isFocusedTab]);

  const icon = () => {
    if (item?.label === 'Home') {
      return isFocusedTab ? AppImage.homeFilled : AppImage.home;
    } else if (item?.label === 'Categories') {
      return isFocusedTab ? AppImage.categoryFilled : AppImage.category;
    } else if (item?.label === 'Favourite') {
      return AppImage.heart;
    } else if (item?.label === 'More') {
      return AppImage.menu;
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Animatable.View ref={viewRef} duration={500} style={styles.container}>
        <View style={[isFocusedTab ? styles.btn : styles.focusedBtn]}>
          <Animatable.View ref={circleRef} style={styles.circle} />
          <Image
            style={{width: 25, height: 25}}
            source={icon()}
            tintColor={isFocusedTab && Colors.yellow}
          />
        </View>
        {!isFocusedTab && <Text style={styles.text}>{item?.label}</Text>}
      </Animatable.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: Colors.black10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  focusedBtn: {
    width: 24,
    height: 24,
    borderRadius: 50,
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  text: {
    fontSize: Fonts.size.f12,
    fontWeight: Fonts.Weight.medium,
    paddingTop: 2,
    textAlign: 'center',
    color: Colors.grey,
  },
});

export default TabBarItem;
