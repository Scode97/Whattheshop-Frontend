import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

import MenuOverlay from '../Side/MenuOverlay'

import styles from '../Side/SideMenuStyle'

export default class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
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
                    {/* <MenuList
                        onToggleMenu={onToggleMenu}
                        navigation={navigation}
                    /> */}
                </View>
            </View>

        );
    }
}
