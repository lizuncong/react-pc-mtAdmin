import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import mapDispatchToProps from './actions';

class ReduxDemo extends React.Component {
  componentWillUnmount() {
    // 页面卸载，但redux-demo组件的redux状态还是会保留着
    console.log('redux demo unmount....');
  }

  render() {
    const { count, changeMoreValue } = this.props;
    return (
      <div>
        <div>
          <div><NavLink to="/redux-demo">redux-demo页面</NavLink></div>
          <NavLink to="/redux-demo2">redux-demo2页面</NavLink>
        </div>
        <div>redux-demo页面</div>
        <div>计数器：{count}</div>
        <div
          onClick={() => {
            changeMoreValue({
              count: count + 1,
            });
            // 测试，更改count后并不会立即同步的
          }}
        >
          Add
        </div>
        <div
          onClick={() => {
            changeMoreValue({
              count: count - 1,
            });
          }}
        >
          decrement
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state.reduxDemo;

// mapDispatchToProps不为null，ReduxDemo组件中没有dispatch属性，除非通过手动传进去，如：
// const mapDispatchToProps = (dispatch) => ({
//   dispatch, // 手动给ReduxDemo传入dispatch属性
//   changeMoreValue: (data) => dispatch(changeMoreValueAction(data)),
// });

// mapDispatchToProps为null，则dispatch属性自动传入ReduxDemo，在ReduxDemo内部可以使用
// dispatch派发action
// export default connect(mapStateToProps, null)(ReduxDemo);

// 如果不传mapStateToProps参数，则store变化并不会导致ReduxDemo re-render。
// 如果传了mapStateToProps参数，比如const mapStateToProps = (state) => state.reduxDemo;
// 则state.reduxDemo变化，ReduxDemo才会re-render。state中其他值变化不会导致ReduxDemo re-render。


// 任何时候，只要store变化，所有connected组件中的所有mapStateToProps方法都会执行，因此也是很耗性能的
// const mapStateToProps = (state, ownProps = {}) => {
//   console.log(state) // state
//   console.log(ownProps) // {}
// }
// 关于mapStateToProps的ownProps，如果ownProps变化，也会执行mapStateToProps。这个也会影响性能
// 因此只在有必要的时候才加上ownProps
export default connect(mapStateToProps, mapDispatchToProps)(ReduxDemo);
