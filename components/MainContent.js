import React, { Component } from "react";

// NativeBase
import { Content } from "native-base";

// Component
import Login from "./Login";
import Profile from "./Profile";
import Main from "./Main";
import SideMenu from "./SideMenu";
import Loading from "./Loading";
import MealList from "./MealList";
import RegisterForm from "./RegistrationForm";

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
          <Route exact path="/" component={Loading} />
          <Route path="/lol" component={Main} />
          <Route path="/MealList" component={MealList} />
          <PrivateRoute path="/privateLul" component={PrivateLul} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/SideMenu" component={SideMenu} />

          <Route path="/register" component={RegisterForm} />

          <Redirect to="/lol" />
        </Switch>
      </Content>
    );
  }
}

export default MainContent;
