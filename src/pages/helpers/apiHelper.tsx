import axios from 'axios';
import NProgress from 'nprogress';

axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  NProgress.start();
  return config;
}, function (error) {
  // Do something with request error
  NProgress.done();
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  NProgress.done();
  return response;
}, function (error) {
  NProgress.done();
  return Promise.reject(error);
});

const base = (method: any, url: any, data: Object = {}, headers: Object = {}, secure: Boolean = true) => {
  if (secure) {
    return axios({
      method,
      url,
      data,
      headers,
    });
  }
};

const ApiHelper: any = {};

['get', 'post', 'put', 'patch', 'delete'].forEach(method => {
  ApiHelper[method] = base.bind(null, method);
});

export default ApiHelper;
