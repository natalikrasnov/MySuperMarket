    import React from 'react'
    import {View,Text, FlatList, StyleSheet, SafeAre, Button} from 'react-native'

    import Sypermarket from '../model/Sypermarket'
    import Colors from '../constants/Colors'

    const supermarkets = ["שופרסל", "רמי לוי", "ינות ביתן", "מגה", "מחסני מזון"]
    //get Supermarkets from data-> according to users previews action(like -total price and bascket items)
    const supermarketList = supermarkets.map(item=>{
       // console.log(item)
       return new Sypermarket(item)
    } )
 
    SypermarketList = props =>{

        const user = props.navigation.getParam('user', {})
        
        const onHandleSelectCategory=(selectedItem)=>{
            user.setCurrentSuperMarket(supermarketList.find(item=> item.name===selectedItem))
            props.navigation.navigate('ItemCategoryList', {user: user})
        }

        return (
            <View>
                <Text style={styles.textLable}>ביחרו את הסופרמרקט המועדף עליכם :</Text>
                 <FlatList data={supermarketList}
                     keyExtractor={item => item.key}
                      renderItem={supermarket=> <View  style={styles.itemTextLable}>
                          <Button title={supermarket.item.name}
                            navigation={props.navigation}
                            onPress={()=> onHandleSelectCategory(supermarket.item.name)}/>
                          </View>}
                  />
            </View>
        ) 
    }

    const styles = StyleSheet.create({
        screen:{
            flex: 1
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
            fontSize: 25,
            alignContent: 'center',
            alignItems: 'center'
        }
    })

    export default SypermarketList