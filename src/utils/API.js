import axios from "axios";

// Export an object containing methods we'll use for accessing the RandomUser API -- this is not done yet!!

export default {
  getUserTable: function() {
    return axios.get("url-goes-here");
  },
  sortByLastName: function() {
    return axios.get("url-goes-here");
  },
  sortByPWLength: function() {
    return axios.get("url-goes-here");
  }
};
