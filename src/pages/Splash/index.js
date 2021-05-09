import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import { colors, fonts } from '../../utils';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 3000);
  }, [navigation]);
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text
        style={styles.title}>
        MaDoctor
      </Text>
    </View>
  );
}

export default Splash

const styles = StyleSheet.create({
  page: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: colors.white
  },
  title: {
    fontFamily: fonts.primary[700],
    fontSize: 24,
    color: colors.text.primary,
    marginTop: 16,
  }
});
