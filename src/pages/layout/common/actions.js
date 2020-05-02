import { changeMoreValue, getUser } from './creators';

export default (dispatch) => ({
  changeMoreValue: (data) => dispatch(changeMoreValue(data)),
  getUserInfo: () => dispatch(getUser()),
});
