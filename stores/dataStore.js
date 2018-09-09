import { decorate, observable, action, computed } from "mobx";
import axios from "axios";
import { AsyncStorage } from "react-native";
import jwt_decode from "jwt-decode";

// Utils
import setAuthToken from "../utils/setAuthToken";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

class dataStore {
  constructor() {
    this.MealsList = [];
    this.name = "";
    this.x = 0;

    this.plans = [
      {
        name: "Solo",
        id: 1
      },
      {
        name: "Couple",
        id: 2
      },
      {
        name: "Family",
        id: 3
      }
    ];
    this.index = 0;
    this.totalPrice = 0;
  }

  setIndex(id) {
    this.index = id;
  }

  planList() {
    instance
      .get("/api/plansList/")
      .then(response => response.data)
      .then(MealList => {
        this.MealsList = MealList;
        console.log(this.MealsList);
      })
      .catch(error => console.log(error));
  }

  findPlan(name) {
    this.name = name;

    let x = this.MealsList.findIndex(
      MealsLists => MealsLists.name === this.name
    );
    this.x = x;
    this.totalPrice = this.MealsList[this.x].totalPrice;
    console.log(this.x);
  }
}
decorate(dataStore, {
  MealsList: observable,
  plans: observable
});

export default new dataStore();
