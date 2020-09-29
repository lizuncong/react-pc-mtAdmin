import React, { memo, useState, useRef } from 'react';
import anim from './cssAnimation';
import './index.less';

const Index = memo(() => {
  const [show, setShow] = useState(false);
  const boxRef = useRef(null);
  return (
    <div className="test-container">
      <div ref={boxRef} className="box">
        box
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
