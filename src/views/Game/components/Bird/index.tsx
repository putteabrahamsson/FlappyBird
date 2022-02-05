import React, { FC, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useStateHolder } from '../../../../hooks/useStateHolder';
import { BirdSettings } from '../../../../utils/gameSettings';
import { getScreenSizes } from '../../../../utils/getScreenSize';
import { GraphicSettings } from '../../../../utils/graphicSettings';

type Props = {
  gameOver: () => void;
};
const Bird: FC<Props> = ({ gameOver }) => {
  const { obstaclePosX, obstaclePosY, paused, setPaused } =
    useStateHolder();

  const [position, setPosition] = useState({
    y: getScreenSizes().height / 2 - BirdSettings.birdSize,
    x: BirdSettings.startPosition,
  });

  let gameTimerId;

  useEffect(() => {
    const oldPosition = position;

    if (
      oldPosition.y <
        getScreenSizes().height -
          BirdSettings.birdSize / 2 &&
      !paused
    ) {
      gameTimerId = setInterval(() => {
        const newPosition = {
          x: oldPosition.x,
          y: oldPosition.y + BirdSettings.gravity,
        };

        setPosition(newPosition);
      }, 30);

      return () => {
        clearInterval(gameTimerId);
      };
    } else if (paused) {
      console.log('paused bird');
    } else {
      setPaused();
      gameOver();
    }
  }, [position, paused]);

  useEffect(() => {
    const maxX =
      BirdSettings.birdSize + BirdSettings.startPosition;
    const bottomObstacle =
      getScreenSizes().height -
      obstaclePosY?.bottomObstacle;
    const topObstacle = obstaclePosY?.topObstacle;

    console.log(maxX);
    console.log(obstaclePosX);
    if (obstaclePosX < maxX && obstaclePosX > maxX - 70) {
      if (
        position.y > topObstacle &&
        position.y < bottomObstacle
      ) {
        console.log('Passed obstacle');
      } else {
        setPaused();
        gameOver();
      }
    }
  }, [obstaclePosX]);

  const jump = () => {
    if (!paused) {
      const oldPosition = position;

      const newPosition = {
        x: oldPosition.x,
        y: oldPosition.y - BirdSettings.jumpHeight,
      };
      setPosition(newPosition);
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.button}
      onPress={jump}>
      <View
        style={[
          styles.birdWrapper,
          { top: position.y, left: position.x },
        ]}></View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  birdWrapper: {
    width: BirdSettings.birdSize,
    height: BirdSettings.birdSize,
    backgroundColor: GraphicSettings.birdColor,
    borderRadius: BirdSettings.birdRadius,
    position: 'absolute',
  },
  button: {
    width: '100%',
    height: '100%',
    zIndex: 21,
  },
});

export default Bird;
