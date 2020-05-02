import React from 'react';
import { message } from 'antd';
import screenfull from 'screenfull';
import IconFont from '../icon-font';
import styles from './index.module.less';

class ScreenFull extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFullScreen: false,
    };
    this.onChange = () => {
      this.setState({
        isFullScreen: screenfull.isFullscreen,
      });
    };
  }

  componentDidMount() {
    if (screenfull.isEnabled) {
      screenfull.on('change', this.onChange);
    }
  }

  componentWillMount() {
    if (screenfull.isEnabled) {
      screenfull.off('change', this.change);
    }
  }

  render() {
    const { isFullScreen } = this.state;
    const { className } = this.props;
    return (
      <IconFont
        type={isFullScreen ? 'icon-close1' : 'icon-open1'}
        className={[styles.icon, className].join(' ')}
        onClick={() => {
          if (!screenfull.isEnabled) {
            message.warn('浏览器不支持');
            return false;
          }
          screenfull.toggle();
        }}
      />
    );
  }
}

export default ScreenFull;
