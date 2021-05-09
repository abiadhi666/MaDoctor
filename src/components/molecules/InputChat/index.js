import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { colors, fonts } from '../../../utils';
import { Button } from '../../atoms';

const InputChat = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Tulis Pesan Untuk Nairobi"/>
      <Button type="btn-icon-send" disable={true} />
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        fontSize: 14,
        fontFamily: fonts.primary.normal,
        backgroundColor: colors.disable,
        padding: 14,
        maxHeight: 45,
        borderRadius: 10,
        flex: 1,
        marginRight: 10
    }
});
