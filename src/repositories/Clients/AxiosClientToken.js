import axios from "axios";

const baseDomain = "http://fc757583dc49.ngrok.io";
const baseURL = `${baseDomain}`; // Incase of /api/v1;

// ALL DEFUALT CONFIGURATION HERE

export default axios.create({
  baseURL,
  headers: {
    "Authorization": `Bearer ${localStorage.getItem("token")}`
  }
});
