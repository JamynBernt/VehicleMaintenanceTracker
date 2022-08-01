import axios from 'axios';


const BASE_URL = 'http://localhost:8080/api';

const registerApiEndPoint = `${BASE_URL}/user/register`;
const registerAPI = (payload) => {
    return axios
      .post(registerApiEndPoint, payload)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        throw error.response.data;
      });
  };

  const loginApiEndpoint = `${BASE_URL}/user/login`;
  const loginAPI = (payload) => {
      return axios
        .post(loginApiEndpoint, payload)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error){
            throw error.response.data;
        });
  };

  const myVehiclesAPI = (email) => {
    return axios
      .get(`${BASE_URL}/vehicles/user?email=${email}`)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  export { 
    myVehiclesAPI,
    loginAPI
  }