import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../components';
import {colors, useForm} from '../../utils';

export default function Register({navigation}) {
  const [form, setForm] = useForm({
    fullName: '',
    proffesion: '',
    email: '',
    password: ''
  })

  const onContinue = () => {
    console.log(form);
    navigation.navigate('UploadPhoto')
  };

  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Register" />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Input
            label="Full Name"
            value={form.fullName}
            onChangeText={(value) => setForm('fullName', value)}
          />
          <Gap height={24} />
          <Input
            label="Job"
            value={form.proffesion}
            onChangeText={(value) => setForm('proffesion', value)}
          />
          <Gap height={24} />
          <Input
            label="Email"
            value={form.email}
            onChangeText={(value) => setForm('email', value)}
          />
          <Gap height={24} />
          <Input
            label="Password"
            value={form.password}
            onChangeText={(value) => setForm('password', value)}
            secureTextEntry
          />
          <Gap height={40} />
          <Button title="Continue" onPress={onContinue} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
