import axios from "axios";

export default {
  pushServerInfo: function (text, newAverage){
    return axios.post("/api/quotes/exists", {text: text, newAverage: newAverage});
  },
  getTheAverage: function(text, newAverage){
    return axios.post("/api/quotes/average", {text, newAverage});
  },
  getApiQuotes: function(id){
    return axios.get("http://ron-swanson-quotes.herokuapp.com/v2/quotes");
  }
};
