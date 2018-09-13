import React, { Component } from "react";

// NativeBase
import {
  Header,
  Body,
  Text,
  Left,
  Button,
  Icon,
  Right,
  Image,
  View,
  Thumbnail
} from "native-base";

import userStore from "../stores/userStore";

// Routing
import { withRouter, Link } from "react-router-native";
import { observer } from "../node_modules/mobx-react";

class MainHeader extends Component {
  render() {
    console.log(userStore.totalquantity);
    return (
      <Header transparent>
        <Left>
          <Button transparent onPress={() => this.props.history.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Right>
          <Link component={Button} to="/Cart" transparent>
            <Text>{userStore.totalquantity}</Text>
            <Thumbnail
              source={require("../Images/cart.png")}
              style={{
                width: 45,
                height: 40,
                alignSelf: "flex-end"
              }}
            />
          </Link>
        </Right>
      </Header>
    );
  }
}

export default withRouter(observer(MainHeader));
