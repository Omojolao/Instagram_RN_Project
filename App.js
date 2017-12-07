import React, { Component } from 'react';
import { Text, View, ImageBackground, StatusBar, ScrollView, Image } from 'react-native';
import Dimensions from 'Dimensions'

import LogInButton from './src/components/LogInButton';

const windowSize = Dimensions.get('window');
const standardComponentWidth = (0.82 * windowSize.width);

const colors = {
  facebook: 'rgb(59,89,152)',
  text: 'rgba(255, 255, 255, 0.7)',
  socialMediaButtonBorderColor: 'rgba(255, 255, 255, 0.35)'
}
const sizes = {
  buttonHeight: 45,
  pageFontSize: 12,
  borderWidth: 0.8,
  borderRadius: 5
}





export default class App extends Component {


  constructor(props){
    super(props);

    this.state = {

    }

  }

  loginScreenComponent = () => {
    return(
      <ImageBackground
          style={viewstyles.container}
          resize={'cover'}
          source={require('./src/images/InstagrambackG1.jpg')}
      >
        <StatusBar
          barStyle={'light-content'}
        />

        <ScrollView style={viewstyles.scrollViewStyle}>
          <Image
            style={viewstyles.instagramLogo}
            resizeMode={'contain'}
            source={require('./src/images/instagram-text-logo.png')}
          />
        </ScrollView>
      </ImageBackground>
    );
  }


  render() {
    return (
      this.loginScreenComponent()
    );
  }
}

const viewstyles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  instagramLogo: {
    width: (0.45 * windowSize.width),
    height: (0.15 * windowSize.height),
    marginBottom: 25,
    alignSelf: 'center'
  },
  scrollViewStyle: {
    paddingTop: '38%'
  }
};
