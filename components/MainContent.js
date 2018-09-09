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
import RegisterForm from "./RegisterForm";
import SlackBoxPlans from "./SlackBoxPlans";
import SlackBoxPlansDetail from "./SlackBoxPlansDetail";
import Cart from "./Cart";

// import Cart from "./cart";
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

          {/* <Route path ="/MealList" component = {MealList}/> */}
          <Route path="/SlackBoxPlans" component={SlackBoxPlans} />
          <Route path="/plansDetail" component={SlackBoxPlansDetail} />
          <Route path="/Cart" component={Cart} />

          <PrivateRoute path="/PrivateLul" component={PrivateLul} />

          <PrivateRoute path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/SideMenu" component={SideMenu} />
          <Route path="/RegisterForm" component={RegisterForm} />
          {/* <Route path="/cart" component={Cart} /> */}

          <Redirect to="/lol" />
        </Switch>
      </Content>
    );
  }
}

export default MainContent;
