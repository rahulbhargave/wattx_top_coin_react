import axios from "axios";

export default axios.create({
    baseURL: "/v1/cryptocurrency",
    headers: {
      "Content-type": "application/json",
      "X-CMC_PRO_API_KEY":"2e140dbf-df4b-48b0-8665-c91094dd8dba"
    }
});