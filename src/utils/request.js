import axios from 'axios';
import qs from 'qs';
import { notification, message } from 'antd';
import { showDomLoading, removeDomLoading } from './createOverlayByDom';


class Request {
  request(method, url, data, domId, ...rest) {
    const config = Object.assign({
      method,
      url,
      baseURL: '/api',
    }, ...rest);
    if (method === 'get') {
      config.params = data;
    } else if (method === 'post') {
      config.data = data;
    }
    showDomLoading(domId);
    return new Promise((resolve) => {
      axios(config).then((res) => {
        removeDomLoading(domId);
        if (res && res.status === 200) {
          const { code, msg, data: dataInfo } = res.data;
          if (Number(code)) {
            message.error(msg);
            resolve();
            return;
          } if (!Number(code) && dataInfo === 'success') {
            message.success(msg);
          }
          resolve(res.data);
        } else {
          // 请求出错
          notification.open({
            message: '返回的状态码不是200',
          });
          resolve();
        }
      }).catch((error) => {
        removeDomLoading(domId);
        resolve();
        console.log(`${url}-请求异常`, error);
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          notification.open({
            message: `请求异常-response-${error.response.status}`,
          });
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
          notification.open({
            message: `请求异常-request-${JSON.stringify(error.request)}`,
          });
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
          notification.open({
            message: `请求异常-${JSON.stringify(error.message)}`,
          });
        }
        console.log(error.config);
      });
    });
  }

  get(options) {
    return this.request('get', options.url, options.data, options.domId);
  }

  post(options) {
    return this.request('post', options.url, options.data, options.domId);
  }

  // application/x-www-form-urlencoded
  postForm(options) {
    const data = options.data || {};
    const headers = { 'content-type': 'application/x-www-form-urlencoded' };
    return this.request('post', options.url, qs.stringify(data), options.domId, { headers });
  }

  // multipart/form-data
  upload(options) {
    const data = options.data || {};
    const param = new FormData();
    Object.keys(data).forEach((key) => {
      const value = data[key];
      if (value instanceof Array) {
        value.forEach((item) => {
          param.append(key, item);
        });
      } else {
        param.append(key, value);
      }
    });
    const headers = { 'content-type': 'multipart/form-data' };
    return this.request('post', options.url, param, options.domId, { headers });
  }
}

export default new Request();
