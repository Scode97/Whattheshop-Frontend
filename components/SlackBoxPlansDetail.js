import React, { Component } from "react";
import { ImageBackground, Text, View} from 'react-native';
import {Card, CardItem, Body, Thumbnail,Left } from "native-base";


import { SideMenu, List, ListItem } from 'react-native-elements';
import {observer} from "mobx-react";
import dataStore from "../stores/dataStore";

class SlackBoxPlansDetail extends Component {
  renderItem(data){
    return (
      <ImageBackground
      source={require('../Images/Highprotien.jpg')}
      style={{ height: 230, width: null, flex: 1 }}
    >

        <Card
          style={{
            backgroundColor: "transparent",
            borderTopWidth: 0,
            borderRightWidth: 0,
            borderLeftWidth: 0,
            borderBottomWidth: 0
          }}
        >
          <CardItem style={{ backgroundColor: "transparent" }}>
            <Left>
              <Body>
                {/* <Text style={styles.text}>{data.name}</Text> */}

              </Body>
            </Left>
          </CardItem>
        </Card>
        <View style={styles.divider} />

    </ImageBackground>

  );
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

export default  observer(SlackBoxPlansDetail);
