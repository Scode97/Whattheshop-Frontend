import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase
import {
  Footer,
  FooterTab,
  Button,
  Icon,
  View,
  Text,
  List,
  ListItem,
  Left,
  Right,
  Body
} from "native-base";

// Router
import { Link } from "react-router-native";
import dataStore from "../stores/dataStore";
import userStore from "../stores/userStore";

class Cart extends Component {
  looping(data) {
    return (
      <ListItem>
        <Text>{data.name + "\n"}</Text>
        <Text>{data.totalPrice + "\n"}</Text>
        <Text> {data.quantity}</Text>
      </ListItem>
    );
  }
  render() {
    return <List>{userStore.order.map(data => this.looping(data))}</List>;
  }
}

export default observer(Cart);
