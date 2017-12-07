import React, {Component} from 'react';
import {Text, View, TouchableHighlight, Image} from 'react-native';


class LogInButton extends Component {

  constructor(props){
    super(props);
  }

  getViewComponent = () => {

    if(this.props.iconSource){
      return(
        <View style={[this.props.buttonView, {flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}]}>
          <Image resizeMode={'contain'}
           style={[ { width: 30, height: 30}, this.props.iconStyle]}
           source={this.props.iconSource}
          />
            <Text style={[this.props.buttonTextStyle, {backgroundColor: 'transparent'}]}>
              {this.props.children}
            </Text>
          </View>
      );
    }
    else{
      return(
         <View style={[this.props.buttonView, {flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}]}>
          <Text style={[this.props.buttonTextStyle, {backgroundColor: 'transparent'}]}>
            {this.props.children}
          </Text>
        </View>
      );
    }

  }

  render(){
    return(
      <TouchableHighlight
        undeylaycolor={'transparent'}
        activeOpacity={this.props.activeOpacity}
        style={[this.props.touchableHighLightStyle, viewstyles.touchableHighLightStyle]}
        onPress={this.props.buttonTapped}
      >
      {this.getViewComponent()}
      </TouchableHighlight>
    );
  }


}



const viewstyles = {
  touchableHighLightStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonTextStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

const textStyles = {

};

export default LogInButton;
