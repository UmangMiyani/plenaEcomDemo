import axios from 'axios';
import API_CONSTANT from './ApiConstant';

const api = axios.create({
  baseURL: API_CONSTANT.BASE_URL,
  delayed: false,
});

const header = {
  'Content-Type': 'application/json',
};

const get = (endpoint = '') => {
  return new Promise((resolve, reject) => {
    api
      .get(endpoint, header)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const post = data => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${TWILIO_BASE_URL}/api/v1/auth/generateToken`, data)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};

export {get, post};
