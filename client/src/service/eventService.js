import axios from "axios";
import * as helpers from "./serviceHelpers";
const baseUrl = process.env.REACT_APP_URL_PREFIX;
console.log("Base URL:", baseUrl);
const retrieveEvents = () => {
  const config = {
    method: "GET",
    url: `${baseUrl}/api/events/`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config).then(helpers.onGlobalSuccess).catch(helpers.onGlobalError);
};

const retrieveEventById = (id) => {
  const config = {
    method: "GET",
    url: `${baseUrl}/api/events/${id}`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config).then(helpers.onGlobalSuccess).catch(helpers.onGlobalError);
};

const verifyPortalLogin = async (password) => {
  const config = {
    method: "POST",
    url: `${baseUrl}/api/users/verify`,
    crossdomain: true,
    data: { password: password },
    withCredentials: true, 
    headers: { "Content-Type": "application/json" }
  };

  return axios(config).then(helpers.onGlobalSuccess).catch(helpers.onGlobalError);
};

export { retrieveEvents, retrieveEventById, verifyPortalLogin };
