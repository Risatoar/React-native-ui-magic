import { Dimensions, Platform } from 'react-native';

export const isIos = Platform.OS === 'ios';
const { height, width } = Dimensions.get('window');
const baseHeight = 667;
const baseWidth = 375;

const baseX = Math.sqrt(baseHeight * baseHeight + baseWidth * baseWidth);
const x = Math.sqrt(height * height + width * width);

export const HRatio = width / baseWidth;
export const VRatio = height / baseHeight;
export const winWidth = width;
export const winHeight = height;
export const viewWidth = width;
export const viewHeight = height - (isIos ? 64 : 56);
export const Ratio = x / baseX;
export const convertX = (width) => {
  return Math.round(width * HRatio);
};
export const convertY = (height) => {
  return Math.round(height * HRatio);
};
export const convert = (number) => {
  return Math.round(number * Ratio);
};

export const topBarHeight = isIos ? (height === 812 ? 88 : 64) : 56;

export default {
  ratio: Ratio,
  hRatio: HRatio,
  vRatio: VRatio,
  width: winWidth,
  height: winHeight,
  viewWidth: width,
  viewHeight,
  convertX,
  convertY,
  convert,
  isIos,
  topBarHeight,
};
