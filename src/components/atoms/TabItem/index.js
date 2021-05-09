import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { IconDoctor, IconMessages, IconMessagesActive, IconHospitals, IconDoctorActive, IconHospitalsActive } from '../../../assets'
import { colors, fonts } from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
    const Icon = () => {
        if (title === 'Doctor') {
            return active ? <IconDoctorActive /> : <IconDoctor />
        }
        if (title === 'Messages') {
            return active ? <IconMessagesActive /> : <IconMessages />
        }
        if (title === 'Hospitals') {
            return active ? <IconHospitalsActive /> : <IconHospitals />
        }
        return <IconDoctor />;
    };
    return (
        <TouchableOpacity onPress={onPress} onLongPress={onLongPress} style={styles.container}>
            <Icon style={styles.icon}/>
            <Text style={styles.text(active)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    text: (active) => ({
        fontSize: 10,
        color: active ? colors.text.menuActive : colors.text.menuInactive,
        fontFamily: fonts.primary[400],
        marginTop: 4
    })
})
