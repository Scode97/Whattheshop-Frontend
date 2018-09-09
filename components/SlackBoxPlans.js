import React, { Component } from "react";
import { Link } from "react-router-native";

import {
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image
} from "react-native";
import {
  Card,
  CardItem,
  Body,
  Thumbnail,
  Left,
  Button,
  List,
  Icon,
  Right
} from "native-base";

import { observer } from "mobx-react";
import dataStore from "../stores/dataStore";

class SlackBoxPlans extends Component {
  renderItem(data) {
    console.log("------------------------");
    console.log(data);
    return (
      <ScrollView key={data.name}>
        <View>
          <Link
            component={TouchableOpacity}
            to="/plansDetail/"
            onPress={() => dataStore.findPlan(data.name)}
          >
            <Image
              // component={TouchableOpacity}
              // to="./SlackBoxPlansDetail"
              // key={data.name}
              source={{ uri: data.image }}
              style={{ height: 230, width: null, flex: 1 }}
            />
          </Link>
        </View>
      </ScrollView>
    );
  }

  componentDidMount() {
    dataStore.planList();
  }
  render() {
    const MealList = dataStore.MealsList.map(data => this.renderItem(data));
    return (
      <View>
        <List> {MealList}</List>
        {/* <Text>YOU ARE IN DETAIL PAGE</Text> */}
      </View>
    );
  }
}

export default observer(SlackBoxPlans);
