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
    return (
      <View>
        <Text>Hello </Text>
        <Text> {data.date_time}</Text>
      </View>
    );
  }

  render() {
    console.log(userStore.orderhistory);

    if (!authStore.user) return <Redirect to="/register" />;
    if (userStore.orderhistory === null) {
      return <Text> Hiiii</Text>;
    } else {
      const userHistory = userStore.orderhistory.map(data =>
        this.renderItem(data)
      );
      return (
        <View>
          <Card>
            <CardItem>
              <Text>{authStore.user.username}</Text>
              <List>
                <ListItem>{userHistory}</ListItem>
                <Button danger onPress={() => authStore.logoutUser()}>
                  <Text>Logout</Text>
                </Button>
              </List>
            </CardItem>
          </Card>
        </View>
      );
    }
  }
}

export default observer(Profile);
