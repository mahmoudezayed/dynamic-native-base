import React, { Component } from 'react';
import { Text } from 'native-base';

export default class DynamicText extends Component {
  render() {
    let options = [];
    if(this.props.textData.note && this.props.textData.note == true) {
      options['note'] = true;
    }
    return (<Text {...options}>{this.props.textData.value}</Text>);
  }
}
