import React, { FC, ReactNode } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

type Props = {
  children: ReactNode;
};
const SafeArea: FC<Props> = ({ children }) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'blue',
    flex: 1,
  },
});

export default SafeArea;
