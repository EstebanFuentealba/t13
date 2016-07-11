import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  DrawerLayoutAndroid,
  ToolbarAndroid
} from 'react-native';
import T13VideoPlayer from './T13VideoPlayer';
import T13AudioPlayer from './T13AudioPlayer';

let DRAWER_WIDTH_LEFT = 56;

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    backgroundColor: '#2c2c2c',
    height: 56,
  }
});


export default class T13DrawerLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "news",
      streamingURL: false
    };
  }
  onChangeStatusPlayer(status) {
    console.log(status);
  }
  _renderNavigationView() {
    if(this.state.status == 'video_streaming') {
      console.log(this.state.streamingURL);
      return <T13VideoPlayer
                streamingURL={this.state.streamingURL}
                />
    } else if(this.state.status == 'audio_streaming') {
      console.log(this.state.streamingURL);
      return <T13AudioPlayer
                streamingURL={this.state.streamingURL}
                onChangeStatus={this.onChangeStatusPlayer.bind(this)}
                />
    } else {
      return (
        <Text>hOLA</Text>
      )
    }
  }
  render(){
    let toolbarActions = [
      {title: 'T13 Radio', icon: require('image!ic_action_radio_normal'), show: 'always'},
      {title: 'Señal en Vivo', icon: require('image!ic_action_senal_normal'), show: 'always'},
      {title: '', icon: require('image!ic_action_t13_press'), show: 'always'}
    ];
    return (
      <DrawerLayoutAndroid
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        drawerWidth={Dimensions.get('window').width - DRAWER_WIDTH_LEFT}
        keyboardDismissMode="on-drag"
        ref={(drawer) => { this.drawer = drawer; }}
        renderNavigationView={this._renderNavigationView.bind(this)}>
        <View style={styles.container}>
          <ToolbarAndroid
            navIcon={require('image!ic_drawer')}
            onIconClicked={() => this.drawer.openDrawer()}
            onActionSelected={(position) => {
              switch(position) {
                case 0 :
                  console.log("RADIO");
                  if(this.props.radios.length > 0) {
                    let streamingURL = this.props.radios[0].url;
                    this.setState({
                      status: "audio_streaming",
                      streamingURL: streamingURL
                    });
                  }
                break;
                case 1 :
                  console.log("TV");
                  if(this.props.tvs.length > 0) {
                    let streamingURL = this.props.tvs[0].url;
                    this.setState({
                      status: "video_streaming",
                      streamingURL: streamingURL
                    });
                  }
                break;
                case 2 :
                  console.log("PROGRAMAS")
                break;
              }

            }}
            style={styles.toolbar}
            titleColor="#fff"
            title="Inicio"
            actions={toolbarActions}
          />
        </View>
      </DrawerLayoutAndroid>
    );
  }
};
