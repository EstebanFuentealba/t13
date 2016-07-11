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
    /*
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
      }).done();*/

      var data = {"filterBy":[],"orderBy":[],"select":[],"limit":10,"offset":0,"total":2,"pretty":false,"resultDescription":"signals","result":[{"id":4,"externalId":"Se\u00f1al en vivo de Tele13 Radio","type":"radio","name":"Se\u00f1al en vivo de Tele13 Radio","slug":"senal-en-vivo-de-tele13-radio","url":"http:\/\/tele13radio.janus.cl\/live\/playlist.m3u8","created":"2015-07-30 14:48:16","updated":"2015-07-30 14:48:16"},{"id":7,"externalId":"Canal de Noticias T13 M\u00f3vil","type":"tv","name":"Canal de Noticias T13 M\u00f3vil","slug":"canal-de-noticias-t13-movil","url":"http:\/\/www.t13.cl\/mas\/senal-mobile-app","created":"2016-05-06 14:17:04","updated":"2016-06-01 19:47:02"}]};

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
