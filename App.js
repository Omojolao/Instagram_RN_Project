import React, { Component } from 'react';
import { Text, View, ImageBackground, StatusBar, ScrollView, Image } from 'react-native';
import Dimensions from 'Dimensions'


const windowSize = Dimensions.get('window');


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

const viewstyles =({
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
});
