import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  PixelRatio,
  Image,
  View,
} from 'react-native';
import AppIntro from 'react-native-app-intro';

const styles = StyleSheet.create({
  slide: {
    backgroundColor: '#282828'
  },
  column: {
    flex: 1,
    flexDirection: 'column',
  },
  row: {
    flex:  1,
    flexDirection: 'row'
  },
  topContainer: {
    backgroundColor: "#2c2c2c",
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderColor: "#494949",
    borderBottomWidth: 1 / PixelRatio.get()
  },
  tutorialImage: {
    width: 320,
    height: 287,
    borderWidth:0,
    marginBottom: 0,
    paddingBottom: 0
  },
  bottomContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 0
  },
  iconContainer: {
    width: 64,
    height: 64,
    marginTop: 16,
    marginBottom: 8
  },
  icon: {
    flex:  1,
    width: 64,
    height: 64
  },
  textContainer: {
    flex:  1,
    marginTop: 16,
    marginRight: 35,
    marginLeft: 35
  },
  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: "center"
  },
});

export default class Intro extends Component {
  onSkipBtnHandle = (index) => {
    console.log(index);
    this.props.parent.setState({
      skipIntro: true
    });
  }
  doneBtnHandle = () => {
    console.log('Done');
    this.props.parent.setState({
      skipIntro: true
    });
  }
  render() {
    return (
      <AppIntro
        onDoneBtnClick={this.doneBtnHandle.bind(this)}
        onSkipBtnClick={this.onSkipBtnHandle.bind(this)}
        doneBtnLabel="Listo"
        skipBtnLabel="Saltar"
      >
        <View style={[styles.column , styles.slide]}>
          <View level={15} style={[styles.row, styles.topContainer]}>
              <Image style={styles.tutorialImage}
                source={require('image!tutorial_01')} />
          </View>
          <View style={[styles.column, styles.bottomContainer]}>
            <View style={styles.iconContainer}>
              <Image style={styles.icon}
                source={require('image!ic_programa_icon')} />
            </View>
            <View level={8} style={styles.textContainer}>
              <Text style={styles.text}>Accede a todos los noticiarios de Teletrece</Text>
            </View>
          </View>
        </View>
        <View style={[styles.column , styles.slide]}>
          <View level={15} style={[styles.row, styles.topContainer]}>
              <Image style={styles.tutorialImage}
                source={require('image!tutorial_02')} />
          </View>
          <View style={[styles.column, styles.bottomContainer]}>
            <View style={styles.iconContainer}>
              <Image style={styles.icon}
                source={require('image!ic_radio_icon')} />
            </View>
            <View level={8} style={styles.textContainer}>
              <Text style={styles.text}>Dale play en culquier lugar a Tele13 Radio y a nuestra Señal en vivo de Canal13</Text>
            </View>
          </View>
        </View>
        <View style={[styles.column , styles.slide]}>
          <View level={15} style={[styles.row, styles.topContainer]}>
              <Image style={styles.tutorialImage}
                source={require('image!tutorial_03')} />
          </View>
          <View style={[styles.column, styles.bottomContainer]}>
            <View style={styles.iconContainer}>
              <Image style={styles.icon}
                source={require('image!ic_swipe_icon')} />
            </View>
            <View level={8} style={styles.textContainer}>
              <Text style={styles.text}>Desliza para navegar entre las noticias</Text>
            </View>
          </View>
        </View>
        <View style={[styles.column , styles.slide]}>
          <View level={15} style={[styles.row, styles.topContainer]}>
              <Image style={styles.tutorialImage}
                source={require('image!tutorial_04')} />
          </View>
          <View style={[styles.column, styles.bottomContainer]}>
            <View style={styles.iconContainer}>
              <Image style={styles.icon}
                source={require('image!ic_share_icon')} />
            </View>
            <View level={8} style={styles.textContainer}>
              <Text style={styles.text}>Comparte los artículos de interés con tus amigos</Text>
            </View>
          </View>
        </View>
        <View style={[styles.column , styles.slide]}>
          <View level={15} style={[styles.row, styles.topContainer]}>
              <Image style={styles.tutorialImage}
                source={require('image!tutorial_05')} />
          </View>
          <View style={[styles.column, styles.bottomContainer]}>
            <View style={styles.iconContainer}>
              <Image style={styles.icon}
                source={require('image!ic_personalizar_icon')} />
            </View>
            <View level={8} style={styles.textContainer}>
              <Text style={styles.text}>Personaliza tu inicio con los contenidos de interés</Text>
            </View>
          </View>
        </View>
      </AppIntro>
    );
  }
}
