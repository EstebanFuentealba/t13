import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
const store = configureStore();


import App from './App';
import Intro from './Intro';

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
};
