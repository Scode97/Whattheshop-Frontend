import React, { Component } from "react";

// NativeBase
import { Content } from "native-base";

// Component
import Login from "./Login";
import Profile from "./Profile";
import Main from "./Main";
import SideMenu from "./SideMenu";

import PrivateLul from "./PrivateLul";

// Router
import { Route, Switch, Redirect } from "react-router-native";

// Common
import PrivateRoute from "../common/PrivateRoute";

class MainContent extends Component {
  render() {
    return (
      <Content>
        <Switch>
          <Route path="/lol" component={Main} />
          <PrivateRoute path="/privateLul" component={PrivateLul} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/SideMenu" component={SideMenu} />

          <Redirect to="/lol" />
        </Switch>
      </Content>
    );
  }
}

export default MainContent;
