import { decorate, observable, action, computed, set } from "mobx";
import axios from "axios";
import { AsyncStorage } from "react-native";
import jwt_decode from "jwt-decode";

// Utils
import setAuthToken from "../utils/setAuthToken";

import dataStore from "../stores/dataStore";
import authStore from "../stores/authStore";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

class userStore {
  constructor() {
    this.order = [];
    this.totalquantity = 0;
    this.name = "";
    this.totalPrice = 0;
    this.total = 0;
    this.x = 0;
    this.quantity = 0;
    this.orderhistory = [];
  }

  setTotalQuantity() {
    this.totalquantity = this.totalquantity + 1;
  }

  setTotal(data) {
    this.total = Number(this.total) + Number(data);
  }

  createOrder(name) {
    let obj = {
      name: dataStore.name,
      totalPrice: dataStore.totalPrice,
      quantity: 1
    };
    this.totalquantity += 1;

    let x = this.order.findIndex(orders => orders.name === name);
    if (x >= 0) {
      this.total -=
        Number(this.order[x].totalPrice) * Number(this.order[x].quantity);
      this.order[x].quantity += 1;
      // for (let i = 0; i < this.order[x].quantity; i++) {
      this.order[x].totalPrice =
        this.order[x].totalPrice * this.order[x].quantity;
      // this.total = Number(this.total) + Number(this.order[x].totalPrice);
      this.setTotal(this.order[x].totalPrice);
    } else {
      this.order.push(obj);
      this.setTotal(obj.totalPrice);
    }
  }

  calculatePrice() {
    this.order.totalPrice;
  }
  sendData() {
    const user = this.order;
    // const currentUser = authStore.user;
    console.log(user);
    instance
      .post(`/api/orders/`, { obj: user })

      .then(response => console.log(response))

      .catch(error => console.log(error));
  }

  userHistory() {
    console.log("hello");
    const user = authStore.user;
    console.log(user);
    instance
      .get(`/api/orderlist/${user.user_id}/`)
      .then(response => response.data)
      .then(orderlist =>
        // {
        //   if (user === orderlist.user)
        {
          this.orderhistory = orderlist;
          console.log("here");
          console.log(this.orderhistory);
        }
      )
      .catch(error => console.log(error));
  }

  emptyCart() {
    this.order = [];
    this.totalquantity = 0;
    this.totalPrice = 0;
  }
}

decorate(userStore, {
  order: observable,
  totalPrice: observable,
  totalquantity: observable,
  total: observable,
  name: observable,
  createOrder: action,
  userHistory: action
});

export default new userStore();
