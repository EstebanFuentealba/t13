import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Main from './Main';
import Intro from './Intro';
import T13VideoPlayer from './T13VideoPlayer';

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      runTutorial: true
    };
  }
  successTutorial() {
    this.setState({
      runTutorial: false
    });
  }
  render(){
    if(this.state.runTutorial) {
      return (
        <View style={styles.container}>
          <Intro app={this}/>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Main />
      </View>
    );
  }
};
