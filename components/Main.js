import React, { Component } from "react";
import { Content, Icon, Button, Text } from "native-base";
import { Link } from "react-router-native";

import {
  ImageBackground,
  ScrollView,
  Image,
  TouchableOpacity,
  View
} from "react-native";
import MealList from "./MealList";
import SlackBoxPlans from "./SlackBoxPlans";

import Login from "./Login";

class Main extends Component {
  LinktoMealList() {
    <Login />;
  }
  render() {
    return (
      <ScrollView>
        {/* <Icon
               type="Octicons"
               name="smiley"
               style={{
                 fontSize: 300,
                 alignSelf: "center",
                 paddingTop: "50%",
                 color: "red"
               }}
             /> */}

        <Image
          source={require("../Images/slack.png")}
          style={{
            width: 450,
            height: 300,
            alignSelf: "center"
          }}
        />

        <View>
          <Link component={TouchableOpacity} to="/SlackBoxPlans">
            <Image
              source={require("../Images/dryingredients.jpg")}
              style={{
                width: 450,
                height: 400,
                alignSelf: "center"
              }}
            />
          </Link>
        </View>

        <View>
          <Link component={TouchableOpacity} to="/MealList">
            <Image
              source={require("../Images/dryingredients1.jpg")}
              style={{
                width: 450,
                height: 400,
                alignSelf: "center"
              }}
            />
          </Link>
        </View>
      </ScrollView>
    );
  }
}

export default Main;
