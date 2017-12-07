import React, {Component} from 'react';
import {Text, View, TouchableHighLight, Image} from 'react-native';


class LogInButton extends Component {
  constructor(props){
    super(props);
  }
getViewComponent = () => {
  if(this.props.iconSource){
    return(
      <View style={this.props.ButtonView}>
        <Image resizeMode={'contain'}
               style={[ { width: 30, height: 30}, this.props.iconStylee]}
               sourc={this.props.iconSource}
        />
          <Text style={[this.props.buttonTextStyle, {backgroundColor: 'transparent'}]}>
            {this.props.children}
          </Text>
        </View>
    );
  }
  else{
    return(
       <View style={this.props.ButtonView}>
        <Text style={[this.props.buttonTextStyle, {backgroundColor: 'transparent'}]}>
          {this.props.children}
        </Text>
      </View>

    );
  }

}

  render(){
    return(
      <TouchableHighLight
        undeylaycolor={'transparent'}
        activeOpacity={this.props.activeOpacity}
        style={[this.props.touchableHighLightStyle, viewstyles.touchableHighLightStyle]}
        onPress={this.props.buttontapped}
      >
        <View style={this.props.ButtonView}>
          <Text style={[this.props.buttonTextStyle, {backgroundColor: 'transparent'}]}>
            {this.props.children}
          </Text>
        </View>
      </TouchableHighLight>
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
