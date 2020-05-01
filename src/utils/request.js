import axios from 'axios';
import qs from 'qs';
import { notification, message } from 'antd';

const showDomLoading = (domId) => {
  if (!domId) return;
  // 如果domId === 'root'，则全局加载lading
  if (domId === 'body') {
    const bodyOverlay = document.getElementById('body-overlay');
    bodyOverlay.style.display = 'block';
    return;
  }
  const dom = document.getElementById(domId);
  if (!dom) return;
  const { borderRadius } = dom.style;
  const {
    borderTopLeftRadius, borderTopRightRadiusRadius,
    borderBottomLeftRadius, borderBottomRightRadius,
  } = window.getComputedStyle(dom);
  const {
    left, top, height, width,
  } = dom.getBoundingClientRect();
  const domOverlay = document.getElementById('dom-loading');
  if (borderRadius) {
    domOverlay.style.borderRadius = borderRadius;
  } else {
    domOverlay.style.borderBottomLeftRadius = borderBottomLeftRadius;
    domOverlay.style.borderBottomRightRadius = borderBottomRightRadius;
    domOverlay.style.borderTopRightRadius = borderTopRightRadiusRadius;
    domOverlay.style.borderTopLeftRadius = borderTopLeftRadius;
  }
  domOverlay.style.display = 'block';
  domOverlay.style.left = `${left}px`;
  domOverlay.style.top = `${top}px`;
  domOverlay.style.width = `${width}px`;
  domOverlay.style.height = `${height}px`;
};
const hideDomLoading = (domId) => {
  if (!domId) return;
  if (domId === 'body') {
    const bodyOverlay = document.getElementById('body-overlay');
    bodyOverlay.style.display = 'none';
    return;
  }
  const domOverlay = document.getElementById('dom-loading');
  domOverlay.style.display = 'none';
};
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
        hideDomLoading(domId);
        if (res && res.status === 200) {
          console.log('res.status...', res.status, res.data);
          const { data: { code, msg } } = res;
          if (Number(code)) {
            message.error(msg);
            return;
          }
          resolve(data);
        } else {
          // 请求出错
          notification.open({
            message: '返回的状态码不是200',
          });
        }
      }).catch((error) => {
        hideDomLoading(domId);
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

  // static ajax(options){
  //   let loading;
  //   if (options.data && options.data.isShowLoading !== false){
  //     loading = document.getElementById('ajaxLoading');
  //     loading.style.display = 'block';
  //   }
  //   let baseApi = 'https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api';
  //   return new Promise((resolve,reject)=>{
  //     axios({
  //       url:options.url,
  //       method:'get',
  //       baseURL:baseApi,
  //       timeout:5000,
  //       params: (options.data && options.data.params) || ''
  //     }).then((response)=>{
  //       if (options.data && options.data.isShowLoading !== false) {
  //         loading = document.getElementById('ajaxLoading');
  //         loading.style.display = 'none';
  //       }
  //       if (response.status === '200'){
  //         let res = response.data;
  //         if (res.code === '0'){
  //           resolve(res);
  //         }else{
  //           Modal.info({
  //             title:"提示",
  //             content:res.msg
  //           })
  //         }
  //       }else{
  //         reject(response.data);
  //       }
  //     })
  //   });
  // }
}

export default new Request();
