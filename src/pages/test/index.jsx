import React, { memo, useState, useRef } from 'react';
import anim from './cssAnimation';
import './index.less';

const Index = memo(() => {
  const [show, setShow] = useState(false);
  const boxRef = useRef(null);
  return (
    <div className="test-container">
      <div
        style={{
          height: show ? '150px' : 0,
          // display: show ? '' : 'none',
        }}
        ref={boxRef}
        className={['box'].join(' ')}
        onTransitionEnd={() => {
          const box = boxRef.current;
          box.style.display = show ? '' : 'none';
          box.style.opacity = show ? '' : '0';
          box.classList.remove('collapse-active');
        }}
      >
        <div>这是一段文本</div>
        <div>这是一段文本</div>
        <div>这是一段文本</div>
        <div>这是一段文本</div>
      </div>
      <div
        style={{ marginBottom: '100px' }}
        onClick={() => {
          const box = boxRef.current;
          box.style.display = '';
          box.style.opacity = '';
          box.classList.add('collapse-active');
          setShow(!show);
          // if (show) {
          //   box.style.height = `${box.offsetHeight}px`;
          // } else {
          //   const height = box.offsetHeight;
          //   box.style.height = 0;
          // }
        }}
      >
        切换
      </div>
      <div
        onClick={() => {
          const box = boxRef.current;
          box.style.display = '';
          let height;
          anim(box, 'collapse', {
            start() {
              console.log('start...');
              if (show) {
                box.style.height = `${box.offsetHeight}px`;
              } else {
                height = box.offsetHeight;
                box.style.height = 0;
              }
            },
            active() {
              box.style.height = `${show ? height : 0}px`;
            },
            end() {
              box.style.display = show ? '' : 'none';
              box.style.height = '';
            },
          });
          setShow(!show);
        }}
      >
        click me
      </div>
    </div>
  );
});


export default Index;
