import React, { FC } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import { useStateHolder } from '../../../../hooks/useStateHolder';
import { GraphicSettings } from '../../../../utils/graphicSettings';

type Props = {
  score: number;
};
const Header: FC<Props> = ({ score }) => {
  const { paused, setPaused } = useStateHolder();

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        onPress={() => {
          setPaused();
        }}
        style={styles.button}>
        <Text style={styles.buttonText}>
          {paused ? 'Resume' : 'Pause'}
        </Text>
      </TouchableOpacity>

      <View style={styles.button}>
        <Text style={styles.buttonText}>{score}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 50,
    top: 70,
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    zIndex: 99999,
    flexDirection: 'row',
  },
  button: {
    padding: 7,
    backgroundColor: GraphicSettings.menuButtonColor,
    borderRadius: 5,
  },
  buttonText: {
    color: GraphicSettings.menuButtonTextColor,
  },
});

export default Header;
