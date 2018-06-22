import React, { Component } from 'react';
import { Thumbnail } from 'native-base';

export default class DynamicThumbnail extends Component {
  render() {
    let options = [];
    if(this.props.thumbnailData.square && this.props.thumbnailData.square == true) {
      options['square'] = true;
    }

    options['size'] = 80;
    if(this.props.thumbnailData.size) {
      options['size'] = this.props.thumbnailData.size;
    }
    return (<Thumbnail {...options} source={{ uri: this.props.thumbnailData.uri }} />);
  }
}
