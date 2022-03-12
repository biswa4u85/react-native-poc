import Config from "../common/Config";
import axios from 'axios';

const axiosAPI = axios.create({
  baseURL: Config.apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  }
});

export function apiPostCall(path, params) {
  let headers = {}
  if (params.token) {
    headers.Authorization = params.token
  }
  if (params.razorPaySignature) {
    headers["x-razorpay-signature"] = params.razorPaySignature
  }
  return axiosAPI.post(path, params, { headers: headers })
    .then((response) => {
      return response
    })
    .catch((error) => {
      if (error.response) {
        return error.response
      } else if (error.request) {
        return error.request
      } else {
        return error.message
      }
    });
}

export function apiPutCall(path, params) {
  return axiosAPI.put(path, params, { headers: { 'Authorization': params.token } })
    .then((response) => {
      return response
    })
    .catch((error) => {
      if (error.response) {
        return error.response
      } else if (error.request) {
        return error.request
      } else {
        return error.message
      }
    });
}

export function apiGetCall(path, params) {
  // console.log(path, params)
  return axiosAPI.get(path, { headers: { 'Authorization': params.token } })
    .then((response) => {
      return response
    })
    .catch((error) => {
      if (error.response) {
        return error.response
      } else if (error.request) {
        return error.request
      } else {
        return error.message
      }
    });
}

export function apiGetSingleCall(path, params) {
  return axiosAPI.get(path, { headers: { 'Authorization': params.token } })
    .then((response) => {
      return response
    })
    .catch((error) => {
      if (error.response) {
        return error.response
      } else if (error.request) {
        return error.request
      } else {
        return error.message
      }
    });
}

export function apiDeleteCall(path, params) {
  return axiosAPI.delete(path, { headers: { 'Authorization': params.token } })
    .then((response) => {
      return response
    })
    .catch((error) => {
      if (error.response) {
        return error.response
      } else if (error.request) {
        return error.request
      } else {
        return error.message
      }
    });
}

export function uploadImgApi(file, token) {
  const data = new FormData();
  data.append('files', file);
  return fetch(`${Config.apiBaseUrl}/file/upload`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      authorization: token,
    },
    body: data,
  })
    .then(response => response.json())
    .then(responseJson => {
      if (responseJson) {
        return `${responseJson.data[0].url}`
      }
      return null
    }).catch(error => {
      return error;
    });
}