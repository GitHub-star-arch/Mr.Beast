import React from 'react'
import { View, TouchableOpacity, TextInput, Text, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'

export default class WPP extends React.Component {

    render() {
        return (
            <View style={{flex:1}} >
                <WebView source={{uri:'https://www.paypal.com/in/home'}} />
            </View>
        )
    }

}