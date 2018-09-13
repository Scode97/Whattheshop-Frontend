import React, { Component } from "react";

// NativeBase
import { Footer, FooterTab, Button, Icon } from "native-base";

// Router
import userStore from "../stores/userStore";
import authStore from "../stores/authStore";

import { withRouter, Link } from "react-router-native";
import { observer } from "../node_modules/mobx-react";

class MainFooter extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          {/* onPress={() => this.props.history.goBack()} */}
          <Link component={Button} to="/SideMenu">
            <Icon type="Octicons" name="list-unordered" color="#BBBBBB" />
          </Link>

          <Link component={Button} to="/lol">
            <Icon type="Octicons" name="package" />
          </Link>
          <Link component={Button} to="/Login">
            <Icon name="lock" />
          </Link>
          <Button
            onPress={() => {
              if (!authStore.user) {
                this.props.history.push("/register");
              } else {
                userStore.userHistory();
                this.props.history.push("/profile");
              }
            }}
          >
            <Icon name="person" />
          </Button>

          {/* <Button onPress={() => userStore.userHistory()}>
            <Icon name="home" />
          </Button> */}
        </FooterTab>
      </Footer>
    );
  }
}

export default withRouter(observer(MainFooter));
