import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Navigator
} from 'react-native';
import T13DrawerLayout from './T13DrawerLayout';

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class T13Navigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "radios": [],
      "tvs": []
    };
  }
  componentDidMount() {
    fetch('https://t13.mediabridge.tv/v1.0/signals')
      .then((response) => response.json())
      .then((data) => {
        let radios = [];
        let tvs = [];
        data.result.map((result) => {
          if(result.type === 'radio') {
            radios.push(result);
          } else if(result.type === 'tv') {
            tvs.push(result);
          }
        });
        this.setState({
          radios: radios,
          tvs: tvs
        });
      }).done();
  }
  renderScene(route, navigator) {
    return <T13DrawerLayout
              radios={this.state.radios}
              tvs={this.state.tvs}
              />
  }
  render(){
    return (
      <Navigator
        ref="navigator"
        style={styles.container}
        configureScene={(route) => {
          if (Platform.OS === 'android') {
            return Navigator.SceneConfigs.FloatFromBottomAndroid;
          }
          return Navigator.SceneConfigs.FloatFromBottom;
        }}
        initialRoute={{}}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }
};
