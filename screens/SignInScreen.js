import React, {useState, useEffect} from 'react'
import {View, TextInput ,Button ,StyleSheet, Alert, ImageBackground} from 'react-native'
// import { useDispatch } from 'react-redux';

import User from '../model/User'

const SingInScreen = props =>{
    const [enteredName, setEnteredName] = useState('')
    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredPassword, setEnteredPassword] = useState('')
    

    // const dispatch = useDispatch();

    const setName = (name) =>{
        setEnteredName(name)
    }
    const setEmail = (email) =>{
        setEnteredEmail(email)
    }
    const setPassword = (password)=>{
        setEnteredPassword(password)
    }
 //   useEffect(()=>{
        const onHandeleSingIn = ()=>{
            //auth-> register new user
            const user = new User(enteredName, enteredEmail, enteredPassword);
            // Alert.alert('Please Wait...')
      //      if(registered)
            //else 
          //  Alert.alert("you have succsefully registered!", [{text: 'thanks!'}])
            props.navigation.navigate('CityAndCardScreen',{user: user})
        }
 //   })
    
    return (
        
        <ImageBackground
        source={require('../assets/syperBackground.jpg')}
        style={styles.bgImage}
      >
        <View style={styles.screen}>
            <TextInput style={styles.textInput} 
            placeholder="name"
            onChangeText={setName}
            value={enteredName}/>
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
               <Button title="SING IN"
                navigation={props.navigation}
                onPress={()=>onHandeleSingIn()}/>
            </View>
            <View style={styles.button}>
               <Button title="יש לך כבר חשבון?"
                onPress={()=>props.navigation.navigate('LogInScreen')}/> 
            </View>
        </View>
        </ImageBackground>
    )
}

SingInScreen.navigationOptions = {
    headerTitle: 'SIGN IN'
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
        width: '70%',
        color: 'black'
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

export default SingInScreen