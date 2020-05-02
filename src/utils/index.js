export const getFileUrl = (file) => {
  let url;
  const agent = navigator.userAgent;
  if (agent.indexOf('MSIE') >= 1) {
    url = file.value;
  } else if (agent.indexOf('Firefox') > 0 || agent.indexOf('Chrome') > 0) {
    url = window.URL.createObjectURL(file);
  }
  return url;
};

/**
 * @param {string} url
 * @returns {Object}
 */
export const getQueryObject = (url) => {
  url = url == null ? window.location.href : url;
  const search = url.substring(url.lastIndexOf('?') + 1);
  const obj = {};
  const reg = /([^?&=]+)=([^?&=]*)/g;
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1);
    let val = decodeURIComponent($2);
    val = String(val);
    obj[name] = val;
    return rs;
  });
  return obj;
};
