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

  const createVehicleEndPoint = `${BASE_URL}/vehicle/create`
  const createVehicleAPI = (payload) => {
    return axios
      .post(createVehicleEndPoint, payload)
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

  const vehicleHistoryAPI = (vin) => {
    return axios
      .get(`${BASE_URL}/history/vehicle?vin=${vin}`)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  };

    const deleteHistoryAPI = (id) => {
    return axios
      .delete(`${BASE_URL}/history/delete/${id}`)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const sellVehicleAPI = (email, vin) => {
    return axios
      .put(`${BASE_URL}/vehicle/sell/${email}/${vin}`)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const createHistoryEndpoint = `${BASE_URL}/history/create`
  const createHistoryAPI = (payload) => {
    return axios
      .post(createHistoryEndpoint, payload)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        throw error.response.data;
      });
  };
  export { 
    myVehiclesAPI,
    loginAPI,
    registerAPI,
    createVehicleAPI,
    vehicleHistoryAPI,
    createHistoryAPI,
    deleteHistoryAPI,
    sellVehicleAPI
  }