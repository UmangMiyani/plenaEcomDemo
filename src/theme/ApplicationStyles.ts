import {StyleSheet} from 'react-native';

const ApplicationStyles = StyleSheet.create({
  rowAlignCenterJustifyCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowAlignCenterJustifyBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  alignCenterJustifyCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowAlignItemCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullFlex: {
    flex: 1,
  },
  pageSpacing: {
    paddingHorizontal: 20,
  },
});

export default ApplicationStyles;
