import axios from "axios";

export const api = axios.create({
    baseURL: `http://127.0.0.1:8000/`,
  });

const get = (url, config) =>
  api.get(url, config || {}).then(response => response.data);

const patch = (url, data) =>
  api.patch(url, data).then(response => response.data);

const post = (url, data, config) =>
  api.post(url, data, config || {}).then(response => response.data);

const remove = (url, config) =>
  api.delete(url, config || {}).then(response => response.data);

export { get, patch, post, remove };