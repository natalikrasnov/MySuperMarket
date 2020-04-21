import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import NavigationRouter from './navigation/NavigationRout'
import LogInOrSingInScreen from './screens/LognInOrSingnInScreen'

// import { init } from './helpers/db';
// check if user is authenticate 
// if user exist-> load all data base.
// init()
//   .then(() => {
//     console.log('Initialized database');
//   })
//   .catch(err => {
//     console.log('Initializing db failed.');
//     console.log(err);
//   });

// const rootReducer = combineReducers({
//   places: placesReducer
// });

// const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
  //  <Provider store={store}>
      <NavigationRouter/>
    //</Provider>
  );
}
