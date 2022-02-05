import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import DefaultButton from '../../components/Buttons/DefaultButton';
import SafeArea from '../../components/Containers/SafeArea';
import { lobbyButtons } from './utils/LobbyButtons';

const Lobby: FC = () => {
  const { navigate } = useNavigation();

  const navigateToScreen = (options) => {
    if (options) navigate(options?.route);
  };

  return (
    <SafeArea>
      <ScrollView>
        <View style={styles.wrapper}>
          {lobbyButtons.map((button) => (
            <DefaultButton
              key={button?.title}
              title={button?.title}
              onPress={navigateToScreen}
              options={button?.options}
            />
          ))}
        </View>
      </ScrollView>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'blue',
  },
});

export default Lobby;
