import { decorate, observable, action, computed } from "mobx";
import axios from "axios";
import { AsyncStorage } from "react-native";
import jwt_decode from "jwt-decode";

// Utils
import setAuthToken from "../utils/setAuthToken";


class userStore {
  constructor() {
    // Create an array to save the user's orders
    //contains name of order, quantity, total price
  }

  //create a function which takes the order from the slackboxplans detail page
  // takes the quantity as well
  //calculates total price by getting the price from data store
  //setting all the properties to the array
}

decorate(userStore, {

});

export default new userStore();
