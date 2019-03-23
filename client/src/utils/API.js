import axios from "axios";

export default {
  getServerQuotes: function (id) {
    return axios.get("/api/quotes/" + id);
  },
  pushServerRating: function (id){
    return axios.post("/api/rating/" + id);
  },
  getApiQuotes: function(id){
    return axios.get("http://ron-swanson-quotes.herokuapp.com/v2/quotes");
  }

};
