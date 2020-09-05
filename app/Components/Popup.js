import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Paragraph, Dialog, Portal, Provider} from 'react-native-paper';
const Popup = ({LoginPress,hideDialog,showDialog}) => {
    const [visible, setVisible] = React.useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);
    return (
        <View></View>
    )
}

export default Popup

const styles = StyleSheet.create({})
