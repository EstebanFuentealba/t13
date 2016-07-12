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
import Main from './app/components/Main';

class T13 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Main />
    );
  }
};
AppRegistry.registerComponent('t13', () => T13);
