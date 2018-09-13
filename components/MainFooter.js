import React, { Component } from "react";

// NativeBase
import { Footer, FooterTab, Button, Icon } from "native-base";

// Router
import { Link } from "react-router-native";
import userStore from "../stores/userStore";

class MainFooter extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          {/* onPress={() => this.props.history.goBack()} */}
          {/* <Link component={Button} to="/SideMenu">
            <Icon type="Octicons" name="list-unordered" color="#BBBBBB" />
          </Link> */}

          <Link component={Button} to="/lol">
            <Icon type="Octicons" name="package" />
          </Link>
          <Link component={Button} to="/Login">
            <Icon name="lock" />
          </Link>
          <Link component={Button} to="/profile">
            <Icon name="person" />
          </Link>

          <Button onPress={() => userStore.userHistory()}>
            <Icon name="home" />
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default MainFooter;
