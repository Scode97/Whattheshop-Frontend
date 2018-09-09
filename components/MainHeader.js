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
  View
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
        <Right>
          <Link component={Button} to="/Cart" transparent>
            <Text>
              {userStore.totalquantity}

              {/* {ListStore.orders.forEach(order=> order.quantity)} */}
              <Icon name="beer" />
            </Text>
          </Link>
        </Right>
      </Header>
    );
  }
}

export default withRouter(observer(MainHeader));
