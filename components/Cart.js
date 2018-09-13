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
      <View>
        <List>
          <Card>
            <ListItem>
              <Text>Order : {data.name}</Text>
            </ListItem>
            {"\n"}
            <ListItem>
              <Text>Price: {data.totalPrice}</Text>
            </ListItem>
            {"\n"}
            <ListItem>
              <Text>Quantity: {data.quantity}</Text>
              {"\n"}
            </ListItem>
          </Card>
        </List>
      </View>

      //     <View style={{ paddingLeft: 20 }}>
      //       <Text>
      //         <List>
      //           <ListItem>
      //             <Text>Order: </Text>
      //             <Text>{data.name}</Text>
      //           </ListItem>
      //           <ListItem>
      //             <Text>Quantity: </Text>
      //             <Text> {data.quantity} </Text>
      //           </ListItem>
      //           <ListItem>
      //             <Text>Price: </Text>
      //             <Text>{data.totalPrice} </Text>
      //           </ListItem>
      //         </List>
      //       </Text>
      //     </View>
      //   </Content>
      // </Container>
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
        <List>
          <Content>
            <ListItem>
              <Text> Total Price: {userStore.total}</Text>
            </ListItem>
            <Body />
            <Left>
              <Link
                to="/plansList"
                component={Button}
                onPress={() => {
                  userStore.sendData();
                  // userStore.emptyCart();
                }}
                iconRight
                info
              >
                <Text> Check Out </Text>
              </Link>
            </Left>
          </Content>
        </List>
      </View>
    );
    // <Text>{userStore.totalPrice}</Text>;
  }
}

export default observer(Cart);
