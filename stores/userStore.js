import { decorate, observable, action, computed } from "mobx";
import axios from "axios";
import { AsyncStorage } from "react-native";
import jwt_decode from "jwt-decode";

// Utils
import setAuthToken from "../utils/setAuthToken";

import dataStore from "../stores/dataStore";

class userStore {
  constructor() {
    // Create an array to save the user's orders
    this.order = [];
    this.totalquantity = 0;
    this.name = "";
    this.totalPrice = 0;
    this.total = 0;
    this.x = 0;
    this.quantity = 0;
    //contains name of order, quantity, total price
  }

  setTotalQuantity() {
    this.totalquantity = this.totalquantity + 1;
  }
  createOrder(name) {
    let obj = {
      name: dataStore.name,
      totalPrice: dataStore.totalPrice,
      quantity: 1
    };
    //this.order.push(obj);
    //this.setTotalQuantity();
    // console.log(this.order);

    let x = this.order.findIndex(orders => orders.name === name);
    // if (x >= 0) {
    if (x >= 0) {
      this.order[x].quantity += 1;
      this.totalquantity++;
      this.order[x].totalPrice =
        this.order[x].totalPrice * this.order[x].quantity;

      // this.total = this.total + this.order[x].totalPrice;

      // obj = {
      //   name: dataStore.name,
      //   totalPrice: this.totalPrice,
      //   quantity: 1
      // };
    } else {
      this.order.push(obj);
      this.totalquantity++;
      // this.total = dataStore[x].totalPrice;
    }
    // } else {
    //   this.orders = [];
    //   this.totalquantity++;
    //   this.orders.push(obj);
    //   // this.totalQuan = [];
    // }
  }

  // dataStore.name
  // dataStore.totalPrice
  // let x = dataStore.MealsList.findIndex(
  //   MealsLists => MealsLists.name === this.name
  // );

  // if (index === 1){
  //   ///the total price
  // }

  // function (order, quantity){
  //   dataStore.MealsList.map (
  //       //Map through to find out which order was taken and get the price
  //       if order === MealsList.name (
  //         MealsList.price
  //       )
  //   )

  // }
  //create a function which takes the order from the slackboxplans detail page
  // takes the quantity as well
  //calculates total price by getting the price from data store
  //setting all the properties to the array
}

decorate(userStore, {
  order: observable,
  totalPrice: observable,
  totalquantity: observable,
  name: observable,
  createOrder: action
});

export default new userStore();
