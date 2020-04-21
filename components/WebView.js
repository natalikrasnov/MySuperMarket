import React from 'react'
import {WebView, StyleSheet} from 'react-native'

const WebViewComponnent = props =>{
    return <WebView 
    source={{uri: props.sourceUri}}
    style={styles.screen} />
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        margin: 20
    }
})

export default WebViewComponnent