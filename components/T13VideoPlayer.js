import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Video from 'react-native-video';
//import Orientation from 'react-native-orientation';


export default class T13VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    //Orientation.lockToLandscape();
  }
  componentWillUnmount() {
    //Orientation.unlockAllOrientations(); //this will lock the view to Portrait
  }
  render(){
    return (
      <View style={styles.container}>
        <Video
          source={{uri: this.props.streamingURL }}
          style={styles.fullScreen}
          paused={false}
          volume={1}
          onEnd={() => { console.log('Done!') }}
          controls={false}
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
