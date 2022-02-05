import React, { FC } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

type Props = {
  title?: string;
  onPress: (options?: any) => void;
  options?: any;
};
const DefaultButton: FC<Props> = ({
  title,
  onPress,
  options,
}) => {
  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() => onPress(options)}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 75,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});

export default DefaultButton;
