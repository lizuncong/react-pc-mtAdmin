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
