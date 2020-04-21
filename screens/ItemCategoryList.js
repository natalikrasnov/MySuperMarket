import React, {useState} from 'react'
import {View,Text, FlatList, StyleSheet, Button, TouchableOpacity} from 'react-native'
import SearchableDropdown from 'react-native-searchable-dropdown';

import Colors from '../constants/Colors'

const categories = [
    {id: 1,
        name: "milk"},
    {id: 1,
        name: "honee"},
    {id: 1,
        name: "bread"},
    {id: 1,
        name: "salt"},
]

ItemCategoryList = props =>{
    const user = props.navigation.getParam('user', {})

   const [selectedCategories, setSelectedCategories] = useState(null);

    const addItemToList=(category)=>{
      if(selectedCategories)
          setSelectedCategories([...selectedCategories, category])
      else
        setSelectedCategories([{category}])
    }

    const  onRemoveItem=(item) => {
        setSelectedCategories(selectedCategories.filter((sitem) => sitem !== item));
    }

    const onHandleNextButton=()=>{
      
      props.navigation.navigate('Main',{user: user})
    }

    const renderedItems = <FlatList data={selectedCategories}
    keyExtractor={item => item.id}
     renderItem={obj=> <View  style={styles.itemTextLable}>
       <View style={styles.itemTextStyle}>       
           <Text>{obj.item.name}</Text> 
      </View>
         <TouchableOpacity
         style={styles.butonDelete}
         onPress={()=> onRemoveItem(obj.item)}>        
            <Text>X</Text>
        </TouchableOpacity>
         </View>}
       />
     
    return(
      <View>
        <Text>What do you want to shop?</Text>

        <SearchableDropdown
          onTextChange={text => console.log(text)}
          //On text change listner on the searchable input
          onItemSelect={item => /*alert(item)}*/addItemToList(item)}
          //onItemSelect called after the selection from the dropdown
          containerStyle={styles.containerStyle}
          //suggestion container style
          textInputStyle={styles.textInputStyle}
          itemStyle={styles.itemStyle}
          itemTextStyle={styles.itemTextStyle}
          itemsContainerStyle={styles.itemsContainerStyle}
          items={categories}
          //mapping of item array
        //  defaultIndex={1}
          //default selected item index
          placeholder="category"
          //place holder for the search input
          resetValue={false}
          //reset textInput Value with true and false state
          underlineColorAndroid="transparent"
          //To remove the underline from the android input
          listProps={{ nestedScrollEnabled: true}}
        />
      {renderedItems}
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
        fontSize: 17,
        padding:15
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
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20

      },
      textLable:{
          padding: 10,
          marginVertical: 15,
          marginHorizontal: 16,
          fontSize: 25,
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
      butonDelete:{
        marginLeft: 20,
        padding:10
      }
})

export default ItemCategoryList