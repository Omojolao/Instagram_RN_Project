import React, { Component } from 'react';
import { Text, View, ImageBackground, StatusBar, ScrollView, Image, Linking} from 'react-native';
import Dimensions from 'Dimensions'

import LogInButton from './src/components/LogInButton';
import TappableText from './src/components/TappableText'

const windowSize = Dimensions.get('window');
const standardComponentWidth = (0.9 * windowSize.width);

const colors = {
  facebook: 'rgb(59,89,152)',
  text: 'rgba(255, 255, 255, 0.7)',
  socialMediaButtonBorderColor: 'rgba(255, 255, 255, 0.35)',
  underlayColor: 'transparent'
};
const sizes = {
  buttonHeight: 60,
  pageFontSize: 12,
  borderWidth: 0.8,
  borderRadius: 5
};
const urls = {
  forgotInstagramLogin: 'https://www.instagram.com/accounts/password/reset',
  twitterLogin: 'https://twitter.com/login?lang=en',
  instagramSignUp: 'https://www.instagram.com/accounts/emailsignup/?hl=en',
  instagramAuthLogin: 'https://api.instagram.com/oauth/authorize/?client_id=cda6dee7d8164a868150910407962f52&redirect_uri=http://www.kaitechconsulting.com&response_type=token&scope=basic+follower_list+comments+likes',
  instagramLogout: 'https://instagram.com/accounts/logout',
  instagramBase: 'https://www.instagram.com/',
};





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

          <LogInButton
            buttonView={[viewstyles.instagramLogInButtonView, viewstyles.facebookLogInButtonView]}
            buttonTextStyle={textstyles.instagramButtonTextStyles}
            buttonTapped={this.buttonTapped}
            activeOpacity={0.75}
            touchableHighLightStyle={[viewstyles.instagramTouchableHighLightStyle, viewstyles.facebookTouchableHighLighStyle]}
            iconSource={require('./src/images/facebook-white-logo.png')}
          >
              acebook

          </LogInButton>
          { this.forgotLogInDetailsComponent() }
        </ScrollView>
      </ImageBackground>
    );
  }

 forgotLogInDetailsComponent = () => {
    return(
      <View style={viewstyles.forgotLogInDetailsVStyle}>
        <Text style={textstyles.forgotLogInDetailsTStyle}>forgot your login details?</Text>
          <TappableText
          textStyle={[textstyles.forgotLogInDetailsTStyle, textstyles.forgotLogInDetailsBold]}
          textTapped={ () => Linking.openURL (urls.forgotInstagramLogin) }
          >
              Get help signing in
          </TappableText>
      </View>

      /*<View style={viewstyles.forgotLogInDetailsVStyle}>
        <Text style={textstyles.forgotLogInDetailsTStyle}>Dont have an account?</Text>
          <TappableText
            textStyle={[textstyles.forgotLogInDetailsTStyle, textstyles.forgotLogInDetailsBold]}
            textTapped={ () => Linking.openURL (urls.instagramSignUp) }
          >
            Sign up
          </TappableText>
      </View>
      */

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
    marginBottom: 20,
    alignSelf: 'center'
  },
  scrollViewStyle: {
    paddingTop: '30%'
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
  },
  facebookLogInButtonView: {
    backgroundColor: colors.facebook,
    borderColor: 'transparent'
  },
  facebookTouchableHighLighStyle: {
    marginTop: 20,
    marginBottom: 5
  },
  forgotLogInDetailsVStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginTop: 5
  }
};
const textstyles = {
  instagramButtonTextStyles: {
    color: colors.text,
    fontWeight: '500'

  },
  forgotLogInDetailsTStyle: {
    color: 'white',
    fontSize: sizes.pageFontSize,
    marginRight: 5,
    backgroundColor: 'transparent'
  },
  forgotLogInDetailsBold: {
    fontWeight: 'bold',
  }
}
