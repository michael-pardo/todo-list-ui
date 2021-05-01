import axios from "axios";

const baseDomain = "http://localhost:8000";
const baseURL = `${baseDomain}`; // Incase of /api/v1;

// ALL DEFUALT CONFIGURATION HERE

export default axios.create({
  baseURL,
});
