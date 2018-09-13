import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase
import {
  Footer,
  FooterTab,
  Button,
  Icon,
  View,
  Text,
  List,
  ListItem,
  Left,
  Right,
  Container,
  Header,
  Title,
  Content,
  Card,
  Body
} from "native-base";

// Router
import { Link } from "react-router-native";
import dataStore from "../stores/dataStore";
import userStore from "../stores/userStore";

class Cart extends Component {
  looping(data) {
    return (
      <Container style={styles.container}>
        {/* <Header>
          <Body>
            <Title>Cart</Title>
          </Body>
          <Right />
        </Header> */}
        <Content>
          {/* <SwipeRow
            leftOpenValue={75}
            rightOpenValue={-75}
            left={
              <Button success onPress={() => alert("Add")}>
                <Icon active name="add" />
              </Button>
            }
            right={
              <Button danger onPress={() => alert("Trash")}>
                <Icon active name="trash" />
              </Button>
            }
            body={ */}
          <View style={{ paddingLeft: 20 }}>
            <Text>
              <List>
                <ListItem>
                  <Text>Order: </Text>
                  <Text>{data.name}</Text>
                </ListItem>
                <ListItem>
                  <Text>Quantity: </Text>
                  <Text> {data.quantity} </Text>
                </ListItem>
                <ListItem>
                  <Text>Price: </Text>
                  <Text>{data.totalPrice} </Text>
                </ListItem>
              </List>
            </Text>
            <Content>
              <Right>
                <Button light iconLeft>
                  {" "}
                  <Text> Total Price </Text>
                </Button>
              </Right>
              <Body />
              <Left>
                <Link
                  to="/plansList"
                  component={Button}
                  onPress={() => {
                    userStore.sendData();
                  }}
                  iconRight
                  info
                >
                  <Text> Check Out </Text>
                </Link>
              </Left>
            </Content>
          </View>
        </Content>
      </Container>
    );
  }
  render() {
    return (
      <View>
        <Header>
          <Body>
            <Title>Cart</Title>
          </Body>
          <Right />
        </Header>
        <List>{userStore.order.map(data => this.looping(data))}</List>
      </View>
    );
    // <Text>{userStore.totalPrice}</Text>;
  }
}

export default observer(Cart);
