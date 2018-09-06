import React, { Component } from "react";

import { Text, View} from 'react-native';
import {Card, CardItem, Body } from "native-base";


import { SideMenu, List, ListItem } from 'react-native-elements';
import {observer} from "mobx-react";

import dataStore from "../stores/dataStore";


class MealList extends Component {

  renderItem(data){
    return (
      <Card>
      <CardItem >

                <Body>
                  <Text >{data.name}</Text>

                </Body>

            </CardItem>
          </Card>
    )
  }
  componentDidMount(){
    dataStore.planList()
  }
  render() {
    const MealList = dataStore.MealsList.map (data => this.renderItem(data));
    return (

      <List> {MealList}</List>

    );
  }
}

export default  observer(MealList);
