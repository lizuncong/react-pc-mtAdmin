import React from 'react';
import { Tooltip } from 'antd';
import IconFont from '../icon-font';
import styles from './index.module.less';

class Password extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      capsTooltip: false,
    };
  }

  render() {
    const { isEyeOpen, capsTooltip } = this.state;
    const {
      showEye, onChange, value, className, inputClassName,
    } = this.props;
    return (
      <Tooltip placement="right" title="大写已打开" visible={capsTooltip}>
        <div className={[styles.passwordRow, className].join(' ')}>
          <input
            className={[styles.password, inputClassName].join(' ')}
            type="text"
            value={isEyeOpen ? value : value.split('').map(() => '*').join('')}
            onKeyUp={(e) => {
              const { key } = e;
              this.setState({
                capsTooltip: key && key.length === 1 && (key >= 'A' && key <= 'Z'),
              });
            }}
            onChange={(e) => {
              const inputValue = e.target.value;
              const newValue = [];
              inputValue.split('').forEach((item, i) => newValue.push(item === '*' ? value[i] : item));
              onChange(newValue.join(''));
            }}
          />
          {
            !!showEye && (
              <IconFont
                type={isEyeOpen ? 'icon-display' : 'icon-Hide'}
                className={styles.eye}
                onClick={() => {
                  this.setState({
                    isEyeOpen: !isEyeOpen,
                  });
                }}
              />
            )
          }
        </div>
      </Tooltip>
    );
  }
}

export default Password;
