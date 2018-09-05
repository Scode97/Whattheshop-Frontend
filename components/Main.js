import React, { Component } from "react";
import {Content,Icon, Button, Text} from "native-base";
import { Link } from "react-router-native";

import {ImageBackground, ScrollView, Image, TouchableOpacity, View} from "react-native";
import MealList from "./MealList";
import Login from "./Login";

class Main extends Component {

  LinktoMealList (){
     <Login/>

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
          source={require('../Images/woodenbackground.jpg')}
          style={{
            width: 450,
            height: 300,
            alignSelf: "center",
          }}
        />

        <View>
          <TouchableOpacity onPress={()=>{alert("you clicked me")}}>
        <Image
     source={require('../Images/dryingredients.jpg')}
     style={{
       width: 450,
       height: 400,
       alignSelf: "center",
     }}
     />
   </TouchableOpacity>

   </View>

        <View>
          
          <TouchableOpacity onPress = {this.LinktoMealList} >
        <Image
     source={require('../Images/dryingredients1.jpg')}
     style={{
       width: 450,
       height: 400,
       alignSelf: "center",
     }}
     />
   </TouchableOpacity>


 </View>




           </ScrollView>

    );
  }
}

export default Main;
