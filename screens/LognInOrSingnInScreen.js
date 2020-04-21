import React, {useState} from 'react'
import {View,Text, TextInput ,Button ,StyleSheet, ImageBackground, TouchableOpacity} from 'react-native'

const LogInOrSingInScreen = props =>{
    [currentComponent, setCurrentComponent] = useState()

    const onHandeleLogIn = ()=> props.navigation.navigate('LogInScreen')//setCurrentComponent( <LogInScreen />)
    const onHandeleSignIn = ()=> props.navigation.navigate('SignInScreen')//setCurrentComponent( <SingInScreen />)
    
    const initialScreen = (
         <View style={styles.screen }>
                <TouchableOpacity onPress = {() => onHandeleLogIn()}
                style = {styles.button}
                        >
                        <Text style = {styles.buttonText}>LOG IN </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => onHandeleSignIn()}
                style = {styles.button}>
                        <Text style = {styles.buttonText}>SING IN </Text>
                </TouchableOpacity>
          </View>
    )
    
    if(!currentComponent){
        setCurrentComponent(initialScreen)
    }

    return(
        <ImageBackground
        source={require('../assets/syperBackground.jpg')}
        style={styles.bgImage}
      >
        {currentComponent}
      </ImageBackground>
    ) 
}

LogInOrSingInScreen.navigationOptions ={
    headerTitle: 'Welcome',

}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        flexDirection: 'row',
        
        justifyContent: 'space-between',
        marginHorizontal: 20

    },
    button:{
        width: '45%',
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 30,
        marginTop: 650,
        backgroundColor: 'white',
        height: '10%',
        margin: 10
    },
    buttonText:{
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontSize: 20,
        alignContent:'center',
        paddingTop: '15%'
    },
    bgImage: {
      width: '100%',
      height: '100%',
      justifyContent: 'flex-end',
    }
})

export default LogInOrSingInScreen