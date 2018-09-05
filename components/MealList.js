import React, { Component } from "react";
import { Text} from 'react-native';

import { SideMenu, List, ListItem } from 'react-native-elements';
import dataStore from "../stores/dataStore";

class MealList extends Component {
  renderItem(data){
    return <Text>{data.name}</Text>
  }
  render() {
    // const MealList = dataStore.mealsList.map (data => this.renderItem (data));
    return (
      <Text>HELLLLOOOOOO</Text>
      // <List> {MealList}</List>
    );
  }
}

export default MealList;
