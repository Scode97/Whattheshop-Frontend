import React, { Component } from "react";

import { observer } from "mobx-react";

// NativeBase Components
import { Card, CardItem, Text, Button } from "native-base";
import authStore from "../stores/authStore";

class Profile extends Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Button danger onPress={() => authStore.logoutUser()}>
            <Text>Logout</Text>
          </Button>
        </CardItem>
      </Card>
    );
  }
}
// export default Profile;
export default observer(Profile);
