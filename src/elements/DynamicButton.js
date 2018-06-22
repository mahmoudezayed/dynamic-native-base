import React, { Component } from 'react';
import { 
  Button,
  Icon,
  Text
} from 'native-base';

export default class DynamicButton extends Component {

  buildOptions(buttonInfo) {
    let buttonOptions = {};
    // Theme option.
    if (buttonInfo.theme) {
      buttonOptions[buttonInfo.theme] = true;
    }
    // Transparent option.
    if (buttonInfo.transparent == true) {
      buttonOptions['transparent'] = true;
    }
    // Bordered option.
    if (buttonInfo.bordered == true) {
      buttonOptions['bordered'] = true;
    }
    // Rounded option.
    if (buttonInfo.rounded == true) {
      buttonOptions['rounded'] = true;
    }
    // Width: block or full.
    if (buttonInfo.width) {
      buttonOptions[buttonInfo.width] = true;
    }
    // iconPosition: left or right.
    if (buttonInfo.iconPosition == 'left') {
      buttonOptions['iconLeft'] = true;
    } else if (buttonInfo.iconPosition == 'right') {
      buttonOptions['iconRight'] = true;
    }
    // size: small or large.
    if (buttonInfo.size) {
      buttonOptions[buttonInfo.size] = true;
    }
    // disabled option
    if (buttonInfo.disabled == true) {
      buttonOptions['disabled'] = true;
    }
    
    return buttonOptions;      
  }

  buildElements(buttonInfo) {
    // button elements
    buttonElements = [];
    if (buttonInfo.elements) {
      for (var x = 0; x < buttonInfo.elements.length; x++) {
        // Text elemnt type
        if(buttonInfo.elements[x].text) {
          buttonElements.push(<Text key={x}>{buttonInfo.elements[x].text}</Text>);
        }
        // Icon elemnt type
        if(buttonInfo.elements[x].icon) {
          buttonElements.push(<Icon key={x} name={buttonInfo.elements[x].icon} />);
        }
      }
    }
    return buttonElements;
  }

  render() {
    return (<Button {...this.buildOptions(this.props.info)} onPress={() => this.props.navigation.navigate(this.props.info.onPress)}>{this.buildElements(this.props.info)}</Button>);
  }
}
