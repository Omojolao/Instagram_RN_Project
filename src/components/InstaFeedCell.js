import React, {Component} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import CellUserDataBar from './CellUserDataBar';
import IconChnageButton from './IconChangeButton';

class InstaFeedCell extends Component {

  constructor(props){
    super(props);
    this.cellData = props.cellData
  }
  render(){
    return(
      <View style={viewstyles.container}>
      <CellUserDataBar
        imageURL={this.cellData.user.profile_picture}
        username={this.cellData.user.username}
      />
      <ImageBackground
        source={{ uri: this.cellData.images. standard_resolution.url}}
        resizeMode={'cover'}
        style={{ width: '100%', height: this.cellData.images. standard_resolution.height/2 }}
      >

      </ImageBackground>
      </View>
    );
  }
}

const viewstyles = {
  container: {
    flex: 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

const textstyles = {

};

export default InstaFeedCell;
