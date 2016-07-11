import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import T13Navigator from './T13Navigator';

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
      <View style={styles.container}>
        <T13Navigator />
      </View>
    );
  }
};
