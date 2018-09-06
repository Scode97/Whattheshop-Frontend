import React, { Component } from "react";
import { Text, View} from 'react-native';
import {Card, CardItem, Body, Button, Icon , Container, Content} from "native-base";
import { Link , Redirect, withRouter} from "react-router-native";



import { SideMenu, List, ListItem } from 'react-native-elements';
import {observer} from "mobx-react";
import dataStore from "../stores/dataStore";
import authStore from "../stores/authStore";

class SlackBoxPlans extends Component {

  renderItem(data){
    return (

          <Button
            onPress = {() => {
              dataStore.setIndex(data.id);
              if (!authStore.isAuthenticated){
              this.props.history.push('/Login')
              }

              else {
                this.props.history.push('/plansDetail')
              }
            }}

            icon block success>
            <Icon name='person' />
            <Text>{data.name}</Text>
          </Button>


    );

  }


  render() {
    const plans = dataStore.plans.map (data => this.renderItem(data));

    return (

      <List>{plans}</List>

    );
  }
}
export default  withRouter(observer(SlackBoxPlans));
