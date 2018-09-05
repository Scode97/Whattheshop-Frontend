import React, { Component } from 'react';
import {
    TouchableHighlight,
    Text
} from 'react-native';

import styles from './MenuOverlayStyle';
import Main from "../components/Main";

export default class MenuOverlay extends Component {

    render() {

        return (
            <TouchableHighlight
                onPress={() => {
                    this.props.onToggleMenu()
                }}
                style={styles.overlay}
                onPress={Main}

                >
                <Text></Text>
            </TouchableHighlight>
        );
    }
}
