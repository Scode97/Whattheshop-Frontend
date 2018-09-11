import { decorate, observable, action, computed } from "mobx";
import axios from "axios";
import { AsyncStorage } from "react-native";
import jwt_decode from "jwt-decode";

// Utils
import setAuthToken from "../utils/setAuthToken";

import dataStore from "../stores/dataStore";

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

    let x = this.order.findIndex(orders => orders.name === name);
    if (x >= 0) {
      this.order[x].quantity += 1;
      this.totalquantity++;
      this.order[x].totalPrice =
        this.order[x].totalPrice * this.order[x].quantity;
    } else {
      this.order.push(obj);
      this.totalquantity++;
    }
  }

  sendData() {
    const user = this.order;
    console.log(user);
    instance
      .post("/api/orders/", { obj: user })

      .then(response => console.log(response))

      .catch(error => console.log(error));
  }
}

decorate(userStore, {
  order: observable,
  totalPrice: observable,
  totalquantity: observable,
  name: observable,
  createOrder: action
});

export default new userStore();
