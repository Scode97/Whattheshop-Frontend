import { decorate, observable, action, computed } from "mobx";
import axios from "axios";
import { AsyncStorage } from "react-native";
import jwt_decode from "jwt-decode";

// Utils
import setAuthToken from "../utils/setAuthToken";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

class dataStore {
  constructor() {
    this.mealsList = [];
  }

  planList(){
  axios.get('/api/api/mealsList')
    .then(response => response.data)
    .then(MealList => this.mealsList = MealList)
    .catch(error => console.error(error));
  }

}
decorate(dataStore, {
  mealsList: observable,

});

export default new dataStore();
