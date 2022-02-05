import { Dimensions } from 'react-native';

export const getScreenSizes = () => {
  const height = Dimensions.get('screen').height;
  const windowHeight = Dimensions.get('window').height;

  const width = Dimensions.get('screen').width;
  const windowWidth = Dimensions.get('window').width;

  return {
    height,
    width,
    windowHeight,
    windowWidth,
  };
};
