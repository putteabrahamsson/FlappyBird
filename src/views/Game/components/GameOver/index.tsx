import { useNavigation } from '@react-navigation/core';
import React, { FC } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

type Props = {
  score: number;
};

const GameOver: FC<Props> = ({ score }) => {
  const { goBack } = useNavigation();

  return (
    <View style={styles.wrapper}>
      <View style={styles.box}>
        <Text style={styles.title}>GAME OVER</Text>
        <Text style={styles.subTitle}>Score</Text>
        <Text style={styles.subTitle}>{score}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={goBack}>
          <Text style={styles.buttonText}>
            Restart game
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    zIndex: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, .7)',
  },
  box: {
    width: '90%',
    borderRadius: 10,
    backgroundColor: 'red',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
  },
  subTitle: {
    fontSize: 20,
  },
  button: {
    width: '100%',
    height: 70,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default GameOver;
