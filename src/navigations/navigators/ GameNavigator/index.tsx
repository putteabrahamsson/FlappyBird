import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { gameStack } from '../../stacks/GameStack';

const Stack = createStackNavigator();

const GameNavigator: FC = () => (
  <Stack.Navigator>
    <Stack.Group screenOptions={{ headerShown: false }}>
      {gameStack.map((screen) => {
        return (
          <Stack.Screen
            key={screen?.name}
            name={screen?.name}
            component={screen?.component}
          />
        );
      })}
    </Stack.Group>
  </Stack.Navigator>
);

export default GameNavigator;
