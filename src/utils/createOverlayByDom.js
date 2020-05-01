const loadingUrl = 'https://media.number-7.cn/ebike-h5/static/images/common/loading.gif';
// 根据domId给dom添加loading
// domId可以是数组，也可以是字符串，
// domId: ['id1', 'id2']或者domId: 'id1'
const domObj = {};
const createOverlayByDom = (domId) => {
  const dom = document.getElementById(domId);
  if (!dom) return;
  const domParent = dom.parentNode;
  const { position: parentPosition } = window.getComputedStyle(domParent);
  if (parentPosition === 'static') {
    domParent.style.position = 'relative';
    domObj[`${domId}-parent`] = {
      parentPosition,
    };
  }
  const { left: parentLeft, top: parentTop } = domParent.getBoundingClientRect();
  const domOverlay = document.createElement('div');
  domOverlay.id = `${domId}-overlay`;
  domOverlay.style.display = 'block';
  domOverlay.style.position = 'absolute';
  domOverlay.style.background = 'rgba(0,0,0,0.5)';
  domOverlay.style.zIndex = '9998';
  domOverlay.style.cursor = 'not-allowed';
  const {
    borderTopLeftRadius, borderTopRightRadius,
    borderBottomLeftRadius, borderBottomRightRadius,
  } = window.getComputedStyle(dom);
  const {
    left, top, height, width,
  } = dom.getBoundingClientRect();
  domOverlay.style.borderBottomLeftRadius = borderBottomLeftRadius;
  domOverlay.style.borderBottomRightRadius = borderBottomRightRadius;
  domOverlay.style.borderTopRightRadius = borderTopRightRadius;
  domOverlay.style.borderTopLeftRadius = borderTopLeftRadius;

  domOverlay.style.left = `${left - parentLeft}px`;
  domOverlay.style.top = `${top - parentTop}px`;
  domOverlay.style.width = `${width}px`;
  domOverlay.style.height = `${height}px`;
  const loadingImg = document.createElement('img');
  loadingImg.src = loadingUrl;
  loadingImg.style.position = 'absolute';
  loadingImg.style.width = '25px';
  loadingImg.style.height = '25px';
  loadingImg.style.top = '50%';
  loadingImg.style.left = '50%';
  loadingImg.style.transform = 'translate(-50%, -50%)';
  domOverlay.appendChild(loadingImg);
  domParent.appendChild(domOverlay);
};
const showDomLoading = (domId) => {
  if (!domId) return;
  // 如果domId === 'body'，则全局加载lading
  if (domId === 'body') {
    const bodyOverlay = document.getElementById('body-overlay');
    bodyOverlay.style.display = 'block';
    return;
  }
  const ids = domId instanceof Array ? domId : [domId];
  ids.forEach((id) => {
    createOverlayByDom(id);
  });
};
const removeDomLoading = (domId) => {
  if (!domId) return;
  if (domId === 'body') {
    const bodyOverlay = document.getElementById('body-overlay');
    bodyOverlay.style.display = 'none';
    return;
  }
  const ids = domId instanceof Array ? domId : [domId];
  ids.forEach((id) => {
    const dom = document.getElementById(id);
    if (!dom) return;
    const domParent = dom.parentNode;
    const domOverlay = document.getElementById(`${id}-overlay`);
    if (!domParent || !domOverlay) return;
    domParent.removeChild(domOverlay);
    if (domObj[`${id}-parent`]) {
      domParent.style.position = '';
      delete domObj[`${id}-parent`];
    }
  });
};

export { showDomLoading, removeDomLoading };
