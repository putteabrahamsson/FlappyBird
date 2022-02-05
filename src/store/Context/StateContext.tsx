import React, {
  createContext,
  FC,
  ReactElement,
  useState,
} from 'react';
import { getScreenSizes } from '../../utils/getScreenSize';

type StateProviderProps = {
  children: ReactElement;
};
export const StateProvider: FC<StateProviderProps> = ({
  children,
}) => {
  const [obstaclePosY, setObstaclePosY] = useState<{
    topObstacle: number;
    bottomObstacle: number;
  }>();
  const [obstaclePosX, setObstaclePosX] = useState(
    getScreenSizes().width,
  );

  const [pausedState, setPausedState] = useState(true);

  const setObstaclePositionY = (
    topObstacle: number,
    bottomObstacle: number,
  ) => {
    setObstaclePosY({
      topObstacle,
      bottomObstacle,
    });
  };

  const setPaused = () => {
    setPausedState(!pausedState);
  };

  const setObstaclePositionX = (x: number) => {
    setObstaclePosX(x);
  };

  return (
    <StateContext.Provider
      value={{
        setObstaclePositionY,
        setObstaclePositionX,
        obstaclePosY,
        obstaclePosX,
        setPaused,
        paused: pausedState,
      }}>
      {children}
    </StateContext.Provider>
  );
};

type StateContextProps = {
  setObstaclePositionY: (
    topObstacle: number,
    bottomObstacle: number,
  ) => void;
  setObstaclePositionX: (x: number) => void;
  obstaclePosY;
  obstaclePosX;
  setPaused: () => void;
  paused: boolean;
};

const defaultValue = {} as StateContextProps;
export const StateContext = createContext(defaultValue);
