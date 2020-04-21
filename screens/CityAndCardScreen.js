import React, {useState} from 'react'
import {View,Text, FlatList, StyleSheet, Button,TouchableOpacity} from 'react-native'
import SearchableDropdown from 'react-native-searchable-dropdown';

import Colors from '../constants/Colors'
import IsraelCities from '../model/IsraelCities.json';

const allCities = IsraelCities.map(obj =>{
    return{
        name: obj.name,
        id: obj.name}
})

const cards = [{name: "visa" , key:1}, {name: "isracart", key:2}, {name: "mastercart", key:3}]

CityAndCardScreen = props =>{
    const user = props.navigation.getParam('user', {})
    
        
    const onHandleSelectedCity=(selectedItem)=>{
        user.setAddress(selectedItem)
    }
        
    const onHandleSelectedCard=(selectedItem)=>{
        user.setCard(selectedItem)
    }

    const onHandleNextButton=()=>{
        props.navigation.navigate('ListOfSypermarkets',{user: user})
    }


    return(
      <View>
        <Text></Text>

        <SearchableDropdown
          onTextChange={text => console.log(text)}
          //On text change listner on the searchable input
          onItemSelect={item => onHandleSelectedCity(item)}
          //onItemSelect called after the selection from the dropdown
          containerStyle={styles.containerStyle}
          //suggestion container style
          textInputStyle={styles.textInputStyle}
          itemStyle={styles.itemStyle}
          itemTextStyle={styles.itemTextStyle}
          itemsContainerStyle={styles.itemsContainerStyle}
          items={allCities}
          //mapping of item array
        //  defaultIndex={1}
          //default selected item index
          placeholder="your city"
          //place holder for the search input
          resetValue={false}
          //reset textInput Value with true and false state
          underlineColorAndroid="transparent"
          //To remove the underline from the android input
          listProps={{ nestedScrollEnabled: true}}
        />
            <View>
                <Text style={styles.textLable}>ביחרו את כרטיס המועדון שלכם:</Text>
                 <FlatList data={cards}
                     keyExtractor={item => item.key}
                      renderItem={obj=> 
                          <TouchableOpacity style={[styles.itemTextLable, obj.item.name != user.card ?null:styles.onfocusbutton]}
                            onPress={()=> onHandleSelectedCard(obj.item.name)}>
                              <Text> {obj.item.name}</Text>
                              </TouchableOpacity>}
                  />
            </View>  
            <View style={styles.buton}>
                <Button title="NEXT" 
                navigation={props.navigation}
                onPress = {()=>onHandleNextButton()}
                />
                </View> 
     </View>
    ) 
}

const styles = StyleSheet.create({
    screen:{
        flex: 1
    },
   
    textInputStyle:{
        //inserted text style
        padding: 20,
        borderWidth: 0,
        backgroundColor: '#FAF7F6',
      },
      itemStyle:{
        //single dropdown item style
        padding: 10,
        marginTop: 10,
        backgroundColor: '#FAF9F8',
      },
      itemTextStyle:{
        //single dropdown item's text style
        color: 'black',
        fontSize: 17
      },
      itemsContainerStyle:{
        //items container style you can pass maxHeight
        //to restrict the items dropdown hieght
        maxHeight: '100%',
      },
      containerStyle: { 
          padding: 5
         },
     itemTextLable:{
          backgroundColor: Colors.lightGray ,
          padding: 10,
          marginVertical: 8,
          marginHorizontal: 16,
          fontSize: 17,
      },
      textLable:{
          padding: 10,
          marginVertical: 15,
          marginHorizontal: 16,
          fontSize: 15,
          alignContent: 'center',
          alignItems: 'center'
      },
      buton:{
        padding: 10,
        marginTop: 30,
        alignContent: 'center',
        alignItems:'center',
        width: '100%',
        marginVertical:0

      },
      onfocusbutton:{
        backgroundColor: 'black'
      }
})

export default CityAndCardScreen