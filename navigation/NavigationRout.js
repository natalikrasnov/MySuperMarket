import React, { useEffect, useRef , useDispatch} from 'react';
// import { useSelector } from 'react-redux';
import { createStackNavigator } from 'react-navigation-stack';
import {AppRegistry, Dimensions, View, Text, SafeAreaView,DrawerItems, Button} from 'react-native'
import { createDrawerNavigator } from 'react-navigation-drawer';
import { NavigationActions, createAppContainer,createSwitchNavigator } from 'react-navigation';

import SideMenu from '../Menu/SideMenu'
// import AppNavigator from '../navigation/AppNavigator'
// import navigationRout from '../navigation/NavigationRout'


import LogInOrSingInScreen from '../screens/LognInOrSingnInScreen'
import LogInScreen from '../screens/LogInScreen'
import SignInScreen from '../screens/SignInScreen'
import MainScreen from '../screens/MainScreen'
import SypermarketList from '../screens/SypermarketList'
import ResetPasswordScreen from '../screens/ResetPasswordScreen'
import ItemCategoryList from '../screens/ItemCategoryList'
import CityAndCardScreen from '../screens/CityAndCardScreen'

import Colors from '../constants/Colors'


// import AppNavigator from './AppNavigator';

// const NavigationContainer = props => {
//   /////////////////////////////////////////////////////////////////
//   //for auth user- level

//   // const navRef = useRef();
//   // const isAuth = useSelector(state => !!state.auth.token);

//   // useEffect(() => {
//   //   if (!isAuth) {
//   //     navRef.current.dispatch(
//   //       NavigationActions.navigate({ routeName: 'Auth' })
//   //     );
//   //   }
//   // }, [isAuth]);

//   // return <AppNavigator ref={navRef} />;


//   ////////////////////////////////////////////////////////////


 
// };

// export default NavigationContainer;

// drawer stack

const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0
  }
})

const DrawerStack = createDrawerNavigator({
  screen1: { screen: MainScreen },
  scrin2: {screen: LogInScreen}
}, {
  gesturesEnabled: false,
  contentComponent: SideMenu
})

const drawerButton = (navigation) =>
  <Text
    onPress={() => {
      // Coming soon: navigation.navigate('DrawerToggle')
      // https://github.com/react-community/react-navigation/pull/2492
      if (navigation.state.index === 0) {
        navigation.navigate('DrawerOpen')
      } else {
        navigation.navigate('DrawerClose')
      }
    }
  }>Menu</Text>


const DrawerNavigation = createStackNavigator({
  DrawerStack: { screen: DrawerStack }
}, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
    gesturesEnabled: false,
    headerLeft: drawerButton(navigation) 
   })
})

const NavigationRouter = createStackNavigator({
  LogInOrSingIn : LogInOrSingInScreen,
  LogInScreen : LogInScreen,
  SignInScreen: SignInScreen,
  MainScreen : MainScreen,
  ListOfSypermarkets : SypermarketList,
  ResetPassword : ResetPasswordScreen,
  ItemCategoryList: ItemCategoryList,
  CityAndCardScreen: CityAndCardScreen
},
{
  headerMode: 'float',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
  },
  transitionConfig: noTransitionConfig

})


const MainNavigator = createSwitchNavigator({
  // Startup: StartupScreen,
  Auth: NavigationRouter,
  Main: DrawerNavigation
});


export default createAppContainer(MainNavigator)
