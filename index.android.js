/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
 AppRegistry,
 StyleSheet,
 Text,
 View
} from 'react-native';
import App from './components/App';

class T13 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <App />
    );
  }
};
AppRegistry.registerComponent('t13', () => T13);
