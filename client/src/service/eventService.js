import axios from "axios";
import * as helpers from "./serviceHelpers";

const retrieveEvents = () => {
  const config = {
    method: "GET",
    url: `/api/events/`,
    crossdomain: true,

    headers: { "Content-Type": "application/json" }
  };

  return axios(config).then(helpers.onGlobalSuccess).catch(helpers.onGlobalError);
};

const retrieveEventById = (id) => {
  const config = {
    method: "GET",
    url: `/api/events/${id}`,
    crossdomain: true,

    headers: { "Content-Type": "application/json" }
  };

  return axios(config).then(helpers.onGlobalSuccess).catch(helpers.onGlobalError);
};

const verifyPortalLogin = async (password) => {
  const config = {
    method: "POST",
    url: `/api/users/verify`,
    crossdomain: true,
    data: { password: password },
    headers: { "Content-Type": "application/json" }
  };

  return axios(config).then(helpers.onGlobalSuccess).catch(helpers.onGlobalError);
};

export { retrieveEvents, retrieveEventById, verifyPortalLogin };
