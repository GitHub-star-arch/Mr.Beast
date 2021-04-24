import React from 'react'
import { View, TouchableOpacity, TextInput, Text, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'

export default class WGP extends React.Component {

    render() {
        return (
            <View style={{flex:1}} >
                <WebView source={{uri:'https://pay.google.com/intl/en_in/about/business/'}} />
            </View>
        )
    }

}