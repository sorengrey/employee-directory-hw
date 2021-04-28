import axios from "axios";

// Export an object containing methods we'll use for accessing the RandomUser API -- this is not done yet!!

export default {
  // supposed to get 50 random users
  getUsers: function() {
    return axios.get("https://randomuser.me/api/?results=50");
  }
}

