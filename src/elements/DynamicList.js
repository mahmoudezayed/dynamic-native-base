import React, { Component } from 'react';
import { 
  List,
  ListItem,
  Thumbnail,
  Left,
  Body,
  Right
} from 'native-base';

import DynamicThumbnail from './DynamicThumbnail';
import DynamicText from './DynamicText';

export default class DynamicList extends Component {
  buildListItems(items) {
    let lestItems = [];
    for (var i = 0; i < items.length; i++) {
      lestItems.push(this.buildItem(i, items[i]));
    }
    return lestItems;
  }

  buildItem(key, item) {
    let itemBody = [];
    if(item.thumbnail) {
      itemBody.push(this.buildItemThumbnail(key, item.thumbnail));
      key++;
    }
    if(item.left) {
      itemBody.push(this.buildRegionBody(key, item.left, 'left'));
      key++;
    }
    if(item.body) {
      itemBody.push(this.buildRegionBody(key, item.body, 'body'));
      key++;
    }
    if(item.right) {
      itemBody.push(this.buildRegionBody(key, item.right, 'right'));
      key++;
    }
    let options = [];
    if(item.type && item.type == 'avatar') {
      options['avatar'] = true;
    }
    return (<ListItem {...options} key={key}>{itemBody}</ListItem>);
  }

  buildItemThumbnail(key, thumbnail) {
    return (<DynamicThumbnail key={key} thumbnailData={thumbnail} />);
  }

  buildRegionBody(key, body, region) {
    bodyElements = [];
    if(body.elements && body.elements.length > 0) {
      for (var i = 0; i < body.elements.length; i++) {
        // Text
        if(body.elements[i].text) {
          bodyElements.push(<DynamicText key={i} textData={body.elements[i].text} />);
        }
        // For avatar type.
        if(body.elements[i].thumbnail) {
          bodyElements.push(this.buildItemThumbnail(i, body.elements[i].thumbnail));
        }
      }
    }
    
    if(region == 'left') {
      return (<Left key={key}>{bodyElements}</Left>);
    } else if(region == 'body') {
      return (<Body key={key}>{bodyElements}</Body>);
    } else if(region == 'right') {
      return (<Right key={key}>{bodyElements}</Right>);
    }
  }

  render() {
    let avatarImg = 'https://avatars2.githubusercontent.com/u/16836858?s=460&v=4';
    return (
      <List>
        {this.buildListItems(this.props.listData.items)}
        {/*<ListItem>
          <Thumbnail square size={80} source={{ uri: avatarImg }} />
          <Body>
            <Text>Sankhadeep</Text>
            <Text note>Its time to build a difference . .</Text>
          </Body>
        </ListItem>*/}

        {/*<ListItem avatar>
          <Left>
            <Thumbnail source={{ uri: avatarImg }} />
          </Left>
          <Body>
            <Text>Kumar Pratik</Text>
            <Text note>Doing what you like will always keep you happy . .</Text>
          </Body>
          <Right>
            <Text note>3:43 pm</Text>
          </Right>
        </ListItem>*/}
      </List>
    );
  }
}
