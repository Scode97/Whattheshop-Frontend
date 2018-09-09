import { decorate, observable, action, computed } from "mobx";
import axios from "axios";
import { AsyncStorage } from "react-native";
import jwt_decode from "jwt-decode";

// Utils
import setAuthToken from "../utils/setAuthToken";


class userStore {
  constructor() {
    // Create an array to save the user's orders
    this.order = [];
    //contains name of order, quantity, total price
  }


  // createOrder(name){
  //   let index = dataStore.index;
  //
  //   if (index === 1){
  //     ///the total price
  //   }
  // }
  //













  function (order, quantity){
    dataStore.MealsList.map (
        //Map through to find out which order was taken and get the price
        if order === MealsList.name (
          MealsList.price
        )
    )

  }
  //create a function which takes the order from the slackboxplans detail page
  // takes the quantity as well
  //calculates total price by getting the price from data store
  //setting all the properties to the array
}

decorate(userStore, {

});

export default new userStore();
