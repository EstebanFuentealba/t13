import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Video from 'react-native-video';
import { toggleIsPlaying } from '../../actions/playerActions';

export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paused: false,
      playInBackground: props.playInBackground || false
    };
  }
  componentWillUnmount(){
    this.setState({
      paused: true
    });
  }
  render(){
    return (
      <Video
          source={{uri: this.props.streamingURL }}
          playInBackground={this.state.playInBackground}
          muted={false}
          paused={this.state.paused}
          volume={1}
          onLoadStart={() => {
            const { dispatch } = this.props;
            dispatch(toggleIsPlaying(false));
          }}
          onLoad={() => {
            const { dispatch } = this.props;
            dispatch(toggleIsPlaying(true));
          }}
          onEnd={() => {
            const { dispatch } = this.props;
            dispatch(toggleIsPlaying(false));
          }}
          onError={() => {
            const { dispatch } = this.props;
            dispatch(toggleIsPlaying(false));
          }}
          controls={false}
          {...this.props}
        />
    );
  }
};
