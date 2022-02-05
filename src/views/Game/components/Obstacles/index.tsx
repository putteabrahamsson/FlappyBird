import React, { FC, useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { useStateHolder } from '../../../../hooks/useStateHolder';
import { ObstacleSettings } from '../../../../utils/gameSettings';
import { getScreenSizes } from '../../../../utils/getScreenSize';
import { GraphicSettings } from '../../../../utils/graphicSettings';

type Props = {
  passedObstacle: () => void;
};
const Obstacle: FC<Props> = ({ passedObstacle }) => {
  const {
    setObstaclePositionY,
    setObstaclePositionX,
    paused,
  } = useStateHolder();

  const maxHeight =
    Dimensions.get('window').height - ObstacleSettings.gap;

  const topObstacle =
    Math.random() *
    (maxHeight - ObstacleSettings.minHeight);
  const bottomObstacle = maxHeight - topObstacle;

  const [positionX, setPositionX] = useState(
    getScreenSizes().width - 5,
  );

  const [initValues, setInitValues] = useState(true);

  const [height, setHeight] = useState<{
    topObstacle: number;
    bottomObstacle: number;
  }>({
    topObstacle: topObstacle,
    bottomObstacle: bottomObstacle,
  });

  useEffect(() => {
    if (initValues) {
      setInitValues(false);
      setObstaclePositionY(
        height.topObstacle,
        height.bottomObstacle,
      );
    }
  }, [initValues]);

  const calculateHeight = () => {
    const top = topObstacle;
    const bottom = bottomObstacle;

    setObstaclePositionY(top, bottom);

    setHeight({ topObstacle: top, bottomObstacle: bottom });
  };

  let obstacleTimer;
  useEffect(() => {
    if (positionX > -ObstacleSettings.width && !paused) {
      obstacleTimer = setInterval(() => {
        const newPos =
          positionX - ObstacleSettings.movementSpeed;
        setPositionX(newPos);
        setObstaclePositionX(newPos);
      }, 3);

      return () => {
        clearInterval(obstacleTimer);
      };
    } else if (paused) {
      console.log('paused obstacle');
      clearInterval(obstacleTimer);
    } else {
      passedObstacle();
      calculateHeight();
      setPositionX(getScreenSizes().width);
    }
  }, [positionX, paused]);

  return (
    <>
      <View
        style={[
          styles.obstacle,
          {
            height: height?.topObstacle,
            left: positionX,
          },
        ]}
      />

      <View
        style={[
          styles.obstacle,
          {
            height: height?.bottomObstacle,
            bottom: 0,
            left: positionX,
          },
        ]}
      />
    </>
  );
};

const styles = StyleSheet.create({
  obstacle: {
    width: ObstacleSettings.width,
    backgroundColor: GraphicSettings.obstacleColor,
    position: 'absolute',
    zIndex: -1,
  },
});

export default Obstacle;
