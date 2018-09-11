import React, { Component } from "react";
import { List } from "react-native";
import { observer } from "mobx-react";

// NativeBase Components
import { Card, CardItem, Text, Button } from "native-base";

//Routing
import { Redirect } from "react-router-native";

//Components
import authStore from "../stores/authStore";

class Profile extends Component {
  render() {
    if (!authStore.user) return <Redirect to="/register" />;
    return (
      <Card>
        {/* <CardItem>
          <List>
            <Text>{authStore.user.username}</Text> */}
        <Text>Hello</Text>
        {/* <Button danger onPress={() => authStore.logoutUser()}>
              <Text>Logout</Text>
            </Button>
          </List>
          ;
        </CardItem> */}
      </Card>
    );
  }
}

export default observer(Profile);
