import React, {Component} from 'react';
import {Image, TouchableHighlight} from 'react-native';

class IconChangeButton extends Component {

  constructor(props){
    super(props);
    this.highlightedImage = this.props.highlightedImage;
    this.unhighlightedImage = this.props.unhighlightedImage;
    this.isHighlighted = this.props.isHighlighted;
    //this might possibly need to be a function with ()
    // this.onPress = this.props.onPress;

    this.state = {
      isHighlighted: this.props.isHighlighted
    }

  }

  render(){

    let imageSource = (this.state.isHighlighted) ? this.props.highlightedImage : this.props.unhighlightedImage;

    return (
      <TouchableHighlight
        onPress={ () =>  this.onPressFull()}
        activeOpacity={0.7}
        underlayColor={'transparent'}
        style={[{ width: this.props.size, height: this.props.size }, this.props.containerStyle]}
      >
        <Image
         resizeMode={'cover'}
         source={imageSource}
         style={{ flex: 1, width: this.props.size, height: this.props.size }}
        />
      </TouchableHighlight>
    )

  }

  onPressFull = () => {
    // this.onPress();
    this.setState({isHighlighted: !this.state.isHighlighted});
  }

}

const viewStyles = {

};

export default IconChangeButton;
