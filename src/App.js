import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

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
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}

export default App;
