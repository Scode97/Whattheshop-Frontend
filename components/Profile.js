import React, { Component } from "react";

import { observer } from "mobx-react";

// NativeBase Components
import { Card, CardItem, Text, Button } from "native-base";
import authStore from "../stores/authStore";

class Profile extends Component {
  render() {
    if (!authStore.user) return <Redirect to="/register" />;
    return (
      <Card>
        <CardItem>
          <Text>{authStore.user.username}</Text>
          <Button danger onPress={() => authStore.logoutUser()}>
            <Text>Logout</Text>
          </Button>
        </CardItem>
      </Card>
    );
  }
}

export default observer(Profile);
