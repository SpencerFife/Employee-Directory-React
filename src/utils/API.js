import axios from "axios";

export default {
  searchUsers: function () {
    return axios.get("https://randomuser.me/api/?results=75");
  },
};
