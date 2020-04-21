import React, {useState} from 'react'
import { View, StyleSheet, ImageBackground,TextInput, Button } from 'react-native'

const ResetPasswordScreen = props=>{
    const [enteredEmail, setEnteredEmail] = useState('')
    const setEmail = (email) =>{
        setEnteredEmail(email)
    }

    const onHandleResetPassword = ()=>{
        props.navigation.navigate('LogInScreen')
    } 
    
    return (
        <ImageBackground
        source={require('../assets/syperBackground.jpg')}
        style={styles.bgImage}
      >
        <View style={styles.screen}>
            <TextInput style={styles.textInput}
             placeholder="email"
             onChangeText={setEmail}
             value={enteredEmail}/>
            <View style={styles.button}>
                <Button title="send me new password"
                onPress={()=>onHandleResetPassword()}/>
            </View>
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    screen:{
        marginTop: 200,
        flex:1,
        alignItems: 'center'
    },
    textInput:{
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        margin: 20,
        alignContent:'center',
        alignItems: 'center',
        width: '70%'
    },
    button:{
        width: '100%',
        margin: 10,
        padding:10,
        alignItems: 'center',
        alignContent:'center',
        marginVertical:0
    },
    bgImage: {
      width: '100%',
      height: '100%',
      justifyContent: 'flex-end',
    }
})

export default ResetPasswordScreen