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
  borderRadius: 5,
  twitterIcon: 18
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
          { this.forgotLogInDetailsComponent('forgot your log in details?', 'Get help signing in', urls.forgotInstagramLogin) }
          { this.orSeparatorComponent() }
          { this.logInWithTwitterComponent() }


        </ScrollView>
          { this.signupFooterComponent() }
      </ImageBackground>
    );
  }

forgotLogInDetailsComponent = (normalText, boldText, url) => {
    return(
      <View style={viewstyles.forgotLogInDetailsVStyle}>
        <Text style={textstyles.forgotLogInDetailsTStyle}>{normalText}</Text>
          <TappableText
          textStyle={[textstyles.forgotLogInDetailsTStyle, textstyles.forgotLogInDetailsBold]}
          textTapped={ () => Linking.openURL (url) }
          >
            {boldText}
          </TappableText>
      </View>

    );
 }

dontHaveAnAccountComponent = () => {
   return(
     <View style={viewstyles.dontHaveAnAccountVStyle}>
     <Text style={textstyles.dontHaveAnAccountTStyle}>Dont have an account?</Text>
       <TappableText
         textStyle={[textstyles.dontHaveAnAccountTStyle, textstyles.dontHaveAnAccountBold]}
         textTapped={ () => Linking.openURL (urls.instagramSignUp) }
       >
         Sign up
       </TappableText>
     </View>
   );
 }

orSeparatorComponent = () => {
  return(
    <View style={viewstyles.orSeparatorStyle}>
      <View style={viewstyles.orSeparatorLineStyle}/>
      <Text style={textstyles.orSeparatortextStyle}>OR</Text>
      <View style={viewstyles.orSeparatorLineStyle}/>
    </View>

  );
}

logInWithTwitterComponent = () => {
  return(
    <View style={viewstyles.twitterLogInStyle}>

      <Image
      resizeMode={'contain'}
      style={viewstyles.twitterIcon}
      source={require('./src/images/icons/twitter_bird.png')}
      />
      <TappableText
        textStyle={[textstyles.forgotLogInDetailsTStyle, textstyles.forgotLogInDetailsBold]}
        textTapped={() => Linking.openURL (urls.twitterLogin)}
      >
          log in with twitter
      </TappableText>

    </View>
  );
}

signupFooterComponent = () => {
  return(
    <View style={viewstyles.signupFooterComponentStyle}>
      { this.forgotLogInDetailsComponent('Dont have an account?', 'Sign up', urls.instagramSignUp) }
    </View>
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
    marginTop: 10
  },
  orSeparatorStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15
  },
  orSeparatorLineStyle: {
    height: 1,
    flex: 5,
    backgroundColor: colors.socialMediaButtonBorderColor,
    borderColor: colors.socialMediaButtonBorderColor,
    borderWidth: 0.5,
    marginHorizontal: 5
  },
  dontHaveAnAccountVStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    marginTop:20
  },
  twitterLogInStyle: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  twitterIcon: {
    width: sizes.twitterIcon,
    height: sizes.twitterIcon,
    marginHorizontal: 6,
  },
  signupFooterComponentStyle: {
    flex: 0.2,
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.25)',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5.5 },
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5
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
  },
  orSeparatortextStyle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    fontSize: 13
  },
  dontHaveAnAccountBold: {
    fontWeight: 'bold'
  },
  dontHaveAnAccountTStyle: {
    color: 'white',
    fontSize: sizes.pageFontSize,
    marginRight: 5,
    backgroundColor: 'transparent'
  }
}
