import React from 'react';
import Player from './Player';
import {
  StyleSheet,
  View
} from 'react-native';
//import Orientation from 'react-native-orientation';


export default class T13VideoPlayer extends React.Component {
  componentDidMount() {
    //Orientation.lockToLandscape();
  }
  componentWillUnmount() {
    //Orientation.unlockAllOrientations(); //this will lock the view to Portrait
  }
  render(){
    return (
      <View style={styles.container}>
        <Player
          streamingURL={this.props.streamingURL}
          style={styles.fullScreen}
          {...this.props}
          />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
});
