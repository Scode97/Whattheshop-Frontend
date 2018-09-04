import React, { Component } from "react";
import { SideMenu, List, ListItem } from 'react-native-elements'


// NativeBase
import { Footer, FooterTab, Button, Icon } from "native-base";

// Router
import { Link } from "react-router-native";

class MainFooter extends Component {

  render() {

    return (
      <Footer>
        <FooterTab>
          {/* onPress={() => this.props.history.goBack()} */}
           <Link component = {Button} to= "/SideMenu" >
            <Icon type = "Octicons" name="list-unordered" color = "#BBBBBB" />
          </Link>

          <Link component={Button} to="/lol">
            <Icon type="Octicons" name="package" />
          </Link>
          <Link component={Button} to="/privateLul">
            <Icon name="lock" />
          </Link>
          <Link component={Button} to="/profile">
            <Icon name="person" />
          </Link>

        </FooterTab>
      </Footer>




    );
  }
}

export default MainFooter;
