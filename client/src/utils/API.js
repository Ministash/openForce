import axios from "axios";

export default {
  getQuotes: function (id) {
    return axios.get("/api/quotes/" + id);
  },
  pushRating: function (id){
    return axios.post("/api/rating/" + id);
  },

};
