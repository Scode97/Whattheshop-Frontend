import React, { Component } from "react";
import { Text, View } from "react-native";
import {
  Card,
  CardItem,
  Body,
  Button,
  Icon,
  Container,
  Content,
  List,
  ListItem,
  Left,
  Right,
  Thumbnail
} from "native-base";
import { Link, Redirect, withRouter } from "react-router-native";

import { observer } from "mobx-react";
import dataStore from "../stores/dataStore";
import userStore from "../stores/userStore";

class SlackBoxPlansDetail extends Component {
  // renderItem(data) {
  //   return (
  //     // <Button
  //     //   key={data.name}
  //     //   onPress={() => {
  //     //     dataStore.setIndex(data.id);
  //     //     // if (!authStore.isAuthenticated){
  //     //     // this.props.history.push('/Login')
  //     //     // }
  //     //     //
  //     //     // else {
  //     //     this.props.history.push("/plansDetail");
  //     //     // }
  //     //   }}
  //     //   icon
  //     //   block
  //     //   success
  //     // >
  //     //   <Icon name="person" />
  //     //   <Text>{data.name}</Text>
  //     // </Button>
  //  // );
  // }

  // componentDidMount() {
  //   dataStore.planList();
  // }

  render() {
    // let hi = this.props.match.params.index;
    // let h = ListStore.list[x];

    // const plans = dataStore.plans.map(data => this.renderItem(data));
    let m = dataStore.MealsList[dataStore.x];
    //console.log(m);
    return (
      // let m = dataStore.MealsList[dataStore.x];
      <View>
        <List>
          <ListItem>
            <Left>
              <Text>
                {m.name + "\n"}
                <Text note>{m.totalPrice + "\n"}</Text>
                <Text note> {m.description}</Text>
              </Text>
            </Left>
            <Body />
          </ListItem>

          <Button
            onPress={() => {
              userStore.createOrder(m.name);
            }}
            full
            danger
          >
            <Text>Add</Text>
          </Button>
        </List>
        {/* <Button>
          <Text>{m.totalPrice}</Text>
          <Text> HELLO DETAIL PAGE </Text>
        </Button> */}
      </View>
    );
  }
}
export default withRouter(observer(SlackBoxPlansDetail));
