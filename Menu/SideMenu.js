import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

SideMenu = props=>{
    return (
        <View style={styles.container}>
        <Text
          onPress={() => props.navigate('MainScreen')}
          style={styles.uglyDrawerItem}>
          Screen 1
        </Text>
        <Text
          onPress={() => props.navigate('LogInScreen')}
          style={styles.uglyDrawerItem}>
          Screen 2
        </Text>
      </View>
    )
 }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  uglyDrawerItem: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E73536',
    padding: 15,
    margin: 5,
    borderRadius: 2,
    borderColor: '#E73536',
    borderWidth: 1,
    textAlign: 'center'
  }
})

export default SideMenu