import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Navigator
} from 'react-native';
import { connect } from 'react-redux';
import T13Navigator from './T13Navigator';
import Intro from './Intro';

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skipIntro: false
    };
  }
  render(){
    if(!this.state.skipIntro) {
      return <Intro parent={this} />;
    }
    return (
      <View style={styles.container}>
        <T13Navigator {...this.props} />
      </View>
    );
  }
};

function select(state) {
  console.log("SELECT",state);
  return {

  };
}

export default connect(select)(App);
