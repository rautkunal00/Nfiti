import { Dimensions, PixelRatio } from 'react-native';

const guidelineBaseWidth = 375;
const WINDOW_WIDTH = Dimensions.get('window').width;

export const scaleSize = size => (WINDOW_WIDTH / guidelineBaseWidth) * size;
export const scaleFont = size => size * PixelRatio.getFontScale();
