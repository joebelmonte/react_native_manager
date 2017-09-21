import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAH9STk6W54JKLOZvf4CZ9XFpplKV3yVaA',
      authDomain: 'manager-12590.firebaseapp.com',
      databaseURL: 'https://manager-12590.firebaseio.com',
      projectId: 'manager-12590',
      storageBucket: 'manager-12590.appspot.com',
      messagingSenderId: '834043710801'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello!</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
