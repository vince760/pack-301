import axios from "axios";

axios.defaults.withCredentials = true; // Set this to true
// Add a request interceptor
axios.interceptors.request.use((config) => {
  config.withCredentials = true; // Ensure this is set to true
  config.crossDomain = true;

  return config;
});

/**
 * Will unpack the response body from reponse object
 * @param {*} response
 *
 */
/// Should not use if you need access to anything other than the data
const onGlobalSuccess = (response) => response.data;
const onGlobalError = (err) => Promise.reject(err);

const API_HOST_PREFIX = process.env.REACT_APP_API_HOST_PREFIX;
const API_NODE_HOST_PREFIX = process.env.REACT_APP_API_NODE_HOST_PREFIX;

export { onGlobalError, onGlobalSuccess, API_HOST_PREFIX, API_NODE_HOST_PREFIX };
