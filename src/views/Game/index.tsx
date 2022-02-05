import React, {
  createRef,
  FC,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import SafeArea from '../../components/Containers/SafeArea';
import { useStateHolder } from '../../hooks/useStateHolder';
import { StateProvider } from '../../store/Context/StateContext';
import { GraphicSettings } from '../../utils/graphicSettings';
import Bird from './components/Bird';
import GameOver from './components/GameOver';
import Header from './components/Header';
import Obstacle from './components/Obstacles';

const Game: FC = () => {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const setNewScore = () => setScore((prev) => prev + 1);

  return (
    <StateProvider>
      <>
        {gameOver && <GameOver score={score} />}
        <View style={styles.gameView}>
          <>
            <Header score={score} />

            <Obstacle passedObstacle={setNewScore} />
            <Bird
              gameOver={() => {
                setGameOver(true);
              }}
            />
          </>
        </View>
      </>
    </StateProvider>
  );
};

const styles = StyleSheet.create({
  gameView: {
    flex: 1,
    backgroundColor: GraphicSettings.background,
  },
});

export default Game;
