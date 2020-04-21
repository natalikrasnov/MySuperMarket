import React, {useState, useEffect} from 'react'
import {View, TextInput ,Button , StyleSheet, ImageBackground} from 'react-native'

import User from '../model/User'
// import {login} from '../store/actions/auth'

const LogInScreen = props =>{
    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredPassword, setEnteredPassword] = useState('')

    const setEmail = (email) =>{
        setEnteredEmail(email)
    }
    const setPassword = (password)=>{
        setEnteredPassword(password)
    }
    
    const onHandeleSingIn = ()=>{
            //auth-> register new user
            // alert('Please Wait...')
      //      if(!registered) 
            //else 
            // const responceLogin = login(email, password)
          //  const user = User.getUser(email, password)

        //    alert("Welcome back!", [{text: 'thanks!'}])
            props.navigation.navigate('Main')//, {user:user})
     }

    const onHandleResetPassword = ()=>{
        props.navigation.navigate('ResetPassword')
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
            <TextInput style={styles.textInput} 
            placeholder="password"
             secureTextEntry={true}
             onChangeText={setPassword}
             value={enteredPassword}/>
            <View style={styles.button}>
                <Button title="LOG IN"
                onPress={()=>{
                    alert("Welcome back!", [{text: 'thanks!'}])
                    onHandeleSingIn()}}/>
            </View>
            <View style={styles.button}>
                <Button title=" שכחת את הסיסמא?"
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
    buttonWitoutBorder:{
        backgroundColor: 'white',

    },
    bgImage: {
      width: '100%',
      height: '100%',
      justifyContent: 'flex-end',
    }
})

export default LogInScreen