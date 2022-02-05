import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import DefaultButton from '../../components/Buttons/DefaultButton';
import GamePlan from '../../components/Views/GamePlan';
import { lobbyButtons } from './utils/LobbyButtons';

const Lobby: FC = () => {
  const { navigate } = useNavigation();

  const navigateToScreen = (options) => {
    if (options) navigate(options?.route);
  };

  return (
    <View style={styles.wrapper}>
      <GamePlan />
      <View style={styles.buttonWrapper}>
        {lobbyButtons.map((button) => (
          <DefaultButton
            key={button?.title}
            title={button?.title}
            onPress={navigateToScreen}
            options={button?.options}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  buttonWrapper: {
    width: '100%',
    height: '50%',
  },
});

export default Lobby;
