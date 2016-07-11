import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Video from 'react-native-video';


export default class T13AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "status": "not_loading"
    }
  }
  render(){
    return (
      <Video
          source={{uri: this.props.streamingURL }}
          playInBackground={true}
          onLoadStart={() => {
            this.setState({
              "status": "buffering"
            });
            this.props.onChangeStatus("buffering")
          }}
          onLoad={() => {
            this.setState({
              "status": "playing"
            });
            this.props.onChangeStatus("playing")
          }}
          muted={false}
          paused={false}
          volume={1}
          onEnd={() => {
            this.setState({
              "status": "end"
            });
            this.props.onChangeStatus("end")
          }}
          onError={() => {
            this.setState({
              "status": "error"
            });
            this.props.onChangeStatus("error")
          }}
          controls={false}
        />
    );
  }
};
