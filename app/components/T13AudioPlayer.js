import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Video from 'react-native-video';
import { toggleIsPlaying } from '../actions/playerActions';

export default class T13AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paused: false
    };
  }
  componentWillUnmount(){
    this.setState({
      paused: true
    });
    console.log("UNLOAD RADIO")
  }
  render(){
    return (
      <Video
          ref="audioPlayer"
          source={{uri: this.props.streamingURL }}
          playInBackground={true}
          onLoadStart={() => {
            const { dispatch } = this.props;
            dispatch(toggleIsPlaying(false));
          }}
          onLoad={() => {
            const { dispatch } = this.props;
            dispatch(toggleIsPlaying(true));
          }}
          muted={false}
          paused={this.state.paused}
          volume={1}
          onEnd={() => {
            const { dispatch } = this.props;
            dispatch(toggleIsPlaying(false));
          }}
          onError={() => {
            const { dispatch } = this.props;
            dispatch(toggleIsPlaying(false));
          }}
          controls={false}
        />
    );
  }
};
