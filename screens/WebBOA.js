import React from 'react'
import { View, TouchableOpacity, TextInput, Text, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'

export default class BOA extends React.Component {

    render() {
        return (
            <View style={{flex:1}} >
                <WebView source={{uri:'https://www.bankofamerica.com/'}} />
            </View>
        )
    }

}