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
  Header,
  Title,
  Thumbnail
} from "native-base";
import { Link, Redirect, withRouter } from "react-router-native";

import { observer } from "mobx-react";
import dataStore from "../stores/dataStore";
import userStore from "../stores/userStore";

class SlackBoxPlansDetail extends Component {
  render() {
    let m = dataStore.MealsList[dataStore.x];
    return (
      <Container style={styles.container}>
        <Header>
          <Body>
            <Title>Menu</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={{ paddingLeft: 20 }}>
            <List>
              <Text>
                <Left>
                  <ListItem>
                    {" "}
                    <Text>Plan Name: </Text>
                    <Text>{m.name} </Text>{" "}
                  </ListItem>
                  <ListItem>
                    <Text>Plan Price: </Text>
                    <Text note>{m.totalPrice}</Text>
                  </ListItem>
                </Left>
              </Text>

              <ListItem>
                <Text> {m.description}</Text>
              </ListItem>

              <Body />
            </List>
            <Button
              onPress={() => {
                userStore.createOrder(m.name);
              }}
              full
              light
            >
              <Text>Add</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
export default withRouter(observer(SlackBoxPlansDetail));
