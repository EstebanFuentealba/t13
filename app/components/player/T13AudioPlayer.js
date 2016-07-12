import React from 'react';
import Player from './Player';
import {
  StyleSheet,
  View
} from 'react-native';
export default class T13AudioPlayer extends React.Component {
  render(){
    return (
      <Player
        streamingURL={this.props.streamingURL}
        {...this.props}
        />
    );
  }
};
