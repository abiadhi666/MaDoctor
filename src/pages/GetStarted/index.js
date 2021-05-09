import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { ILGetStarted, ILLogo } from '../../assets'
import { Button, Gap } from '../../components'
import { colors, fonts } from '../../utils'

const GetStarted = ({navigation}) => {
    return (
        <ImageBackground source={ILGetStarted} style={styles.page}>
            <View>
                <ILLogo />
                <Text style={styles.title}>Easy and Flexible Consult with Doctor by MaDoctor</Text>
            </View>
            <View>
                <Button title="Get Started" onPress={() => navigation.replace('Register')}/>
                <Gap height={8}/>
                <Button type="secondary" title="Sign In" onPress={() => navigation.replace('Login')}/>
            </View>
        </ImageBackground>
    )
}

export default GetStarted;

const styles = StyleSheet.create({
    page: {
        padding: 30,
        justifyContent: 'space-between',
        backgroundColor: colors.white,
        flex: 1
    },
    title: {
        paddingTop: 130,
        fontFamily: fonts.primary[600],
        fontSize: 24,
        lineHeight: 30,
        maxWidth: 220,
        color: colors.white
    }
})
