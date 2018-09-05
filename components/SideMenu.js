import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';

import MenuOverlay from '../Side/MenuOverlay'
import styles from '../Side/SideMenuStyle'
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail
} from 'native-base';


export default class SideMenu extends Component {

    render() {
        let {
            navigation,
            onToggleMenu,
        } = this.props


        return (
            <View style={styles.container}>
                <MenuOverlay
                    onToggleMenu={onToggleMenu}
                    navigation={navigation}
                />
                <View style={styles.menu}>
                  <List>

          <ListItem >
            <Body>

              <Text>SlackBox Plans</Text>
            </Body>
          </ListItem>


          <ListItem >
            <Body>
              <Text>Snackbox Plans</Text>
            </Body>
          </ListItem>


          <ListItem >
            <Body>
              <Text>Contact Us</Text>
            </Body>
          </ListItem>

        </List>
                </View>
            </View>

        );
    }
}
