import React, { Component } from "react";
import { observer } from "mobx-react";
import { withRouter, Link } from "react-router-native";

// NativeBase Components
import { Form, Item, Input, Button, Text } from "native-base";

// Store
import authStore from "../stores/authStore";

// Routing
import { Redirect } from "react-router-native";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      email: ""
    };
  }

  render() {
    if (authStore.isAuthenticated) return <Redirect to="/profile" />;

    return (
      <Form>
        <Item>
          <Input
            placeholder="Username"
            autoCapitalize="none"
            onChangeText={username => this.setState({ username })}
          />
        </Item>
        <Item>
          <Input
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
          />
        </Item>

        <Item>
          <Input
            placeholder="First name"
            autoCapitalize="none"
            secureTextEntry={false}
            onChangeText={firstname => this.setState({ firstname })}
          />
        </Item>
        <Item>
          <Input
            placeholder="Last name"
            autoCapitalize="none"
            secureTextEntry={false}
            onChangeText={lastname => this.setState({ lastname })}
          />
        </Item>
        <Item last>
          <Input
            placeholder="E-mail"
            autoCapitalize="none"
            secureTextEntry={false}
            onChangeText={email => this.setState({ email })}
          />
        </Item>

        <Link
          to="/profile"
          component={Button}
          full
          onPress={() =>
            authStore.registerUser(
              this.state.username,
              this.state.password,
              this.state.firstname,
              this.state.lastname,
              this.state.email
            )
          }
        >
          <Text>Register</Text>
        </Link>
      </Form>
    );
  }
}

export default observer(RegisterForm);
