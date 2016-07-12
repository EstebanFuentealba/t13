import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import { connect } from 'react-redux';
import T13Navigator from './T13Navigator';

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  render(){
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
