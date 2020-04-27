import { createStore, combineReducers } from 'redux';

const defaultState = 0;

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD':
      return state + action.payload;
    default:
      return state;
  }
};

const store = createStore(combineReducers({
  reducer,
}));

// store.dispatch原生只能派发一个action对象。
// 但是借助中间件，可以覆盖store.dispatch方法，使得
// store.dispatch不仅能派发action对象，也能派发函数
store.dispatch({
  type: 'ADD',
  payload: 10,
});

// 普通的Action creator
const addTodo = (payload) => ({
  type: 'ADD',
  payload,
});

store.dispatch(addTodo(10));
// 使用store.subscribe(listener)方法设置监听函数，一旦state发生变化，就自动执行这个函数
// 因此可以把组件的render或者setState方法放入listener中。
const unsubscribe = store.subscribe(() => {
  console.log('state变化就会自动执行这个函数');
  console.log(store.getState());
});


// store.subscribe方法返回一个函数，调用这个函数就可以解除监听
unsubscribe();

// redux中间件，说白了就是一个函数，对原生的store.dispatch进行改造，在发出Action
// 和执行Reducer这两步之间，添加了其他功能，比如：
const next = store.dispatch;
store.dispatch = (action) => {
  console.log('dispatching...', action);
  next(action);
  console.log('next state...', store.getState());
};

// 中间件用法：
// import { applyMiddleware, createStore } from 'redux';
// import createLogger from 'redux-logger';
// const logger = createLogger();
//
// const store = createStore(
//   reducer,
//   applyMiddleware(logger)
// );

// redux-thunk用法：
// fetchPosts是一个异步Action creator
// const fetchPosts = postTitle => (dispatch, getState) => {
//   dispatch(requestPosts(postTitle));
//   return fetch(`/some/API/${postTitle}.json`)
//     .then(response => response.json())
//     .then(json => dispatch(receivePosts(postTitle, json)));
// };
// };
//
// // 使用方法一
// store.dispatch(fetchPosts('reactjs'));
// // 使用方法二
// store.dispatch(fetchPosts('reactjs')).then(() =>
//   console.log(store.getState())
// );
