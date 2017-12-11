import React, { Component } from 'react';
import { Text, View, ImageBackground, StatusBar, ScrollView, Image, Linking, WebView, FlatList} from 'react-native';
import Dimensions from 'Dimensions'

import LogInButton from './src/components/LogInButton';
import TappableText from './src/components/TappableText';
import InstaNavigationBar from './src/components/InstaNavigationBar';
import NetworkManager from './src/model/NetworkManager';
import InstaFeedCell from './src/components/InstaFeedCell';
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
  instagramAuthLogin: 'https://api.instagram.com/oauth/authorize/?client_id=20d6c66028b24bf498c0deb8b70b8150&redirect_uri=http://www.kaitechconsulting.com&response_type=token&scope=basic+follower_list+comments+likes',
  instagramLogout: 'https://instagram.com/accounts/logout',
  instagramBase: 'https://www.instagram.com/',
};

export default class App extends Component {

constructor(props){
  super(props);
    //this is what the state of the app when it first starts up
      this.state = {
        authenticationURL: urls.instagramAuthLogin,
        accessToken: '',
        displayAuthenticationWebview: false,
        displayLogInScreen: true,
      }

  }

onURLStateChange = (webViewState) => {

//the string to search for a url
  const accessTokenSubString = 'access_token=';
//this will store the current url in our browser
  const currentURL = webViewState.url;

  console.log('current URL = ' + currentURL);

  if( webViewState.url.includes(accessTokenSubString) ){

    if(this.state.accessToken.length < 1){
/* this will store the index of the a in the access_token= and
add on the number of characters in access_token to find the beginning of the access token
*/

    var startIndexOfAccessToken = currentURL.lastIndexOf(accessTokenSubString) + accessTokenSubString.length
    var foundAccessToken = currentURL.substr(startIndexOfAccessToken);

    console.log('found Access Token ' + foundAccessToken);



   //var apiManager =
   this.apiManager = new NetworkManager(foundAccessToken);

    this.apiManager.getSessionAndFeedData( (data) => {
      this.Data = data;
      console.log(data);
      },
    (feedData) => {
      this.feedData = feedData;
      console.log(feedData);
      this.setState({accessToken: foundAccessToken, displayAuthenticationWebview: false, displayLogInScreen: false});
    });

      }
    }
}

instagramFeedPAgeComponent = () => {
  return(
    <View style={[viewstyles.container, {paddingTop: 20}]}>
      <InstaNavigationBar/>
      <FlatList
        data={this.feedData}
        renderItem={ ({item}) => <InstaFeedCell cellData={item}/> }
        keyExtractor={item => item.id}
      />
    </View>
  );
}

displayAuthenticationWebviewComponent = () => {
  return(
      <WebView
        source={{ url: this.state.authenticationURL }}
        startInLoadingState={true}
        onNavigationStateChange={this.onURLStateChange}
      />
    );
  }

buttonTapped = () => {
    this.setState({ displayAuthenticationWebview: true, displayLogInScreen: false});
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

  const shouldDisplayFeedPage = (this.state.accessToken.length > 1 && this.state.displayAuthenticationWebview == false && this.state.displayLogInScreen == false);

 if(this.state.displayLogInScreen && this.state.displayAuthenticationWebview == false){
    return(
      this.loginScreenComponent()
    );
  }
  else if (this.state.displayLogInScreen == false && this.state.displayAuthenticationWebview){
    return(
      this.displayAuthenticationWebviewComponent()
    );
  }
  else if (shouldDisplayFeedPage){
    return(
      this.instagramFeedPAgeComponent()
    );
  }
}

}

const viewstyles = {

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

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
}
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
