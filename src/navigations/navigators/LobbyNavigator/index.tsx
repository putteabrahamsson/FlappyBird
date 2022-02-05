import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { lobbyStack } from '../../stacks/lobbyStack';

const Stack = createStackNavigator();

const LobbyNavigator: FC = () => (
  <Stack.Navigator>
    <Stack.Group screenOptions={{ headerShown: false }}>
      {lobbyStack.map((screen) => {
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

export default LobbyNavigator;
