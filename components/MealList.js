import React, { Component } from "react";
import { Text } from "react-native";

import { List, ListItem } from "react-native";
import dataStore from "../stores/dataStore";
// import { Card, CardItem } from "native-base";

class MealList extends Component {
  renderItem(data) {
    return <Text key={data.name}>hello</Text>;
  }
  render() {
    const List = dataStore.mealsList.map(this.renderItem);
    console.log(List);
    return <List>{List}</List>;
  }
}

export default MealList;
