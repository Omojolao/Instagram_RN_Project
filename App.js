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

buttonTapped = () => {
  console.log('button tapped');
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

          <LogInButton
            buttonView={viewstyles.instagramLogInButtonView}
            buttonTextStyle={textstyles.instagramButtonTextStyles}
            buttonTapped={this.buttonTapped}
            activeOpacity={0.75}
            touchableHighLightStyle={viewstyles.instagramTouchableHighLightStyle}
          >
              Log in (Via Instagram)

          </LogInButton>


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
  },
  instagramLogInButtonView: {
    backgroundColor: 'transparent',
    borderColor: colors.socialMediaButtonBorderColor,
    borderWidth: sizes.borderWidth,
    borderRadius: sizes.borderRadius,
    width: standardComponentWidth,
    height: sizes.buttonHeight,
  },
  instagramTouchableHighLightStyle: {
    width: standardComponentWidth,
    height: sizes.buttonHeight,
    marginTop: 5
  }
};
const textstyles = {
  instagramButtonTextStyles: {
    color: colors.text,
    fontWeight: '500'

  }
}
