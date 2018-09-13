import React, { Component } from "react";
// import { List } from "react-native";
import { observer } from "mobx-react";

// NativeBase Components
import {
  Card,
  CardItem,
  Text,
  Button,
  List,
  View,
  ListItem
} from "native-base";

//Routing
import { Redirect } from "react-router-native";

//Components
import authStore from "../stores/authStore";
import userStore from "../stores/userStore";

class Profile extends Component {
  // const history = userStore.orderhistory.map(data => this.renderItem(data));
  renderItem(data) {
    let n = data.order_plans.map(data => <Text>{data.plan.name}</Text>);
    return (
      <ListItem>
        <Card>
          <CardItem>
            <Text>{data.date_time} </Text>
          </CardItem>
          <CardItem>
            <Text>{n} </Text>
          </CardItem>
        </Card>
      </ListItem>
    );
  }

  render() {
    console.log(userStore.orderhistory);

    if (!authStore.user) return <Redirect to="/register" />;
    if (userStore.orderhistory === null) {
      return <Text> No order history</Text>;
    } else {
      const userHistory = userStore.orderhistory.map(data =>
        this.renderItem(data)
      );
      return (
        <View>
          <Text textAlign="center">{authStore.user.username}</Text>
          <List>
            {userHistory}
            <Button full light onPress={() => authStore.logoutUser()}>
              <Text>Logout</Text>
            </Button>
          </List>
        </View>
      );
    }
  }
}

export default observer(Profile);
